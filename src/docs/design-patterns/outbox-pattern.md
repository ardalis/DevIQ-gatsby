---
title: "Outbox Design Pattern"
date: "2025-08-09"
description: The Outbox design pattern is a messaging pattern that can be used to ensure data consistency and reliability in distributed systems.
featuredImage: "./images/outbox-pattern.png"
---

The Outbox design pattern is a messaging pattern that is commonly used in distributed systems to ensure consistency between a database and a message broker. This pattern is useful when you need to send messages to other systems or services, and you want to ensure consistency between the message and the state of the system. One approach to the Outbox pattern works by writing the message to an "outbox" table in the database as part of the same transaction that updates the database state. A separate process then reads from the outbox table and sends the messages to the message broker. This can be useful for different integrations with external dependencies alongside a business application, like sending emails, events, and notifications.

## The Problem

In a distributed system, ensuring that messages are delivered reliably and consistently can be challenging. If a system crashes or a network failure occurs, messages may be lost or not processed correctly. This can lead to inconsistencies between the database state and the messages sent to other systems or services. For example, an order may be created in the database, but the corresponding message to notify other services may not be sent.

This creates a dual-write problem where you need to perform two operations atomically:

1. Update the domain data in the application database
2. Send a message/notification to external systems

Without a way to mitigate the risk of either operation failing, you run into the possibility of "zombie records" and "ghost messages."

- If the database update succeeds but the message sending fails, you have a state inconsistency (zombie record 🧟)
- If the message sending succeeds but the database update fails, you have incorrect data propagated (ghost message 👻)
- Network failures, service outages, or message broker issues can cause message loss 💥

## The Solution

The Outbox Pattern addresses the dual-write problem by storing both business data changes and outgoing messages within a single database transaction. It introduces a dedicated outbox table to hold pending messages, ensuring that they are only created if the associated business operation succeeds. A separate background processor regularly scans the outbox table and delivers these messages to external systems. To further improve reliability, message delivery is designed to be idempotent, so that any duplicates resulting from retries or failures do not cause unintended side effects.

This approach guarantees that if the business operation succeeds, the message will eventually be delivered.

### Implementation Example

Here's a simple example using C# and Entity Framework:

```csharp
public class Order
{
  public int Id { get; set; }
  public string CustomerId { get; set; }
  public decimal Total { get; set; }
  public DateTime CreatedOn { get; set; }
}

public class OutboxMessage
{
  public int Id { get; set; }
  public string Type { get; set; }
  public string Data { get; set; }
  public DateTime CreatedOn { get; set; }
  public bool IsProcessed { get; set; }
  public DateTime? ProcessedOn { get; set; }
}

public class OrderService
{
  private readonly ApplicationDbContext _context;
  
  public OrderService(ApplicationDbContext context)
  {
    _context = context;
  }

  public async Task CreateOrderAsync(CreateOrderRequest request)
  {
    using var transaction = await _context.Database.BeginTransactionAsync();

    try
    {
      // 1. Create the order
      var order = new Order
      {
          CustomerId = request.CustomerId,
          Total = request.Total,
          CreatedOn = DateTime.UtcNow
      };
      
      _context.Orders.Add(order);
      await _context.SaveChangesAsync();

      // 2. Add message to outbox (same transaction)
      var outboxMessage = new OutboxMessage
      {
          Type = "OrderCreated",
          Data = JsonSerializer.Serialize(new 
          {
            OrderId = order.Id,
            CustomerId = order.CustomerId,
            Total = order.Total
          }),
          CreatedOn = DateTime.UtcNow,
          IsProcessed = false
      };

      _context.OutboxMessages.Add(outboxMessage);
      await _context.SaveChangesAsync();
      
      // 3. Commit both operations atomically
      await transaction.CommitAsync();
    }
    catch
    {
      await transaction.RollbackAsync();
      throw;
    }
  }
}
```

The background process that publishes messages from the outbox:

```csharp
public class OutboxMessageProcessor : BackgroundService
{
  private readonly IServiceProvider _serviceProvider;
  private readonly IMessagePublisher _messagePublisher;
  private readonly ILogger<OutboxMessageProcessor> _logger;

  public OutboxMessageProcessor(
    IServiceProvider serviceProvider,
    IMessagePublisher messagePublisher,
    ILogger<OutboxMessageProcessor> logger)
  {
    _serviceProvider = serviceProvider;
    _messagePublisher = messagePublisher;
    _logger = logger;
  }

  protected override async Task ExecuteAsync(CancellationToken stoppingToken)
  {
    while (!stoppingToken.IsCancellationRequested)
    {
      try
      {
        await ProcessPendingMessagesAsync();
        await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Error processing outbox messages: {ex.Message}");
      }
    }
  }

  private async Task ProcessPendingMessagesAsync()
  {
    using var scope = _serviceProvider.CreateScope();
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    var pendingMessages = await context.OutboxMessages
      .Where(m => !m.IsProcessed)
      .OrderBy(m => m.CreatedOn)
      .Take(100)
      .ToListAsync();

    foreach (var message in pendingMessages)
    {
      try
      {
        await _messagePublisher.PublishAsync(message.Type, message.Data);
        message.IsProcessed = true;
        message.ProcessedOn = DateTime.UtcNow;
        await context.SaveChangesAsync();
      }
      catch (Exception ex)
      {
        // Handle error (e.g. log it, retries, dead-lettering, etc)
      }
    }
  }
}
```

## Related Patterns

- [Guaranteed Delivery](https://www.enterpriseintegrationpatterns.com/patterns/messaging/GuaranteedMessaging.html)

## References

- [Building a Resilient Email Sending Method in .NET with SmtpClient, Retry Support, and the Outbox Pattern](https://ardalis.com/building-resilient-email-method-dotnet-retry-outbox-pattern/)
- [Send Email in dotnet with Mimekit, Retry, and Outbox Pattern](https://www.youtube.com/watch?v=qD3ZMH5x3uc)
- [Two-Phase Commit](https://martinfowler.com/articles/patterns-of-distributed-systems/two-phase-commit.html)