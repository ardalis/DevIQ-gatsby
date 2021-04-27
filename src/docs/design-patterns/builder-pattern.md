---
title: "Builder Design Pattern"
date: "2018-02-02"
description: The Builder design pattern is a creational pattern, similar to the Factory pattern (Factory Method, Abstract Factory).
---

![Builder Icon](images/Builder-Icon-267x300.png)

The Builder design pattern is a creational pattern, similar to the Factory pattern (Factory Method, Abstract Factory). Unlike the Factory pattern, which typically only offers one method for creating an object, the Builder pattern offers multiple methods that can be used to gradually define the characteristics of the type to be created. This provides a more flexible interface than a single method with a large number of parameters or a complex parameter object.

A typical builder design (to create _SomeType_) has the following characteristics:

- Named *SomeType*Builder to communicate the use of the pattern
- Initializes a simple (or default) private instance of _SomeType_ upon construction
- Exposes methods that set properties on the private _SomeType_ instance
  - Each method returns this, the _SomeTypeBuilder_ instance
- Exposes a Build (or Create) method that simply returns the private _SomeType_ instance
  - In some cases where creating _SomeType_ is expensive, construction may be deferred to this step
- Optionally, expose (static) methods for getting known common configurations of _SomeType_

## A simple example in C#

```csharp
public class AddressBuilder
{
  private Address _address = new Address();

  public AddressBuilder WithStreet(string street)
  {
    _address.Street = street;
    return this;
  }
  
  public AddressBuilder WithState(string state)
  {
    _address.State = state;
    return this;
  }

  // additional WithWhatever methods

  public Address Build()
  {
    return _address;
  }
}
```

## References

[Design Patterns Library](https://www.pluralsight.com/courses/patterns-library) (Pluralsight)

[Applying the Builder Pattern to an Angular Service](https://ardalis.com/applying-the-builder-pattern-to-improve-an-angular-service) (Typescript)

[Using Builder in C# Unit Tests Kata](https://github.com/ardalis/BuilderTestSample)

[Flexible and Expressive Unit Tests with the Builder Pattern](https://www.kenneth-truyers.net/2013/07/15/flexible-and-expressive-unit-tests-with-the-builder-pattern/)
