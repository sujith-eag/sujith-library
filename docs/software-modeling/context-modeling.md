# Context Modeling

Context models are used to illustrate the operational context of a system. They define the system's boundaries and show how it interacts with external entities like other systems, users, and sensors. They are crucial for understanding the system's scope and its relationship with the environment.

## Use Case Diagrams

Use Case diagrams capture the functional requirements of a system by showing how "actors" interact with the system to achieve specific goals. They are a valuable tool for communicating with stakeholders and defining the scope of a project.

### Key Components

-   **Actor**: Represents a user or any other entity that interacts with the system. Actors are typically drawn as stick figures.
-   **Use Case**: A specific goal that an actor can achieve with the system. It's represented by an ellipse.
-   **System Boundary**: A box that encloses all the use cases to delineate the scope of the system.
-   **Relationships**: Lines connecting actors to use cases.

### Example: Online Library System

This diagram uses a `graph` with a styled actor to represent the Use Case. This approach offers more flexibility for layout and styling and is reliably supported.

```mermaid
graph TD
    subgraph Online Library System
        UC1(Search for Book)
        UC2(Borrow Book)
        UC3(Return Book)
        UC4(Manage Account)
    end

    Member(fa:fa-user Member)
    
    Member -- "Performs" --> UC1
    Member -- "Initiates" --> UC2
    Member -- "Initiates" --> UC3
    Member -- "Accesses" --> UC4
```

### Advanced Example: Online Shopping Cart

This example demonstrates `include` and `extend` relationships commonly found in more detailed Use Case diagrams.

```mermaid
graph LR
    Customer(fa:fa-user Customer)
    
    subgraph "Online Shopping System"
        UC_Add(Add Item to Cart)
        UC_View(View Cart)
        UC_Checkout(Checkout)
        UC_Login(Login)
        UC_Register(Register)
        UC_ProcessPayment(Process Payment)
        UC_ApplyDiscount(Apply Discount)
    end

    Customer -- "Interacts" --> UC_Add
    Customer -- "Views" --> UC_View
    Customer -- "Initiates" --> UC_Checkout
    Customer -- "Authenticates" --> UC_Login
    Customer -- "Creates Account" --> UC_Register

    UC_Checkout -- "includes" --> UC_ProcessPayment
    UC_Checkout -- "extends" --> UC_ApplyDiscount
```

## System Context Diagrams

A System Context Diagram is a high-level diagram that shows a system as a single process and highlights its interactions with external entities. It's part of the C4 model (as the Level 1 diagram) but is also used as a standalone technique to establish the system's boundary and scope.

It does not show any internal detail of the system itself, focusing only on the system as a "black box."

### Key Components

-   **The System**: A central node representing the entire system.
-   **External Entities**: Nodes representing users, other software systems, or hardware devices that interact with the system.
-   **Interactions**: Labeled arrows showing the flow of data or commands between the system and the external entities.

### Example: University Enrollment System

This diagram shows a university enrollment system and its interactions with students, professors, and a payment gateway.

```mermaid
graph TD
    subgraph "External Systems"
        direction LR
        student(fa:fa-user Student)
        professor(fa:fa-user-tie Professor)
        payment(fa:fa-credit-card Payment Gateway)
    end

    subgraph " "
      direction LR
      system(University Enrollment System)
    end
    
    student -- "Enrolls in Courses" --> system
    system -- "Provides Course Schedule" --> student
    
    professor -- "Manages Course Details" --> system
    system -- "Provides Class Rosters" --> professor

    system -- "Processes Payments" --> payment
```

### Advanced Example: E-commerce Platform Context

This advanced example shows an e-commerce platform interacting with various external systems and users, detailing key data flows.

```mermaid
graph TB
    subgraph "External Entities"
        direction LR
        customer(fa:fa-user Customer)
        admin(fa:fa-user-cog Administrator)
        payment_gateway(fa:fa-credit-card Payment Gateway)
        shipping_provider(fa:fa-shipping-fast Shipping Provider)
        email_service(fa:fa-envelope Email Service)
        warehouse(fa:fa-warehouse Warehouse System)
        analytics_tool(fa:fa-chart-line Analytics Tool)
    end

    ecommerce_platform(E-commerce Platform)

    customer -- "Browse Products, Place Orders" --> ecommerce_platform
    ecommerce_platform -- "Order Confirmation, Shipping Updates" --> customer
    
    admin -- "Manage Products, View Orders, Reports" --> ecommerce_platform
    
    ecommerce_platform -- "Process Payments" --> payment_gateway
    payment_gateway -- "Payment Status" --> ecommerce_platform
    
    ecommerce_platform -- "Request Shipment" --> shipping_provider
    shipping_provider -- "Tracking Info, Delivery Status" --> ecommerce_platform
    
    ecommerce_platform -- "Send Notifications" --> email_service
    
    ecommerce_platform -- "Fulfill Order" --> warehouse
    warehouse -- "Inventory Updates, Shipment Details" --> ecommerce_platform
    
    ecommerce_platform -- "Send Data" --> analytics_tool
```