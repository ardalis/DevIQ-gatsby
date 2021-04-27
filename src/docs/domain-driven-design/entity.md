---
title: "Entity"
date: "2015-07-02"
description: An Entity is an object that has some intrinsic identity, apart from the rest of its state.
---

An Entity is an object that has some intrinsic identity, apart from the rest of its state. Even if its properties are the same as another instance of the same type, it remains distinct because of its unique identity. As an example, consider a Person class, with properties for first name, last name, and birth date. It's possible that two different instances of Person could have the same name and date of birth, but that wouldn't make them the same person! By contrast, consider a mailing address. If two different packages are being shipped to John Smith, 123 Main Street, Anytown, OH 12345, USA, there is no need to track those two separate addresses as Entities. They are the same because their properties (addressee, street, city, etc.) are identical, and as a result they could be modeled as a [Value Object](/domain-driven-design/value-object/).

## References

[Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight
