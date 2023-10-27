---
title: "Factory Method Pattern"
date: "2023-10-27"
description: The Factory Method pattern is an object creation pattern from the Design Patterns book. It defines an interface or abstract class for creating an object but leaves the specifics to the implementations.
featuredImage: "./images/factory-method-pattern.png"
---

The Factory Method pattern is an object creation pattern from the [Design Patterns book, by the so-called Gang of Four (GoF)](http://amzn.to/1GYRo2O). It enables us to define an interface or abstract class for creating an object, leaving the specific details to the implementations. The Factory Method pattern allows for loose coupling and enhanced flexibility with regards to creating objects in code.

The pattern works like this:

1. Create an interface or abstract base class with a method for creating an object.
2. Implement the interface or inherit from an abstract base class and define the abstract methods.
3. Swap implementations as needed.

Here is an example of setting up interfaces and classes with the Factory Method pattern:

```csharp
using System;

interface IProductFactory 
{
    IProduct CreateProduct();
}

class MentoringFactory : IProductFactory 
{
    public IProduct CreateProduct()
    {
        return new MentoringOpportunity();
    }
}

class TrainingFactory : IProductFactory 
{
    public IProduct CreateProduct()
    {
        return new TrainingOffering();
    }
}

interface IProduct 
{
    void DisplayDetails();
}

class MentoringOpportunity : IProduct 
{
    public void DisplayDetails()
    {
        Console.WriteLine("This is a mentoring opportunity.");
    }
}

class TrainingOffering : IProduct 
{
    public void DisplayDetails()
    {
        Console.WriteLine("This is a training offering.");
    }
}
```

Now with this code, how are the factories used? Notice that the only thing that is changing here is the specific implementation of the factory.

```csharp
class Program 
{
    static void Main()
    {
        IProductFactory productFactory = new MentoringFactory();
        IProduct productItem = productFactory.CreateProduct();
        productItem.DisplayDetails();

        IProductFactory productFactory2 = new TrainingFactory();
        IProduct productItem2 = productFactory2.CreateProduct();
        productItem2.DisplayDetails();
    }
}
```

You can use [dependency injection](/practices/dependency-injection) to use the factory interfaces where needed and then pass along specific implementations of the factories when needed.

For example, suppose we had a collection of web pages that display collections of products. The base web page for displaying products - `BaseProductDisplay` - could have a `IProductFactory`` injected in. All product display pages would inherit from this page. 

For the page that displays [mentoring opportunities](https://nimblepros.com/buy-now/ols/categories/mentoring), the `MentoringFactory` can be injected. For a separate page that displays the [training offerings](https://nimblepros.com/training), the `TrainingFactory` could be injected.
