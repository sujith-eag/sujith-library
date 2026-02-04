# Unit IV: Common Agile Practices

These practices are generic across most Agile frameworks and support the core values of the Agile Manifesto, focusing on interaction, working software, and responsiveness to change.

## 1. Short Feedback Loops

Agile relies on empirical processes (learning by doing). Feedback loops are the mechanism that enables the team to inspect and adapt. team inspect how and what they have done, and use this feedback to improve their process and products

- **The Cycle:** The team does something $\rightarrow$ measures the result $\rightarrow$ inspects the outcome $\rightarrow$ adapts the process/product based on feedback.
- **Speed:** Feedback must be fast. Long delays between doing work and getting feedback increase the risk of building the wrong thing.

- **Events:** Daily Stand-ups, Show and Tells, and Retrospectives are all formal feedback loops.
- **Technical:** Pair programming and Unit testing provide immediate feedback on code quality.

## 2. Face-to-Face Communication

The most efficient and effective method of conveying information to and within a development team.

- **Richness:** Face-to-face communication allows for non-verbal cues (body language, tone), which solidifies relationships and creates trust.
- **Osmotic Communication:** Information flows into the background hearing of team members sitting in the same room. Someone might overhear a conversation and interject with valuable information (e.g., "I already fixed that bug").
- **Tacit Knowledge:** Knowledge that is difficult to write down (codify) is best transferred through direct interaction.

At the individual level, tacit knowledge is closely related to the concept of accumulative knowledge, based on a plethora of real-life events. It is knowledge that is derived from the stock of learning activities and is expressed in public through skills. At the group level, team knowledge is based on common experiences.

Agile teams tend to consist of between 3 (to enable team dynamics) and 11 members (to restrict communication channels to a manageable size face-to-face).

### Challenges & Mitigation

- **Distributed Teams:** When teams cannot be co-located, they should use video conferencing for rituals (stand-ups, retrospectives) and instant messaging tools to replicate spontaneous interaction.

There are two main types of non-physically located teams:

Multisite team This refers to one product group that is split up across various locations into smaller teams.

Distributed team This means that individual team members are located at different sites.

### Five centrifugal forces of distributed teams

Force 1: Communication breakdown
Force 2: Coordination breakdown
Force 3: Loss of communication richness
Force 4: Loss of team bonding
Force 5: Cultural differences

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

A meeting held at the end of an iteration/sprint for live demonstration of the completed stories, working software to stakeholders and get immediate feedback and also provides recognition for the team's hard work.
* Feedback is captured and fed into the backlog for future prioritization of work.
* All available stakeholders and all team members should attend.
* It identifies stories that were planned but not completed within the sprint, and to agree a date when they will be achieved.
* Teams should avoid presenting stories that are only nearly complete, as this can give stakeholders the false impression that stories are more advanced in their development than they truly are.

## 5. Retrospectives

A workshop held at the end of an iteration where the team reflects on _how_ they worked, rather than _what_ they built. To capture lessons learnt/learning outcomes. A meeting dedicated to the principle of "At regular intervals, the team reflects on how to become more effective" (Agile Principle 12).
- **Kaizen:** The philosophy of continuous improvement.

The insights/lessons gathered in a retrospective can be of use to the existing project, business domain, technical domain and team, and the added-value knowledge can be applied in subsequent iterations/sprints. 

Retrospectives generate a number of action points, which should contribute to and improve : collaboration; productivity; quality; capability; capacity; team dynamics.

Lessons would be shared with the rest of the organization to be consider in future projects that exhibit common characteristics, (similar business requirements, technical domain, team structures, collaboration dynamics.)

### Process: The Retrospective Cycle

1. **Plan:** Define the objective of the session.
2. **Identify:**  risks, what went well and what didn't.
3. **Analyse:** issues, risks root causes.
4. **Agree Actions:** Decide on specific actions to improve in the next sprint.
5. **Perform:** Implement the improvements (inspect and adapt).

### Key Examples: Techniques

- **The Safety Check:** A voting system to ensure people feel safe sharing honest opinions without fear of retribution.
- **Five Whys:** A root-cause analysis technique asking "Why?" five times to get past symptoms to the real cause.
- **Fishbone Diagram:** Visualizing cause and effect relationships (e.g., People, Systems, Policies).

## 6. Emergent Documentation

Agile values "working software over comprehensive documentation," but this does not mean _no_ documentation.

Agile delivery focuses on producing only the relevant documentation in line with the emergence of the system. Documentation should only be produced if and when it adds value, and should always be fit for purpose, i.e. suitable for the audience.

- **Value-Driven:** Documentation should only be produced if it adds value and is fit for purpose.

- **Just-in-Time:** Do not define detailed design documentation up-front. Allow the design to emerge as the team learns, documenting as you go.

Typical types of IT systems documentation include:

**Design documentation :**
* Product has multiple teams working on it there is typically a need to ensure that all teams are working towards the same design pattern. In this case high-level foundation design principles may need to be documented. EDUF (enough design up front)

**Code as Documentation :** 
* Code should be written clearly enough (self-documenting, with clear comments) to render separate explanatory documents unnecessary.

test documentation;

business user documentation: 
* Business user documentation is there to aid users of a system to use the system effectively. Fit-for purpose

operational documentation :
* A system put into an environment that is controlled by a separate operational team, needs documentation to describe the system to a level that the support team can support it.

There are some occasions when it is necessary to produce documentation in advance of product development. A regulatory or commercial reason to produce a document or a specification for an interface that will enable an external team to develop something that will interact with the product that is being developed.


## 7. Visual Boards

A tool to make work and progress visible to the entire team and stakeholders.

**Information Radiator:** 
* A display (physical or virtual) openly visible and available for anyone to see the state of the project at a glance (stories/tasks, who is working on it).
- Key source of information for daily stand-up meetings, show and tells and retrospectives, shows what needs attention.
- They track stories/tasks across columns like "To Do," "In Progress," "Test," and "Done".

**Burn-down Chart:** 
A graph comparing "planned effort" left (work remaining) to complete a task against the "actual effort" left (time remaining).

On a daily basis each team member updates how much effort they actually have left against the tasks they are delivering, and the total of the latest estimated hours left is then plotted onto the chart each day. The two lines should be broadly following each other through the iteration/sprint.

Ideally, the line trends down to zero by the end of the sprint.

**RAID Log:** 
* A single repository for all **R**isks, **A**ssumptions, **I**ssues, and **D**ependencies which are key information about delivery, not expressed in the backlog or other docs

- **Rule:** Only the **Customer** can move a story to the "Complete/Done" column after verifying acceptance criteria.

## 8. Sustainable Pace

> A concept from eXtreme Programming (XP) regarding work-life balance and productivity.

Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.

Overtime is only effective over very short periods of time. Daily productivity starts falling off in the second week, and declines rapidly with every successive week as burnout sets in. Working overtime leads to fatigue, errors, and lower quality and motivation. 

"Becoming over-worked today steals development progress from the future".

## 9. Focus on Quality

Quality is not an afterthought; it is built into the process.

**Functional Quality:** Building the right product. 
* It is about delivering the features and functionality the customer wants. Customer collaboration and acceptance criteria ensures this.
* Acceptance criteria for each feature, review of stories throughout development and at the end of development, as well as into the definition of ‘done’

**Technical Quality:** Building the product right. 
* Avoiding **Technical Debt** (future cost of reworking poor code) and ensuring technical quality through practices like refactoring, CI, TDD.

## 10. Major Agile Technical Practices

Specific engineering practices used to ensure the technical quality mentioned above.

* Refactoring, 
* Continuous integration is about continuously ensuring that everything works together in an integrated way.
* Test Driven Development (TDD) is where test cases are written before the actual functionality is developed. Tests are written for each unit/component of code.

### A. Refactoring

Changing the internal structure of code (design) without changing its external behavior. Used to improve the architecture by removing technical debt, so it is easy to support and maintain.

> One way to implement refactoring is Test Driven Development. 
> When refactoring, it is important to have a suite of tests which should be executed before anything is refactored to ensure they are running correctly. After refactoring has been completed the tests should be run again to ensure there has been no adverse effect. 
> This ability is closely aligned with the concept of continuous integration.

### B. Continuous Integration (CI) and Automated testing

Agile deliveries implement continuous integration. Any change to a product will initiate full regression tests of the whole
product (i.e. tests to ensure that adding something has not caused the overall software environment to break). 

Provides a  shorter feedback loop for the software within the development life-cycle. This gives the team confidence that the system works in an integrated way in any environment.

If important testing is only performed at the end of a release or project, and if at that point a significant problem is found nothing can be done about it without extending timescale and costs.

Developers integrate their code into a shared repository frequently (at least daily).
1. Developer checks in code.
2. Automated system builds the software.
3. Automated tests run.
4. If the build fails, the team stops to fix it immediately.

### C. Automated Builds

Build automation is the creation of scripts that automatically
perform developer tasks such as:
* compiling code; running tests; performing code analysis;
* assembling code components into features (also known as ‘build’); deploying to environments;
* creating system documentation.

### D. Code/Peer Review

Humans are better than machines at checking that code is well written, designed and maintainable.

Two common Agile approaches are :
* Preer Review: Developer submits completed code for systematic review by peers before committing the code. To find mistakes (quality control) and to share knowledge across the team. 
* Reviews are performed with people of a similar level of experience to the person that created the product to be reviewed. 

* Pair Programming (two developers, one workstation) is a real-time form of peer review.

## Questions

### 5. Common Agile Practices (Retrospectives, Visual Boards, Communication)

These questions address the ceremonies and artifacts used to maintain the Agile process and continuous improvement.

*   Illustrate with a diagram a typical retrospective cycle, from the delivery of an iteration/sprint through to the Agile retrospective process.
*   Discuss the major Agile techniques used during project execution, including backlog refinement, estimation, planning, and testing. *(Note: This is a broad summary question covering multiple practices).*

### 6. Focus on Quality and Major Agile Technical Practices

These questions relate to "Focus on Quality" and "Major Agile Technical Practices" (often drawn from XP but applied generically).

*   What is Agile Design? How did the Agile developers know what to do? How to keep the design as good as possible? Justify your answer.
*   List and explain the seven Symptoms of Poor Design.
*   Describe/Illustrate the different Principles of Agile Design.
*   Explain the advantages of pair programming in detail.

