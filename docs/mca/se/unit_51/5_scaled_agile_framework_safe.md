# Scaled Agile Framework (SAFe)

The Scaled Agile Framework (SAFe) is a knowledge base of proven, integrated principles and practices for Lean, Agile, and DevOps development at scale. It was launched to address problems faced by large software organizations where individual team frameworks (like Scrum or XP) were insufficient.

- **SAFe (Scaled Agile Framework):** A scaled approach to Agile adoption that provides a process model covering the highest (portfolio) and lowest (team) levels of an enterprise.
- **Agile Release Train (ART):** The primary value delivery construct in SAFe. It is a long-lived team-of-teams that delivers value in a value stream.
- **Program Increment (PI):** A mid-level planning cycle (typically 8–12 weeks or 4–6 sprints) during which an Agile Release Train delivers incremental value,.

## The Foundation

- **The Goal:** To synchronize alignment, collaboration, and delivery for large numbers of Agile teams.

- **Core Values:** SAFe is built on four core values:
    1. **Code Quality**
    2. **Alignment**
    3. **Program Execution**
    4. **Transparency**.

- **Underlying Approaches:** SAFe acts as a container for existing approaches, specifically endorsing **Scrum**, **eXtreme Programming (XP)**, **Kanban**, and **Lean Thinking**.


## The SAFe Process Model

The SAFe process model is organized around three distinct layers: **Team**, **Program**, and **Portfolio**.

### Layer 1: The Team Level

At the bottom layer, SAFe relies on standard Agile teams to power the development.

- **Frameworks Used:** Teams typically use **Scrum** (for management) and **XP** (for technical practices).
- **Adjustments:** Unlike standard Scrum, SAFe teams must understand their role within the larger program and emphasize "flow" and limited Work-In-Progress (WIP).
- **Roles:** Standard roles apply (ScrumMaster, Product Owner, Development Team).

### Layer 2: The Program Level (Agile Release Train)

This is the level where multiple teams are coordinated. The **Agile Release Train (ART)** contains 5 to 12 teams working toward a common goal,.

- **Cadence:** "Develop on Cadence, Release on Demand." Development follows a strict schedule (the Program Increment), but releasing software to customers can happen anytime.
- **Key Roles at Program Level:**
    - **Release Train Engineer (RTE):** Acts as the "ScrumMaster" for the train. Drives continuous improvement and facilitates program-level processes.
    - **Product Management:** Prioritizes the **Program Backlog** (features) and owns the vision/roadmap (distinct from the team-level Product Owner).
    - **System Architect:** Helps define system-level stories and technical strategy.
    - **System Team:** A specialized team that builds environments and tools to integrate and evaluate the system early and often.
    - **Business Owner:** Senior management ultimately responsible for value delivery.

### Layer 3: The Portfolio Level

The top layer manages funding and coordination for the entire enterprise.

- **Key Responsibilities:**
    - **Funding:** Funds "value streams" (long-term programs) rather than temporary projects. Budgets are allocated to investment themes,.
    - **Coordination:** Manages larger initiatives known as **Epics** that span multiple Release Trains.
- **Backlog Management:** Uses a **Kanban** system to manage the flow of Epics through analysis and approval before they reach the development teams.


## Processes: Planning and Execution

### The Program Increment (PI) Lifecycle

The coordination of the Agile Release Train revolves around the Program Increment (PI), typically a fixed 8–12 week period.

1. **PI Planning:**
    - **Event:** A 2-day "all hands" planning session attended by everyone on the Release Train (potentially 100+ people).
    - **Objective:** Identify overall PI objectives and team-specific objectives.
    - **Commitment:** The teams hold a vote of confidence to commit to the plan.
2. **Execution (Sprinting):**
    - Teams execute standard 2-week sprints.
    - **Scrum of Scrums:** A meeting facilitated by the Release Train Engineer to coordinate dependencies between teams.
    - **System Demo:** At the end of every sprint, the integrated system is demonstrated to stakeholders.
3. **Innovation and Planning (IP) Sprint:**
    - **Purpose:** The final sprint in the PI cycle is reserved for innovation, exploration, and planning the _next_ PI.
    - **Buffer:** It also serves as a schedule buffer; if development overruns, this time can be used to catch up without delaying the release.
4. **Inspect and Adapt (I&A):**
    - A major workshop held at the end of the PI to reflect on the program's performance and identify systemic impediments.


## Key Concepts: SAFe Agile Architecture

SAFe rejects the idea of purely emergent design (where architecture evolves solely from team-level refactoring) for large-scale systems.

- **Architectural Runway:** Existing code, components, and technical infrastructure necessary to support the implementation of upcoming features without excessive delay.
- **Intentional Architecture:** SAFe argues that some up-front design is required at scale. Features that build the "architectural runway" must be implemented _just in time_ so that business features can land on it smoothly.
- **Non-functional Requirements (NFRs):** items like reliability and scalability are handled as constraints on the backlog or specific backlog items to ensure system quality.

## Questions

These questions relate to the SAFe model and the general challenges of applying Agile to large-scale systems.

SAFe Framework:
- Describe Scaled Agile Framework (SAFe).
- How does the SAFe process model ensure alignment, collaboration, and delivery across multiple teams? Explain.

Scaling Agile (General):
- Discuss in detail Agile project Management for developing Large software systems.
- Explain how Agile methods can be used for large projects.
- Why it is difficult to introduce agile methods into large companies?

