---
title: "Static Cling"
date: "2015-10-06"
description: Static Cling is a code smell used to describe the undesirable coupling introduced by accessing static (global) functionality, either as variables or methods.
---

Static Cling is a code smell used to describe the undesirable coupling introduced by accessing static (global) functionality, either as variables or methods. This coupling can make it difficult to test or modify the behavior of software systems. Consider the following example:

```java
public class CheckoutController
{
    public void Checkout(Order order)
    {
        // verify payment

        // verify inventory

        LogHelper.LogOrder(order);
    }
}

public static class LogHelper
{
    public static void LogOrder(Order order)
    {
        using (System.IO.StreamWriter file = 
            new System.IO.StreamWriter(@"C:\\Users\\Steve\\OrderLog.txt", true))
        {
            file.WriteLine("{0} checked out.", order.Id);
        }
    }
}

public class Order
{
    public int Id { get; set; }
}
```

In the above code, any attempt to unit test the Checkout method will be made much more difficult by the static LogOrder method, which has a dependency on the file system and a particular file path. While it's certainly possible to write an integration test that will still log to the chosen path, or to refactor this code so that the file path comes from configuration or something similar, it would be far better if the dependency on the file system didn't exist, since it isn't important to what Checkout() is trying to do.

To refactor away from Static Cling, replace the static method call with an instance method call on an instance type (frequently implementing an interface), and use the [strategy design pattern](/design-patterns/strategy-pattern/) (also known as [dependency injection](/practices/dependency-injection/)) to inject the dependency into the class that needs the functionality. In the case where the static functionality is not code you control, you can access it through an [Adapter](/design-patterns/adapter-design-pattern/). This approach is shown below:

```java
public class CheckoutController
{
    private readonly IOrderLoggerAdapter _orderLoggerAdapter;

    public CheckoutController(IOrderLoggerAdapter orderLoggerAdapter)
    {
        _orderLoggerAdapter = orderLoggerAdapter;
    }

    public CheckoutController()
        : this(new FileOrderLoggerAdapter())
    {
    }

    public void Checkout(Order order)
    {
        // verify payment

        // verify inventory

        _orderLoggerAdapter.LogOrder(order);
    }
}

public static class LogHelper
{
    public static void LogOrder(Order order)
    {
        using (System.IO.StreamWriter file =
            new System.IO.StreamWriter(@"C:\\Users\\Steve\\OrderLog.txt", true))
        {
            file.WriteLine("{0} checked out.", order.Id);
        }
    }
}

public interface IOrderLoggerAdapter
{
    void LogOrder(Order order);
}

public class FileOrderLoggerAdapter : IOrderLoggerAdapter
{
    public void LogOrder(Order order)
    {
        LogHelper.LogOrder(order);
    }
}

public class Order
{
    public int Id { get; set; }
}
```

In the above code, the OrderController no longer has a direct dependency on the static LogHelper.LogOrder() method. It now follows the [Explicit Dependencies Principle](/principles/explicit-dependencies-principle/), since its constructor declares the collaborating types it requires to function. This would allow the code to be modified in the future by simply passing in a different implementation of the IOrderLoggerAdapter, and would also allow unit tests to test the other behavior in the Checkout() method without the need for certain drives, paths, or files to exist on the test machine. If the application is using a container to resolve class dependencies, configuring the runtime behavior of how OrderController will get the classes it depends on would be done in the container's configuration. If a container is not in use, or if existing client code needs to continue to call the default constructor of OrderController, a technique called poor man's dependency injection can be used. With this technique, a default constructor is configured to call through to the constructor that accepts dependencies, with instances configured that provide the original behavior. In this case, the default constructor passes a new instance of the FileOrderLoggerAdapter, which contains the original behavior of calling LogHelper.LogOrder().

Although Static Cling refers specifically to references to static methods (or properties), the same consequences occur when instance variables are instantiated and immediate called within a method. Be careful of where in your code you make decisions about a method or class's collaborators, and remember that [New is Glue](http://ardalis.com/new-is-glue/) if you choose to instantiate a type that has dependencies on infrastructure concerns (e.g. file system, database, etc).

## See Also

[Dependency Injection](/practices/dependency-injection/)

[Strategy Design Pattern](/design-patterns/strategy-pattern)

[Adapter Design Pattern](/design-patterns/adapter-design-pattern)

[Explicit Dependencies Principle](/principles/explicit-dependencies-principle/)

## References

[Refactoring Fundamentals](http://www.pluralsight.com/courses/refactoring-fundamentals) on Pluralsight

[New is Glue](http://ardalis.com/new-is-glue/)
