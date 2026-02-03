# Structural Models

Structural models display the **organization of a system** in terms of its component parts and their relationships. They are fundamental representations used when discussing and designing the system architecture.

## Static vs. Dynamic Models

Structural models can be categorized into two main types:

- **Static Models**: Show the organization of the system design, focusing on components like object classes and their relationships.

- **Dynamic Models**: Show the organization of the system executing, reflecting structures such as interacting threads.


::: info Architectural Context

Although UML has component, package, and deployment diagrams for architectural modeling, the core of this section focuses on Class Diagrams to detail the static structure of objects.
:::

## Class Diagrams

Class diagrams show the classes in a system and the **associations** (links) between them.

- **Object Class**: A general definition of one kind of system object. In early stages, these represent real-world entities (e.g., patient, doctor).

- **Association**: A link indicating a relationship, often requiring one class to have knowledge of the other.

### Class Structure Detail

Classes are represented by a **rectangle** divided into three sections:

1. **Top Section**: The **name** of the object class.

2. **Middle Section**: The class **attributes** (data fields).

3. **Lower Section**: The **operations** (methods) associated with the class.


### Multiplicity (Associations)

Multiplicity indicates how many objects are involved in an association.

|**Symbol**|**Meaning**|**Example**|
|---|---|---|
|`1`|Exactly one object|A patient has exactly one record.|
|`1..*`|One or more objects|A patient attends one or more consultations.|
|`*`|An indefinite number|General indefinite relationship.|

1:1 means one-to-one relationship, a patient has one record and a record belongs to one patient.

1:Many (1..*) means one-to-many relationship, a patient can attend many consultations, but each consultation is for one patient.

Many:Many (*..*) means many-to-many relationship, a patient can have many conditions, and each condition can be diagnosed in many patients.

### Example: Associations and Multiplicity

The following diagram represents classes and associations in the Mentcare system, showing how a `Patient` interacts with various entities, such as `Consultation`, `Condition`, and `Hospital Doctor`.

::: details Mentcare Class Diagram
```mermaid
classDiagram
    class Consultant{
    }
    class Patient {
    }
    class Condition {
    }
    class GeneralPractitioner {
    }
    class Consultation {
    }
    class Medication {
    }
    class Treatment {
    }
    class HospitalDoctor {
    }

    Consultant "1" -- "1..*" Patient : referred-to
    Patient "1..*" -- "1..*" Consultation : attends
    Patient "1..*" -- "1..*" Condition : diagnosed-with
    Patient "1..*" -- "1" GeneralPractitioner : referred-by
    Consultation "1..*" -- "1..*" Medication : prescribes
    Consultation "1..*" -- "1..*" Treatment : prescribes
    Consultation "1..*" -- "1..4" HospitalDoctor : involves    
```
:::

### Example: Attributes and Operations

This diagram details the `Consultation` class, showing the specific attributes and operations.

::: details Consultation Class Diagram
```mermaid
classDiagram
    class Consultation {
        + Doctors
        + Date
        + Time
        + Clinic
        + Reason
        + Medication_prescribed
        + Treatment_prescribed
        + Voice_notes
        + Transcript

        + New()
        + Prescribe()
        + RecordNotes()
        + Transcribe()
    }
```
:::

## Generalization

Generalization (often called inheritance) allows the system to define hierarchies of classes. Attributes and operations in the higher-level classes (superclasses) are automatically associated with lower-level classes (subclasses). Lower-level classes can also have their own specific attributes and operations.

- **Notation**: An **arrowhead pointing up** toward the more general class.

A `General practitioner` and `Hospital doctor` are specialized types of `Doctor`. Furthermore, `Hospital doctor` is specialized into `Consultant`, `Team doctor`. 
A `Trainee doctor` and `Qualified doctor` are specialized types of `Team doctor`.

::: details Doctor Generalization Diagram
```mermaid
classDiagram
    direction BT
    class Doctor {
        + Name
        + Phone_#
        + Email
        + register()
        + de-register()
    }

    class GeneralPractitioner {
        + Practice
        + Address
    }

    class HospitalDoctor {
        + Staff_#
        + Pager_#
    }

    class Consultant
    class TeamDoctor
    class TraineeDoctor
    class QualifiedDoctor

    GeneralPractitioner --|> Doctor
    HospitalDoctor --|> Doctor

    Consultant --|> HospitalDoctor
    TeamDoctor --|> HospitalDoctor

    TraineeDoctor --|> TeamDoctor
    QualifiedDoctor --|> TeamDoctor
```
:::

All doctors share common attributes and operations defined in the `Doctor` class, while each subclass adds its own specific details. `hospital doctor` has additional attributes like `Staff_#` and `Pager_#`, while `General practitioner` has `Practice` and `Address`.

## Aggregation

Aggregation is a type of association used to illustrate when objects are made up of different parts. Examples include a `PatientRecord` composed of `Patient` and multiple `Consultation` objects.

- **Definition**: One object (the **whole**) is composed of other objects (the **parts**).
    
- **Notation**: A **diamond shape** is added to the link next to the class representing the whole.
    

```mermaid
classDiagram
    class PatientRecord {
    }
    class Patient {
    }
    class Consultation {
    }

    PatientRecord "1" o-- "1" Patient : aggregates
    PatientRecord "1" o-- "1..*" Consultation : aggregates
```

This shows that a `PatientRecord` contains one `Patient` and one or more `Consultation` objects.

::: tip Practice Questions
- What are **structural models**? Explain **class diagrams** with an example.
- Describe **multiplicity**, **generalization**, **aggregation**, and **associations** in class diagrams.
- Give an example class diagram for an ATM or a language-processing system.
:::
