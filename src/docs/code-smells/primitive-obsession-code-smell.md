---
title: "Primitive Obsession Code Smell"
date: "2024-01-14"
description: Primitive Obsession describes code in which the design relies too heavily on primitive types, rather than solution-specific abstractions. It often results in more verbose code with more duplication of logic, since logic cannot be embedded with the primitive types used.
featuredImage: "./images/primitive-obsession.png"
---

Primitive Obsession describes code in which the design relies too heavily on primitive types, rather than application-specific abstractions. It often results in more verbose code with more duplication of logic, since logic cannot be embedded with the primitive types used.

Primitives refer to built-in types, like bool, int, string, etc. The primitive obsession code smell refers to overuse of primitive types to represent concepts that aren't a perfect fit, because the primitive supports values that don't make sense for the element they're representing. For example, it's not unusual to use a string to represent a ZIP Code value or a Social Security Number. Many systems will use an int to represent a value that cannot be negative, such as the number of items in a shopping basket. In such a case, if the system even bothers to enforce the invariant stating that shopping basket quantity must be positive, it must do so somewhere other than in the type representing the quantity.

Primitives, when passed between contexts, do not carry forward any context. If they were previously validated, that information has been lost. Often this results in validation and guard clauses in many layers and methods as a means of defensive coding, resulting in duplicate and often inconsistent rules. Instead, primitive inputs received by the system should be parsed into types that are better constrained and designed to model the concept being represented. [Parse, Don't Validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/) is good guidance when it comes to how to deal with primitives and user input.

## Problems with (Over)Use of Primitive Types

### Lack of Expressiveness

Primitive types don't express or convey the intent of the developer or how the type is intended to be used by the domain. It's very easy to imagine a host of invalid states that primitive types can hold, and which must be defended against with validation, guard clauses, or error handling.

### Increased Risk of Errors

Of course, since there is no encapsulation, there is no way to enforce whether or when validation or other enforcement of constraints should take place. This relies on developer diligence which of course means a higher chance of problems slipping by.

For example, there would be nothing in such a system to prevent an email address being assigned to a phone number property.

### Duplication of Logic

Validation, guard clauses, and formatting logic must be repeated throughout the codebase.

For example, email input might be validated when received by the UI, again at a service boundary, and again within a domain entity. In each case, the `string` received has no constraints and thus cannot be trusted to in fact represent an email address.

### Difficult Maintenance

Because of the above-mentioned duplication, updates to logic related to the concepts being represented by primitive types require shotgun surgery - concurrent updates to many parts of the code base - to implement.

For example, if email validation uses a regular expression, and that expression needs to be updated (or another approach is taken), this change would need to be applied in the UI, service, and domain model parts of the code base.

### Reduced Type Safety

Primitives lack much semantic meaning. Sure, you can say that a quantity should be numeric (int) and a customer name should be a bunch of characters (string), which is something. But then when you use the same string type to represent SSN, Phone, Zip Code, and Street Address its usefulness as a type safety tool drops pretty quickly.

For example, a copy paste mistake could easily result in code that assigned Phone to Zip Code and the compiler would take no issue with it.

In strongly typed OOP languages, the type system is a huge advantage in writing better, more maintainable, more provably correct code. But only if you use real types where appropriate!

### Poor Code Readability

Excessive use of primitives leads to longer and less expressive method signatures.

For example, a method like `AddOrderToCustomer(int customerId, int orderId)` could easily be called with the `orderId` first and the `customerId` second without the compiler complaining. Or you might have methods like `ProcessOrder(string id, string type, decimal value)` which would be much more expressive using types: `ProcessOrder(OrderId id, OrderType type, Money value)`.

### Difficulty in Extending Behavior

If you need to add behavior to a type, such as formatting logic or common functionality, there's no way to do so short of using extension methods on the primitive type.

For example, to add currency conversion to decimal types used for money requires external code and probably additional primitive values (`string currency` for instance), as opposed to a `Money` type that might have built-in properties representing the currency and units represented.

### Testing Challenges

You may need to write many more tests for validation scenarios in many more methods than if you'd just used constrained custom types.

### Violation of Object-Oriented Principles

Primitive Obsession represents a lack of abstraction and encapsulation. The result is a more procedural programming style within an object-oriented language or design.

For example, instead of encapsulating behavior, including validation and constraints, within types themselves, such logic is spread out across many unrelated parts of the codebase.

## Addressing Primitive Obsession

- Use [Value Objects](../domain-driven-design/value-object.md) to replace one or more related primitive types on [Entities](../domain-driven-design/entity.md)
- Use Strongly Typed IDs for Entities and [Aggregates](../domain-driven-design/aggregate-pattern.md)
- Use Enums (or [SmartEnums](https://www.nuget.org/packages/Ardalis.SmartEnum) since enums are still pretty primitive in many cases) instead of magic strings/numbers for predefined sets of values
- Parse primitive user input into non-primitive types within the UI layer and use custom types everywhere else

## References

- [Weekly Dev Tips Episode 12 - Primitive Obsession](https://weeklydevtips.com/episodes/012)
- [Dealing with Primitive Obsession (Jimmy Bogard)](https://lostechies.com/jimmybogard/2007/12/03/dealing-with-primitive-obsession/)
- [Primitive Obsession (Steve Dunn)](https://dunnhq.com/posts/2021/primitive-obsession/)
- [Vogen - Value Object Generator](https://github.com/SteveDunn/Vogen)
- [Parse, Don't Validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
