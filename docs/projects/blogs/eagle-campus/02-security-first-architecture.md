# Security-First Architecture: How Eagle Campus Protects Educational Data

*A deep dive into the security measures that make Eagle Campus enterprise-ready.*


## Introduction

In an era where educational institutions are prime targets for cyberattacks—from ransomware to data breaches exposing student records—security cannot be an afterthought. Eagle Campus was designed from the ground up with a security-first architecture, implementing defense-in-depth strategies that protect sensitive academic data at every layer.

This article explores the comprehensive security measures built into Eagle Campus, demonstrating why it's ready for production deployment in privacy-conscious educational environments.


## The Threat Landscape for Educational Institutions

Before examining our solutions, let's understand the threats:

### Common Attack Vectors

1. **Credential Theft**: Phishing attacks targeting student and faculty login credentials
2. **Session Hijacking**: Stealing authentication tokens to impersonate users
3. **Injection Attacks**: SQL injection, NoSQL injection, and XSS attempts
4. **Brute Force**: Automated password guessing against login endpoints
5. **Data Exfiltration**: Unauthorized bulk export of student records
6. **Insider Threats**: Abuse of legitimate access by malicious insiders

### The Stakes

- **Student PII**: Names, addresses, academic records, financial information
- **Faculty Data**: Employment records, salary information, evaluations
- **Research**: Unpublished work, grant proposals, intellectual property
- **Institutional Reputation**: Trust that takes decades to build, seconds to destroy



## Authentication: The First Line of Defense

### HttpOnly Cookie-Based Sessions

Unlike many applications that store JWT tokens in localStorage (exposing them to XSS attacks), Eagle Campus uses HttpOnly cookies:

```
┌─────────────────────────────────────────────────────────────┐
│                    Traditional Approach                     │
│                                                             │
│  localStorage.setItem('token', jwt)  ← VULNERABLE TO XSS   │
│  Authorization: Bearer <token>       ← Token in JS memory  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Eagle Campus Approach                    │
│                                                             │
│  Set-Cookie: jwt=<token>; HttpOnly; Secure; SameSite=Strict│
│  Cookie sent automatically           ← Never in JS memory  │
└─────────────────────────────────────────────────────────────┘
```

**Why This Matters:**
- HttpOnly flag prevents JavaScript from reading the cookie
- Even if an attacker injects malicious scripts (XSS), they cannot steal the token
- SameSite=Strict prevents CSRF attacks by rejecting cross-origin requests
- Secure flag ensures cookies are only sent over HTTPS

### Email Verification Flow

Every new registration must verify email ownership:

1. User submits registration form
2. System generates a cryptographically random verification token
3. Token is hashed (not stored in plaintext) in database
4. Email with verification link is sent via secure SMTP
5. User clicks link; token is validated and account activated
6. Expired tokens (>24 hours) are rejected

```javascript
// Token generation (simplified)
const verificationToken = crypto.randomBytes(32).toString('hex');
const hashedToken = crypto.createHash('sha256')
  .update(verificationToken)
  .digest('hex');
// Only hashedToken is stored in database
```

### Password Security

- **Bcrypt Hashing**: Passwords are hashed with bcrypt (cost factor 10+)
- **No Plaintext Storage**: Original passwords never touch the database
- **Secure Reset Flow**: Time-limited reset tokens via email
- **Password Requirements**: Strong passwords enforced via regex pattern

```javascript
// Strong password requirements
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// Requires: lowercase, uppercase, digit, special character, minimum 8 characters
```



## Zero-Trust Architecture

Eagle Campus implements a **zero-trust security model**—no request is implicitly trusted, regardless of origin.

### Token ID (jti) Validation

Every JWT contains a unique `jti` (token ID) that's validated against server-side sessions:

```javascript
// Authentication middleware (protect.js)
export const protect = asyncHandler(async (req, res, next) => {
  // 1. Extract token from httpOnly cookie
  const token = req.cookies?.jwt;
  
  // 2. Verify JWT signature and expiration
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  // 3. Fresh database query - no cached user data
  const user = await User.findById(decoded.id).select('-password');
  
  // 4. Password change invalidation check
  if (user.passwordChangedAt && decoded.iat * 1000 < user.passwordChangedAt.getTime()) {
    return res.status(401).json({ message: 'Password changed. Please log in again.' });
  }
  
  // 5. Session validation - jti must exist in user's sessions array
  if (!decoded.jti || !user.sessions.some(s => s.tokenId === decoded.jti)) {
    return res.status(401).json({ message: 'Session revoked.' });
  }
  
  req.user = user;
  next();
});
```

**Why This Matters:**
- Tokens can be invalidated server-side without waiting for expiration
- Password changes invalidate all existing tokens immediately
- No stale user data—permissions checked fresh every request
- Session revocation takes effect instantly, even for cached tokens

### Session Registry

Sessions are stored as an embedded array in the User document:

```javascript
// User model session schema
sessions: [{
  deviceId: String,      // Device fingerprint
  ipAddress: String,     // Client IP at login
  userAgent: String,     // Browser/client info
  tokenId: String,       // JWT jti - ties token to session
  lastUsedAt: Date,      // Last activity
  createdAt: Date        // Session creation
}]
```



## Session Management & Monitoring

### Session Listing

Users can view all active sessions with device context:

```json
{
  "sessions": [
    {
      "deviceId": "abc123",
      "ipAddress": "192.168.1.100",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0",
      "createdAt": "2025-11-25T10:00:00Z",
      "lastUsedAt": "2025-11-30T14:30:00Z"
    }
  ]
}
```

### Remote Session Revocation

Users can terminate any session from any device:

```javascript
// Session revocation flow
export const revokeSession = async (userId, deviceId) => {
  // 1. Disconnect active WebSocket connections for this device
  await socketRegistry.disconnectDevice(userId, deviceId);
  
  // 2. Remove session from user's sessions array
  await User.updateOne(
    { _id: userId },
    { $pull: { sessions: { deviceId } } }
  );
  
  // 3. Log security event
  await logAuthEvent('SESSION_DESTROYED', userId, { deviceId });
};
```

**Session Controls:**
- View all active sessions with metadata
- Revoke individual sessions remotely
- 10-session limit per user (oldest removed first)
- Automatic socket disconnection on revocation

### Socket.IO Zero-Trust

WebSocket connections receive the same zero-trust treatment:

```javascript
// Socket authentication middleware
export const socketAuthMiddleware = async (socket, next) => {
  const token = socket.handshake?.auth?.token 
    || parseCookies(socket.handshake?.headers?.cookie).jwt;
  
  // Same verification chain as HTTP requests
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  
  // Account state validation
  if (!user.isVerified || !user.isActive) {
    return next(new Error('Account inactive/banned.'));
  }
  
  // Session validation
  if (!decoded.jti || !user.sessions.some(s => s.tokenId === decoded.jti)) {
    return next(new Error('Session revoked.'));
  }
  
  socket.user = user;
  next();
};
```



## Comprehensive Audit Logging

Eagle Campus implements a two-tier audit system for complete visibility:

### AuthEvent Log (Security Events)

Captures all authentication and security-related events:

```javascript
// AuthEvent schema
{
  timestamp: Date,
  userId: ObjectId,
  actor: String,           // Email of the actor
  eventType: String,       // Event category
  ipAddress: String,
  userAgent: String,
  deviceId: String,
  origin: 'web' | 'mobile' | 'api' | 'system',
  severity: 'info' | 'warning' | 'critical',
  context: Mixed           // Event-specific metadata
}
```

**Logged Event Types:**

| Event | Severity | Trigger |
|-------|----------|---------|
| `LOGIN_SUCCESS` | info | Successful authentication |
| `LOGIN_FAILURE` | warning | Failed password, unverified email, locked account |
| `LOGOUT` | info | User logout |
| `SESSION_CREATED` | info | New session established |
| `SESSION_DESTROYED` | info | Session revoked |
| `PASSWORD_RESET_REQUEST` | warning | Reset email sent |
| `PASSWORD_RESET_SUCCESS` | critical | Password reset completed |
| `PASSWORD_CHANGE` | critical | Password changed via profile |
| `EMAIL_VERIFY_REQUEST` | info | Verification email sent |
| `EMAIL_VERIFIED` | info | Email confirmed |
| `ROLE_CHANGED` | info | User role modified |
| `ACCOUNT_LOCKED` | warning | Account locked due to failed attempts |
| `ACCOUNT_UNLOCKED` | warning | Account unlocked |

**Retention:** 90 days (TTL index)

### AuditLog (Entity Changes)

Tracks changes to data with before/after state:

```javascript
// AuditLog schema
{
  timestamp: Date,
  actor: {
    user: ObjectId,
    roles: [String]
  },
  action: String,
  entityType: String,
  entityId: String,
  context: 'personal' | 'academic_material' | 'assignment',
  ipAddress: String,
  userAgent: String,
  data: {
    before: Mixed,    // State before change
    after: Mixed,     // State after change
    diff: Mixed       // Computed difference
  }
}
```

**Retention:** 200 days (TTL index)

### Sensitive Data Sanitization

Before logging, sensitive fields are automatically stripped:

```javascript
const sensitiveFields = [
  'password',
  'passwordResetToken',
  'passwordResetExpires',
  'emailVerificationToken',
  'sessions',
  '__v'
];

export const sanitizeForLog = (doc) => {
  const clean = { ...doc };
  sensitiveFields.forEach(field => delete clean[field]);
  return clean;
};
```



## Authorization: Role-Based Access Control

### Hierarchical Role System

Eagle Campus implements a clear role hierarchy:

```
┌─────────────────────────────────────────────────────────────┐
│                         Admin                               │
│                    (Full System Access)                     │
├─────────────────────────────────────────────────────────────┤
│                          HOD                                │
│              (Department-Level Management)                  │
├─────────────────────────────────────────────────────────────┤
│                        Teacher                              │
│          (Assigned Classes, Attendance, Feedback)           │
├─────────────────────────────────────────────────────────────┤
│                        Student                              │
│           (Personal Dashboard, Files, Tasks, Chat)          │
├─────────────────────────────────────────────────────────────┤
│                         User                                │
│              (Pending Approval / Limited Access)            │
└─────────────────────────────────────────────────────────────┘
```

### Middleware-Based Enforcement

Every protected route passes through a middleware chain:

```javascript
// Route protection pattern
router.get('/admin/applications', 
  protect,        // Verify JWT, attach user to request
  isAdmin,        // Check admin role
  getApplications // Business logic
);

router.get('/admin/reports/teacher/:id',
  protect,
  isAdminOrHOD,   // Multiple roles allowed
  getTeacherReport
);
```

### Resource-Level Permissions

Beyond role checks, Eagle Campus enforces ownership and sharing policies:

```javascript
// File access permission check (simplified)
const checkReadAccess = async (fileId, userId) => {
  const file = await File.findById(fileId);
  
  // Check 1: Is user the owner?
  if (file.user.equals(userId)) return { hasAccess: true, reason: 'owner' };
  
  // Check 2: Does user have a direct share?
  const directShare = await FileShare.findOne({ fileId, userId });
  if (directShare) return { hasAccess: true, reason: 'direct_share' };
  
  // Check 3: Does user have access through ancestor folder share?
  const ancestorIds = extractAncestorIds(file.path);
  const inheritedShare = await FileShare.findOne({ 
    fileId: { $in: ancestorIds }, 
    userId 
  });
  if (inheritedShare) return { hasAccess: true, reason: 'inherited_share' };
  
  // Check 4: Class-based share for students
  if (user.role === 'student' && matchesClassShare(file, user)) {
    return { hasAccess: true, reason: 'class_share' };
  }
  
  return { hasAccess: false, reason: 'no_access' };
};
```



## Input Validation & Sanitization

### Schema-Based Validation with Joi

Every incoming request is validated against strict schemas:

```javascript
const createSubjectSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  code: Joi.string().alphanum().min(2).max(20).required(),
  semester: Joi.number().integer().min(1).max(8).required(),
  credits: Joi.number().integer().min(1).max(10).required(),
  department: Joi.string().max(100).required()
});

// Middleware validates before handler executes
router.post('/subjects', 
  protect, 
  validate(createSubjectSchema), 
  createSubject
);
```

**Validation Benefits:**
- Malformed data is rejected before reaching business logic
- Type coercion prevents injection attacks
- Explicit constraints prevent buffer overflows and resource exhaustion

### NoSQL Injection Prevention

MongoDB queries are parameterized, never string-concatenated:

```javascript
// VULNERABLE (never do this)
const user = await User.findOne({ 
  email: req.body.email  // If email is { $ne: null }, returns any user!
});

// SAFE (Eagle Campus approach)
const email = typeof req.body.email === 'string' 
  ? req.body.email.toLowerCase().trim() 
  : '';
const user = await User.findOne({ email });
```

### XSS Prevention

Multiple layers of XSS protection:

**Backend Sanitization:**
```javascript
// HTML entity encoding
export const sanitizeHtml = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Filename sanitization for uploads
export const sanitizeFilename = (filename) => {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_{2,}/g, '_')
    .slice(0, 255);
};

// Deep object sanitization
export const deepSanitize = (obj) => {
  if (Array.isArray(obj)) return obj.map(deepSanitize);
  if (typeof obj === 'object' && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, deepSanitize(v)])
    );
  }
  return typeof obj === 'string' ? sanitizeHtml(obj) : obj;
};
```

**Frontend Sanitization:**
```javascript
// DOMPurify for user-generated HTML content
import DOMPurify from 'dompurify';

const MessageBubble = ({ message }) => {
  const sanitizedContent = DOMPurify.sanitize(message.content);
  return (
    <Typography
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
```

- React's JSX automatically escapes interpolated values
- Content Security Policy headers prevent inline script execution
- DOMPurify sanitizes any `dangerouslySetInnerHTML` usage



## Frontend Security

### No localStorage Token Storage

The frontend never stores authentication tokens in localStorage:

```javascript
// Auth slice - no token persistence
const initialState = {
  user: null,      // User data only
  isLoading: true,
  authChecked: false
};

// Auth state verified via httpOnly cookie on page load
export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
  const response = await authService.getMe();
  return response.user;
});
```

### Protected Route Guards

Role-aware route protection with loading states:

```jsx
const PrivateRoute = ({ roles }) => {
  const { user, isLoading, authChecked } = useSelector((state) => state.auth);
  
  // Show skeleton during auth check
  if (!authChecked || isLoading) {
    return <AuthLoadingSkeleton />;
  }

  // Redirect unauthenticated users with return URL
  if (!user) {
    const returnUrl = location.pathname + location.search;
    return <Navigate to="/login" state={{ from: returnUrl }} replace />;
  }

  // Role-based access control
  const userRoles = getUserRoles(user);
  if (roles && !roles.some(r => userRoles.includes(r))) {
    toast.error(`Access denied. Required role: ${roles.join(' or ')}.`);
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
```

### Session Expiration Handling

Automatic handling of expired sessions:

```javascript
// API client interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const hasClientUser = !!(store.getState().auth?.user);
      if (hasClientUser) {
        // Dispatch custom event for global handling
        window.dispatchEvent(new CustomEvent('auth:sessionExpired'));
      }
    }
    return Promise.reject(error);
  }
);

// App-level listener
useEffect(() => {
  const handleSessionExpired = () => {
    dispatch(forceLogout());
    navigate('/login', { state: { sessionExpired: true } });
    toast.warning('Your session has expired. Please log in again.');
  };
  
  window.addEventListener('auth:sessionExpired', handleSessionExpired);
  return () => window.removeEventListener('auth:sessionExpired', handleSessionExpired);
}, []);
```



## Rate Limiting & Abuse Protection

### Per-Endpoint Throttling

Sensitive endpoints have strict rate limits:

```javascript
// Authentication: 10 requests per 10 minutes
export const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  message: 'Too many authentication attempts'
});

// General API: 100 requests per 10 minutes
export const generalApiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100
});

// File downloads: 20 requests per 10 minutes
export const downloadLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20
});

// Public API: 70 requests per 10 minutes
export const publicApiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 70
});
```

### AI Generation Limits

Daily limits on AI task generation:

```javascript
export const checkAIDailyLimit = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const oneDay = 24 * 60 * 60 * 1000;
  
  // Reset counter after 24 hours
  if (new Date() - user.aiGenerations.lastReset > oneDay) {
    user.aiGenerations.count = 0;
    user.aiGenerations.lastReset = new Date();
    await user.save();
  }

  if (user.aiGenerations.count >= DAILY_LIMIT) {
    res.status(429);
    throw new Error(`Daily limit of ${DAILY_LIMIT} AI generations reached.`);
  }
  next();
});
```

**Note:** Refinements don't count toward daily limit—only initial prompts.

### Protection Summary

| Endpoint Category | Requests | Window | Notes |
|-------------------|----------|--------|-------|
| Authentication | 10 | 10 min | Login, register, password reset |
| General API | 100 | 10 min | Most endpoints |
| File Downloads | 20 | 10 min | Prevents bulk scraping |
| Public Resources | 70 | 10 min | Share downloads |
| AI Generation | 10 | 24 hours | Per-user daily limit |



## Storage Quota Enforcement

Role-based storage limits enforced at upload time:

```javascript
export const QUOTAS = {
  user: { maxFiles: 20, maxSizeMB: 50 },
  student: { maxFiles: 50, maxSizeMB: 200 },
  teacher: { maxFiles: 100, maxSizeMB: 500 },
  admin: { maxFiles: Infinity, maxSizeMB: Infinity }
};

export const checkStorageQuota = asyncHandler(async (req, res, next) => {
  const userRole = precedence.find(r => req.user.roles.includes(r)) || 'user';
  const quota = QUOTAS[userRole];

  // Aggregate current usage
  const usage = await File.aggregate([
    { $match: { user: req.user._id, context: 'personal' } },
    { $group: { 
      _id: null, 
      totalSize: { $sum: '$size' }, 
      fileCount: { $sum: 1 } 
    }}
  ]);

  const { totalSize = 0, fileCount = 0 } = usage[0] || {};
  const incomingSize = req.files.reduce((sum, f) => sum + f.size, 0);
  const incomingCount = req.files.length;

  if (fileCount + incomingCount > quota.maxFiles) {
    res.status(403);
    throw new Error(`File limit reached for ${userRole} role (max ${quota.maxFiles}).`);
  }

  if (totalSize + incomingSize > quota.maxSizeMB * 1024 * 1024) {
    res.status(403);
    throw new Error(`Storage limit reached for ${userRole} role (max ${quota.maxSizeMB}MB).`);
  }

  next();
});
```



## File Upload Security

### MIME Type Whitelist

Only allowed file types can be uploaded:

```javascript
const ALLOWED_MIMETYPES = [
  'image/jpeg', 'image/png', 'image/gif', 'image/webp',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/plain', 'text/javascript', 'application/json',
  'application/zip', 'application/x-zip-compressed'
];

const generalFileFilter = (req, file, cb) => {
  if (ALLOWED_MIMETYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type.'), false);
  }
};

const generalUploader = multer({
  storage: multer.memoryStorage(),
  fileFilter: generalFileFilter,
  limits: { 
    fileSize: 50 * 1024 * 1024  // 50MB max
  }
});
```



## Security Headers with Helmet.js

Eagle Campus uses Helmet.js to set protective HTTP headers:

```javascript
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],  // MUI requires inline styles
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.API_URL],
    }
  },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  hsts: { maxAge: 31536000, includeSubDomains: true },
}));
```

**Headers Applied:**
- `Content-Security-Policy`: Prevents XSS and data injection
- `X-Content-Type-Options: nosniff`: Prevents MIME type confusion
- `X-Frame-Options: DENY`: Prevents clickjacking
- `Strict-Transport-Security`: Enforces HTTPS
- `X-XSS-Protection`: Legacy XSS filter (backup)



## File Storage Security

### AWS S3 with Presigned URLs

Files are never served directly through the application server:

```
┌──────────────────────────────────────────────────────────────┐
│                     File Download Flow                        │
│                                                               │
│  1. Client requests download link                             │
│  2. Server verifies permissions                               │
│  3. Server generates presigned S3 URL (expires in 15 min)     │
│  4. Client receives temporary URL                             │
│  5. Client downloads directly from S3                         │
│  6. URL expires, cannot be reused                             │
└──────────────────────────────────────────────────────────────┘
```

**Security Benefits:**
- Files are not accessible without valid presigned URL
- URLs expire quickly, limiting exposure window
- Server never handles file bytes (prevents resource exhaustion)
- S3 bucket has restrictive IAM policies

### Upload Validation

- **File Type Restrictions**: Whitelist of allowed MIME types
- **Size Limits**: 50MB per file, 8 files per upload
- **Quota Enforcement**: Per-user storage limits
- **Malware Scanning**: (Roadmap) Integration with ClamAV



## Audit Logging

### Comprehensive Event Tracking

Sensitive operations are logged with full context:

```javascript
const auditLog = {
  timestamp: new Date(),
  userId: req.user._id,
  action: 'APPLICATION_APPROVED',
  targetId: applicant._id,
  ipAddress: req.ip,
  userAgent: req.headers['user-agent'],
  previousState: { role: 'user' },
  newState: { role: 'student' },
};
await AuditLog.create(auditLog);
```

### Logged Events Include

- User authentication (login, logout, password change)
- Role changes and promotions
- File sharing and permission modifications
- Admin actions (approvals, rejections, deletions)
- Failed access attempts

### Retention & Export

- Configurable retention periods (default: 1 year)
- CSV export for compliance audits
- Searchable by user, action type, date range



## Session Management

### Active Session Visibility

Users can view all their active sessions:

```json
{
  "sessions": [
    {
      "deviceId": "abc123",
      "browser": "Chrome 120",
      "os": "Windows 11",
      "location": "Mumbai, IN",
      "lastActive": "2025-11-30T10:30:00Z",
      "current": true
    },
    {
      "deviceId": "def456",
      "browser": "Safari 17",
      "os": "iOS 17",
      "location": "Mumbai, IN",
      "lastActive": "2025-11-29T18:45:00Z",
      "current": false
    }
  ]
}
```

### Remote Revocation

- Users can terminate sessions on unknown devices
- Administrators can force-logout suspicious users
- Password changes invalidate all existing sessions



## CORS Configuration

### Strict Origin Policies

```javascript
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'https://eaglecampus.in'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  credentials: true,  // Allow cookies
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
```



## Secure Error Handling

### No Sensitive Data Leakage

Error responses never expose internal details in production:

```javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;

  // Handle Multer file upload errors
  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File too large. Max 10MB.' });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ message: 'Too many files.' });
    }
  }

  res.status(statusCode).json({
    message: err.message,
    // Stack traces hidden in production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
```

### Generic Error Messages

Sensitive operations return generic messages to prevent information disclosure:

```javascript
// Login failure - same message for wrong email OR wrong password
if (!user || !(await user.comparePassword(password))) {
  return res.status(401).json({ message: 'Invalid credentials' });
}

// User not found in protected routes
if (!user) {
  return res.status(401).json({ message: 'Not authorized' });
}
```



## Route Protection Chain Example

A typical protected route demonstrates the layered security:

```javascript
router.post(
  '/upload',
  protect,                     // 1. Authentication - verify JWT
  uploadFiles,                 // 2. Multer - parse files with MIME filter
  validate(uploadFilesSchema), // 3. Validation - check request schema
  canUploadToFolder,           // 4. Authorization - verify folder access
  checkStorageQuota,           // 5. Quota - enforce storage limits
  fileController.uploadFiles   // 6. Controller - business logic
);
```

Each layer can reject the request, preventing unnecessary processing.



## Security Checklist for Deployment

### Pre-Deployment

- [ ] All environment variables set (not committed to repo)
- [ ] Database credentials rotated from development values
- [ ] JWT secret is cryptographically random (32+ bytes)
- [ ] HTTPS certificate installed and verified
- [ ] Rate limiting thresholds reviewed for production load
- [ ] Audit logging storage configured

### Post-Deployment

- [ ] Penetration testing scheduled
- [ ] Security monitoring and alerting configured
- [ ] Incident response plan documented
- [ ] Regular dependency audits scheduled (npm audit)
- [ ] Backup encryption verified



## Conclusion

Security in educational technology isn't optional—it's foundational. Eagle Campus demonstrates that modern web applications can achieve enterprise-grade security without sacrificing developer velocity or user experience.

By implementing HttpOnly cookies, comprehensive RBAC, strict input validation, rate limiting, security headers, and detailed audit logging, Eagle Campus provides a secure foundation that educational institutions can trust with their most sensitive data.

**Security isn't a feature—it's the foundation everything else is built on.**

---

*For security inquiries or to report vulnerabilities, contact the development team through responsible disclosure channels.*
