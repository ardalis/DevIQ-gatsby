---
title: "Anemic Model"
date: "2023-07-20"
description: In object-oriented programming, and especially in Domain-Driven Design, objects are said to be anemic if they have state but lack behavior.
featuredImage: "./images/anemic-model.png"
---

In object-oriented programming, and especially in Domain-Driven Design, objects are said to be _anemic_ if they have state but lack behavior. Some kinds of objects, such as Data Transfer Objects (DTOs), are expected to simply be a collection of data. However, the objects that model the behavior of the problem space within the application should use [encapsulation](/principles/encapsulation/) to manage their internal state and behavior. An anemic model frequently fails to follow the [Tell, Don't Ask principle](/principles/tell-dont-ask/), since objects cannot perform operations on their own state, but are constantly manipulated by other objects in a non-object-oriented fashion. Rich domain models provide useful behavior to clients within the system. Some code smells that may indicate an anemic domain model include [exposed collection properties](/antipatterns/exposing-collection-properties/), and over-use of properties in general (especially setters).

What does an anemic model look like in terms of code? An anemic model tries to represent a domain object but only takes care of the properties, missing the behaviors as part of the model. So where do the behaviors go for these anemic models? The behaviors are usually extracted to service objects in a business layer.

> **Note**: Models with properties and no behaviors can be considered **persistence models**. However, if the behaviors for these models are in a business layer, the models could be considered anemic.

How do you avoid anemic models in Domain-Driven Design? Keep in mind that Domain-Driven Design works well with highly-complex _business_ models. The focus should be on working with the business domain, not the technical implementation. When the focus is more on the technical than the business, anemic models are more likely to happen. Also remember that Domain-Driven Design works in a _highly-complex_ environment, one that makes sense to keep the business logic with the domain models.

If you are taking an object-oriented approach, anemic models are less desirable. However, if you are taking a functional programming approach with Domain-Driven Design, anemic models are expected, as functional programming takes an approach with immutable data structures and behaviors implemented as functions that operate on those immutable records.

## References

[Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight

[Anemic Domain Model](http://www.martinfowler.com/bliki/AnemicDomainModel.html) - Martin Fowler

[Anemic Domain Model is no Antipattern](https://blog.inf.ed.ac.uk/sapm/2014/02/04/the-anaemic-domain-model-is-no-anti-pattern-its-a-solid-design/)

[SOLID - The Next Step is Functional](http://blog.ploeh.dk/2014/03/10/solid-the-next-step-is-functional/) - Mark Seemann
