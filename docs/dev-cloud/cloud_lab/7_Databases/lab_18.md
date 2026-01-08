# Creating and Operating a NoSQL Database with Amazon DynamoDB

## Overview

This lab introduces Amazon DynamoDB, AWS's fully managed NoSQL database service. You'll create a table with a composite primary key, insert data, perform read operations (Query vs. Scan), update items, and delete records. This demonstrates the core operations of a key-value and document database in a cloud environment.

### Key Concepts

| Concept | Description |
|---------|-------------|
| **DynamoDB** | Serverless NoSQL database supporting key-value and document models |
| **Partition Key (PK)** | Primary identifier for data distribution across partitions |
| **Sort Key (SK)** | Secondary identifier for sorting and querying within a partition |
| **Composite Primary Key** | Combination of PK and SK for unique item identification |
| **Query** | Efficient retrieval using PK (and optional SK) |
| **Scan** | Full table read (expensive, avoid for large tables) |
| **CRUD Operations** | Create, Read, Update, Delete operations on items |

### Prerequisites

- Active AWS account with billing enabled
- IAM permissions for DynamoDB (e.g., DynamoDBFullAccess policy)
- Basic understanding of NoSQL databases and key-value stores

### Objective

To create an Amazon DynamoDB table and perform CRUD operations (Create, Read, Update, Delete) using the AWS Management Console. This exercise helps in understanding Partition Keys, Sort Keys, the difference between Query vs. Scan, and table cleanup procedures.

## DynamoDB Architecture

```mermaid
flowchart TD
    App[Application] --> DDB[(DynamoDB Table<br/>MCA_StudentLabInternals)]
    
    DDB --> PK[Partition Key: USN]
    DDB --> SK[Sort Key: CourseCode]
    DDB --> Attr[Attributes:<br/>Name, Semester,<br/>Attendance, IA1Marks]
```

**Key Concepts:**

- **Partition Key (PK):** Primary identifier (`USN`)
- **Sort Key (SK):** Secondary identifier for grouping (`CourseCode`)
- **Composite Primary Key:** Combination of PK + SK for unique identification
- **Attributes:** Additional data fields

## Phase 1: Create DynamoDB Table

We will create a table to store Student Records including USN, Name, Semester, Course, Attendance, and IA1 Marks.

### Step 1: Open DynamoDB

- Login to AWS Console
- Search for **DynamoDB** and open the service

### Step 2: Create a Table

- Navigate to the left menu and select **Tables**
- Click **Create table**
- **Table details:**
  - **Table name:** `MCA_StudentLabInternals`
  - **Partition key (PK):** `USN` (Type: String)
  - **Sort key (SK):** `CourseCode` (Type: String)

> [!IMPORTANT]  
> Since one student can enroll in multiple courses, the **Sort Key** separates records per course for the same USN. This creates a **Composite Primary Key** (PK + SK).

### Step 3: Table Settings

- Choose **Default settings** (recommended for lab)
- Ensure **Capacity mode** is set to **On-demand**

### Step 4: Finalize Table

- Click **Create table**
- Wait until the status changes to **Active**
- **Verification:** Check table details for PK/SK and item count (should be 0)

## Phase 2: Insert Items (Create Data)

### Step 5: Open Table and Add Items

- Click on the table name: `MCA_StudentLabInternals`
- Click **Explore table items** → **Create item**

### Step 6: Add Item 1 (Student 1 - Course 1)

- **USN:** `1MS24MCA001`
- **CourseCode:** `CCL301`
- Click **Add new attribute** for the following:
  - **Name (String):** `Arun`
  - **Semester (Number):** `3`
  - **Attendance (Number):** `86`
  - **IA1Marks (Number):** `18`
- Click **Create item**

### Step 7: Add Item 2 (Same student - another course)

- Repeat the process for:
  - **USN:** `1MS24MCA001` | **CourseCode:** `DBS301`
  - **Name:** `Arun` | **Semester:** `3` | **Attendance:** `88` | **IA1Marks:** `20`

### Step 8: Add Item 3 (Another student)

- Repeat the process for:
  - **USN:** `1MS24MCA002` | **CourseCode:** `CCL301`
  - **Name:** `Chitra` | **Semester:** `3` | **Attendance:** `74` | **IA1Marks:** `14`

**Verification:** Check table item count (should be 3) and view items to confirm data.


## Phase 3: Read Data (Get / Query / Scan)

### Step 9: Get a Single Item (Exact PK + SK)

- In **Explore table items**, use the filter
- Provide **USN:** `1MS24MCA001` and **CourseCode:** `CCL301`

> [!NOTE]
> To uniquely identify an item in a PK+SK table, you must provide **both**.

### Step 10: Query – Fetch All Courses for One Student

- Select **Run query**
- **Partition key condition:** `USN` equals `1MS24MCA001`
- **Expected Output:** Both course records (`CCL301` and `DBS301`) for Arun

> [!TIP]
> Query is highly efficient; it only looks at the specific partition key.

### Step 11: Scan (Not for large tables)

- Select **Scan**
- Run the scan without filters
- **Expected Output:** All 3 items (Arun + Chitra)

> [!WARNING]
> Scan reads the **entire** table, which is slow and costly for large datasets.

**Verification:** Confirm query returns 2 items, scan returns 3.


## Phase 4: Update Data

### Step 12: Update Marks for Chitra

- Open the item: **USN:** `1MS24MCA002` | **CourseCode:** `CCL301`
- Click **Edit**
- Change **IA1Marks** from `14` to `16`
- Click **Save changes** and verify the update

**Verification:** Check the item to confirm IA1Marks is now 16.


## Phase 5: Delete Data

### Step 13: Delete a Record

- Select the item: **USN:** `1MS24MCA001` | **CourseCode:** `DBS301`
- Click **Delete** → **Confirm delete**
- Verify that the total item count has reduced

**Verification:** Item count should now be 2.


## Phase 6: Cleanup

### Step 14: Delete the Table

- Navigate to **DynamoDB** → **Tables**
- Select `MCA_StudentLabInternals`
- Click **Delete**
- Type the requested confirmation text and click **Delete**
- Ensure the table is removed from the list

## Validation

- **Table Creation:** Confirm table exists with correct PK/SK and is Active.
- **Data Insertion:** Verify 3 items are present with correct attributes.
- **Query Operations:** Ensure Query returns 2 items for one student, Scan returns all remaining items.
- **Update:** Check that IA1Marks changed from 14 to 16.
- **Delete:** Confirm item count reduced to 2 after deletion.
- **Cleanup:** Verify table is deleted and no longer appears in the list.

## Query vs Scan Comparison

| Operation | How it Works | Performance | Use Case |
|-----------|--------------|-------------|----------|
| **Query** | Searches using Partition Key (+ optional Sort Key) | Fast, efficient | Fetch specific student's all courses |
| **Scan** | Reads entire table sequentially | Slow, expensive | Search across all students (avoid for large tables) |


## Cost Considerations

- **On-Demand Pricing:**
  - Reads: ~$0.25 per million
  - Writes: ~$1.25 per million
  - Storage: ~$0.25 per GB/month
- **Best Practice:** Delete tables after lab to avoid charges. Enable AWS Budget alerts for monitoring.

## Troubleshooting

- **Table Creation Fails:** Check IAM permissions for DynamoDB; ensure no duplicate table names.
- **Item Not Found:** Ensure both PK and SK are provided for queries in composite key tables.
- **Slow Performance:** Use Query instead of Scan; consider Global Secondary Indexes for complex queries.
- **Unexpected Charges:** Monitor usage in AWS Cost Explorer; set up billing alerts.
- **Access Denied:** Verify IAM policies include DynamoDB permissions.

## Key Takeaways

1. **Partition Key + Sort Key** creates a composite primary key for efficient data organization.
2. **Query** is efficient for targeted searches using PK/SK.
3. **Scan** should be avoided for large datasets due to cost and performance.
4. DynamoDB is serverless and scales automatically with no maintenance.
5. Always clean up resources to avoid unexpected costs.
6. Design schemas with access patterns in mind for optimal performance.

## Result

Successfully created and operated a DynamoDB table, performing all CRUD operations. Demonstrated the efficiency of Query over Scan and understood the importance of proper key design in NoSQL databases.
