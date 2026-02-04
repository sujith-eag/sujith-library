# Architectural Design & Views

The specific subtopics are:

- Architectural design decisions
- Architectural views
- Architectural patterns
- Application architectures

The following table details the topics discussed within the textbook.

| **Topic**                     | **Details**                                                                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Architectural Design**      | It is the first stage in the software design process.<br><br>Introduces the importance of architectural design, decisions involved, and patterns.     |
| **Design Decisions**          | Addresses structural decisions (decomposing components, controlling operations, non-functional requirements) that profoundly affect the system.       |
| **Architectural Views**       | Discusses perspectives required for documenting architecture (e.g., Krutchen’s 4+1 view model), as a single diagram cannot represent all information. |
| **Architectural Patterns**    | Introduces reusable patterns (MVC, Layered, Client-Server) that capture successful system organizations and their strengths/weaknesses.               |
| **Application Architectures** | Details generic models for specific classes of systems (e.g., Transaction processing), used as design checklists or starting points.                  |

## Architectural Design

Architectural design is defined as the process concerned with **understanding how a software system should be organized** and **designing the overall structure of that system**.

Software architecture is important because it affects the performance, robustness, distributability, and maintainability of a system. Non-functional requirements have the most significant effect on the system’s architecture.

### Role in the Software Process

Architectural design is the **first stage in the software design process**. It serves as the critical link between design and **requirements engineering**. The primary function is to **identify the main structural components in a system** and determine the **relationships between them**.

The outcome of the architectural design process is an architectural model that describes how the system is organized as a set of communicating components.

### Agile Considerations

While traditional models define architecture early, it remains significant in agile processes.

::: warning Refactoring Costs

- It is generally accepted that an **early stage** of an agile development process should focus on designing an overall system architecture.
    
- Incremental development of architectures is not usually successful.
    
- While refactoring components is easy, **refactoring the system architecture is expensive** because it requires modifying most system components to adapt to the changes.

:::

### Overlap with Requirements Engineering

In practice, there is a **significant overlap** between architectural design and requirements engineering. The ideal that a system specification should not include design information is **unrealistic**, except for small systems.

- **Identification of Components**: Identify the main architectural components as they reflect the high-level features of the system. As part of the requirements engineering process, propose an abstract system architecture where groups of system functions or features are associated with large-scale components or sub-systems.

### Levels of Abstraction

You can design software architectures at two levels of abstraction:

1. Architecture in the small is concerned with the architecture of individual programs. At this level, we are concerned with the way that an individual program is decomposed into components. 

2. Architecture in the large is concerned with the architecture of complex enterprise systems that include other systems, programs, and program components. These systems may be distributed over different computers, which may be owned and managed by different companies.

## Architectural Design Decisions

Architectural design is not a rigid sequence of activities, it is a **creative process** or considered a **series of decisions** in which the system architect designs an organization that satisfies the functional and non-functional requirements. 

These structural decisions are influenced by the system type, the architect's experience, and the specific system requirements.

### Fundamental Architectural Questions

During the architectural design process, system architects must address several fundamental questions or decisions.

1. **Fundamental Approach to Structure**: What will be the basic approach used to structure the system (e.g., layered or client-server structuring)?
    
2. **Architectural Patterns/Styles**: What patterns might be used? A pattern captures the essence of a proven system organization and includes information on its strengths and weaknesses.
    
3. **Component Decomposition**: How will the structural components in the system be decomposed into sub-components?
    
4. **Control Strategy**: What strategy will be used to control the operation of the components in the system?
    
5. **Non-functional Organization**: What architectural organization is best for delivering the **non-functional requirements** of the system?
    
6. **System Distribution**: How will the system be **distributed** across hardware cores or processors? This affects performance and reliability.
    
7. **Generic Architecture Template**: Is there a generic application architecture that can act as a template (e.g., specific to the application domain)?
    
8. **Documentation**: How should the architecture of the system be documented?
    
### Influence of Non-functional Requirements

The choice of architectural style and structure is closely related to the **non-functional requirements** of the system. The architecture fundamentally influences properties like reliability, efficiency, and security.

|**Requirement**|**Architectural Implication**|
|---|---|
|**Performance**|Localize critical operations within a small number of large components, ideally deployed on the same computer to reduce communication overhead.|
|**Security**|Use a **layered structure** with the most critical assets protected in the innermost layers, subjected to high security validation.|
|**Safety**|Co-locate safety-related operations in a **single component** or small number of components to reduce validation costs and problems.|
|**Availability**|Include **redundant components** to enable replacement and updating without stopping the system.|
|**Maintainability**|Use **fine-grain, self-contained components**. Separate data producers from consumers and avoid shared data structures.|

::: warning Conflicts and Trade-offs

It is impossible to optimize all non-functional attributes simultaneously. Architects must make compromises, such as:

- **Performance vs. Maintainability**: Large components improve performance, while small components improve maintainability.
    
- **Security vs. Usability**: Balancing strict security with ease of use.
    
- **Availability vs. Time-to-Market**: Balancing redundancy with cost and speed.

:::     

::: info Practice Questions
- What is meant by architectural design? Define software architecture.

- Why is architectural design a critical link between requirements and design? Give examples.

- Discuss the different **architectural styles and structures** and how non-functional requirements influence architecture decisions.

- What is meant by **architectural design**? Explain its role in meeting functional and non-functional system requirements.

- Discuss different **architectural styles and structures** you can choose to satisfy non-functional requirements (e.g., layered, client-server, repository). Explain advantages and disadvantages of each.

:::


## Architectural Views

The architectural model, which is the output of architectural design, describes how a system is organized as a set of communicating components.

### Purpose and Need for Multiple Views

It is impossible to represent all relevant information about a system's architecture in a single diagram. A single graphical model can only depict **one perspective** (e.g., decomposition, runtime interactions, or physical distribution). Because all of these are useful at different times, for both design and documentation, you usually need to present multiple views of the software architecture.

- **Agile Context**: In Agile methods, the team should produce only the design documentation that **adds value** and is necessary for maintenance and support.

It might show:
- How a system is decomposed into modules
- How the runtime processes interact
- The different ways in which system components are distributed across a network

### Krutchen's 4+1 View Model

One widely recognized framework for organizing these perspectives is **Krutchen’s 4+1 view model**. It suggests four fundamental architectural views linked through common use cases.

| View                 | Focus                 | Details                                                                                                                                                  |
| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Logical View**     | Key Abstractions      | Shows objects or object classes. Relates system requirements to entities.                                                                                |
| **Process View**     | Runtime Interactions  | Shows how the system is composed of interacting processes. Useful for judgments on non-functional characteristics like **performance and availability**. |
| **Development View** | Decomposition         | Details the breakdown of software into components implemented by a **single developer or team**. Valuable for software managers and programmers.         |
| **Physical View**    | Hardware/Distribution | Shows system hardware and how components are **distributed across processors**. Essential for deployment planning.                                       |

::: info The "+1" View

Use Cases/Scenarios form the "+1" component. They link and integrate the four main views, illustrating how components work together during typical system interactions.

:::

## Conceptual View

**Hofmeister et al.** suggest incorporating a **conceptual view** in addition to Krutchen's four views.

This view is an abstract view of the system that serves as a basis for decomposing high-level requirements into more detailed specifications, assists with component reuse decisions, and can represent a product line rather than a single system.

- **Example**: The high-level block diagram of the **packing robot system** is a conceptual view.

::: tip Practical Usage

Conceptual views are almost always developed during the design process to explain the architecture to stakeholders and inform decisions.

:::

### Notations for Architectural Models

Architects must decide what notations to use for describing architectural models.

| **Notation Type**                              | **Pros**                                                                       | **Cons**                                                                        | **Context**                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Informal** (Block Diagrams)                  | **Fast**, intuitive, supports communication. Requires no specialist knowledge. | Lacks rigor.                                                                    | Best for **creative design phase** and planning. |
| **UML**                                        | Useful for **detailed documentation** and model-driven development.            | Can constrain expressiveness; requires specialist knowledge.                    | Detailed documentation phases.                   |
| **ADLs** (Architectural Description Languages) | Reduces ambiguity; allows tool-based checking.                                 | **Expensive**, time-consuming, and difficult for non-specialists to understand. | Specialized high-rigor environments.             |

::: warning Agile Perspective

In Agile development, detailed design documentation is often minimized. This practice is known as EDUF (Enough Design Up Front), focusing only on views necessary for communication.

:::


::: info Practice Questions

- What are **architectural views**? Explain why multiple views are needed to represent a system's architecture.

- Explain the **different types of architectural views** (e.g., logical, process, development, physical, scenarios) and their significance in providing a comprehensive understanding of system architecture.

- Explain C&C (Component and Connector) view with its notations and example.

:::
