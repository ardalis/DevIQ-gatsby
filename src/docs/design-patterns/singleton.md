---
title: "Singleton"
date: "2016-06-18"
description: The Singleton design pattern is used to ensure an application never contains more than a single instance of a given type.
---

The Singleton design pattern is used to ensure an application never contains more than a single instance of a given type. It is often considered to be an [antipattern](/antipatterns/antipatterns-overview), since the pattern's implementation places the responsibility of enforcing the single instance behavior on the type itself. This violates the [Single Responsibility Principle](/principles/single-responsibility-principle) and references to the type's static Instance property often result in tight coupling (see [Static Cling](/antipatterns/static-cling)).

An example implementation:

```java
// Bad code! Do not use!
// See http://csharpindepth.com/Articles/General/Singleton.aspx
public sealed class Singleton
{
    private static Singleton instance=null;

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            if (instance==null)
            {
                instance = new Singleton();
            }
            return instance;
        }
    }
}
```

A better approach than the Singleton pattern is to follow the [Explicit Dependencies Principle](/principles/explicit-dependencies-principle) from for classes that depend on a singleton type. Use [dependency injection](/practices/dependency-injection) to pass the object into the type that needs it, and configure the services/IOC container to enforce the object's singleton lifetime behavior.

## References

[Singleton Design Pattern in C#](https://www.pluralsight.com/courses/c-sharp-design-patterns-singleton) - Pluralsight

Jon Skeet on [Implementing the Singleton Pattern in C#](http://csharpindepth.com/Articles/General/Singleton.aspx)
