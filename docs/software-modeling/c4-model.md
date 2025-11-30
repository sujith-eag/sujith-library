# C4 Model for Software Architecture

The C4 model is a "lean" approach to visualizing software architecture. It was created by Simon Brown to help software development teams describe and communicate software architecture at different levels of detail, telling a story that different audiences can understand.

"C4" stands for the four levels of diagrams:

1.  **Context**: The highest level, showing your system as a black box in its environment.
2.  **Containers**: Zooms into the system to show its high-level building blocks (e.g., web applications, APIs, databases).
3.  **Components**: Zooms into a container to show its internal components or services.
4.  **Code**: An optional, detailed view zooming into a component to show how it's implemented.

The C4 model is designed to be a pragmatic and effective way to communicate software architecture, avoiding the ambiguity of informal diagrams and the complexity of overly detailed formal notations.

## Level 1: System Context

The System Context diagram is the highest level of abstraction in the C4 model. It shows the system as a "black box" and illustrates how it fits into the surrounding environment, including the key users and other systems it interacts with. This diagram is ideal for non-technical audiences.

It is identical in purpose and structure to a standard [System Context Diagram](./system-context-diagrams.md).

### Basic Example: Internet Banking System

This diagram shows a user interacting with the banking system, which in turn uses an external email service and connects to a mainframe banking system.

```mermaid
graph TD
    subgraph "External"
        direction LR
        user(fa:fa-user Customer)
        email_system(fa:fa-envelope Email System)
        mainframe(fa:fa-university Mainframe Banking System)
    end

    subgraph " "
      direction LR
      system(Internet Banking System)
    end
    
    user -- "Views account balances, makes payments" --> system
    system -- "Sends emails to" --> email_system
    system -- "Gets account data from" --> mainframe
```

### Advanced Example: Microservices E-commerce Platform (Context)

This diagram shows a high-level view of an e-commerce platform and its interactions with various users and external systems.

```mermaid
graph TD
    subgraph "External Entities"
        direction LR
        customer(fa:fa-user Customer)
        admin(fa:fa-user-cog Administrator)
        payment_gateway(fa:fa-credit-card Payment Gateway)
        shipping_provider(fa:fa-shipping-fast Shipping Provider)
        email_service(fa:fa-envelope Email Service)
        warehouse(fa:fa-warehouse Warehouse System)
    end

    subgraph " "
        direction LR
        ecommerce_platform(E-commerce Platform)
    end

    customer -- "Manages orders, products" --> ecommerce_platform
    admin -- "Manages system" --> ecommerce_platform
    ecommerce_platform -- "Processes transactions" --> payment_gateway
    ecommerce_platform -- "Sends shipping requests" --> shipping_provider
    ecommerce_platform -- "Sends notifications" --> email_service
    ecommerce_platform -- "Manages inventory" --> warehouse
```

## Level 2: Containers

The Container diagram zooms into the system boundary from the Context diagram. It shows the high-level technical building blocks that make up the system. A "container" is a deployable and runnable unit, such as a server-side web application, a client-side web application, a microservice, or a database.

This diagram is useful for developers and operations staff to understand the high-level structure and technology choices of the system.

### Example: Containers of an Internet Banking System

This diagram decomposes the "Internet Banking System" into its constituent containers.

```mermaid
graph TD
    subgraph "Internet Banking System"
        direction TB
        
        webapp(Web Application)
        api(API Application)
        db[(Database)]

        webapp -- "Makes API calls to" --> api
        api -- "Reads/writes data to" --> db
    end

    user(fa:fa-user Customer) -- "Uses" --> webapp
    api -- "Uses" --> mainframe(fa:fa-university Mainframe)
    api -- "Sends email using" --> email_system(fa:fa-envelope Email System)
```

### Advanced Example: E-commerce Platform Containers

This diagram breaks down the E-commerce Platform into its main deployable containers.

```mermaid
graph TD
    subgraph "E-commerce Platform"
        direction TB
        
        WebServer[Web Server]
        WebApp[Web Application]
        APIGateway[API Gateway]
        AuthService[Auth Service]
        ProductService[Product Service]
        OrderService[Order Service]
        PaymentService[Payment Service]
        SearchService[Search Service]
        Database[(Database)]
        Cache[(Cache)]
    end

    Customer(fa:fa-user Customer) -- "Accesses" --> WebServer
    WebServer -- "Serves" --> WebApp
    WebApp -- "Uses" --> APIGateway
    APIGateway -- "Routes to" --> AuthService
    APIGateway -- "Routes to" --> ProductService
    APIGateway -- "Routes to" --> OrderService
    APIGateway -- "Routes to" --> PaymentService
    APIGateway -- "Routes to" --> SearchService

    AuthService <--> Database
    ProductService <--> Database
    OrderService <--> Database
    PaymentService <--> Database
    SearchService <--> Cache
```

## Level 3: Components

The Component diagram zooms into an individual container to show its internal components. A "component" is a group of related code, like a set of classes or functions behind an interface. This level shows how a container's responsibilities are partitioned into smaller, manageable parts.

This diagram is primarily for developers who are working on or with that specific container.

### Example: Components of the API Application

This diagram decomposes the "API Application" container into its key components.

```mermaid
graph TD
    subgraph "API Application"
        direction TB

        security(Security Component)
        accounts(Accounts Component)
        payments(Payments Component)

        security -- "Authenticates/Authorizes" --> accounts
        security -- "Authenticates/Authorizes" --> payments
    end

    webapp(Web Application) -- "Uses" --> security
    webapp -- "Uses" --> accounts
    webapp -- "Uses" --> payments
    
    accounts -- "Uses" --> db[(Database)]
    payments -- "Uses" --> db
```

### Advanced Example: User Profile Service Components

This diagram details the internal components of a `User Profile Service` container, showing how different functionalities are encapsulated and interact.

```mermaid
graph TD
    subgraph "User Profile Service (Container)"
        direction TB
        
        ProfileController[Profile Controller]
        ProfileRepository[Profile Repository]
        ProfileValidator[Profile Validator]
        ImageUploader[Image Uploader]
        EventPublisher[Event Publisher]
    end

    ProfileController -- "Validates Input" --> ProfileValidator
    ProfileController -- "Manages Profiles" --> ProfileRepository
    ProfileController -- "Handles Image Upload" --> ImageUploader
    ProfileController -- "Publishes Events" --> EventPublisher
    
    ProfileRepository -- "Accesses" --> Database[(User Profile DB)]
    ImageUploader -- "Uploads to" --> CloudStorage[Cloud Storage S3]
    EventPublisher -- "Sends to" --> MessageBroker["Message Broker (Kafka)"]
```

## Level 4: Code

The Code diagram is the lowest level of detail in the C4 model. It zooms into an individual component to show how it is implemented in code. This level can be represented by a UML class diagram, an Entity-Relationship Diagram (ERD), or even a snippet of actual code.

This level is optional and should only be created when necessary to explain a particularly complex or important part of the codebase.

### Example: Code for the "Security Component"

A class diagram can be used to show the key classes within the `Security Component`.

```mermaid
classDiagram
    class SecurityComponent {
        +AuthToken authenticate(string username, string password)
        +bool authorize(AuthToken token, string permission)
    }

    class AuthToken {
        -String tokenValue
        -DateTime expiryDate
        +isValid()
    }

    class UserRepository {
        +User findByUsername(string username)
    }

    SecurityComponent ..> UserRepository : uses
    SecurityComponent ..> AuthToken : creates
```

### Advanced Example: User Service (Code Level Detail)

This Class Diagram illustrates the internal structure of a `UserService` component, including dependencies on other services and utility classes.

```mermaid
classDiagram
    direction BT

    class UserService {
        -UserRepository userRepository
        -EmailService emailService
        -PasswordHasher passwordHasher
        +User registerUser(String username, String email, String password)
        +User loginUser(String username, String password)
        +void updateUserProfile(User user)
    }

    class UserRepository {
        <<interface>>
        +User findByUsername(String username)
        +User save(User user)
        +void delete(User user)
    }

    class DatabaseUserRepository {
        +User findByUsername(String username)
        +User save(User user)
        +void delete(User user)
    }
    
    class EmailService {
        +void sendWelcomeEmail(User user)
        +void sendPasswordReset(User user)
    }

    class PasswordHasher {
        +String hashPassword(String password)
        +boolean checkPassword(String plainPassword, String hashedPassword)
    }

    class User {
        -Long id
        -String username
        -String email
        -String hashedPassword
    }

    UserService "1" -- "1" UserRepository : uses
    UserService "1" -- "1" EmailService : uses
    UserService "1" -- "1" PasswordHasher : uses
    UserRepository <|.. DatabaseUserRepository : implements
    UserService ..> User : manages
```