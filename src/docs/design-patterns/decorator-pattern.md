---
title: "Decorator Design Pattern"
date: "2024-02-22"
description: "The Decorator Design Pattern is a structural pattern used to add new functionalities to objects dynamically without altering their structure. This pattern relies on a decorator class which wraps the original class and matches its interface, while providing additional behavior before or after the delegate call to the original class method."
featuredImage: "./images/abstract-factory-design-pattern.png"
---

## What is the Decorator Design Pattern?

The Decorator Design Pattern is a structural pattern used to add new functionalities to objects dynamically without altering their structure. This pattern relies on a decorator class which wraps the original class and matches its interface, while providing additional behavior before or after the delegate call to the original class method.

This pattern is an excellent way to follow the [Single Responsibility Principle](/principles/single-responsibility-principle), since cross-cutting concerns like Logging, Validation, Authorization checks, and more can be pulled out of a class and moved into a single-purpose decorator class. This also helps achieve the [Open-Closed Principle](/principles/open-closed-principle), since new functionality can be added to existing classes (without modifying them) through the use of decorators.

## When to Use It

1. **System Independence**: When you want the system to be independent of how its objects are created, composed, and represented.
2. **Interchangeable Families of Products**: When a family of products is intended to be used together, and you need to enforce this constraint.
3. **Isolation of Concrete Classes**: When you want to provide a library of products and reveal only their interfaces, not their implementations.

## C# Example

Here's what the sequence represents:

- The Client Program asks the SQLDatabaseFactory to CreateDatabase().
- SQLDatabaseFactory returns an instance of SQLDatabase.
- The Client Program then calls Connect() on the SQLDatabase instance.
- SQLDatabase responds to indicate that it's "Connecting to SQL Database...".

This sequence is repeated for the NoSQL database for demonstration (not shown in the code).

## Advantages

- **Consistency**: Ensures that the objects you're using belong to the same family of products, thereby improving consistency.
- **Loose Coupling**: Helps in reducing the coupling between the client code and concrete classes.
- **Ease of Extensibility**: Makes it easier to add new types of products into the system.

## Conclusion

The Abstract Factory Pattern provides an efficient way to manage and create families of related products. It enables loose coupling and high cohesion, making the code more maintainable and extensible. It is a crucial pattern for large systems and libraries that aim to maintain consistency and modularity.

## References

Amazon - [Design Patterns: Elements of Reusable Object-Oriented Software](http://amzn.to/vep3BT) - Gang of Four

[Pluralsight - Design Patterns Library](http://bit.ly/DesignPatternsLibrary)
https://www.pluralsight.com/courses/c-sharp-design-patterns-proxy