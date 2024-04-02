---
title: "Tactical Design in DDD"
date: "2024-04-02"
description: Tactical Design starts with the conceptual domain model from the strategic phase and gets into the low-level implementation details.
featuredImage: "./images/tactical-design.png"
---

<!--
```mermaid
mindmap
  root((Tactical Design))
    ((Concepts))
      Aggregates
      Bounded Context
      Domain Events
      Entities
      Value Objects      
    ((Design Patterns))        
        Domain Service
        Entity
        Factory        
        Repository
        Specification
        Value Object
```
-->

![Tactical Design mindmap](./images/tactical-design.png)

In DDD, there are 2 phases for modeling the domain - strategic design and tactical design. **Tactical Design** starts with the conceptual domain model from the strategic phase and gets into the low-level implementation details. It takes the concept and makes it concrete.

## Goals of Tactical Design

These are the goals of the tactical design phase:

- Translate the strategic design into concrete classes, interfaces, and modules.
- Apply tactical design patterns to optimize the domain model.
- Ensure the domain model is efficiently implemented.

## Activities that Happen During Tactical Design

As the tactical design gets into the implementation of the strategic design, the activities will get more into the code. Activities that happen in the tactical design phase include:

- Designing entities and value objects
- Identifying aggregates
- Defining domain services
- Implementing specification and validation details

## Artifacts from Tactical Design

In the tactical design phase of domain modeling, the following artifacts are generated:

- Implemented domain model
- Code for the system

## Learn More

- [On-Demand Webinar: Intro to Domain-Driven Design with C#](https://mailchi.mp/nimblepros/af2112un73)
- [Email Course: Intro to DDD](https://mailchi.mp/nimblepros/intro-to-ddd-email-course)