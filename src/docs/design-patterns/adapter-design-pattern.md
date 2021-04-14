---
title: "Adapter Design Pattern"
date: "2014-11-26"
description: The Adapter Design Pattern, also known as the Wrapper, allows two classes to work together that otherwise would have incompatible interfaces.
---

The Adapter Design Pattern, also known as the Wrapper, allows two classes to work together that otherwise would have incompatible interfaces.  In this case, this software design pattern maps particularly well to the real-world example of an electrical power adapter, which must be used to allow a device to use power.  For instance, most mobile devices today can be powered via some form of USB power, or via AC current.  However, in both cases there is no direct way for the device to plug into the wall or USB port.  The solution is an adapter.  In fact, in some cases adapters can be chained together, as in the case of a USB-to-Device cable that can also be plugged into a wall or car electrical outlet that has a USB power port.

The Adapter pattern relies on a common *abstraction* which defines the interface client code will consume. Different implementations of this interface are then created to support different otherwise incompatible ways of achieving the goal of the abstraction. For example, an application may wish to send notifications as part of its functionality. However, there are several approaches to sending notifications that have different interfaces:

- `SendEmail(string toEmail, string fromEmail, string subject, string body)`
- `SendText(string toNumber, string message)`
- `SendToastNotification(string username, string message)`

Instead of writing complex code that needs to work with all of these different interfaces, an adapter interface can be used:

```csharp
public interface INotificationAdapter
{
    void Notify(User user, Message message);
}
```

Given this adapter interface, specific implementations can be written to support each messaging library:

```csharp
public class EmailNotificationAdapter : INotificationAdapter
{
    private readonly IEmailSender _emailSender;
    private readonly EmailSettings _settings;

    public EmailNotificationAdapter(IEmailSender emailSender,
        EmailSettings settings)
    {
        _emailSender = emailSender;
        _settings = settings;
    }

    public void Notify(User user, Message message)
    {
        if(!user.AllowEmailNotifications) return;

        string fromEmail = _settings.DefaultFromAddress;

        _emailSender.Send(user.EmailAddress, fromEmail, message.Title, message.Details);
    }
}
```

Notice that the `INotificationAdapter` abstraction does not expose any details about how the notification might be sent. An Adapter should ideally be written using the abstractions of the application that will be using it, and should avoid exposing implementation details implicitly or explicitly. Recall that the [Dependency Inversion Principle](/principles/dependency-inversion-principle) requires that abstractions should not depend on details.

The Adapter pattern also enables the [Open-Closed Principle](/principles/open-closed-principle), since new functionality can be added to the system's use of notifications without requiring existing code to be modified. Instead, new instances of the `INotificationAdapter` can be added, extending the ways in which notifications may be sent.

Adapters are frequently used in [Domain-Driven Design](/domain-driven-design/ddd-overview) as part of [Anti-Corruption Layers](/domain-driven-design/anti-corruption-layer).

## Intent

Convert the interface of a class into another interface clients expect.  Adapter lets classes work together that couldn't otherwise because of incompatible interfaces. [GoF](http://amzn.to/vep3BT)

## References

[Pluralsight - C# Design Patterns: Adapter](https://www.pluralsight.com/courses/c-sharp-design-patterns-adapter)

Amazon - [Design Patterns: Elements of Reusable Object-Oriented Software](http://amzn.to/vep3BT) - Gang of Four

[Pluralsight - Design Patterns Library](http://bit.ly/DesignPatternsLibrary)
