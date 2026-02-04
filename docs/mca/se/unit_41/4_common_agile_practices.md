# Common Agile Practices

These practices are generic across most Agile frameworks and support the core values of the Agile Manifesto, focusing on interaction, working software, and responsiveness to change.

## 1. Short Feedback Loops

Agile relies on empirical processes (learning by doing). Feedback loops enable the team to inspect and adapt: the team inspects how and what they have done, using feedback to improve processes and products.

- **The Cycle**: Do something → Measure result → Inspect outcome → Adapt based on feedback.
- **Speed**: Feedback must be fast; delays increase risk of building the wrong thing.
- **Events**: Daily Stand-ups, Show and Tells, Retrospectives provide formal feedback.
- **Technical**: Pair programming and unit testing offer immediate code quality feedback.

## 2. Face-to-Face Communication

The most efficient method for conveying information within a development team.

- **Richness**: Allows non-verbal cues (body language, tone) to build relationships and trust.
- **Osmotic Communication**: Information flows through overhearing; e.g., someone interjects with relevant info like "I already fixed that bug."
- **Tacit Knowledge**: Hard-to-codify knowledge transfers best through direct interaction. At individual level, it's accumulative from experiences; at group level, from shared events.

Agile teams typically have 3-11 members to enable dynamics while keeping communication manageable.

### Challenges & Mitigation

- **Distributed Teams**: Use video conferencing for rituals and instant messaging for spontaneous interaction.

Types of Distributed Teams:
- **Co-located Team**: All members at the same site.

- **Multisite Team**: One product group split across locations into smaller teams.
- **Distributed Team**: Individual members at different sites.

### Five Centrifugal Forces of Distributed Teams

1. Communication breakdown
2. Coordination breakdown
3. Loss of communication richness
4. Loss of team bonding
5. Cultural differences

## 3. Daily Stand-ups

A daily synchronization meeting for the team to inspect progress and plan the day's work.

- **Daily Stand-up (Daily Scrum):** A strictly time-boxed meeting (usually 15 minutes) where attendees stand up to keep it short. It is **not** a status report to management. It is for the team to synchronize with each other and identify impediments.

If an issue arises that requires more discussion, then it should be discussed by the affected team members in a separate meeting, which should be held immediately afterwards.

- **Walking the Board:** An alternative format where the team reviews tasks on the visual board from right (nearest to completion) to left, focusing on finishing work before starting new work.

### Processes: The Three Questions

Each team member answers:

1. **What did I do yesterday** that helped the team meet the iteration goal?
2. **What will I do today** to help the team meet the iteration goal?
3. **Do I see any impediment** (blocker) preventing me or the team from meeting the goal?

## 4. Show and Tells

A meeting at the end of an iteration/sprint for live demonstration of completed stories to stakeholders, gathering feedback, and recognizing team effort.

- **Purpose**: Demonstrate working software, capture feedback for future backlog prioritization, and provide team recognition for completed work.
- **Attendance**: All available stakeholders and team members should attend.
- **Content**: Identifies completed stories and agrees on dates for unfinished ones for when they will be completed.
- Avoid presenting nearly complete stories to prevent false impressions of progress given that the definition of "done" is not met.

## 5. Retrospectives

A workshop held at the end of an iteration where the team reflects on _how_ they worked, rather than _what_ they built, to capture lessons learned. It is a meeting dedicated to the principle of "At regular intervals, the team reflects on how to become more effective" (Agile Principle 12).

- **Kaizen:** The philosophy of continuous improvement.

### Benefits and Application of Insights

The insights and lessons gathered in a retrospective can be applied to:
- The existing project
- Business domain
- Technical domain
- Team dynamics

This added-value knowledge can be applied in subsequent iterations or sprints.

Retrospectives generate action points that contribute to improving:
- Collaboration
- Productivity
- Quality
- Capability
- Capacity
- Team dynamics

Lessons are shared with the rest of the organization to be considered in future projects that exhibit common characteristics, such as similar business requirements, technical domains, team structures, or collaboration dynamics.

### Process: The Retrospective Cycle

1. **Plan:** Define the objective of the session.
2. **Identify:** Risks, what went well, and what didn't.
3. **Analyse:** Issues and root causes of risks.
4. **Agree Actions:** Decide on specific actions to improve in the next sprint.
5. **Perform:** Implement the improvements (inspect and adapt).

### Key Examples: Techniques

- **The Safety Check:** A voting system to ensure people feel safe sharing honest opinions without fear of retribution.
- **Five Whys:** A root-cause analysis technique asking "Why?" five times to get past symptoms to the real cause.
- **Fishbone Diagram:** Visualizing cause and effect relationships (e.g., People, Systems, Policies).

## 6. Emergent Documentation

Agile values "working software over comprehensive documentation," but this does not mean _no_ documentation.

Agile delivery focuses on producing only the relevant documentation in line with the emergence of the system. Documentation should only be produced if and when it adds value, and should always be fit for purpose, i.e., suitable for the audience.

- **Value-Driven:** Documentation should only be produced if it adds value and is fit for purpose.
- **Just-in-Time:** Do not define detailed design documentation up-front. Allow the design to emerge as the team learns, documenting as you go.

### Types of IT Systems Documentation

Typical types of IT systems documentation include:

- **Design Documentation:** For products with multiple teams, there is typically a need to ensure all teams work towards the same design pattern. In this case, high-level foundation design principles may need to be documented (EDUF - Enough Design Up Front).
- **Code as Documentation:** Code should be written clearly enough (self-documenting, with clear comments) to render separate explanatory documents unnecessary.
- **Test Documentation:** Documentation related to testing processes and results.
- **Business User Documentation:** Documentation to aid users of a system in using it effectively; fit-for-purpose.
- **Operational Documentation:** For systems put into an environment controlled by a separate operational team, documentation is needed to describe the system to a level that the support team can support it.

### Exceptions to Emergent Documentation

There are some occasions when it is necessary to produce documentation in advance of product development, such as:
- Regulatory reasons requiring a document or specification.
- Commercial reasons, e.g., a specification for an interface that enables an external team to develop something that interacts with the product.


## 7. Visual Boards

A tool to make work and progress visible to the entire team and stakeholders.

### Information Radiator
- A display (physical or virtual) openly visible and available for anyone to see the state of the project at a glance (stories/tasks, who is working on it).
- Key source of information for daily stand-up meetings, Show and Tells, and retrospectives; shows what needs attention.
- Tracks stories/tasks across columns like "To Do," "In Progress," "Test," and "Done."

### Burn-down Chart
A graph comparing "planned effort" left (work remaining) to complete a task against the "actual effort" left (time remaining).

- On a daily basis, each team member updates how much effort they actually have left against the tasks they are delivering, and the total of the latest estimated hours left is plotted onto the chart each day.
- The two lines should broadly follow each other through the iteration/sprint.
- Ideally, the line trends down to zero by the end of the sprint.

### RAID Log
- A single repository for all **R**isks, **A**ssumptions, **I**ssues, and **D**ependencies, which are key information about delivery not expressed in the backlog or other documents.

**Rule:** Only the **Customer** can move a story to the "Complete/Done" column after verifying acceptance criteria.

## 8. Sustainable Pace

> A concept from eXtreme Programming (XP) regarding work-life balance and productivity.

Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.

### Rationale for Avoiding Overtime
Overtime is only effective over very short periods of time. Prolonged overtime leads to:
- Fatigue
- Errors
- Lower quality
- Reduced motivation
- Burnout, with productivity declining rapidly after the second week

> "Becoming over-worked today steals development progress from the future".

## 9. Focus on Quality

Quality is not an afterthought; it is built into the process.

### Functional Quality: Building the Right Product
- Delivering the features and functionality the customer wants.
- Ensured through customer collaboration and acceptance criteria.
- Includes acceptance criteria for each feature, review of stories throughout development, and at the end of development, as well as adherence to the definition of 'done'.

### Technical Quality: Building the Product Right
- Avoiding **Technical Debt** (future cost of reworking poor code).
- Ensuring technical quality through practices like refactoring, Continuous Integration (CI), and Test-Driven Development (TDD).

## 10. Major Agile Technical Practices

Specific engineering practices used to ensure the technical quality mentioned above.

- **Refactoring:** Changing the internal structure of code (design) without changing its external behavior to improve architecture and remove technical debt.
- **Continuous Integration (CI):** Continuously ensuring that all parts of the software work together in an integrated way through automated testing.
- **Test-Driven Development (TDD):** Writing test cases before developing the actual functionality, with tests written for each unit or component of code.

### A. Refactoring

Changing the internal structure of code (design) without changing its external behavior. Used to improve the architecture by removing technical debt, so it is easy to support and maintain.

> One way to implement refactoring is Test Driven Development. 
> When refactoring, it is important to have a suite of tests which should be executed before anything is refactored to ensure they are running correctly. After refactoring has been completed the tests should be run again to ensure there has been no adverse effect. 
> This ability is closely aligned with the concept of continuous integration.

### B. Continuous Integration (CI) and Automated Testing

Agile deliveries implement continuous integration. Any change to a product will initiate full regression tests of the whole product (i.e., tests to ensure that adding something has not caused the overall software environment to break). 

This provides a shorter feedback loop within the development life-cycle, giving the team confidence that the system works in an integrated way in any environment.

If important testing is only performed at the end of a release or project, and if at that point a significant problem is found, nothing can be done about it without extending timescales and costs.

Developers integrate their code into a shared repository frequently (at least daily):
1. Developer checks in code.
2. Automated system builds the software.
3. Automated tests run.
4. If the build fails, the team stops to fix it immediately.

### C. Automated Builds

Build automation is the creation of scripts that automatically perform developer tasks such as:
- Compiling code
- Running tests
- Performing code analysis
- Assembling code components into features (also known as 'build')
- Deploying to environments
- Creating system documentation

### D. Code/Peer Review

Humans are better than machines at checking that code is well written, designed, and maintainable.

Two common Agile approaches are:
- **Peer Review:** Developer submits completed code for systematic review by peers before committing the code. This helps find mistakes (quality control) and share knowledge across the team. Reviews are performed with people of a similar level of experience to the person who created the product.
- **Pair Programming:** Two developers working on one workstation; a real-time form of peer review.

## Questions

### Common Agile Practices (Retrospectives, Visual Boards, Communication)

These questions address the ceremonies and artifacts used to maintain the Agile process and continuous improvement.

- Illustrate with a diagram a typical retrospective cycle, from the delivery of an iteration/sprint through to the Agile retrospective process.
- Discuss the major Agile techniques used during project execution, including backlog refinement, estimation, planning, and testing. *(Note: This is a broad summary question covering multiple practices).*

### Focus on Quality and Major Agile Technical Practices

These questions relate to "Focus on Quality" and "Major Agile Technical Practices" (often drawn from XP but applied generically).

- What is Agile Design? How did the Agile developers know what to do? How to keep the design as good as possible? Justify your answer.
- List and explain the seven Symptoms of Poor Design.
- Describe/Illustrate the different Principles of Agile Design.
- Explain the advantages of pair programming in detail.

