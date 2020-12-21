---
title: "Encapsulation"
date: "2015-06-19"
description: Encapsulation refers to the idea that objects should manage their own behavior and state, so that their collaborators need not concern themselves with the object's inner workings.
---

Encapsulation refers to the idea that objects should manage their own behavior and state, so that their collaborators need not concern themselves with the object's inner workings. Object-oriented programming languages provide built-in support to control the visibility of class-level structures, and developers should use these constructs to differentiate between objects' public and non-public interfaces. Failure to properly apply the principle of encapsulation to object-oriented designs leads to many related code smells and design problems, such as violating [Don't Repeat Yourself](/principles/dont-repeat-yourself/), [Tell Don't Ask](/principles/tell-dont-ask/), and [Flags Over Objects](/antipatterns/flags-over-objects/), to name a few.

Objects should ideally be kept in valid states, controlling how their state is modified to avoid being placed into states that do not make sense. For example, a class representing a product might include some state representing that product's volume (let's say in Liters). This volume could be represented as a numeric type, such as double, but it would never make sense for the value to be negative. If the class exposes the data as a public field, then any code in the system could set that value to be negative:

```java
public class Product
{
   public double Volume;
}
```

Most modern object-oriented languages support the notion of Properties, so many developers would improve upon this design slightly by using a property:

```java
public class Product
{
  public double Volume { get; set; }
}
```

However, this still doesn't ensure the Product's volume remains positive. Only once a private backing field is explicitly introduced can we achieve this:

```java
public class Product
{
  private double _volume;
  public double Volume {
    get { return _volume; }
    set
    {
      if (value < 0)
      {
        throw new ArgumentOutOfRangeException("Volume must be non-negative.");
      }
      _volume = value;
    }
  }
}
```

This design is better, but still represents a bit of the [Primitive Obsession code smell](https://www.pluralsight.com/courses/refactoring-fundamentals). Why is it the Product class's responsibility to know about valid states for Volume? Volume, at least in our Euclidean geometry-based world, can never be negative in any context, not just for Products. It might make sense to represent Volume as its own type, probably a Value Object, which could include its own behavior (at a minimum, a way of enforcing limits on valid values, but probably also other important details, like units).

As a simple example:

```java
public class Volume
{
  private Volume(double amount, string unitOfMeasure)
  {
    if(amount < 0) throw new ArgumentOutOfRangeException("Volume amount must be non-negative.");
    Amount = amount;
    UnitOfMeasure = unitOfMeasure;
  }
  public static Volume InLiters(double amount)
  {
    return new Volume(amount, "Liters");
  }
  // include other static factory methods here for other units
  public double Amount { get; private set; }
  public string UnitOfMeasure { get; private set; }

  // perhaps include methods here to convert from one unit to another
}
```

At this point Product no longer needs to worry about whether Volume is in a positive state, and so can be made simpler. However, it still shouldn't directly expose its internal state, since it's likely Product would want to react to any changes made to its state.

Exposing properties directly using getters and setters, and [exposing collection properties](/antipatterns/exposing-collection-properties/) (even without setters) are two of the most common violations of encapsulation.
