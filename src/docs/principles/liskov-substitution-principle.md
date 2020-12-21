---
title: "Liskov Substitution Principle"
date: "2014-11-26"
description: The Liskov Substitution Principle (LSP) states that subtypes must be substitutable for their base types.
---

![LiskovSubstitution](images/liskov-substitution-400x400.jpg)

The Liskov Substitution Principle (LSP) states that subtypes must be substitutable for their base types. When this principle is violated, it tends to result in a lot of extra conditional logic scattered throughout the application, checking to see the specific type of an object. This duplicate, scattered code becomes a breeding ground for bugs as the application grows.

Most introductions to object-oriented development discuss inheritance, and explain that one object can inherit from another if it has an "IS-A" relationship with the inherited object. However, this is necessary, but not sufficient. It is more appropriate to say that one object can be designed to inherit from another if it always has an "IS-SUBSTITUTABLE-FOR" relationship with the inherited object. A common way to demonstrate this is with a set of geometric classes. Consider a class Rectangle, with properties for Length and Height. Now to model a Square, we will inherit from Rectangle, because of course a Square "IS-A" special case of a Rectangle. When we implement Square, we can simply enforce its "squareness" by forcing both Length and Height to be set whenever one of these properties is set. This ensures our Square will never have Length != Height. However, this violates an invariant of the base class, Rectangle. In this case, the invariant was never explicitly stated, but there is an expectation among clients of class Rectangle that its Height and Width can be set independently of one another, and that doing so will not have any side effects. Imagine now a bit of code that takes in a Rectangle, sets Height and Width to different values (let's say 3 and 4), and then returns the area of the Rectangle by multiplying its Height by its Width. If one passes in an actual base Rectangle type, the result of this operation will be that the rectangle will have a Height of 3 and a Width of 4 and an area value of 12 will be returned. However, if a Square is passed in, instead, the result of the operation will be a Square with a Height of 4 and a Width of 4 and an area of 16, which is probably not what was expected.

A very common violation of this principle is the partial implementation of interfaces or base class functionality, leaving unimplemented methods or properties to throw an exception (e.g. NotImplementedException). In code that you know is only going to be used by one client that you control, this is fine, but if such classes are going to be in a shared codebase, or worse, framework code that is shipped to third parties, such implementations should be avoided. If a given interface has more features than you require, follow the [Interface Segregation Principle](/principles/interface-segregation) and create a new interface that includes only the functionality your client code requires, and which you can implement fully.

A common code smell that frequently indicates an LSP violation is the presence of type checking code within a code block that should be polymorphic. For instance, if you have a foreach loop over a collection of objects of type Foo, and within this loop there is a check to see if Foo is in fact Bar (subtype of Foo), then this is almost certainly an LSP violation. If instead you ensure Bar is in all ways substitutable for Foo, there should be no need to include such a check.

## References

[SOLID Principles of Object Oriented Design](https://www.pluralsight.com/courses/principles-oo-design) - Pluralsight
