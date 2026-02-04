# Unit IV: Common Agile Techniques

This section covers the practical methods Agile teams use to define requirements, estimate effort, plan work, and ensure quality.

## 1. Stories and Backlog Refinement

In Agile, requirements are not detailed specifications written up-front. They are "tokens" or placeholders for future conversations.

Stories will continue to evolve from inception of the product
through to decommissioning the backlog. 

Stories should be refined on a ‘just-in-time’ basis for the next sprint (this idea aligns to a concept in Lean called ‘last responsible moment’

YAGNI stands for ‘You Ain’t Gonna Need It’ and can be applied when deciding whether stories should be added to the backlog. 
For example, if the product is only going to be live for a short period of time, then the technical quality of the product may not need to be particularly robust.

- **User Story:** A requirement or feature expressed from the user's perspective. It is a reminder that a feature needs to be delivered, not a detailed specification.

- **Agile Persona:** A fictional character representing a specific user group (e.g., "Mike, the Business Development Manager") used to give context to stories.

- **Backlog:** An ordered "to-do" list of stories. It evolves continuously from product inception to decommissioning.

- **Spike Story:** A specific story created to drive technical or functional research or investigation when there is not enough information to estimate or implement a feature.

### Core Concepts

- **The 3 Cs:** A story consists of the **Card** (physical/virtual token), **Conversation** (discussion between team and customer), and **Confirmation** (acceptance criteria).

- **Just-in-Time Refinement:** Stories are refined from "coarse-grained" (large/vague) to "fine-grained" (small/detailed) only when they are nearing development. Doing this too early is waste (Waterfall style).

- **Planning Pyramid:** A hierarchy of requirements often used in complex projects, breaking down from heavy **Epics** -> **Features** -> **Stories** -> **Tasks**.

A planning pyramid contains both coarse-grained and fine-grained stories; the coarse-grained stories are being refined to be fine-grained stories as delivery progresses.

### Key Example: Standard Story Format

A standard syntax helps stakeholders focus on value:

- **Who:** As a... _<Role/Persona>_
- **What:** I want... _<Feature/Requirement>_
- **Why:** So that... _<Benefit/Value>_

> "As a **Business Development Manager**, 
> I want **to identify people who registered in the last 3 months**, 
> So that **I can send focused marketing material**."

ACCEPTANCE CRITERIA. This is normally a list of questions, scenarios or examples that enable the customer to sign off the story as ‘done’

> Acceptance criteria
> Can I identify all people who have registered or re-registered in the last 3 months from today’s date?
> 
> Can I identify basic demographics (name, age, email address) relating to those people?
> 
> Is it clear what the core preferences, via site usage, of those people are?
> 
> Do I know how many times these people have logged on in the last 3 months?
> 
> Do I know how much those people have spent with us each month?
> 
> Do I know what products these people have ordered each month?
> 
> Am I prevented from seeing people who registered or re-registered outside the 3 month timeline? (this is an example of a ‘negative’ acceptance criteria written as a ‘positive’ question).

Stories can be of any size, and they tend to be refined as the product is developed, down from very large size (known as ‘coarse-grained stories’), which could be months of effort in size to very small (known as ‘fine-grained stories’), which are typically 1–5 days’ effort in size.

### Processes: The INVEST Model

To check if a story is well-formed, use the acronym **INVEST**:

1. **I - Independent:** Can be delivered separately from other stories. Feasible at coarse grained level. 

2. **N - Negotiable:** It is not a fixed contract or detailed specification; details are open to discussion, refined over time up until planned within a sprint.

3. **V - Valuable:** Must provide value to the customer. A common, non-jargon-laden language for all stories is fundamentally important. So the value of a story is understood by the customer, can be ordered within the backlog.  

4. **E - Estimable:** The team must understand it enough to guess the effort. The story is the unit against which plans and estimates are created, a solid understanding will allow to create realistic and achievable estimates.

5. **S - Small enough:** Should fit within an iteration (typically 1-5 days of effort). Not providing too much information too soon.

6. **T - Testable:** Must have testable acceptance criteria to prove it is "done". 

### Processes: Prioritisation (MSCW)

Prioritisation is key to all Agile frameworks because they all largely implement time-boxing. It organizes the backlog within a specific time-box (e.g., a release or sprint):

MSCW prioritisation is specifically designed for implementation within fixed time frames. If MSCW is implemented on a backlog without a time frame, it is very likely that a customer will define everything within the backlog as a ‘must have’.

**M - Must Have:**  Termed as the MVP (minimum viable product), or the MMFS (minimum marketable feature set). 
* These are the stories that must be delivered within a particular time-box. Not delivering these stories and still delivering the product means the solution is non-viable, illegal or pointless.
* Critical. Without this, the solution is illegal or non-viable.

**S - Should Have:** Important but not vital. Can be worked around.
* A story that is very important within a time-box, and that will cause significant problems to the customer if not delivered.
* Though the customer could still get value from the product if this feature is not in place.

**C - Could Have:** Desirable but less important.
- A story that is very important within a time-box and may cause some problems to the customer if not delivered. 
- However, the customer will still gain value from the product if a ‘could have’ feature is not in place.

- **W - Won't Have this time:** Agreed to be excluded for now.

## 2. Agile Estimation

Agile estimation is about forecasting how much can be delivered in a time period. It acknowledges uncertainty.

- **Ideal Days:** The amount of time a task would take if there were zero interruptions (no emails, meetings, or phone calls). Ideal days are what project management frameworks call ‘productive time’;

> [!NOTE]
> Many Agile teams tend to avoid estimates based on ideal days because once time is associated with coarse-grained stories, teams may add contingency and ‘Parkinson’s law’ (‘work expands to fit time available’

- **Story Points:** A relative measure of effort (not time) required to implement a story. It combines complexity, size, and uncertainty.

Benefits of Points:
- Points don't decay (a 5-point problem today is a 5-point problem next year).
- Points are independent of the developer's speed (a senior and junior dev agree it's a "large" problem, even if they implement it at different speeds).
- Removes emotional attachment to dates/deadlines.

- **Velocity:** The measure of a team's capacity (how many story points they can complete in a sprint).

### Process: Planning Poker

A consensus-based technique to estimate story points:

1. Each team member holds cards with numbers (usually Fibonacci: 1, 2, 3, 5, 8, 13, 20...).
2. Customer explains the story.
3. Team discusses briefly.
4. Everyone reveals their card simultaneously (to avoid anchoring/bias).
5. Outliers (highest and lowest estimates) explain their reasoning.
6. Repeat until consensus is reached.

Typical story-point sizes in planning poker are:
* The story is at ‘done’ status = 0
* Fine-grained sizings = ½ (xxs), 1 (xs), 2 (s), 3 (sm), 5 (m), 8 (ml), 13 (l).  The Fibonacci sequence 
* Coarse-grained sizings = 20 (xl), 40 (xxl), 100 (xxxl)

## 3. Agile Planning

Planning in Agile delivery is performed to enable change, not to rigidly follow a prediction. There are differing levels of plans in Agile frameworks, including portfolio, program, project, release and iteration/sprint plans.

### Top-Down Planning: 

Used for longer time frames (Releases). Based on experience/history. Quick and inexact.

Top-down plans (created by the team) are purposely quick and inexact and are especially suited to variable environments where things are likely to change.

Where variability is likely to be experienced it is highly risky to try and define a detailed plan, as there will be a significant overhead if it needs to be changed. 

Top-down planning is normally based on previous experience
or existing reliable data.

### Bottom-Up Planning: 

Used for short time frames (Sprints) where accurate estimate is needed. Based on detailed task breakdown. Accurate but time-consuming.

In bottom-up planning, teams typically know which stories are likely to be delivered in the iteration/sprint based on top-down planning. 

The team then identify what capacity they have to deliver these stories; this is normally expressed as ‘total available hours’ within an iteration/sprint. 

The team then plan all the tasks that are required to get the stories to ‘done’ status, and estimate the hours needed to deliver the planned tasks; this is normally expressed as ‘total required hours’ in this iteration/sprint.

The ‘total required hours’ are then compared against the ‘total available hours’. If the figures differ, the team remove tasks until the required hours match the available hours. This may mean removing, replacing, adding or splitting some stories from the original top-down forecast.

### Processes: Levels of Planning

A release backlog is a subset of the overall backlog that relates to the stories that are forecast to be ‘done’ in a particular release.

1. **Release Planning (Top-Down):** The team and customer create a **Release Backlog**. They use the team's average **Velocity** to forecast how many stories will fit into the release.

‘velocity’, is the average number of story points that a team have been able to deliver across the last 1 to 5 iterations/sprints.

2. **Sprint/Iteration Planning:** Performed in two parts at the start of a sprint.
    - **Part 1 (Top-Down):** The team selects stories from the backlog that they believe fit their velocity. They define a **Sprint Goal**.

    - **Part 2 (Bottom-Up):** The team breaks stories into specific **Tasks** (hours). They check if they actually have the available hours to commit to the work. If not, they remove stories.

## 4. Agile Testing

Testing is not a phase at the end; it is integrated early and continuously.

A core principle of Agile quality control is that testing (validation) is integrated throughout the entire lifecycle. All types of testing need to be implemented early and continuously and should never be left to the end of a release period, as significant defects found at that point can seriously derail delivery or quality of the product.

- **TDD (Test Driven Development):** Writing the test _before_ writing the code.
- **BDD (Behaviour Driven Development):** Writing tests based on system behaviour (scenarios) rather than code mechanics.
- **Agile Testing Quadrants:** A taxonomy of testing types.

### Core Concepts: The Testing Quadrants

1. **Q1 (Technology-facing / Support Programming(guiding development)):** Unit tests, Component tests. Automated.
2. **Q2 (Business-facing / Support Programming((guiding development)):** Functional tests, Story tests, Prototypes, Simulations, examples. Automated/Manual.
3. **Q3 (Business-facing / Critique Product):** Exploratory testing, Scenarios, Usability, UAT, Alpha/Beta. Manual.
4. **Q4 (Technology-facing / Critique Product):** Performance & Load, Scaleability, Security testing. Tools.

### Process: TDD Cycle (Red-Green-Refactor)

Test Driven Development is normally implemented at the unit or component testing level.

TDD validates that what has been built passes the tests and therefore meets the acceptance criteria upon which the tests are based, and that the design is appropriate with minimal technical debt. The TDD development cycle (sometimes known as ‘red-green-refactor’)

1. **Red:** Write a small test for a new function. Run it. It fails (because the code doesn't exist yet).

2. **Green:** Write just enough code to make the test pass.

3. **Refactor:** Clean up the code (improve design) without changing behavior. _Benefits:_ Creates self-documenting code and ensures 100% test coverage.

The focus is on the interface of the code.
The unit test documents the expected behavior of the code.
The unit test is repeatable and can be automated.

In TDD, the team focuses on conditions in the test that could cause the code to fail. Once there are no more failure conditions, the development is said to be complete.

#### ATDD (Acceptance Test Driven Development)

Acceptance Test Driven Development is very similar to TDD,
although it is closer to user acceptance testing (UAT). While it is an effective approach to testing, many organisations prefer to use behaviour-driven development

### Process: BDD Format

Behaviour Driven Development (North, 2006) focuses on scenario testing to make sure that the system behaves in the way the user expects it to behave.

BDD uses a natural language syntax (Given/When/Then) to define acceptance criteria:

- **Given:** Initial context (e.g., "The customer has a balance of $0").
- **When:** Event (e.g., "The customer tries to withdraw $10").
- **Then:** Outcome (e.g., "The system rejects the card").

#### Scenario-based acceptance criteria

story could be written from the perspective of an Agile persona, including a number of acceptance criteria. This
style of writing acceptance criteria is normally associated with an Agile practice called ‘Test Driven Development’

‘BDD’(Behaviour Driven Development – see Section 7.4) to complement TDD.
Behaviour Driven Development is concerned with the behaviour of the system, which means that the acceptance criteria in BDD are usually expressed as scenarios.

BDD is generally implemented on coarse-grained stories more suited to scenario-based acceptance criteria, while TDD is implemented on fine-grained stories where a question-driven approach is more suitable.

```
As a – generic bank customer
I want – the ability to withdraw cash from an ATM
So that – I don’t have to visit the branch continually to draw money
Acceptance criteria:
Scenario One: the bank account is in credit
Given
– the customer requires to draw cash from the ATM
When
– the customer enters their card to the machine
– and the bank account is in credit
Then
– debit bank account
– and update transaction statement
– and return card
– and dispense cash
Scenario Two: the bank account has hit overdraft limit
Given
– the customer requires to draw cash from the ATM
When
– the customer enters their card to the machine
– and the bank account has hit overdraft limit
Then
– return card
– and display message ‘overdraft limit reached’
– and offer customer other services
```

## Questions

### 2. Common Agile Techniques: Stories and Backlog Refinement

These questions cover requirements engineering in Agile, specifically User Stories and the management of the Product Backlog.

*   Discuss the importance of stories and backlog refinement in Agile development. How do they contribute to project success?
*   How does backlog refinement contribute to the success of an Agile project?
*   Extreme programming expresses user requirements as stories with each story written on a card. Discuss the advantages and disadvantages of this approach to requirements description.

### 3. Common Agile Techniques: Estimation and Planning

These questions focus on forecasting effort (e.g., Planning Poker) and organizing work (Sprint/Iteration planning).

*   Elaborate Planning Poker and how does it facilitate Agile estimation?
*   Explain how Agile estimation and Agile planning work together to manage project timelines and deliverables.
*   Exemplify the role of the iteration or sprint planning meeting.
*   Explain the process of Agile planning.
*   Illustrate Release Planning and Task Planning.

### 4. Common Agile Techniques: Agile Testing

These questions cover verification and validation within the Agile lifecycle, including TDD and Acceptance Testing.

*   Elucidate the different Agile testing practices with an appropriate diagram.
*   Illustrate how agile testing team is different from traditional testing team.
*   Explain in detail Test Driven Development (TDD).
*   Differentiate between TDD (Test Driven Development) and acceptance test driven development (ATDD). Discuss the four steps required in acceptance test driven development.
*   Illustrate Acceptance tests and Exploratory testing.
*   Illustrate the exploratory testing process with appropriate diagrams.

