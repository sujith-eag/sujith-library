# Interaction Models

Interaction models are used to represent interactions, which can include user input/output, system-to-system communication, or interaction between software components. **Use case modeling** is one of the two primary approaches used for this purpose, primarily focused on modeling interactions between a system and external agents.

## Use Case Modeling

Originally developed by **Ivar Jacobsen in the 1990s**, use case modeling is now part of the Unified Modeling Language (UML).

- **Definition**: A use case represents a **discrete task** that involves **external interaction** with the system. A use case is understood as a **simple description** of what a user expects from a system during a particular interaction.
    
- **Scope**: It is a simple description of what a user expects from a system during a particular interaction.
    
- **Application**: Use case models are generally more helpful in the **early stages of system design** rather than in detailed requirements engineering.
    

### Notation and Elements

|**Element**|**Graphic Representation**|**Description**|
|---|---|---|
|**Use Case**|**Ellipse**|Represents the specific interaction or task.|
|**Actor**|**Stick Figure**|Represents agents involved in the interaction. These can be **human users** (e.g., operator) or **external systems/hardware**.|
|**Links**|**Lines**|Connects actors to use cases. While formal UML uses plain lines, arrows are often used informally to indicate who **initiates the transaction**.|

## Supplementing Use Case Diagrams

Use case diagrams offer a **simple overview** of an interaction but lack specific detail.

::: info Completing the Description

To achieve a complete interaction description, diagrams must be supplemented with additional detail.

1. A **simple textual description**.
    
2. A **structured description** typically presented in a **table** (often considered the most useful format).
    
3. A **sequence diagram** to model interactions between system components.
:::

## Composite Diagrams

**Composite use case diagrams** are used to show multiple different use cases in a single view.

- **Small Systems**: It is possible to include all potential interactions in one diagram.
    
- **Complex Systems**: Multiple diagrams are required, often grouped by **related use cases** (e.g., all use cases involving a specific actor like a "Medical Receptionist").
    

::: info UML Complexity

The UML includes specific constructs for sharing parts of a use case across diagrams (e.g., include, extend), but these are often difficult for non-technical end-users to understand.
:::


## Use Case Examples (Mentcare System)

The following diagrams illustrate the progression from a single interaction to complex composite views within the Mentcare patient information system.

### Single Interaction: Transfer Data

This model shows the interaction required for transferring summarized patient data from the Mentcare system to an external Patient Record System (PRS). The Medical Receptionist initiates this interaction.


```mermaid
graph LR
    subgraph Actors
        MR[Medical Receptionist]
        PRS[Patient Record System]
    end

    subgraph System
        TD((Transfer Data))
    end

    MR -- initiates --> TD
    TD -- transfers data --> PRS
```

### Tabular Description: Transfer Data

The following table provides the necessary detail for the "Transfer Data" use case (Figure 5.4).

|**Field**|**Details**|
|---|---|
|**Use Case**|Mentcare system: Transfer data|
|**Goal**|Upload summary patient data to the Patient Record System (PRS)|
|**Actors**|Medical Receptionist (operator), Patient Record System (PRS)|
|**Description**|The operator selects patient details and the PRS system for upload. The Mentcare system checks security permissions, formats the data, and initiates the data transfer.|
|**Comments**|The receptionist must have appropriate security permissions to access both the patient information and the PRS.|

### Composite View: Medical Receptionist

This diagram (Figure 5.5) illustrates multiple use cases connected to a single actor, demonstrating the range of tasks a Medical Receptionist performs.

```mermaid
graph LR
    subgraph Actors
        MR[Medical Receptionist]
    end

    subgraph System
        RP((Register Patient))
        TD((Transfer Data))
        CP((Contact Patient))
        VP((View Patient Info))
        UP((Unregister Patient))
    end

    MR --> RP
    MR --> TD
    MR --> CP
    MR --> VP
    MR --> UP
```

### General System Overview

This diagram (Figure 4.15) illustrates the relationships between multiple actors (Nurse, Manager, Doctor) and their specific interactions.

```mermaid
graph LR
    subgraph Actors
        Nurse[Nurse]
        Manager[Manager]
        Doctor[Doctor]
        MR[Medical Receptionist]
    end

    subgraph System
        VR((View Record))
        GR((Generate Report))
        ES((Export Stats))
        ER((Edit Record))
        SC((Setup Consultation))
        RP((Register Patient))
    end

    MR --> RP
    Nurse --> VR
    Doctor --> VR
    Doctor --> ER
    Doctor --> SC
    Manager --> GR
    Manager --> ES
```

::: tip Practice Questions
- Define **interaction model**. Explain **use-case modelling** with an example.
- Develop a set of **use cases** that would serve as a basis for understanding the requirements for an **ATM system**.
- Draw a **sequence diagram of ATM withdrawal** (use the interaction between ATM, bank server, card reader, user).
- Draw the **sequence diagram for consulting a doctor** for a department in the hospital.
- Explain the **importance of Interaction models** in understanding user-system and system-system interactions.
- Develop the **use case model and sequence diagram of a weather station** and show the interaction between the data collection sub-system and the instruments that collect the weather data.
:::

## Sequence Diagrams

Sequence diagrams are the second part of interaction modeling (Section 5.2), primarily used to model the **dynamic interactions** between system components and external agents. They are typically used in conjunction with use cases to document the detailed interactions of a specific **use case instance**.

### Core Notation and Elements

The UML syntax for sequence diagrams is structured to show the flow of control and messages over time, read from **top to bottom**.

| **Element**         | **Visual Representation** | **Description**                                                                            |
| ------------------- | ------------------------- | ------------------------------------------------------------------------------------------ |
| **Participants**    | Horizontal listing        | The **objects and actors** involved in the interaction, listed along the top.              |
| **Lifelines**       | Dotted vertical line      | Represents the duration for which that object instance is involved in the computation.     |
| **Activation**      | Vertical rectangle        | Indicates the period an object is active or has the **focus of control** (executing code). |
| **Messages**        | Annotated arrows          | Interactions between lifelines. Annotations specify calls, parameters, and return values.  |
| **Object Creation** | specific message/box      | Illustrates the creation of new objects (e.g., temporary summaries) during the sequence.   |

### Advanced Modeling Features

Sequence diagrams support advanced logic to model complex scenarios.

- **Alternatives (`alt`)**: Conditional paths are shown using a box labeled `alt`. Conditions are written in **square brackets** (e.g., `[authorized]`), and options are divided by a dotted line.
    
- **Asynchronous Interaction**: Arrows with a **stick arrowhead** indicate a message is sent without suspending processing, allowing the sender to continue other activities.
    

::: tip Level of Detail

For early high-level design or requirements engineering, it is often best to omit interactions that depend on specific implementation decisions to avoid obscuring important relationships.
:::

### Comparison with Data-Flow Diagrams (DFDs)

Sequence diagrams can be adapted for data-driven modeling if messages flow predominantly from left to right.

- **Engineers' Preference**: While non-experts often find traditional DFDs more intuitive, engineers generally **prefer sequence diagrams** because they explicitly highlight the **objects** responsible for operations.


## Sequence Diagram Examples

The following diagrams illustrate key concepts using the Mentcare system.

### 1. View Patient Information

This diagram (Figure 5.6) models the dynamic sequence where a Medical Receptionist requests patient information, requiring an **authorization check**.

```mermaid
sequenceDiagram
    actor MR as Medical Receptionist
    participant P as P:PatientInfo
    participant D as D:Mentcare-DB
    participant AS as AS:Authorization

    %% 1. Receptionist initiates the call
    MR->>P: ViewInfo(PID)
    activate P

    %% 2. P (UI Object) requests report from D (DB)
    P->>D: report(Info, PID, UID)
    activate D

    %% 3. D requests authorization from AS
    D->>AS: authorize(Info, UID)
    activate AS
    AS-->>D: authorization
    deactivate AS

    %% 4. Conditional outcome based on authorization status
    alt authorization OK
        D-->>P: Patient info
        deactivate D
        P-->>MR: Patient info
    else authorization fail
        activate D
        D-->>P: Error (no access)
        deactivate D
        P-->>MR: Error (no access)
    end
    deactivate P
```

### 2. Transfer Data (Complex Interaction)

This diagram (Figure 5.7) demonstrates advanced features:

- **Alternatives**: Processing differs based on whether the user selects `sendInfo` or `sendSummary`.
    
- **Object Creation**: A temporary `Summary` object is created dynamically.
    
- **External Interaction**: The system interacts with an external Patient Record System (PRS).
    
```mermaid
sequenceDiagram
    actor MR as Medical Receptionist
    participant PRS as PRS
    participant P as P:PatientInfo
    participant D as D:Mentcare-DB
    participant AS as AS:Authorization

    %% Initial Action: Receptionist logs in to the external PRS
    MR->>PRS: login()
    PRS-->>MR: ok

    activate P

    %% Alternative 1: Direct transfer of updated information [sendInfo]
    alt sendInfo (Direct Transfer)
        P->>AS: authorize(TF, UID)
        activate AS
        AS-->>P: authorization
        deactivate AS

        PRS->>D: updateInfo()
        activate D
        D-->>PRS: update(PID)
        deactivate D
        PRS-->>MR: update OK Message(OK)

    %% Alternative 2: Transfer summary data [sendSummary]
    else sendSummary (Summary Transfer)
        P->>AS: authorize(TF, UID)
        activate AS
        AS-->>P: authorization
        deactivate AS

        %% Object Creation: A temporary Summary object is created
        create participant Summary as :summary
        P->>Summary: summarize(UID)
        Summary-->>P: update(PID)

        PRS->>D: UpdateSummary()
        activate D
        D-->>PRS: update(PID)
        deactivate D
        PRS-->>MR: update OK Message(OK)

    end
    deactivate P

    %% Final Action: Receptionist logs off
    MR->>PRS: logout()
```


::: tip Practice Questions
- Define the **sequence diagram** notation: participants, lifelines, activation, messages, object creation.
- Draw the **sequence diagram for ATM withdrawal** and explain the key interactions.
- Develop a **sequence diagram for consulting a doctor** in a hospital department (show actors and authorization checks).
- Explain when to use sequence diagrams vs DFDs.
:::

