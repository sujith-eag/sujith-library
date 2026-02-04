# Agile Methodologies - The Foundations of Agile

This content cover the foundational concepts of Agile, focusing on the mindset required, how to determine if an environment is suitable for Agile, and the lifecycle of product development under agile.

## The Agile Mindset

Agile is not merely a set of actions and techniques (e.g., "prioritizing stories" or "doing Agile") but a fundamental state of being and identity ("being Agile"). It requires a shift in how individuals and organizations view learning, failure, and effort. 

Agile cannot be adopted by picking individual techniques; selecting only easy elements prevents realizing its full benefits. The most important aspect is understanding that Agile is neither a set of rituals to repeat nor merely a collection of techniques.

- **Agile Mindset**: A state where an organization or person has absorbed Agile to the extent that it becomes their "identity" and default way of interacting with the world.

- **Cargo Cult Agile**: A situation where teams perform Agile "rituals" (e.g., stand-up meetings) without understanding the underlying reasons, often leading them to revert to old ways of working.

### Core Concepts

- **Layers of Agile**: The mindset encompasses the entire methodology. The hierarchy of Agile implementation is as follows:
    1. **Mindset**: The overarching environment.
    2. **Values**: Core beliefs (from the Agile Manifesto).
    3. **Principles**: Guiding rules (12 Principles).
    4. **Practices**: Actions performed (e.g., visual boards).
    5. **Tools and Processes**: Mechanisms used (e.g., planning software).

Frameworks like Scrum require all elements (roles, artifacts, activities) to work effectively. 

### Comparison: Fixed Mindset vs. Agile Mindset

Agile mindset contrasts sharply with a "fixed" mindset:

| Feature               | Agile Mindset (Growth)                      | Fixed Mindset (Non-Agile)                       |
| :-------------------- | :------------------------------------------ | :---------------------------------------------- |
| Goal                  | Learn                                       | Look good                                       |
| Effort                | Seen as the path to mastery                 | Seen as fruitless / for those with no talent    |
| Challenge             | Embrace                                     | Avoid                                           |
| Reaction to challenge | Resilience                                  | Helpnessness                                    |
| Feedback              | Learn from it                               | Ignore                                          |
| Response to Failure   | Provides information<br><br>Persist / Learn | Defines identity<br><br>Get defensive / Give up |

## Delivery Environments and Agile Suitability

Not every project requires Agile. The choice of delivery framework should be driven by the environment within which delivery will occur, specifically the level of variability and uncertainty involved.

- **Environment:** The combination of factors within an organization or project that drives the suitability of a governance framework.

- **Stacey’s Complexity Model:** A model used to choose a delivery approach based on the certainty of _requirements_ and _technology_.

- **Cynefin Framework:** A sense-making framework that categorizes domains by the relationship between cause and effect.

### Determining Suitability

- **High Variability:** Agile is best suited for environments with high variability (like IT product development) where requirements and technology change frequently.

- **Low Variability:** Defined processes (like Waterfall) are better for environments with low variability (like civil engineering/bridge building) where requirements are fixed early.

### Processes: Selecting a Framework (The Models)

#### A. Stacey’s Complexity Model

This model maps projects based on "Requirement Agreement" vs. "Technology Certainty".

1. **Simple project:** Requirements and technology are agreed/certain. Then use defined process like Waterfall.
	* Projects appears to be a very complex, such as building a bridge, may actually be in the simple area because it may not experience a lot of requirements or technology variation through the delivery life-cycle.

2. **Complicated / Complex / Anarchic:** Requirements or technology are far from certain. Use empirical process like Agile to manage variability through experimentation.

	* Product increments are developed frequently and consistently in order to obtain feedback and to make sure that the finished product aligns with the evolving business environment.

	* Most modern knowledge-work environments (like IT) are likely to fall into these areas because, by their nature, they tend to be innovative and operate in environments where requirements and technology have a high degree of variability through the delivery life-cycle.

As the level of innovation increases, so does the move towards complexity, and a high variability is likely to be present.
	
#### B. Cynefin Framework

This framework identifies five domains to determine the approach,:

1. **Simple (Obvious) domain:** Cause and effect are obvious, easy to predict outcomes. Predictive planning (Waterfall) works well as everything is pretty well understood.

2. **Complicated domain:** Cause and effect are less obvious and require analysis to understand and come up with a defined approach and plan. Defined approach is possible as there is some element of definition up front, but empirical process like Agile can also work.

3. **Complex domain:** Cause and effect are only visible in retrospect. Relationship breaks down as there tend to be many different factors that drive the effect. Cause of an effect today may be different to the cause of the same effect tomorrow. Creating a defined up-front approach and plan is not effective within this domain. Agile way of working is recommended (Probe-Sense-Respond).

4. **Chaotic domain:** No recognizable relationship between cause and effect at all so no upfront plan can be defined. Teams must perform experiments (e.g. prototyping, modelling) with the aim to move into one of the other less chaotic domains. Agile approach (specifically Kanban which does not require upfront plan)works in this situation.

5. **Disorder domain:** It is impossible to determine which domain applies; this is highly risky domain as teams tend to fall into their default way of working, which may prove unsuitable for what they are trying to achieve.

> [!NOTE] Cynefin in Practice
> During a product’s development and evolution there may be elements of delivery spread across all the Cynefin domains at the same time. 
> There may be aspects of a large system that are simple, while others may be in the complicated domain. 
>
> There can also be areas where innovation is necessary and which require a move towards the complex or even towards the chaotic domain.

## The Lifecycle of Product Development

In Agile, the concept of a "project" often shifts toward "product" management, spanning from the initial idea (commissioning) to the end of life (decommissioning). The full lifetime of any product spans from the commissioning of the product to its decommissioning.

Depending on the business that is implementing the product, this could be anything from a few weeks or months (a short marketing campaign) to many decades (a bank’s accounting system).

- **Backlog:** An ordered list of requirements (stories) that the customer wants. It exists throughout the product's entire life. What drives product development in an Agile approach is an evolving backlog of stories that the customer wants and that are placed in an order by the customer. 

- **Continuous Evolution:** Unlike traditional projects with a fixed end, a product backlog evolves continuously. Stakeholders support the customer to define coarse-grained stories in the backlog and the team supports the customer to define fine-grained stories in the backlog.

- **Time-box:** A fixed period (like a sprint or release) within which delivery is made.

- **Batch Sizes:** Agile focuses on effective product flow by keeping batch sizes (iterations) small (2–4 weeks). Large batch sizes (long releases) lead to errors and low productivity.

- **Potentially Shippable Increment:** A product increment produced at the end of a sprint that is of high enough quality to be deployed immediately.

### Processes: Three Styles of Agile Delivery

Agile delivery generally falls into one of three operating styles:

#### Defined product via BAU (Business as Usual) delivery: 

This style assumes that the customer wants a high-level definition of the product and will assign funding and resources over a time frame to deliver that product, which may or may not be defined in a business case. 
* The team and customer will evolve the product within the available timescale and resources constraints, prioritizing what will be delivered.

#### Defined product via a project delivery: 

This style assumes that the customer wants a high-level definition of the product and will assign funding and resources over a time frame; 
* however, the complexity of delivery (or preference of the customer) means project governance will be in place.
* Projects must have a business case. 
* The team and customer will evolve the product within the available timescale and resources governed within a project framework to monitor delivery against a business case.

#### Undefined product via a BAU delivery: 

This style of delivery assumes that the customer doesn’t have an end point definition of a product or specific timescale or cost in mind up front.
- The customer and team define what increment of the product they want in the next iteration/sprint and then create that increment.
- Once that increment has been delivered the next delivery increment is planned and delivered in the next iteration/sprint.
- The delivery continues until funding runs out or no value is being added so it doesn’t make sense to evolve the product any further.
- This creates an environment where delivery can be extremely flexible and emergent, which is excellent for highly variable delivery environments.
- Arguably this style of delivery is the nearest to what some people may consider to be 'pure Agile'

### Integration with Project Management (e.g., PRINCE2)

- Instead of checking documents at stage gates (Waterfall style), governance should assess the delivery of **outcomes** (working software) at release boundaries.

- Agile can be wrapped in project governance (like PRINCE2 - Project in Controlled Environments), but the governance must be tailored.

## Questions

### The Agile Mindset (Foundations and Success)

- Illustrate, how agile development focus on achieving Personal success?
- Explain, how you can enter agility with respect to organizational success? (or Explain how you can enter agility with respect to organizational, personal and technical success).,
- How can you find a mentor for your agile development team? Discuss.,,
- Illustrate the steps to master the art of agile development or simply to use XP to be more successful.
- Explain the 'source of value' for an organization success apart from revenue and cost savings.

### Delivery Environments and Agile Suitability

- Elucidate the Cynefin framework which is an alternative framework for determining and understanding simple, complicated and complex environments.

### The Lifecycle of Product Development

- Exemplify the three styles of Agile delivery.
- Outline the stages in the lifecycle of product development using an Agile approach.
- Briefly explain the DevOps Work Flow. Why DevOps needed for IT industry? (Note: While DevOps is Unit IV, this question appears in the context of Agile workflows in some papers).
