---
title: "Unit of Work Pattern"
date: "2025-08-18"
description: Learn about the Unit of Work design pattern, which maintains a list of objects affected by a business transaction and coordinates writing out changes and resolving concurrency problems.
featuredImage: "./images/unit-of-work-pattern.png"
---

The **Unit of Work Pattern** maintains a list of objects affected by a business transaction and coordinates writing out changes and resolving concurrency problems. It tracks changes made to a set of domain objects and ensures that all changes are committed together as a single transaction or all are rolled back if any operation fails.

<TODO>

## See Also

- [Repository Pattern](/design-patterns/repository-pattern)
- [Specification Pattern](/design-patterns/specification-pattern)
- [Separation of Concerns](/principles/separation-of-concerns)

## References

- [Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/unitOfWork.html) by Martin Fowler
