---
title: "Anemic Model"
date: "2015-09-30"
description: In object-oriented programming, and especially in Domain-Driven Design, objects are said to be anemic if they have state but lack behavior.
---

In object-oriented programming, and especially in Domain-Driven Design, objects are said to be _anemic_ if they have state but lack behavior. Some kinds of objects, such as Data Transfer Objects (DTOs), are expected to simply be a collection of data. However, the objects that model the behavior of the problem space within the application should use [encapsulation](/principles/encapsulation/) to manage their internal state and behavior. An anemic model frequently fails to follow the [Tell, Don't Ask principle](/principles/tell-dont-ask/), since objects cannot perform operations on their own state, but are constantly manipulated by other objects in a non-object-oriented fashion. Rich domain models provide useful behavior to clients within the system. Some code smells that may indicate an anemic domain model include [exposed collection properties](/antipatterns/exposing-collection-properties/), and over-use of properties in general (especially setters).

## References

[Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight

[Anemic Domain Model](http://www.martinfowler.com/bliki/AnemicDomainModel.html) - Martin Fowler

[Anemic Domain Model is no Antipattern](https://blog.inf.ed.ac.uk/sapm/2014/02/04/the-anaemic-domain-model-is-no-anti-pattern-its-a-solid-design/)

[SOLID - The Next Step is Functional](http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional/) - Mark Seemann
