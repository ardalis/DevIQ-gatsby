---
title: "One Thing To Rule Them All"
date: "2014-11-27"
description: Having "One Thing To Rule Them All" can be an antipattern in many systems. Probably the most common example of this antipattern is "One Database to Rule Them All," in which a single database is used by dozens of applications.
---

![one-ring](images/one-ring-300x225.jpg)

Having "One Thing To Rule Them All" can be an antipattern in many systems. Probably the most common example of this antipattern is "One Database to Rule Them All," in which a single database is used by dozens of applications (see below).

Within applications, it's good to follow the [Don't Repeat Yourself](/principles/dont-repeat-yourself) principle, which leads to defining things Once And Only Once. This tends to also promote the [Single Responsibility Principle](/principles/single-responsibility-principle), since you can then have a single class that is responsible for something, and any other part of the system that needs that functionality can get it from this class. However, these principles don't always hold when it comes to the boundaries of your application. Following these principles within an application makes sense because the application should have a cohesive design. Having some coupling within the application to design decisions that affect that application is natural and necessary. However, if you try to extend this beyond one application to many, you can introduce coupling between applications that can make it difficult for any individual application to evolve in the manner best suited to it.

In Domain-Driven Design terminology, applications (or parts of large applications) are separated into different Bounded Contexts. Within a Bounded Context, the language and modeling of the problem space should be consistent and optimized for that context. Communication with other Bounded Contexts can be problematic, as it can introduce coupling and can cause the internal consistency of the model to be sacrificed in order to provide interoperability with other systems. DDD introduces the idea of adding Anti-Corruption Layers (ACLs) between Bounded Contexts, whose purpose is to prevent this from happening.

## Problems with OTTRTA

The biggest problem with One Thing To Rule Them All (OTTRTA) approaches is the coupling they introduce between the Thing and all applications that depend on it. If this Thing can be versioned and deployed separately to each application, the issue is mitigated because individual applications can choose when and how they want to incorporate new versions of the Thing. For example, many applications that depend on a particular version of a package available from NuGet or npm could each choose when and how to update such a dependency. However, when the Thing varies independently from the applications that use it, and the applications have no choice but to use the current (typically the only) version of the Thing, it can create a lot of additional work across many applications in direct proportion to how unstable the Thing is. Alternately, the Thing may be constrained by the applications that depend on it such that it cannot be effectively maintained, for fear of breaking existing applications that depend on it, thus making design sacrifices that may impact many different applications.

## Databases

Certainly the biggest example of the "One Thing To Rule Them All" anti-pattern is at the database level. Having "One Database To Rule Them All" is extremely commonplace within organizations. There are a variety of factors that can contribute to this practice:

- Developers have no control over the database, and database administrators prefer to have a single database to maintain
- Having multiple databases may be more expensive
- Inertia; in many cases nobody has considered the possibility of using multiple databases

Frequently databases are used as integration points between different applications. As such, each individual application cannot work with a data model optimized for its own needs, but must instead use a general-purpose data model. As more and more applications are added to the system and share the same database, it becomes increasingly difficult to make any destructive changes to the database, no matter how valuable these might be for one application, due to the risk of breaking other existing applications. Over time, the database can become increasingly rigid, and frequently it can also become full of dead data structures, no longer used by any application, but left out of fear of removing anything that might break something.

## References

[Domain-Driven Design Fundamentals](http://bit.ly/PS-DDD) on Pluralsight
