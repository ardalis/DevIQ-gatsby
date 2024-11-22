---
title: "Domain Events Pattern"
date: "2015-09-20"
description: Dive deep into the Domain Events pattern. Master the nuances of pre-persistence and post-persistence events to build robust and scalable applications.
featuredImage: "./images/domain-events-pattern.png"
---

## What are Domain Events?

Domain events are events that signify a state change in the domain. They serve as a mechanism to communicate between different parts of the domain without tightly coupling them. In addition to decoupling different areas of the domain model, domain events can also be used (in concert with integration events) to communicate with other parts of the application (such as the UI) or even other systems.

## Pre-Persistence vs Post-Persistence Events

Before diving into code, it's crucial to understand the difference between pre-persistence and post-persistence domain events. 

- **Pre-Persistence Events**: Triggered before the state change is persisted to the database.
- **Post-Persistence Events**: Triggered after the state change is saved to the database.

To delve deeper into this topic, check out these two resources:

- [Pre-Persistence Domain Events](https://www.youtube.com/watch?v=95CxduH1b8A)
- [Post-Persistence Domain Events](https://www.youtube.com/watch?v=j2oLdaK19dQ)

Pre-persistence events are typically triggered and resolved immediately. Post-persistence events are typically queued up on the triggering entity, and then once the entity has been saved, the events are dispatched. This ensures the events are only handled once the state change has been persisted.

## Code Examples

The [Mediator pattern](/design-patterns/mediator-pattern) is commonly used when working with domain events. Let's go through some code examples to understand how to implement Domain Events using [MediatR](https://github.com/jbogard/MediatR) in a C#/.NET application.

First, install the MediatR NuGet package.

```bash
Install-Package MediatR
```

### Defining a Domain Event

Let's define a simple domain event. Unlike commands, events can have 0 to many handlers, and should not return a result. The MediatR `INotification` type is most appropriate:

```csharp
public class NewOrderPlacedEvent : INotification
{
    public int OrderId { get; }

    public NewOrderPlacedEvent(int orderId)
    {
        OrderId = orderId;
    }
}
```

### Publishing a Domain Event

Here is how you can publish this event using MediatR:

```csharp
public class OrderService
{
    private readonly IMediator _mediator;

    public OrderService(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task PlaceOrderAsync(Order order)
    {
        // Logic to place order and save changes

        await _mediator.Publish(new NewOrderPlacedEvent(order.Id));
    }
}
```

### Handling a Domain Event

Finally, let's handle the domain event.

```csharp
public class SendEmailHandler : INotificationHandler<NewOrderPlacedEvent>
{
    public Task Handle(NewOrderPlacedEvent notification, CancellationToken cancellationToken)
    {
        // Logic to send email about the new order
        return Task.CompletedTask;
    }
}
// NOTE: Additional handlers for the same event may be added
```

## Conclusion

The Domain Events pattern is a powerful tool for decoupling different aspects of your domain logic. Using libraries like MediatR makes the implementation in C#/.NET straightforward and clean. Using Domain Events, additional behavior can be added in response to domain state changes, without having to add complexity to the triggering entity or service.

## References

- [Martin Fowler - Domain Event](https://martinfowler.com/eaaDev/DomainEvent.html)
- [Pre-Persistence Domain Events](https://www.youtube.com/watch?v=95CxduH1b8A)
- [Post-Persistence Domain Events](https://www.youtube.com/watch?v=j2oLdaK19dQ)
- [More Domain Events Resources](https://ardalis.com/tags/domain-events/)
- [Sample dotnet Solution with Domain Event Support](https://github.com/ardalis/cleanarchitecture/)
