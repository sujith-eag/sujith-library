# Unit V: Major Agile Frameworks

## Dynamic Systems Development Method (DSDM)

DSDM is an Agile project management and delivery framework. Unlike some other frameworks that focus solely on product delivery, DSDM provides the governance necessary to run an effective Agile project.

### Philosophy and Eight Principles

The DSDM philosophy states that "best business value emerges when projects are aligned to clear business goals, deliver frequently and involve the collaboration of motivated and empowered people".

This philosophy is supported by **eight guiding principles**:

1. **Focus on the business need:** Deliver what the business wants when they need it.
2. **Deliver on time:** By using time-boxing and MSCW prioritization, the team ensures delivery happens on time.
3. **Collaborate:** Teams that collaborate outperform those that do not. This increases understanding and shared ownership.
4. **Never compromise on quality:** Aim to deliver the agreed level of quality from start to finish.
5. **Build incrementally from firm foundations:** Do "Enough Design Up Front" (EDUF) rather than "No Design Up Front" or "Big Design Up Front" to ensure value is delivered early.
6. **Develop iteratively:** Use a cycle of "Thought, Action and Conversation" to converge on the best solution.
7. **Communicate continuously and clearly:** Poor communication causes failure; DSDM emphasizes practices to support effective communication.
8. **Demonstrate control:** The whole team is involved in planning, and progress is measured by the delivery of products rather than completed activities.

### DSDM Roles

DSDM provides a fuller set of roles than other Agile frameworks, to reflect the additional complexity of a project environment. 

DSDM defines a comprehensive set of roles grouped into three levels.

project level, solution development team level and supporting level. A person can take more than one role, and a role can be covered by more than one person.

**A. Project Level Roles**

- **Business Sponsor:** The person funding the project.
- **Business Visionary:** Provides the "big picture" and strategic direction. This role should be held by a single person to avoid confusion.
- **Project Manager:** Coordinates high-level management but leaves detailed planning to the solution development team.
- **Technical Coordinator:** The technical authority ensuring consistency and quality of the technical solution.

**B. Solution Development Team Roles**

- **Business Ambassador:** The main day-to-day decision-maker for the business duting iterative development. They must have sufficient seniority and credibility to make decisions on behalf of the business.
- **Business Analyst:** is both active in supporting the project-level roles and fully integrated with the solution development team. Facilitates the relationship between business and technical roles.
- **Team Leader:** A servant-leader who removes impediments and fosters self-organization.
- **Solution Developer:** Interprets business requirements and translates them into the solution that meets the functional and non-functional needs.
- **Solution Tester:** Performs testing throughout the project in accordance with agreed strategy for technical testing.

**C. Supporting Roles**

- **Technical Advisor & Business Advisor:** Provide specific/specialist input to project when needed.
- **Workshop Facilitator:** Manages the workshop process to help participants achieve their objectives.
- **DSDM Coach:** Helps teams with limited experience get the most out of the framework.

### The DSDM Process

The DSDM process consists of sequential and iterative phases,:

1. **Pre-project:** A short phase where the idea is formed (e.g., terms of reference).
2. **Feasibility:** Creates outline requirements and a high-level solution to determine if the project is feasible.
3. **Foundations:** Adds enough detail to requirements and plans to establish firm foundations for development.
4. **Evolutionary Development:** The team evolves the solution within time-boxes using iterative development and prioritization, together with modelling and facilitated workshops, to converge on an accurate solution that meets the business need and is also built in the right way from a technical viewpoint.
5. **Deployment:** Releasing an increment of the solution into operational use.
6. **Post-project:** Assessing whether the expected benefits have been delivered (usually 3–6 months after deployment).


The five practices that ensure project success in DSDM are:
1. **Timeboxing:** Fixed time periods for development activities to ensure timely delivery.
2. **MoSCoW Prioritization:** Prioritizing requirements into Must have, Should have, Could have, and Won't have.
3. **Iterative Development:** Developing the solution in small increments to allow for feedback and adjustments.
4. **Facilitated Workshops:** Engaging stakeholders in workshops to gather requirements and make decisions.
5. **Modelling:** Using models to visualize and understand the solution.


## Agile Project Management (AgilePM)

**AgilePM** is a framework based on the current version of DSDM. It views DSDM from the perspective of a project manager.

### Core Concepts

- **Facilitative Management:** AgilePM focuses on the mindset and behaviors needed to support self-organizing teams, moving away from "command and control".

- **Project Wrapper:** AgilePM can be used as a "project wrapper" around other Agile approaches. For example, a team might use Scrum for delivery while AgilePM provides the overarching project governance structure.


## Kanban

Kanban is an approach to continuously improving service delivery by emphasizing a smooth, fast flow of work. It is not a software development method (like XP) but a method for improving service delivery agility.

Kanban does not prescribe specific roles or process steps as it is built on the concept of evolutionary change. Start by understanding how the current software delivery system works. When the current flow of work is visualised and measured, improve it one step at a time. Continue to do this forever.

### Core Concepts: Six Core Practices

1. **Visualise the work:** Use a board (e.g., Post-it notes) to see the flow of work from idea to release. This makes the invisible work of software delivery visible.

2. **Limit Work-In-Progress (WIP):** Limit the number of items being worked on at one time. This creates a "pull system" where new work is only started when capacity becomes available. (Kanban teams are interested in tracking the flow of value and not the effort expended). Lowering WIP reduces coordination costs, multi-tasking and increases focus. 

3. **Make policies explicit:** Define clear rules (e.g., "Definition of Done") so the team understands how work should be handled.

4. **Measure and manage flow:** Transitions between process steps in the workflow are monitored and measured. Use metrics like "Lead Time" (time from request to delivery) to analyze and improve the system. 

5. **Implement feedback loops:** at all levels to facilitate learning about the process and about the effect of any changes that have been made to it. Use reviews (like the Operations Review) to compare performance against strategy.

6. **Improve collaboratively, evolve experimentally:** Create a culture of continuous improvement (Kaizen).

### Kanban Models

Kanban uses various models to identify beneficial changes:

- **Theory of Profound Knowledge (PDCA):** Plan-Do-Check-Act.

- **Real Option Theory:** Treating decisions as options to be exercised at the optimal time.

- **Theory of Constraints:** Identifying bottlenecks in the flow.

### Difference Between Scrum and Kanban

While they can be combined ("Scrumban"), they function differently:

|Feature|Scrum|Kanban|
|:--|:--|:--|
|**Cadence**|Time-boxed sprints (e.g., 2 weeks).|Continuous flow (no fixed time-boxes).|
|**Release**|At the end of each sprint (if approved).|Continuous delivery (release at will).|
|**Roles**|Prescribed roles (Product Owner, ScrumMaster, Team).|No prescribed roles.|
|**Metrics**|Velocity (points per sprint).|Lead time and Cycle time.|
|**Change**|No changes allowed during the sprint.|Change allowed anytime (if capacity allows).|
|**Estimation**|Required (e.g., Story Points).|Optional (often not used).|
|**Reset**|WIP is reset at every sprint boundary.|WIP is persistent; the flow continues.|


Kanban : An approach to improving service delivery using evolutionary change, visualizing work, limiting WIP, and managing flow for continuous improvement.

Scrum : An approach to complex product delivery using time-boxed sprints, prescribed roles, and iterative development for frequent delivery of value.

Kanban : Evolutionary. Start with what already exists and iteratively improve. Respect what is (current roles, responsibilities, and processes).

Scrum : Revolutionary. Implement a new way of working with defined roles, events, and artifacts.


## Questions

### Dynamic Systems Development Method (DSDM)

These questions focus on the DSDM framework, its process, and ensuring project success.

Framework and Process:
*   Explain in details of Dynamic system development method (DSDM).
*   Illustrate the Dynamic System Development Method (DSDM) framework with appropriate diagrams.
*   Describe the dynamic system development method in brief.
*   Elucidate DSDM process with a neat diagram. How does DSDM practices ensure project success? Explain.
*   Describe the DSDM (Dynamic System Development Method) process.

### Kanban

These questions cover the Kanban model, its principles, and how it differs from Scrum.

Process and Principles:
*   Illustrate the Kanban Process with help of a neat diagram.
*   Discuss/Elucidate the core principles and practices of Kanban.
Comparison:
*   Classify between Kanban and Scrum process. List and discuss the core practices of Kanban process.
