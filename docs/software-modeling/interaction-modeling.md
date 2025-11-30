# Interaction Modeling

Interaction models describe how different parts of a system interact with each other and with external actors to accomplish a task. They are dynamic models that show the flow of control and data between objects or components. These models are essential for understanding the runtime behavior of a system.

## Sequence Diagrams

Sequence diagrams are a popular type of interaction diagram because they clearly show the sequence of messages exchanged between actors and objects over time. The vertical dimension represents time, and the horizontal dimension represents the different objects or actors.

### Key Components

-   **Lifeline**: A vertical dashed line that represents an individual participant (object or actor) in the interaction.
-   **Activation Box**: A thin rectangle on a lifeline indicating the period during which the participant is active (e.g., executing a method).
-   **Message**: An arrow from one lifeline to another, representing a communication. Can be synchronous (`->>`) or asynchronous (`->`).
-   **Reply Message**: A dashed arrow showing the return of a message.
-   **Fragments**: Notations like `alt` (alternatives), `opt` (optional), and `loop` can be used to model complex logic.

### Example: User Authentication

This diagram shows the sequence of events when a user tries to log in.

```mermaid
sequenceDiagram
    participant User
    participant WebServer
    participant Database

    User->>WebServer: Enters credentials
    activate WebServer

    WebServer->>Database: Query user by username
    activate Database
    Database-->>WebServer: Return user data (with hashed password)
    deactivate Database
    
    alt Credentials are valid
        WebServer-->>User: Redirect to dashboard
    else Credentials are invalid
        WebServer-->>User: Show "Invalid credentials" error
    end

    deactivate WebServer
```

### Advanced Example: E-commerce Order Processing

This complex sequence diagram illustrates the processing of an order in an e-commerce system, including payment, inventory update, and notification. It uses `alt`, `opt`, and `loop` fragments.

```mermaid
sequenceDiagram
    autonumber
    actor Customer
    participant "Web Store" as WS
    participant "Order Service" as OS
    participant "Payment Gateway" as PG
    participant "Inventory Service" as IS
    participant "Notification Service" as NS
    participant "Product DB" as PDB
    participant "Order DB" as ODB

    Customer->>WS: Place Order Request
    activate WS
    WS->>OS: Create Order(items, customerInfo)
    activate OS
    
    OS->>PDB: Check Product Availability(items)
    activate PDB
    PDB-->>OS: Product Availability Status
    deactivate PDB

    alt Product is available
        OS->>PG: Process Payment(orderId, amount)
        activate PG
        PG-->>OS: Payment Confirmation
        deactivate PG

        alt Payment successful
            OS->>ODB: Save Order(orderId, status="PAID")
            activate ODB
            ODB-->>OS: Order Saved Confirmation
            deactivate ODB

            OS->>IS: Deduct Stock(items)
            activate IS
            IS-->>OS: Stock Deduction Confirmation
            deactivate IS

            OS->>NS: Send Order Confirmation Email(orderId, customerEmail)
            activate NS
            NS-->>OS: Email Sent Confirmation
            deactivate NS

            WS-->>Customer: Order Placed Successfully!
        else Payment failed
            WS-->>Customer: Payment Failed. Please try again.
        end
    else Product not available
        WS-->>Customer: Item(s) out of stock.
    end
    
    deactivate OS
    deactivate WS
```

## Communication Diagrams

Communication diagrams (formerly known as Collaboration diagrams in UML 1.x) also show interactions between objects, but they emphasize the relationships and links between participants rather than the time sequence. They are useful for visualizing the communication paths between objects.

In Mermaid.js, there isn't a dedicated "Communication Diagram." However, a `graph` or `flowchart` can be used effectively to represent the same concepts.

### Key Components

-   **Participant**: A node representing an object or actor.
-   **Link**: A line connecting two participants, indicating that they can interact.
-   **Message**: A labeled arrow along a link showing the direction of the message. Messages are numbered to indicate their order.

### Example: Processing an Order

This diagram shows the objects involved in processing a customer order and the messages passed between them.

```mermaid
graph TD
    A(fa:fa-user Customer) -- "1: createOrder()" --> B(Order Page)
    B -- "2: submit()" --> C(Order Service)
    C -- "3: updateInventory()" --> D(Inventory Service)
    C -- "4: createPayment()" --> E(Payment Service)
```

### Advanced Example: Microservice-based User Registration

This example models the static interaction points in a user registration process within a microservice architecture, emphasizing communication channels.

```mermaid
graph TD
    User(fa:fa-user User) --> Frontend[fa:fa-desktop Frontend Service]
    Frontend --> UserAuth[User Authentication Service]

    UserAuth --> UserDB[(User Database)]
    UserAuth --> UserProfile[User Profile Service]
    UserProfile --> ProfileDB[(Profile Database)]

    UserAuth --> LoggingService[Logging Service]
    UserProfile --> LoggingService

    UserAuth --> NotificationService[Notification Service]
    NotificationService --> MailProvider(fa:fa-envelope Mail Provider)
    NotificationService --> SMSGateway(fa:fa-comment-alt SMS Gateway)

    UserAuth -- "Error Response" --> Frontend
    Frontend -- "Error Display" --> User
```