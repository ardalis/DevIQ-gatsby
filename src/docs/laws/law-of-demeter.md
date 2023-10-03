---
title: "The Law of Demeter"
date: "2023-10-03"
description: "The Law of Demeter (LoD) is a design guideline aimed at reducing coupling between classes in an object-oriented program. Although the Law of Demeter has a mathematical formulation, in simple terms it advises an object to only interact with its immediate friends and not with 'a friend of a friend.'" 
featuredImage: "./images/law-of-demeter.png"
---
The Law of Demeter (LoD) is a design guideline aimed at reducing coupling between classes in an object-oriented program. Although the Law of Demeter has a mathematical formulation, in simple terms it advises an object to only interact with its immediate friends and not with "a friend of a friend." 

## What is the Law of Demeter?

The Law of Demeter (LoD) states that an object should only call methods or access properties of:

- Itself
- Objects passed in as arguments
- Any objects it creates
- Its direct component objects

In other words, you shouldn't dig deep into an object to access its internal parts. The primary goal is to make the system more maintainable and adaptable.

## Why Follow the Law of Demeter?

1. **Reduced Coupling**: By minimizing direct calls to distant classes, the system becomes less tightly coupled.
2. **Improved Readability**: The code remains easier to understand when interactions are kept at a local level.
3. **Ease of Maintenance**: Reduced dependencies mean that changes in one part of the system are less likely to affect others.

### Violating the Law of Demeter

Here's an example where we break the Law of Demeter:

```csharp
public class Engine
{
    public void Start() { /*...*/ }
}

public class Car
{
    public Engine Engine { get; set; }
}

public class Driver
{
    public void StartCar(Car car)
    {
        car.Engine.Start(); // Violates the Law of Demeter
    }
}
```

### Abiding by the Law of Demeter

To follow the Law of Demeter, we encapsulate the behavior within the `Car` class:

```csharp
public class Driver
{
    public void StartCar(Car car)
    {
        car.Start(); // Complies with the Law of Demeter
    }
}

public class Car
{
    private Engine engine;

    public void Start()
    {
        engine.Start();
    }
}
```

By making this change, we encapsulate the `Engine` logic within the `Car` class, thereby adhering to the Law of Demeter. Note that in the new design, the presence of `Engine` is no longer exposed, allowing future versions or subclasses of `Car` to rely on a `Battery` instead of an internal combustion engine, for example.

## Fluent Interfaces and the Law of Demeter

Fluent interfaces, which are often used for building complex objects or orchestrating complex behaviors, seemingly violate the Law of Demeter. In a fluent interface, methods return an object that allows for further method chaining, often delving deep into the object graph.

```csharp
var result = new QueryBuilder()
    .Select("name")
    .From("users")
    .Where("age > 21")
    .Execute();
```

However, if you consider the fluent API as a single cohesive unit, then this isn't truly a violation. The fluent methods are designed to be used in sequence, so they function as a single logical operation.

## When To Break The Law?

Like any guideline, the Law of Demeter is not absolute. There are situations where breaking it might be necessary for better readability or performance. Always consider the trade-offs.

## Conclusion

The Law of Demeter is an effective guideline for promoting low coupling and high cohesion in object-oriented software systems. While it's not a hard rule, abiding by it generally results in cleaner, more maintainable code.

## References

- [Law of Demeter Wikipedia](https://en.wikipedia.org/wiki/Law_of_Demeter)
- [Object-Oriented Design Principles](https://amzn.to/48DIGrZ)
- [Software Engineering: A Practitioner's Approach](https://amzn.to/3LLgEkI)
- [Clean Code: A Handbook of Agile Software Craftsmanship](https://amzn.to/3ZDPj9S)
