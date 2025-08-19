---
title: "Unit of Work Pattern"
date: "2025-08-15"
description: The Unit of Work design pattern is used to group one or more operations into a single transaction.
featuredImage: "./images/unit-of-work-pattern.png"
---

The **Unit of Work (UoW) Pattern** maintains a list of changes (inserts, updates, deletes) to domain objects and coordinates the writing of these changes as a single atomic operation (usually a database transaction). It helps ensure consistency, reduces round-trips, and provides a single commit (or rollback) point. Martin Fowler describes it as a pattern that “keeps track of everything you do during a business transaction that can affect the database. When you're done, it figures out everything that needs to be done to alter the database as a result of your work.”

> If you're a .NET developer, most ORMs (like Entity Framework Core) already implement the Unit of Work pattern through the primary context/session objects. Adding your own abstraction is optional but may be justified depending on your application and concerns like testing, cross-cutting behaviors, transactional boundaries across multiple repositories, domain event dispatching, etc.

## The Problem

Without a Unit of Work, application code might:

1. Perform multiple database operations independently (risking partial failure).
2. Open/close multiple transactions unnecessarily (hurting performance).
3. Lack a single semantic boundary describing a business-level operation (e.g., "Place Order").
4. Have difficulty batching or deferring side-effects until persistence succeeds (e.g., publishing domain events, sending emails, writing messages to an outbox table).

This can lead to data inconsistencies, duplicated logic for transaction management, and leaky persistence concerns creeping into application or domain layers.

## The Solution

The Unit of Work groups a set of operations into a single transactional boundary:

1. Start tracking changes (begin a transaction).
2. Execute domain/application logic that mutates domain entities.
3. Persist all accumulated changes in one atomic commit.

If you're also utilizing a messaging based architecture, you may pair the Unit of Work with an [Outbox Pattern](/design-patterns/outbox-pattern) to ensure reliable message delivery. The messages are stored in an outbox table and only dispatched after the main transaction managed by the Unit of Work commits successfully.

## Relationship to Repository Pattern

These patterns are frequently used together:

- Repository abstracts data access for domain entities
- Unit of Work coordinates the persistence of changes across one or more repositories in a single transaction.

## Implementation Example

One way of implementing the Unit of Work pattern is by creating an `IUnitOfWork` interface that defines the contract for beginning, committing, and rolling back transactions. A sample repository implementation might look like this.

```csharp
public interface IUnitOfWork
{
  Task BeginTransactionAsync(CancellationToken cancellationToken);
  Task CommitTransactionAsync(CancellationToken cancellationToken);
  Task RollbackTransactionAsync(CancellationToken cancellationToken);
}

public interface IRepository<T> where T : EntityBase
{
  Task<T?> GetByIdAsync(int id, CancellationToken ct = default);
  Task AddAsync(T entity, CancellationToken ct = default);
  Task UpdateAsync(T entity);
  Task RemoveAsync(T entity);
  // No CommitAsync/SaveChangesAsync here
}
```

This allows application code to then utilize these two abstractions, as demonstrated in the following example:

```csharp
public class OrderService
{
  private readonly IUnitOfWork _unitOfWork;
  private readonly IRepository<Order> _orderRepository;
  private readonly IRepository<OrderItem> _orderItemRepository;

  public OrderService(IUnitOfWork unitOfWork, IRepository<Order> orderRepository, IRepository<OrderItem> orderItemRepository)
  {
    _unitOfWork = unitOfWork;
    _orderRepository = orderRepository;
    _orderItemRepository = orderItemRepository;
  }

  public async Task PlaceOrderAsync(Order order, CancellationToken cancellationToken)
  {
    await _unitOfWork.BeginTransactionAsync(cancellationToken);
    try
    {
      await _orderRepository.AddAsync(order, cancellationToken);

      foreach (var item in order.Items)
      {
        await _orderItemRepository.AddAsync(item, cancellationToken);
      }

      await _unitOfWork.CommitTransactionAsync(cancellationToken);
    }
    catch
    {
      await _unitOfWork.RollbackTransactionAsync(cancellationToken);
      throw;
    }
  }
}
```

### Note about this example

Notice the example `IRepository<T>` interface lacks a `CommitAsync` or `SaveChangesAsync` method. This is intentional for this example as it can be implied the repository implementation is not responsible for managing transactions. Instead, that responsibility lies with the Unit of Work when these two patterns are paired together. Depending on your implementation or ORM, you may choose to handle this separation different or not at all.

## Related Patterns

- [Repository Pattern](/design-patterns/repository-pattern)
- [Outbox Design Pattern](/design-patterns/outbox-pattern)
- [Domain Events](/domain-driven-design/domain-events)
- [Separation of Concerns](/principles/separation-of-concerns)

## References

- [Microsoft Docs – EF Core Transactions](https://learn.microsoft.com/en-us/ef/core/saving/transactions)
- [Pluralsight - Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/fundamentals-domain-driven-design)
- [Entities, Transactions, and Broken Boundaries by Udi Dahan](https://udidahan.com/2011/03/05/entities-transactions-and-broken-boundaries/)
- [Unit of Work by Martin Fowler](https://martinfowler.com/eaaCatalog/unitOfWork.html)
