# Unit V: Lean Software Development & Lean Start-up

## Lean Software Development

Lean software development was adapted from Lean manufacturing (specifically the Toyota Production System) by Mary and Tom Poppendieck in 2003. It provides a framework for improving and scaling Agile approaches based on proven principles.

### Core Concepts

- **Manufacturing vs. Software:** While Lean manufacturing focuses on eliminating waste in repetitive processes, software development is not repetitive (every problem is unique). Therefore, Lean software development shifts the focus from purely eliminating waste to **maximizing value** and emphasizing **learning**.
- **The Goal:** To deliver value to the customer quickly by discovering valuable stories and avoiding those that have no value.

### The 7 Principles of Lean Software Development

#### 1. Eliminate Waste

Waste is anything that does not add value to the product.

- **The Three Biggest Wastes in Software:**
    1. **Extra features/stories:** Developing features that aren't needed (the 20% of stories that provide 80% of value should be prioritized).
    2. **Churn:** Requirements changing constantly because specification happens too early, or "test and fix" cycles occurring because testing is too late.
    3. **Crossing boundaries:** Organizational boundaries increase costs (by ~25%) and create buffers that slow response time.

#### 2. Build in Quality

Quality must be part of the process, not inspected in later. If defects are routinely found during verification, the _process_ is defective.

- **Practices:**
    - Mistake-proofing code using **Test-Driven Development (TDD)**.
    - Avoid building **Legacy Code** (defined here as code lacking automated unit and acceptance tests).

#### 3. Create Knowledge

Planning is useful, but learning is essential.

- **Scientific Method:** Teams should establish hypotheses, conduct rapid experiments, and implement the best alternative.
- **Feedback:** Predictable performance is driven by feedback based on reality, not by guessing about the future in a plan.

#### 4. Defer Commitment

Decisions should not be made until the **Last Responsible Moment**.

- **Concept:** Abolish the idea that development must start with a complete specification.
- **Process:** Schedule irreversible decisions for the last possible moment when the most information is available to make the correct choice.
- **Architecture:** System architecture should break dependencies to allow features (PBIs) to be added at any time.

#### 5. Deliver Fast

Rapid delivery, high quality, and low cost are compatible.

- **Queues:** Queues (waiting lines) create buffers that slow development. You must aggressively limit **Work-In-Progress (WIP)** to optimize flow.
- **Batch Size:** Drive down cycle time by using small batches of work.

#### 6. Respect People

Engaged, thinking people provide the most sustainable competitive advantage.

- **Leadership:** Effective leaders bring out the best in the team.
- **Teams:** Teams thrive on pride, commitment, trust, and applause.

#### 7. Optimise the Whole

Brilliant products emerge from a unique combination of opportunity and technology.

- **Value Stream:** Focus on the entire lifecycle from "concept to cash" (customer request to deployed software).
- **Measurements:** Measure process capability via **Cycle Time** and team performance via **Delivered Business Value** (not just code produced).


## Lean Start-up

The Lean Start-up movement, initiated by Eric Ries (2011), applies Lean thinking to the process of innovation and product management.

- **Start-up:** "Anybody who is developing a new product... under conditions of **extreme uncertainty**." This applies to entrepreneurs in a garage as well as new product teams in large enterprises.
- **Minimum Viable Product (MVP):** The simplest version of a product that enables a full turn of the Build-Measure-Learn loop to test hypotheses.
- **Business Model Canvas:** A common format used to capture all hypotheses (partners, costs, value proposition, channels, etc.) on one page.

### Core Concepts: The Goal

- **Finding vs. Executing:** Lean start-up is not about _executing_ a known business model (which existing companies do); it is about **finding** a business model.
- **Questions a Business Model must answer:**
    1. How do customers discover the product?
    2. How do they get value from it?
    3. How is sufficient revenue generated?

### Process: The Build-Measure-Learn Loop

The unit of progress in a startup is **learning**. The process is a continuous loop of experiments:

1. **Idea:** The entrepreneur starts with an idea/hypothesis.
2. **Build:** Build a product (or MVP) to test the hypothesis.
3. **Measure:** Put the product in front of real customers and measure the results.
4. **Learn:** Analyze the data to generate new ideas or adjust the business model.

### Key Examples: Hypotheses

At the start of the loop, the entrepreneur must test "leap-of-faith assumptions":

1. **Value Hypothesis:** Who will see value in this product?
2. **Growth Hypothesis:** How will customers discover the new product?

> **Example (Votizen):**
> 
> - **Concept:** A social network for verified voters.
> - **Hypotheses to test:**
>     - Customers are interested enough to sign up (Registration).
>     - The system can verify them as registered voters (Activation).
>     - Users will engage over time (Retention).
>     - Users will tell friends (Referral).

## Questions

*   Discuss the Lean Software Development Tools.

