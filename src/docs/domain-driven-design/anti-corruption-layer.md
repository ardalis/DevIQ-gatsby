---
title: "Anti-Corruption Layer"
date: "2021-02-15"
description: Anti-Corruption Layers (ACLs) are used in domain-driven design (DDD) to allow for interactions with other contexts without adversely impacting the design of the core domain model.
---

An Anti-Corruption Layer (ACL) is a set of patterns placed between the domain model and other bounded contexts or third party dependencies. The intent of this layer is to prevent the intrusion of foreign concepts and models into the domain model. This layer is typically made up of several well-known design patterns such as [Facade](/design-patterns/design-patterns-overview) and [Adapter](/design-patterns/adapter-design-pattern). The patterns are used to map between foreign domain models and APIs to types and interfaces that are part of the domain model.

## References

[Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight
