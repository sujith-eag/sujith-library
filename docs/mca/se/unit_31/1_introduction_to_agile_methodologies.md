# Unit III: Agile Methodologies - Introduction

## 1. What is Agile?

Agile is not a single methodology but an umbrella term. 

- **Agile:** A set of evolving delivery, working practices and frameworks (e.g., Scrum, Kanban, DSDM) designed for managing dynamic and innovative environments effectively, particularly in information technology.

- **Agile Operating Model:** The comprehensive definition of how an organization or team interprets and implements Agile, often integrating multiple frameworks aligned with the Agile Manifesto.

### Core Concepts

Agile frameworks collectively ensure:

- **Primary Goal:** Prioritizing customer satisfaction first through the early and continuous delivery of valuable products.

- **Flexibility:** Enabling organizations to adapt to the evolving opportunities and challenges in the modern business landscape.

- **Evolution:** Recognizing Agile as a dynamic approach requiring continuous improvement (Kaizen) after framework implementation.

## 2. The History of Agile

Agile methodologies build upon foundational concepts from manufacturing and earlier software development practices.

### Evolution of Agile

- **Lean Origins:** Agile draws inspiration from the Toyota Production System (TPS), now known as Lean. Concepts like visual boards originated from TPS.
- However, Agile emphasizes Lean product development, which embraces variability for innovation, contrasting with Lean manufacturing's focus on repeatability.

Innovation and creativity in product development thrive on variability, whereas repeatability can hinder them.

- **Challenges with "Rapid" Methods:** In the 1990s, approaches like Rapid Application Development (RAD) gained popularity. However, "Rapid" often prioritized speed over quality, leading to issues. Agile aimed to balance timely delivery with quality.

- **Emergence of "Agile":** The term "Agile" was formally defined with the creation of the Agile Manifesto in 2001.

### Key Milestones

1. **1940s:** Inception of Toyota Production System (Lean) concepts.
2. **1986:** Publication of "The New New Product Development Game" by Takeuchi and Nonaka in Harvard Business Review, introducing the "Rugby" approach as a precursor to Scrum.
3. **1990s:** Development of specific frameworks:
   - Crystal (by Alistair Cockburn).
   - eXtreme Programming (XP) (by Kent Beck).
   - Dynamic Systems Development Method (DSDM).
   - Scrum (by Ken Schwaber and Jeff Sutherland).
   - Feature Driven Development (FDD).
4. **2001:** Agreement on the Agile Manifesto in Snowbird, Utah, establishing unified values for these frameworks.

## 3. The Agile Manifesto

The Agile Manifesto was created in February 2001 by 17 software development experts. It provides a unified definition of Agile that all frameworks align with, driven by the need for an alternative to documentation-driven, heavyweight software development processes that often resulted in late, over-budget deliveries of unsatisfactory products.

The values and principles in the Manifesto apply to the development of various types of products. The Manifesto outlines 4 core values and 12 supporting principles.

### The 4 Agile Values

The Manifesto states: _"We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:"_

| **We Value (Agile Focus)**       | **Over** | **(Traditional Focus)**     |
| :------------------------------- | :------- | :-------------------------- |
| **Individuals and interactions** | _over_   | Processes and tools         |
| **Working software**             | _over_   | Comprehensive documentation |
| **Customer collaboration**       | _over_   | Contract negotiation        |
| **Responding to change**         | _over_   | Following a plan            |

While the items on the right have value, Agile prioritizes those on the left.

Typically an Agile audit or health check will be performed against the 4 manifesto statements and the 12 manifesto principles.

### Explanation of the 4 Agile Values

1. **Individuals and interactions over processes and tools:**
    - Tools are useful, but they cannot deliver value without enabled, motivated people interacting effectively as a team.

2. **Working software over comprehensive documentation:**
    - Supporting Documentation is necessary (for support/maintenance), but the primary measure of progress is **working products** that demonstrate progress through regular visible incremental deliveries of a consistently working product.
    - Documentation should be "Lean" (fit-for-purpose) and only documentation that adds value to the stakeholders is produced, synchronized with the delivery of the product rather than done entirely up-front.

3. **Customer collaboration over contract negotiation:**
    - Agile seeks a collaborative, open relationship between the customer and supplier, acknowledging that an effective product cannot be developed without that collaboration.
    - Contracts should focus on enabling and clarifying collaboration and the working approach, prioritization rather than rigid specifications that prevent change.
	- Agile contracts concentrate on enabling inspection and adaptation of the product, prioritization, and collaboration between all stakeholders. This ensures they can work together to a mutually satisfactory conclusion. 

> [!NOTE] Waterfall Contracts 
> This stands in contrast to a traditional 'Waterfall'-driven contract, in which the analysis and design stages will produce detailed documents that become fundamental parts of the contract (e.g., the requirement specification, functional specification, etc.).
>  
> The interaction between customer and supplier then becomes a negotiation based on the detailed documents that have been produced. This can create significant friction where there is a large amount of change required to the contracted specifications.

4. **Responding to change over following a plan:**
    - Agile planning exists as focused planning designed to enable inspection and adaptation.
    - Detailed plans are made for short horizons (sprints), while long-term plans (project and stage plans) remain high-level baselines expected to change. 
    - This means that up-front project plans and stage plans are not commitment plans; detailed work package or sprint/iteration plans are commitment plans, the commitment being against an agreed goal (for example, an agreed increment of the product).

### The 12 Agile Principles

These principles support the 4 values:

1. **Customer Satisfaction:** The highest priority is satisfying the customer through early and continuous delivery of valuable software. 
    - Business value largely drive the product stories.
    - Technical perspective to ensure optimum delivery of product needs to be considered by the team.

2. **Frequent Delivery:** Deliver working software frequently, from a couple of weeks to months, preferring shorter timescales.
    - All Agile frameworks focus on frequent delivery of products, thereby enabling fast feedback-cycles and the ability to change direction if required.

3. **Working Software** is the primary measure of progress.
    - The main objective of Agile is to deliver value, through, working software, to the customer in short time frames continuously. 

> [!NOTE] Cost of Delay 
> "What is the cost to the business of delaying delivery of a product feature?" 
> A metric for considering the opportunity cost of stories relative to their availability now versus sooner or later.

4. **Collaboration:** Business people and developers must work together daily throughout the project.
    - In dynamic environments, stories that add value and their relative priority will change as understanding evolves and business needs change. 
    - This constant 'reshuffling' requires close collaboration between the customers, stakeholders, and team, a common language free from jargon.
    
5. **Self-Organizing Teams:** The best architectures, requirements, and designs emerge from teams that organize themselves.
    - Agile assumes that teams typically know the best way forward at a detail level. With the right delivery environment and organisational culture, a team can become self-organising. 

6. **Motivated Individuals:** Build projects around motivated people. Give them the environment/support they need and **trust** them to get the job done.
    - Agile can be extremely difficult if there is a blame culture, and/or when individuals and teams are not empowered.

7. **Sustainable Development Pace:** Sponsors, developers, and users should be able to maintain a constant pace indefinitely (avoiding burnout, stress, illness).
    - Unrealistic and unsustainable time pressures causes corner cutting, leading to 'technical debt' in a product.
    - In long-term, these systems are difficult, expensive, and even impossible to support, maintain, and enhance.
    - Personal motivation and commitment to the team is lost, resulting in people leaving the team.

8. **Face-to-Face:** The most efficient and effective way of conveying information to and within a development team is face-to-face conversation (this can be virtual). 
    - Written communication is prone to misunderstanding as visual cues and body language contribute also.
    - Face-to-face communication is why individual development team sizes is 3 to 11 in most Agile frameworks.

9. **Welcome Change:** Harness changing requirements, even late in development, for the customer's competitive advantage.
    - In the team and customer collaboration, they can identify, learn and evolve more effective ways to deliver value.

10. **Simplicity:** Do only what is needed. The art of maximizing the amount of work not done is essential.
    - Developing a solution that is fit-for-purpose and only meets existing requirements, not those not needed, leading to higher cost.

11. **Technical Excellence:** Continuous attention to technical excellence and good design enhances agility, avoiding technical debt.
    - If an area of a product is identified as being of sub-standard design, the team should ensure that a 'refactoring' story is created to address it.
	- Issues identified late in the delivery lifecycle can become extremely expensive to fix.

12. **Reflect and Adjust:** Retrospectives. At regular intervals, the team reflects on how to become more effective and adjusts behavior accordingly.
	   - A retrospective will identify the areas and processes that work well, and those that need to be improved.
 
Agile deliveries follow an empirical process (learning process). The three pillars of empirical processes are **transparency**, **inspection**, and **adaptation**.


## Questions

### 1. What is Agile? & Agile vs. Traditional Models

*   What is Agile? And state the Agile Manifesto.,
*   What is agile method? List the various agile methods. Can we develop our own agile method? Justify your answer.
*   Write a note on agile methods? Briefly discuss the principles of agile methods.
*   Distinguish between Agile Model and Waterfall Model. Give example each.
*   With a neat diagram explain the difference between agile development and plan based development.
*   State and explain the benefits of Agile.
*   What are the main reasons organizations choose to adopt Agile methodologies?

### 2. The Agile Manifesto (Values and Principles)

*   Analyze the four key values of Agile manifesto.
*   List and Explain the core values of Agile Manifesto.
*   Summarize the 12 Principles behind the Agile Manifesto.
*   Illustrate the agile principles with appropriate examples.
*   Explain any eight principles which supports core values of Agile Manifesto.

