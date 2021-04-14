---
title: "Value Object"
date: "2021-02-16"
description: A Value Object is an immutable type that is distinguishable only by the state of its properties.
---

A Value Object is an immutable type that is distinguishable only by the state of its properties. That is, unlike an [Entity](/domain-driven-design/entity/), which has a unique identifier and remains distinct even if its properties are otherwise identical, two Value Objects with the exact same properties can be considered equal. Value Objects are a pattern first described in Evans' [Domain-Driven Design book](http://amzn.to/1Lkgs7B), and further explained in Smith and Lerman's [Domain-Driven Design Fundamentals course](http://bit.ly/PS-DDD).

To produce an immutable type in C#, the type must have all of its state passed in at construction. Any properties must be read-only, which can be achieved using private setters, as in this example:

```csharp
public class SomeValue
{
  public SomeValue(int value1, string value2)
  {
    this.Value1 = value1;
    this.Value2 = value2;
  }

  public int Value1 { get; private set; }
  public string Value2 { get; private set; }
}
```

Being immutable, Value Objects cannot be changed once they are created. Modifying one is conceptually the same as discarding the old one and creating a new one. Frequently, the Value Object can define helper methods (or extensions methods) that assist with such operations. The built-in string object in the .NET framework is a good example of an immutable type. Converting a string in some manner, such as making it uppercase via ToUpper(), doesn't actually change the original string but rather creates a new string. Likewise, concatenating two strings doesn't modify either original string, but rather creates a third one.

Because Value Objects lack identity, they can be compared on the basis of their collective state. If all of their component properties are equal to one another, then two Value Objects can be said to be equal. Again, this is the same as with string types.

Value Objects can be especially useful as a means for describing concepts in an application that have intrinsic rules but which are not themselves entities. In many applications, some concepts that are described as entities would be better off implemented as value objects. For instance, a shipping address could be treated as an Entity, or as a Value Object, but if you were to compare two instances of an address that were both "123 Main St., Anytown, OH, 12345, USA" you would expect them to be equal. Two value objects would be, but two entities would not (since they would each have a different ID). This can complicate the application, since checking for duplicates now becomes a concern (which wouldn't exist if Value Objects had been used).

Generally, validation of Value Objects should not take place in their constructor. Constructors as a rule should not include logic, but should simply assign values. If validation is required, it should be moved to a factory method, and indeed it is a common pattern to make Value Objects' constructors private, and provide one or more public static methods for creating the Value Object. This achieves [separation of concerns](/principles/separation-of-concerns/), since constructing an instance from a set of values is a separate concern from ensuring the values are valid.

## Value types and reference types

Don't confuse *value objects* with *value types*. The former are a DDD pattern that are typically implemented using classes (making them *reference types*). The distinction between value types and reference types is of interest to the underlying platform, but is a lower level concern than the value object pattern used in Domain-Driven Design.

## Value objects and C# records

Although record types in C# offer immutability, a key feature of value objects, they still have some features that make them less suitable than using a common ValueObject base class. [Vladimir Khorikov has a good comparison of the two approaches](https://enterprisecraftsmanship.com/posts/csharp-records-value-objects/).

## References

[An Extensive Tutorial Using Value Objects](https://leanpub.com/tdd-ebook/read#leanpub-auto-value-objects)

[Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight

[Value Types in C#](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)

[Reference Types in C#](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)

[C# 9 Records as DDD Value Objects](https://enterprisecraftsmanship.com/posts/csharp-records-value-objects/)
