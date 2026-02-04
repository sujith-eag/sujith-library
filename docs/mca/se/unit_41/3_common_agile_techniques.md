# Common Agile Techniques

This section covers the practical methods Agile teams use to define requirements, estimate effort, plan work, and ensure quality.

## 1. Stories and Backlog Refinement

In Agile, requirements are not detailed specifications written up-front. They are "tokens" or placeholders for future conversations. Stories continue to evolve from product inception through to decommissioning. They should be refined on a 'just-in-time' basis for the next sprint, aligning with the Lean concept of 'last responsible moment.'

YAGNI ('You Ain’t Gonna Need It') applies when deciding whether to add stories to the backlog. For example, if the product will be live for a short time, technical quality may not need to be robust.

- **User Story**: A requirement or feature expressed from the user's perspective. It is a reminder that a feature needs to be delivered, not a detailed specification.

- **Agile Persona**: A fictional character representing a specific user group (e.g., "Mike, the Business Development Manager") used to give context to stories.

- **Backlog**: An ordered "to-do" list of stories. It evolves continuously from product inception to decommissioning.

- **Spike Story**: A specific story created to drive technical or functional research when there is not enough information to estimate or implement a feature.

### Core Concepts

- **The 3 Cs**: A story consists of the **Card** (physical/virtual token), **Conversation** (discussion between team and customer), and **Confirmation** (acceptance criteria).

- **Just-in-Time Refinement**: Stories are refined from "coarse-grained" (large/vague) to "fine-grained" (small/detailed) only when nearing development. Refining too early is wasteful (Waterfall style).

- **Planning Pyramid**: A hierarchy of requirements in complex projects: **Epics** → **Features** → **Stories** → **Tasks**. Coarse-grained stories are refined into fine-grained ones as delivery progresses.

### Key Example: Standard Story Format

A standard syntax helps stakeholders focus on value:

- **Who**: As a... _<Role/Persona>_
- **What**: I want... _<Feature/Requirement>_
- **Why**: So that... _<Benefit/Value>_

> "As a **Business Development Manager**, 
> I want **to identify people who registered in the last 3 months**, 
> So that **I can send focused marketing material**."

**Acceptance Criteria**: A list of questions, scenarios, or examples that enable the customer to sign off the story as 'done'.

> - Can I identify all people who have registered or re-registered in the last 3 months from today’s date?
> - Can I identify basic demographics (name, age, email address) relating to those people?
> - Is it clear what the core preferences, via site usage, of those people are?
> - Do I know how many times these people have logged on in the last 3 months?
> - Do I know how much those people have spent with us each month?
> - Do I know what products these people have ordered each month?
> - Am I prevented from seeing people who registered or re-registered outside the 3-month timeline? (Example of a 'negative' acceptance criterion written as a 'positive' question).

Stories can be any size and are refined as the product develops: from coarse-grained (months of effort) to fine-grained (1–5 days of effort).

### Processes: The INVEST Model

To check if a story is well-formed, use the acronym **INVEST**:

1. **I - Independent**: Can be delivered separately from other stories (feasible at coarse-grained level).
2. **N - Negotiable**: Not a fixed contract; details are open to discussion and refined until sprint planning.
3. **V - Valuable**: Must provide value to the customer; use common, non-jargon language so value is understood and stories can be prioritized and ordered within the backlog.
4. **E - Estimable**: The team must understand it enough to estimate effort realistically. If a story is too vague, it cannot be estimated and should be refined or split.
5. **S - Small Enough**: Should fit within an iteration (typically 1-5 days of effort); avoid over-detailing too soon.
6. **T - Testable**: Must have testable acceptance criteria to prove it is "done".

### Processes: Prioritization (MSCW)

Prioritization organizes the backlog within a time-box (e.g., release or sprint). MSCW is designed for fixed time frames; without one, everything may be labeled 'must have.'

- **M - Must Have**: Critical stories (MVP or MMFS). Without them, the solution is non-viable, illegal, or pointless. Must be delivered in the time-box.
- **S - Should Have**: Important but not vital; causes significant problems if missing, but the product still provides value without it. Should be delivered if possible.
- **C - Could Have**: Desirable but less important; may cause some issues if missing, but value remains. Could be delivered if time allows.
- **W - Won't Have This Time**: Agreed to be excluded from the current time-box; may be included in future iterations or releases.

## 2. Agile Estimation

Agile estimation forecasts how much can be delivered in a time period, acknowledging uncertainty.

- **Ideal Days**: The time a task would take with zero interruptions (no emails, meetings, or phone calls). Equivalent to 'productive time' in project management.

> [!NOTE]
> Many Agile teams avoid ideal days for coarse-grained stories, as teams may add contingency, leading to 'Parkinson’s law' ('work expands to fit time available').

- **Story Points**: A relative measure of effort (not time) for a story to be implimented, combining complexity, size, and uncertainty.

  **Benefits**:
  - Points don't decay (a 5-point story remains 5 points).
  - Independent of developer speed (senior and junior developers agree on relative size even if their actual times differ).
  - Easier to estimate than time (relative sizing is simpler than absolute time).
  - Removes emotional attachment to dates/deadlines.

- **Velocity**: The team's capacity, measured as story points completed per sprint.

### Process: Planning Poker

A consensus-based technique for estimating story points:

1. Each team member holds cards with Fibonacci numbers (1, 2, 3, 5, 8, 13, 20...).
2. Customer explains the story.
3. Team discusses briefly.
4. Everyone reveals cards simultaneously (avoids anchoring/bias).
5. Outliers (highest/lowest) explain reasoning.
6. Repeat until consensus is reached.

**Typical Story-Point Sizes**:
- Done story: 0
- Fine-grained: ½ (xxs), 1 (xs), 2 (s), 3 (sm), 5 (m), 8 (ml), 13 (l)
- Coarse-grained: 20 (xl), 40 (xxl), 100 (xxxl)

## 3. Agile Planning

Planning in Agile enables change rather than rigid predictions. Agile frameworks include levels of planning, like portfolio, program, project, release, and iteration/sprint plans.

### Top-Down Planning

Used for longer time frames (e.g., releases). Creates a coarse-grained plan based on high-level stories and velocity. It is quick but inexact, relying on experience or historical data. Best for variable environments where detailed plans risk high change overhead.
### Bottom-Up Planning

Used for short time frames (e.g., sprints). Accurate but time-consuming, based on detailed task breakdowns. Teams identify capacity (total available hours), plan tasks, estimate required hours, and adjust stories to match capacity.
This is best for stable environments where detailed plans are less likely to change.

What capacity they have to deliver the stories is 'the number of hours available in the sprint' (e.g., 5 team members × 8 hours/day × 10 days = 400 hours). They then break down stories into tasks, estimate hours for each task, and adjust the number of stories to fit within the available hours.

'total hours required' should be less than 'total hours available' to avoid over-commitment. Tasks are refined until the team is confident they can complete them within the sprint.


### Processes: Levels of Planning

Release backlog is subset of the product backlog of high-level stories planned for a release. Sprint backlog is subset of the release backlog of detailed stories planned for a sprint.

1. **Release Planning (Top-Down)**: Team and customer create a release backlog using average velocity (story points delivered in 1-5 sprints) to forecast stories that can be delivered in the release time frame. This is a quick, high-level plan that is expected to change.

2. **Sprint/Iteration Planning**: Done in two parts at sprint start.
   - **Part 1 (Top-Down)**: Select backlog stories fitting their velocity; define a sprint goal.
   - **Part 2 (Bottom-Up)**: Break stories into tasks (in hours); verify available hours; remove stories if over-committed; finalize sprint backlog.

## 4. Agile Testing

Testing (validation) is integrated early and continuously throughout the lifecycle, not left to the end. This prevents late defects from derailing delivery.

Defects are cheaper to fix when found early. Agile testing practices include:

- **TDD (Test Driven Development)**: Write tests before code to guide development.
- **BDD (Behaviour Driven Development)**: Define tests based on system behavior(scenarios) using natural language.
- **Agile Testing Quadrants**: Taxonomy of testing types.

### The Testing Quadrants

1. **Q1 (Technology-facing / Guiding Development)**: Unit tests, component tests (automated).
2. **Q2 (Business-facing / Guiding Development)**: Functional tests, story tests, prototypes (automated/manual).
3. **Q3 (Business-facing / Critiquing Product)**: Exploratory testing, scenarios,  usability, UAT (manual).
4. **Q4 (Technology-facing / Critiquing Product)**: Performance, load, security testing (tools).

### Process: TDD Cycle (Red-Green-Refactor)

Implemented at unit/component level. This cycle ensures that the code meets acceptance criteria with minimal debt.

1. **Red**: Write a failing test for new functionality which is not yet implemented.

2. **Green**: Write minimal/just enough code to pass the test.
3. **Refactor**: Improve code without changing behavior.

**Benefits**: Self-documenting code, 100% test coverage, repeatable/automated tests.


Focus is on conditions in the test that could cause the code to fail, and writing code to satisfy those conditions.

In TDD the team focuses on conditions/questions that the code must satisfy, while in BDD the focus is on scenarios that describe system behavior from a user's perspective.

### ATDD (Acceptance Test Driven Development)

Similar to TDD but focuses on acceptance criteria, closer to UAT. Many prefer BDD for its natural language.

### Process: BDD Format

BDD focuses on user scenarios and making sure the system behaves the user expects.

It uses Given/When/Then syntax for scenario-based acceptance criteria.

- **Given**: Initial context (e.g., "Customer has $0 balance").
- **When**: Event (e.g., "Tries to withdraw $10").
- **Then**: Outcome (e.g., "System rejects transaction").

BDD is applied on coarse-grained stories with scenario to define expected behavior. While TDD is applied on fine-grained stories with question-based criteria to define how the code should work.


**Example**:
```
As a generic bank customer,
I want to withdraw cash from an ATM,
So that I don’t visit the branch continually.

Acceptance Criteria:
Scenario: Account in credit
  Given the customer enters card and account is in credit
  When withdrawing cash
  Then debit account, update statement, return card, dispense cash.

Scenario: Overdraft limit hit
  Given the customer enters card and account hits overdraft
  When withdrawing cash
  Then return card and display overdraft message.
```


## Questions

### Stories and Backlog Refinement

These questions cover requirements engineering in Agile, specifically User Stories and the management of the Product Backlog.

- Discuss the importance of stories and backlog refinement in Agile development. How do they contribute to project success?
- How does backlog refinement contribute to the success of an Agile project?
- Extreme programming expresses user requirements as stories with each story written on a card. Discuss the advantages and disadvantages of this approach to requirements description.

### Estimation and Planning

These questions focus on forecasting effort (e.g., Planning Poker) and organizing work (Sprint/Iteration planning).

- Elaborate Planning Poker and how does it facilitate Agile estimation?
- Explain how Agile estimation and Agile planning work together to manage project timelines and deliverables.
- Exemplify the role of the iteration or sprint planning meeting.
- Explain the process of Agile planning.
- Illustrate Release Planning and Task Planning.

### Agile Testing

These questions cover verification and validation within the Agile lifecycle, including TDD and Acceptance Testing.

- Elucidate the different Agile testing practices with an appropriate diagram.
- Illustrate how agile testing team is different from traditional testing team.
- Explain in detail Test Driven Development (TDD).
- Differentiate between TDD (Test Driven Development) and acceptance test driven development (ATDD). Discuss the four steps required in acceptance test driven development.
- Illustrate Acceptance tests and Exploratory testing.
- Illustrate the exploratory testing process with appropriate diagrams.

