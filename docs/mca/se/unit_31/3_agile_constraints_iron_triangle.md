# Unit III: Agile Methodologies - Introduction (Part 3)

## 1. The 'Iron Triangle'

The 'Iron Triangle' is a model used to demonstrate the constraints of project management and how changing one constraint inevitably affects the others.

- **Features** (Requirements/Scope), **Time**, and **Cost**. Ideally, **Technical Quality** is treated as a fourth constraint or context.

- **Time-boxing:** The practice of fixing a specific period of time (e.g., a sprint or release) within which delivery must be made. Functionality varies, but the end date does not.

### Core Concepts: Two Approaches

The fundamental difference between traditional (Waterfall) and Agile methods is which points of the triangle are fixed and which are allowed to vary.

#### A. The Waterfall Implementation (Traditional)

- Features / Requirements are fixed Constraints
- **Time** and **Cost**. also quality are Variable Constraints.

All features are defined and fixed up-front in a specification. The project plan is built to deliver these fixed features.
- **The Problem:** If the customer changes their mind or analysis was wrong, expensive change control is needed. Because features are fixed, **Time** and **Cost** usually expand to accommodate changes.
- **Risk:** If the deadline is fixed _and_ features are fixed, usually **Quality** is sacrificed (cut corners) or more people are added (increasing complexity and cost).

> Adding manpower to a late software project just makes it even later.

Significant risk of using a Waterfall approach in a dynamic environment is the possible effect on quality. If the features change, quality might be squeezed or even ignored in an attempt to meet the all-important delivery date.

#### B. The Agile Implementation

- **Time** and **Cost** (and Quality) are fixed constraints.
- **Features** (Scope) is variable constraints.

The triangle is "turned on its head". Resources (Cost) and Deadlines (Time) are often fixed constraints in business.
- Agile accepts this by fixing Time and Cost but allowing the **Features** to evolve.
- The team delivers the highest priority features that can fit within the fixed time and cost constraints.

Rather than creating detailed feature specifications and delivery plans up front, Agile fixes the time, as well as cost and quality, which enables the features to be reviewed and evolved to stay in line with the dynamic needs of contemporary businesses.

### Time Boxing

Time-boxing divides the delivery of increments of the product into short, manageable time periods (called sprints or iterations) of days or weeks, and varies, based on priority, the functionality to be delivered within these time-boxes. 
* While quality can still be changed, the focus is always on understanding the risk of adding technical debt by changing the quality.

A project is a time-box, a release is a shorter time-box, and an iteration/sprint is an even shorter time-box, and all of these can be controlled effectively by Agile.
* Goals related to project and release time-boxes are baselines, which can be changed.
* Goals related to the iteration/sprint time-box is a commitment.

> [!NOTE] Time-boxing in Practice
> Instead of asking "How long will it take to deliver all these features?", Agile asks 
> "How much value can we deliver in this fixed time period (e.g., 2 weeks)?".

Set-up normally requires a couple of weeks in which a high-level understanding of the vision of the project is achieved, together with a high-level prototype and a high-level technical architecture. These need to be short enough to be accurate and simple enough to be changed effectively and without huge overspend.

## 2. Working with Uncertainty and Volatility

Agile acknowledges that in knowledge-based work (like software development), we know very little at the start. Precision in estimates is impossible early on due to high uncertainty.

- **Cone of Uncertainty:** A model (by Barry Boehm) illustrating that early in a project, estimates have a high degree of error (uncertainty). As the project progresses and knowledge increases, the variance in estimates decreases (the cone narrows).

### Core Concepts

- **Knowledge Acquisition:**
    - **Traditional view:** Believes that doing significant analysis and design up-front creates deep knowledge.
    - **Agile view:** Believes accurate knowledge is only acquired by **interacting with a tangible product**,.
- **Handling Volatility:**
    - Early estimates are often provided as a range (e.g., "3 to 5 months") because specific requirements are unknown.
    - As the team builds the product, stakeholders experience it, requirements are clarified, and estimates become more accurate (moving to the narrow end of the Cone).


## 3. Empirical and Defined Processes

This section explains the scientific theory behind why Agile works in complex environments.

### Defined Process: 

A process where every step is predefined and produces the same result every time (e.g., an assembly line). Suitable for low-variability environments.

Define exactly what is required (requirements and analysis),
Design exactly what is required (design), 
Build it (build), 
Test it works and meets requirements (test), and then 
make it operational.

### Empirical Process: 

A process based on observation and experimentation. It is used when the environment is complex and variable. It relies on learning from experience rather than following a rigid plan.

Empirical processes incorporate repeated inspection and adaptation of a product to ensure the right product is delivered in the right way.

### Core Concepts: The Three Pillars of Empirical Process

Agile is an empirical process. It relies on three pillars to manage complexity:

1. **Transparency:** Everyone involved must be able to see what is happening. The process and the product state must be visible to those responsible for the outcome.

2. **Inspection:** Users and the team frequently inspect the product artifacts and progress toward the goal to detect undesirable variances.

3. **Adaptation:** If an inspection reveals a problem, the process or the material being processed must be adjusted (adapted) immediately to minimize further deviation.

### Processes: The Learning Cycle

Agile frameworks implement empirical loops (feedback loops) to drive the project. Common models include:

- **Plan-Do-Check-Act (PDCA):** By Edward Deming.
- **Build-Measure-Learn (BML):** From Lean Startup.
- **Inspect and Adapt:** The core rhythm of Scrum (e.g., Retrospectives).

**Everyday Empirical Process:** 
* Learning to ride a bike is empirical. You cannot write a "defined plan" for balancing. You try (Do), you wobble (Inspect), and you correct your balance (Adapt) until you succeed.

**Agile Application:** A team runs a 2-week sprint (Do), reviews the software with the product owner (Inspect), and changes the plan for the next sprint based on feedback (Adapt).

## Questions

### 6. The 'Iron Triangle' (Constraints)

*   Explain the concept of the 'Iron Triangle' in Agile and how it contrasts with its interpretation in traditional project management.

### 7. Working with Uncertainty and Volatility

*   Elaborate on Boehm’s Cone of Uncertainty in Agile Development.
*   Explain why the rapid delivery and deployment of new system is often more important to business than detailed functionality of these system.

