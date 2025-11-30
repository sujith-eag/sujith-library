# Behavioral Modeling

Behavioral models describe the dynamic behavior of a system, focusing on what the system does in response to events or stimuli. Unlike structural models that show the static architecture, behavioral models illustrate the process and flow of control over time. They are crucial for understanding how the system functions and for modeling complex workflows and state changes.

## Activity Diagrams

Activity diagrams are used to display the sequence of activities. They are useful for modeling business processes, workflows, and the logic of complex operations. They are essentially advanced flowcharts.

### Key Components

-   **Action**: A rounded rectangle representing a single step or task.
-   **Start/End Nodes**: A filled circle for the start and a filled circle with a border for the end.
-   **Flow/Edge**: Arrows showing the transition from one activity to another.
-   **Decision Node**: A diamond shape indicating a point where the flow can branch based on a condition.
-   **Fork/Join Nodes**: Black bars used to split the flow into parallel activities (fork) and bring them back together (join).

### Example: Document Approval Workflow

This diagram shows a workflow for getting a document reviewed and approved.

```mermaid
graph TD
    start([Start]) --> enter_details{Enter Document Details};
    enter_details --> upload[Upload Document];
    upload --> choose_reviewer{Choose Reviewer};
    choose_reviewer --> parallel_process_fork;

    subgraph "Parallel Review"
      direction LR
      parallel_process_fork(fork) --> reviewer_1_review[Reviewer 1 Reviews];
      parallel_process_fork --> reviewer_2_review[Reviewer 2 Reviews];
    end
    
    reviewer_1_review --> parallel_process_join(join);
    reviewer_2_review --> parallel_process_join(join);

    parallel_process_join --> decision{All Approved?};
    decision -- "Yes" --> approved[Document Approved];
    decision -- "No" --> needs_revision[Needs Revision];
    needs_revision --> enter_details;
    approved --> stop([End]);
```

### Advanced Example: Order Fulfillment Process with Swimlanes

This activity diagram illustrates a detailed order fulfillment process using swimlanes to show responsibilities across different departments.

```mermaid
graph TD
    start([Start Order]) --> A{Order Received};

    subgraph "Customer Service"
        A --> B(Verify Order Details)
        B --> C{Order Valid?}
        C -- "No" --> D[Notify Customer of Issue]
        D --> E([End Order])
    end

    subgraph "Warehouse"
        C -- "Yes" --> F(Check Stock)
        F --> G{Item in Stock?}
        G -- "No" --> H[Order Backordered]
        H --> E
        G -- "Yes" --> I(Pick Items)
        I --> J(Pack Order)
    end

    subgraph "Shipping"
        J --> K(Generate Shipping Label)
        K --> L(Ship Order)
        L --> M([End Order])
    end

    A --> B
    C -- "Yes" --> F
    J --> K
    L --> M
```

## State Machine Diagrams

State machine diagrams (or statecharts) are used to model the behavior of a single object across its lifetime. They show the different states an object can be in and how it transitions from one state to another in response to events. They are excellent for modeling reactive systems and the lifecycle of objects with complex behavior.

### Key Components

-   **State**: A condition or situation in the life of an object. Represented by a rounded rectangle.
-   **Initial State**: The starting point, represented by a solid black circle.
-   **Final State**: The ending point, represented by a circle with a dot inside.
-   **Transition**: An arrow from one state to another, labeled with the event that triggers the change.
-   **Choice**: A diamond that allows for conditional transitions based on a guard condition.

### Example: Bug Tracking Lifecycle

This diagram models the lifecycle of a bug in an issue tracking system.

```mermaid
stateDiagram-v2
    [*] --> Open

    Open --> Assigned : Assign to developer
    Assigned --> In_Progress : Start work
    
    In_Progress --> In_Review : Submit for review
    In_Review --> Approved : LGTM (Looks Good To Me)
    In_Review --> In_Progress : Changes requested
    
    Approved --> Closed : Deployed to production

    Open --> Cancelled : Won't fix
    Assigned --> Cancelled : Obsolete
    In_Progress --> Cancelled : Obsolete
    
    Cancelled --> [*]
    Closed --> [*]
```

### Advanced Example: User Account Lifecycle

This state machine diagram models the lifecycle of a user account in a system, showing various states, events, and conditional transitions.

```mermaid
stateDiagram-v2
    direction LR

    [*] --> Created
    
    Created --> Active : activateAccount(token)
    Created --> Suspended : suspendAccount(reason)
    
    Active --> Suspended : suspendAccount(reason)
    Active --> Deactivated : deactivateAccount()
    Active --> Verified : verifyEmail()
    
    Verified --> Active : login()
    Verified --> Deactivated : deactivateAccount()

    Suspended --> Active : reactivateAccount()
    Suspended --> Deactivated : deactivateAccount()
    Suspended --> Deleted : deleteAccount()

    Deactivated --> Created : reactivateWithNewEmail()
    Deactivated --> Deleted : deleteAccount()

    Deleted --> [*]

    state Created {
        state "Email Pending Verification" as EmailPending
        [*] --> EmailPending // EmailPending is the initial substate
        EmailPending --> Active : emailVerified()
    }
    EmailPending --> Created : emailResent() // Transition from substate to parent state

    state Active {
        state "LoggedIn" as LoggedIn
        state "LoggedOut" as LoggedOut
        [*] --> LoggedIn // LoggedIn is the initial substate
        LoggedIn --> LoggedOut : logout()
        LoggedOut --> LoggedIn : login()
    }
```