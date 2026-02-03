# System Modeling

System modeling is the process of developing **abstract models** of a system, where each model provides a different view or perspective of that system.

## Primary Approach and Notation

- **Graphical Notation**: System modeling generally involves representing a system using graphical notation.

- **UML**: The standard language for object-oriented modeling is the **Unified Modeling Language (UML)**.

- **Formal Models**: While graphical notation is standard, it is possible to develop formal mathematical models for detailed system specifications.

::: info Model Abstraction
A system model is not a complete representation of the system. It is an abstraction that purposely leaves out detail to make the system easier to understand, emphasizing only the most salient characteristics.
:::

## Purpose of System Models

Models serve two primary roles during the software engineering process:

1. **Communication and Documentation**: Models help explain requirements to stakeholders, facilitate design discussions among engineers, and document the system for implementation.
    
2. **Implementation Basis**: In **Model-Driven Engineering (MDE)**, complete or partial system implementations are automatically generated from these models.
    
Models are used during the requirements engineering process to help derive the detailed requirements for a system, during the design process to describe the system to engineers implementing the system, and after implementation to document the system’s structure and operation.

Models of the existing system are used during requirements engineering. They help clarify what the existing system does, and they can be used to focus a stake-holder discussion on its strengths and weaknesses.

Models of the new system are used during requirements engineering to help explain the proposed requirements to other system stakeholders. Engineers use these models to discuss design proposals and to document the system for implementation.

## Model Usage and Rigor

The level of detail and rigor required depends on the intended use of the model.

| **Usage Context**             | **Description**                                            | **Rigor Requirement**                                                                                                    |
| ----------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Stimulating Discussion**    | Used to focus discussion among engineers (Agile modeling). | **Informal/Incomplete**: Models may be incomplete as long as they cover key points.                                      |
| **Documenting Systems**       | Used to document existing systems.                         | **Correct**: Models do not need to be complete, but they must use notation correctly and describe the system accurately. |
| **Generating Implementation** | Used in MDE to generate source code.                       | **Complete and Correct**: Extreme care with notation is required as these models serve as the code basis.                |

## System Perspectives and Architecture

These models work together to form a cohesive design. The architectural design acts as the critical link between design and requirements engineering.

Different models can be used to represent the system from different ­perspectives. For example:
1. An external perspective, where you model the context or environment of the system.
2. An interaction perspective, where you model the interactions between a system and its environment, or between the components of a system.
3. A structural perspective, where you model the organization of a system or the structure of the data processed by the system.
4. A behavioral perspective, where you model the dynamic behavior of the system and how it responds to events.

| **Topic**              | **Details**                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Context models**     | Define system boundaries and positioning within the environment. They inform subsequent internal models.                                  |
| **Structural models**  | Define the static organization of classes and objects (Class diagrams) needed to deliver functionality.                                   |
| **Interaction models** | Describe required functionality via user inputs/outputs and component interaction. <br><br>Typically uses Use Case and Sequence diagrams. |
| **Behavioral models**  | Describe dynamic behavior and responses to stimuli (data or events) over time. <br><br>Uses Activity and State diagrams.                  |
| **MDE**                | An approach where models are automatically transformed into executable code, covering requirements, testing, and development.             |

::: tip The Building Analogy
If software design is like planning a complex building:
- **Context Models**: The property lines and connection to external infrastructure.
- **Structural Models**: The blueprints for the frame and interior.
- **Interaction Models**: How people move through rooms and use services.
- **Behavioral Models**: How automated systems (climate/security) react to events.
- **MDE**: Automated tools reading blueprints to fabricate the building reality.

:::

::: details System Design Overview
```mermaid
flowchart TD
    Req[Requirements Engineering] --> Arch[Architectural Design]
    Arch --> Context[Context Models]
    
    subgraph System_Design [System Design Perspectives]
        Context --> Structural[Structural Models]
        Context --> Interaction[Interaction Models]
        Context --> Behavioral[Behavioral Models]
    end

    System_Design --> MDE[Model-Driven Engineering]
    MDE --> Code[Executable Code]
```

## Essential UML Diagram Types

While UML provides 13 diagram types, five key types represent the essentials of a system.

|**Diagram Type**|**Perspective**|**Description**|
|---|---|---|
|**Use Case**|Interaction|Shows interactions between a system and its environment.|
|**Sequence**|Interaction|Shows interactions between actors, the system, and system components.|
|**Class**|Structural|Shows object classes and the associations between them.|
|**Activity**|Behavioral|Shows activities involved in a process or data processing (Data-driven).|
|**State**|Behavioral|Shows how the system reacts to internal and external events (Event-driven).|

:::


::: tip Practice Questions
- What is **system modelling**? Explain the **different types of UML diagrams** used to represent the essentials of a system (Activity, Use Case, Sequence, Class, State).
- Explain why **several types of model are needed** to fully represent a system.
- What roles do models play (communication/documentation vs implementation basis in MDE)?
:::
