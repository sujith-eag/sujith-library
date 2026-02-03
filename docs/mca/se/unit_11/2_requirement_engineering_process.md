# Requirements Engineering Processes

1. **Requirements Engineering (RE) :** The process of **finding out, analyzing, documenting, and checking** the services and constraints of a system. It involves understanding and defining what services are required from the system and identifying the constraints on its operation and development.

2. **Feasibility Study :** A short, focused study that takes place early in the RE process to assess if the system contributes to organizational objectives, can be implemented within schedule/budget/technology, and can be integrated with existing systems.

3. **Requirements Document :** The outcome of the RE process; an **agreed requirements document** that specifies a system satisfying stakeholder requirements.

### Core Concepts and Principles

1. **Criticality:** Requirements engineering is a particularly **critical stage** of the software process, as errors or mistakes made early inevitably lead to later problems in system design and implementation.

2. **Iterative Nature:** Requirements engineering is typically an **iterative process** in which the main activities are interleaved. The activities are often organized around a **spiral model**.

3. **Stakeholder Needs:** Requirements are usually presented at two levels of detail: a high-level statement for **end-users and customers**, and a detailed **system specification** for developers.

### Requirements Engineering in the Software Lifecycle

Requirements Engineering is typically presented as the first stage of the software engineering process. It establishes a high-level view of what the system might do and the benefits that it might provide.

These findings are often used in a feasibility study, which assesses whether the proposed system is technically and financially feasible. The results of this study help management decide whether to proceed with the procurement or development of the system.

## Overall Requirements Engineering Process

Requirements engineering involves three key activities: 

1. **Requirements Elicitation and Analysis:** Discovering requirements by interacting with stakeholders;

2. **Requirements Specification:** Converting these requirements into a standard form;

3. **Requirements Validation:** Checking that the requirements actually define the system that the customer wants.

In practice, requirements engineering is an iterative process in which the activities are interleaved. The overall process consists of these three core activities, often following a spiral model structure.

```mermaid
graph TD
    A[🔍 Requirements Elicitation<br>& Analysis] --> B[📄 Requirements Specification];
    B --> C[✅ Requirements Validation];
    C --> A;
```

### Phasing of Effort (The Spiral Model)

The activities are organized as an iterative process around a spiral. The amount of time and effort devoted to each activity in an iteration depends on the stage of the overall process, the type of system being developed, and the budget that is available. The output of the RE process is a system requirements document.

This diagram represents the progressive and iterative nature of the spiral model as a linear flow.

::: details Spiral model as Linear Flow
```mermaid
graph TD
    start((Start)) --> iter1[Iteration 1];
    iter1 --> hlr[High-Level Requirements];
    hlr --> ur["User Requirements (Abstract)"];
    ur --> iter2[Iteration 2];
    iter2 --> dr[Detailed Requirements];
    dr --> nfr["Non-Functional Requirements (Detailed)"];
    nfr --> iter3[Iteration N];
    iter3 --> srs("System Requirements Document");
    srs --> endNode((End));
```
:::

This diagram shows the cyclical nature of the process, with states for each major activity.
::: details cyclical representation
```mermaid
stateDiagram-v2
    [*] --> Eliciting
    Eliciting --> Specifying: Requirements Gathered
    Specifying --> Validating: Specification Drafted
    Validating --> Eliciting: Feedback & Changes
    Validating --> [*]: Requirements Approved
```
:::

Early in the process, most effort will be spent on understanding the high-level business and non-functional requirements, and the user requirements for the system.

Later in the process, in the outer rings of the spiral, more time will be spent on eliciting and understanding the non-functional requirements and more detailed system requirements. 

This spiral model accommodates approaches to development where the requirements are developed to different levels of detail. The number of iterations around the spiral can vary, so that the spiral can be exited after some or all of the user requirements have been elicited.

## Requirements Elicitation and Analysis

The goal is to understand the work that stakeholders do and how they might use a new system to support that work.

**Requirements Elicitation and Analysis :** The process of deriving system requirements through observation of existing systems, discussions with potential users and procurers, task analysis, and other techniques. 

During requirements elicitation, software engineers work with stakeholders to find out about the application domain, work activities, the services and system features that stakeholders want, the required performance of the system, hardware constraints, and so on.

### The Elicitation and Analysis Sub-Process Steps

Elicitation and analysis is itself an iterative process cycle with continual feedback between stages:

::: details Elicitation and Analysis Process
```mermaid
graph TD
    A[Discovery
		& Understanding]
	B[Classification
		& Organization]
	C[Prioritization
		& Negotiation]
	D[Documentation]

	A --> B;
	B --> C;
    C --> D;
    D --> A;
```
:::

1. **Requirements Discovery and Understanding:** Gathering information by interacting with stakeholders, as well as finding domain requirements from existing documentation and systems.

2. **Requirements Classification and Organization:** Taking the initial unstructured collection of information and grouping related requirements into coherent clusters.

    - **Viewpoints:** This involves organizing requirements by **viewpoint**, where a viewpoint is a way of collecting and organizing requirements from a group of stakeholders who share something in common (e.g., end-users or managers).

3. **Requirements Prioritization and Negotiation:** Resolving conflicts among stakeholders’ varying views to reach agreed-upon compromise requirements.

    - **Regular stakeholder meetings** are necessary to allow concerns to be expressed and agreements made, which prevents stakeholders from undermining the RE process.

4. **Requirements Documentation:** Recording the requirements, which may result in an early draft of the formal document or may involve maintaining the information informally on wikis or whiteboards.

    - At this stage, it is important to use simple language and diagrams to describe the requirements, making it possible for stakeholders to understand and comment.

    - To make information sharing easier, it is best to use a shared document or a wiki that is accessible to all interested stakeholders.

### Requirements Elicitation Techniques

1. **Interviewing:** Talking directly to stakeholders to gather information about what they do.

    - **Open Interviews:** There is no predefined agenda. The requirements engineering team explores a range of issues with system stakeholders to develop a better understanding of their needs.

    - **Closed Interviews:** The stakeholder answers a predefined set of questions.

    - In practice, interviews are normally a mixture of both types. To be an effective interviewer, one should:

        - Be open-minded, avoid preconceived ideas about the requirements, and be willing to listen to stakeholders.

        - Prompt the interviewee to get discussions going by using a **springboard question**, a requirements proposal, or by working together on a prototype system. Simply asking “tell me what you want” is unlikely to result in useful information.
            
2. **Observation / Ethnography:** An observational technique used to understand operational processes by watching people perform their jobs to observe what artifacts and systems they use.
    
    - This is valuable for discovering requirements derived from **cooperation and awareness** of others’ activities that users may not articulate (e.g., an air traffic controller adjusting strategy based on neighboring sectors’ activities).

    - Software systems are used in a social and organizational environment; ethnography helps account for these factors to ensure the system will be used as intended.

    - Ethnographic studies can reveal critical process details missed by other techniques but are not as effective for discovering broader organizational or domain requirements.

    - **Integration:** Ethnography can be combined with the development of a **system prototype**; the ethnography informs the prototype, and the prototype focuses the ethnography by generating new questions.

3. **Scenarios and User Stories:** High-level, natural language narratives that describe possible uses of the system and help visualize how users might interact with the product.
    
    - People find it easier to relate to real-life examples than abstract descriptions. Stories and scenarios are ways of capturing this information and can be used when interviewing stakeholders to develop more specific system requirements.

    - **Example (iLearn):** A user story describing a teacher (Jack) using the digital learning environment for a class project can elicit requirements, such as the need for a **photo-sharing site** and a **wiki**.

    - A scenario starts with an outline of the interaction. As elicitation progresses, details are added. At its most general, a scenario may include:

        - A description of what the system and users expect when the scenario starts.

        - A description of the normal flow of events in the scenario.

        - A description of what can go wrong and how resulting problems can be handled.

        - Information about other activities that might be going on at the same time.

        - A description of the system state when the scenario ends.

::: details Requirements Elicitation Techniques

```mermaid
mindmap
  root{{Requirements Elicitation Techniques}}
    ("Interviewing")
      ("Open Interviews")
      ("Closed Interviews")
      ("Springboard Questions")
    ("Observation / Ethnography")
      ("Understand Operational Processes")
      ("Discover Unarticulated Needs")
      ("Combine with Prototyping")
    ("Scenarios and User Stories")
      ("High-level Narratives")
      ("Visualize User Interaction")
      ("Outline Interactions")
```
:::

::: tip Practice Questions
- With a neat diagram, discuss the **software requirement engineering process** (overall RE process).
- Discuss the process of **requirements elicitation and analysis** with a suitable diagram.
- Explain the key **elicitation techniques** and when to use them (interviewing, observation/ethnography, scenarios/user stories).
:::

## Requirements Specification

Requirements specification is the process of writing down the user and system requirements in a requirements document. 

Ideally, the user and system requirements should be clear, unambiguous, easy to understand, complete, and consistent. In practice, this is almost impossible to achieve. Stakeholders interpret the requirements in different ways, and there are often inherent conflicts and inconsistencies in the requirements.

Requirements are documented at different levels of detail because they are read and utilized by different stakeholders for different purposes.

### User Requirements Specification

Statements written in natural language, supplemented by simple diagrams and tables. They describe what services the system is expected to provide to system users and the constraints under which it must operate.

- **Purpose:** To describe the functional and non-functional requirements in a way that is understandable by system users and customers who lack detailed technical knowledge. User requirements should avoid software jargon, structured notations, or formal notations.

- **Content Focus:** This specification should describe only the external behavior of the system. The content may vary from broad statements of required features to detailed descriptions of system functionality.

### System Requirements Specification

A detailed, expanded version of the user requirements. This document, sometimes called a functional specification, provides more specific information and a detailed description of the services, functions, and operational constraints of the software system to be implemented.

- **Purpose:** Serves as the starting point for system design by software engineers. It should define exactly what is to be implemented and may be used as part of the contract between the system buyer and the software developers.

- **Content Focus:** This specification should ideally describe only the external behavior and operational constraints of the system. However, for complex systems, some initial design information (such as a proposed architecture) may be included to help structure the specification.

::: details Requirements Specification
```mermaid
graph TD
    A[👤 User Requirements] -- "Are elaborated into" --> B[⚙️ System Requirements];
    
    A --> A_Details("ℹ️ High-level, abstract<br>For customers & end-users<br>");
    B --> B_Details("📋 Detailed, specific<br>For developers & engineers<br>");
```
:::

### Stakeholder Readership by Requirement Level

The level of detail required by a reader depends on their role and concerns.

1. **Audience for User Requirements:** Stakeholders who are not usually concerned with how the system will be implemented or may be managers not interested in detailed facilities. This audience includes:
    - Client Managers
    - System End-Users
    - Client Engineers
    - Contractor Managers
    - System Architects

2. **Audience for System Requirements:** Stakeholders who need to know more precisely what the system will do, either because they are involved in system implementation or need to understand how it will support business processes. This audience includes:
- System End-Users
- Client Engineers
- System Architects
- Software Developers
