---
title: "Dependency Injection"
date: "2014-11-26"
description: Dependency Injection is a technique that facilitates loosely coupled object-oriented software systems.
---

![3173827605_427626c6af](images/3173827605_427626c6af-300x148.jpg)

Dependency Injection is a technique that facilitates loosely coupled object-oriented software systems.  It is closely related to the [Dependency Inversion Principle](/principles/dependency-inversion-principle).  In simple systems, references to collaborating objects are made directly within classes that need to refer to them.  This results in tight coupling between these classes, making them more difficult to test, refactor, and maintain.  Dependency Injection is a technique by which the collaborating objects are passed to the class that needs to work with them, and the class itself codes against an interface or base class, rather than a specific implementation class.  There are several ways inject dependencies into a class, via one of these parts of the class: constructor, property, method.

Constructor injection is the most common approach, and involves passing an instance of the dependency into the class's constructor.  The constructor, in turn, sets the dependency to a local private field, which is then used within the class as needed.  This is also an example of the [Strategy design pattern](/design-patterns/strategy-pattern).  Classes that follow the [Explicit Dependencies Principle](/principles/explicit-dependencies-principle) are easily able to take advantage of constructor dependency injection.

Property injection is similar, but instead of providing the instance of the dependency via the constructor, the dependency is instead set via a property of the class.  This technique is useful in situations where construction of the class cannot be parameterized, such as in ASP.NET web forms systems.  With property injection, the calling code needs to set the dependency properties in order for the class to behave directly, and typically the only way this information is exposed is via documentation, comments, etc.  Constructor injection, on the other hand, ensures that the object can only be instantiated when all of its dependencies are provided, so it eliminates the possibility of an object being in an invalid state (having been created, but without its dependencies set).

Method injection simply involves passing collaborating objects as parameters to methods.  It is most useful on public methods that have dependencies that are not used anywhere else in the class, so constructor and/or property injection would be overkill.  In practice, classes that follow the [Single Responsibility Principle](/principles/single-responsibility-principle) should not often have methods that have very different sets of dependencies than other methods in the class, as this is generally a sign of a lack of cohesion and/or multiple responsibilities.

Dependency injection is related to inversion of control containers, which can be used to automatically and centrally manage which instances dependencies should be provided whenever an object needs to be created.

## See Also

[Dependency Inversion Principle](/principles/dependency-inversion-principle)

[Explicit Dependencies Principle](/principles/explicit-dependencies-principle)

[Strategy Design Pattern](/design-patterns/strategy-pattern)

## References

[SOLID Principles of Object Oriented Design](https://www.pluralsight.com/courses/principles-oo-design) (Pluralsight)

[Design Patterns Library](http://bit.ly/DesignPatternsLibrary) (Pluralsight)

[IOC Containers and Dependency Injection](http://www.martinfowler.com/articles/injection.html) by Martin Fowler (Java-specific)
