# Unit IV: Generic Agile Process - Common Agile Roles

Agile frameworks generally define four key roles: The Customer, The Team, The Agile Lead, and The Stakeholders. While specific frameworks (like Scrum) use specific names (e.g., Product Owner, Scrum Master), these generic definitions cover the responsibilities found across most Agile methods.

## 1. The Customer

The Customer is the person/group who makes decisions about what will be done and in what order. They own the "vision" of the product and answer the question "Why are we doing this?". 

In specific frameworks, this role may be called the **Product Owner** or **Business Ambassador**.

Primary Responsibilities:
- Defining the stories (requirements) to be delivered.
- Deciding the order (prioritization) of the backlog.
- Signing off stories as "done" at the end of an iteration/release.

**The "DARK(a)" Mnemonic:** A good customer must possess the following attributes:
- **D - Desire:** Wants to be involved and is excited about the product being delivered.
- **A - Authority:** Has the power to make decisions and enforce them (or knows exactly who can make those decisions and what the turnaround time will be).  It must be clear to the customer, team and stakeholders what decisions the customer can and cannot make.
- **R - Responsibility:** Accepts responsibility for defining the product and its order of delivery by the team.
- **K - Knowledgeable:** Knows the business needs or where to find the answers quickly.
- 'a' for **Availability**, emphasizing the need to answer questions quickly during short delivery cycles.

### Alignment with Agile Principles

**Collaboration:** The customer collaborates rather than negotiating contracts. 
- The contract defines how the customer and team collaborate and work together, rather than focusing on up-front analysis and design. 
- The contract will identify the customer, their agreed level of authority, who will make any decisions they cannot make, and in what timescale these decisions will need to be made.

**Value:** They drive the delivery of valuable software by prioritizing the backlog based on business value. 
- Valuable is the key term, it is essential that the way the stories are described makes sense to the customer and uses non-technical language and as little jargon as possible.

**Presence:** Business people and developers must work together daily. Face-to-face communication is preferred to convey information effectively. 
* If this does not happen, the product that is developed is highly unlikely to be suitable for the customer.

## 2. The Team

The Agile team is responsible for delivering the product. They decide how to do the work, who does it, and how long it will take.

**Responsibilities:**
- **Deciding How:** Refining stories with the customer and dividing them into tasks.
- **Estimating:** Defining how long the work will take (typically breaking tasks down to <10 hours or 2 days of effort).
- **Assigning:** Deciding who does the work (often during the Daily Stand-up).
- Delivering the product

**Team Size:** Typical core team size is between **3 and 9 people**. This size optimizes communication and collaboration.

Typical specialist skills that can be found in an Agile team are:
* architectural skill;
* design skill;
* coding skill;
* testing skill;
* analytical skill;
* business knowledge.

Having a team made up of only specialists to lack of understanding in what everyone else in the team is doing. This can make communication, collaboration and teamwork very difficult.

- **Specialized Generalist:** A team member who has a specific expertise (e.g., testing or coding) but also a general understanding of all other team roles. This prevents silos and improves collaboration.

### Self-Organizing Team: 

A team that has the authority to decide how work gets done and who does it, within high-level organizational constraints.

Agile lead is to decide where to put constraints for the good of the overall organisation and the good of the team, without adversely affecting self-organisation.

| Self-organised teams                        | command-and-control teams                 |
| ------------------------------------------- | ----------------------------------------- |
| Take initiative                             | Take directions                           |
| Focus on team contribution                  | Seek individual reward                    |
| Concentrate on solutions                    | Focus on low-level objectives             |
| Cooperate                                   | Compete                                   |
| Continually look for better ways of working | Comply with process regardless of outcome |
| Take steps to prevent emergencies           | React to emergencies                      |

> [!NOTE]
> Software development is knowledge-based work, and a knowledge worker is somebody who knows more about their job than their boss

Self-organizing teams tend towards better performance for software development:

* Fast decision making : many decisions don’t need to go up the management chain.
* Increased motivation : due to a greater sense of autonomy.
* Increased brain power : instead of a single manager working on a problem, there is the potential to apply the brain power of the entire team.
* Increased levels of initiative and continuous improvement to the point where team members start to consider the goals of the team to be more important than their own personal goals.

### Team Structures (Types)

#### 1. Feature Teams: 
* Agile teams are usually structured as feature teams as it enables delivery of features (described as stories) from the backlog in vertical slices in the value sequence that the customer requires.

* They contain all necessary skills to deliver the story to the customer (cross-functional).

#### 2. Component Teams: 
* Responsible for producing components that can be combined with other components from other teams and integrated together into a feature.

* Producing specific technical components (e.g., a database layer) that are integrated by other teams. Used when scaling Agile in complex environments.

#### 3. Core vs. Support Teams: 
* Core teams that are focused on delivering across the value chain; 

* Support teams (e.g., architecture support) exist to enable the core teams to do things right the first time.

## 3. The Agile Lead

- **Servant-Leader:** A leadership style where the leader serves the team's needs first, rather than commanding and controlling them. They gain credibility by helping the team succeed.

- **Facilitator:** An individual who structures and manages workshops (like Retrospectives) to help the group achieve its objectives without taking a side in the outcome.

The Agile Lead is a servant-leader whose primary goal is to enable the team to self-organize and continuously improve. Should have Experience and maturity to understand that the focus in Agile is on the individuals and the effective face-to-face interactions between those individuals;

The ability to create a no-blame culture where people are not afraid to try new things, and an understanding that everyone (including themselves) makes mistakes, and that mistakes are acceptable as long as learning occurs;

Experience in knowledge of Agile and transformation.

### Core Concepts: The Facets of the Role

1. **Servant-Leader:** They will not command and control the team; instead they will facilitate and enable the team to self organize.
	* Asks what support was missing if a team fails.
	* An Agile lead should be a servant-leader who gains the credibility in their team by being a servant to the team’s needs and wants. 

2. **Removing Impediments:** Responsible for identifying and removing "noise" or blockers that stop the team from working (e.g., lack of empowerment, bad technology, management interference).

3. **Process Facilitator:** Ensures the Agile Operating Model (AOM) is being followed, all Agile activities are respected, stories are refined to the appropriate size.
	* Making sure the team’s definition of ‘done’ or process policies are being met. 
	* Work in progress limits are being adhered to

4. **Coach/Trainer:** Teaches the team Agile principles and helps them visualize why transformation is necessary.
	* Should pass on their knowledge of Agile principles, processes and practices to their team through coaching and training.

> [!NOTE] Servant-Leader
> The Servant-Leader is servant first. It begins with the natural feeling that one wants to serve, to serve first. 
> Then conscious choice brings one to aspire to lead. That person is sharply different from one who is leader first;

> [!NOTE] Team Lead
> One who operates in a ‘command and control’ style. 
> * Will typically pass a plan to the team that details how they should do things (tasks) and how long they have to do those things;  They will then control the team to achieve the plan. 
> * If the team fails, which is likely because they will not buy into a plan they had little or no input to, the team will probably blame the team lead for the failure citing excuses such as ‘we knew the plan was wrong’. 
> * The team will also not self-organize as they have no motivation for doing so and they won’t feel safe to do so.

## 4. The Stakeholders

Stakeholders are people and organisations outside the core team who have, a real or perceived ‘stake’, interest in the project or it's outcome. (e.g., users, governance boards, other departments).

> Any person or group who can **help** the team or **hinder** them. 

- **Importance:** Stakeholders can champion a project to success or be effective saboteurs if they feel un-engaged. may exert influence over the project, its deliverables or its team members.

- **Role:** They ensure the interests of their specific group are represented. They typically interact with the Customer to define requirements but may interact with the team directly for clarifications.

### Processes: Stakeholder Management

1. **Identification:** Use org charts, directories, previous project documentation, and brainstorming to list all potential stakeholders that may be involved in any product delivery.

2. **Analysis (Power/Interest Grid):** Once stakeholders have been identified, Map stakeholders on a grid based on their Power (influence) and Interest in the project to determine how to manage them:

| **Power** | **Interest** | **Management Strategy**       | **Description**                                                                                                                                                  |
| :-------- | :----------- | :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High      | High         | <br>Keep Engaged              | key players and should be Involved in decision making. <br><br>Engage and Consult regularly.                                                                     |
| High      | Low          | <br>Keep Satisfied            | Consult on their specific interest areas to increase their level of interest. <br><br>Watch out for "Seagull Management" (flying in, making a mess, flying out). |
| Low       | High         | <br>Keep Informed             | Often the creative evangelists/early adopters. Keep them engaged.<br><br>keep them interested and offer them early access to new stories(e.g., focus groups).    |
| Low       | Low          | <br>Monitor<br><br>Keep aware | Keep aware via general comms (newsletters).                                                                                                                      |

## Questions

### 1. Common Agile Roles (The Customer, The Team, The Agile Lead)

These questions focus on the people involved in the process and their responsibilities.

*   Elaborate on major key roles in Agile Delivery.
*   How can you find a mentor for your Agile Development team? Discuss.  *(Note: This often refers to the Agile Lead/Coach role).*
*   Illustrate the benefits of team work.
