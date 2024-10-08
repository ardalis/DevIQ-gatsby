---
title: "Single Point of Enforcement"
date: "2024-10-08"
description: We enforce business rules through a Single Point of Enforcement, ensuring that all operations related to order processing go through a gatekeeper function that validates inputs and applies consistent logic.
featuredImage: "./images/single-point-of-enforcement.png"
---

## Introduction

In complex software systems, it's critical to ensure that specific operations are consistently handled and that business rules are enforced uniformly. The **Single Point of Enforcement** (SPE) is a design approach that centralizes control over certain operations, acting as a gatekeeper to ensure that all necessary validations, rules, and logic are applied. This prevents duplication of logic, reduces the risk of errors, and maintains consistency across a codebase.

## The Practice of Single Point of Enforcement

The core idea of using a Single Point of Enforcement (SPE) is that any operation or behavior that needs to adhere to certain rules should be routed through a single gatekeeper. Whether it's domain logic, business rules, or validation requirements, the SPE ensures that no operation can bypass the checks and processes required to maintain system integrity. Implementing this practice requires **enforcing** the use of the SPE, to ensure there are not multiple ways in which a given operation can be performed.

### How SPE Works:

1. **Centralized Control**: All operations of a specific type (e.g., processing orders, making transactions) must go through a designated entry point, like a function, method, or service.
2. **Validation and Enforcement**: The gatekeeper applies necessary business logic and validation rules to every operation, ensuring consistency and adherence to requirements.
3. **Uniform Execution**: No alternative methods or shortcuts exist to bypass this gatekeeper, ensuring a uniform approach to handling the operation across the entire system.
4. **Enforcement of the SPE**: If developers (inadvertently or otherwise) attempt to bypass the SPE, automated checks within the system should prevent and/or flag it. 

## Advantages of Single Point of Enforcement

### Consistency Across Operations

   With a single enforcement point, you ensure that all similar operations follow the same rules and logic, preventing discrepancies across different parts of the system.

### Reduction of Duplication

   By centralizing control, you avoid the risk of repeating the same logic in multiple places. This reduces code duplication and the potential for errors or omissions.

### Improved Maintainability

   If business rules or validation logic change, you only need to update the central enforcement point, rather than finding and modifying multiple locations in the codebase.

### Enhanced Security and Validation

   Sensitive operations can be tightly controlled, ensuring that all inputs and operations are validated before proceeding. This helps enforce security protocols or regulatory requirements.

### Encapsulation of Business Logic

   By enforcing rules in a single place, you encapsulate business logic, keeping it separated from the rest of the system, making it easier to understand, maintain, and test.

## Examples of SPE in Action

### Example - Aggregates in Domain-Driven Design

In [Domain-Driven Design (DDD)](/domain-driven-design/ddd-overview), an [Aggregate](/domain-driven-design/aggregate-pattern) acts as the Single Point of Enforcement for a cluster of related entities. The aggregate root is the only entry point through which operations can be performed, ensuring that all changes to the internal entities are validated and consistent with business rules.

#### Code Example

```csharp
public class Order : AggregateRoot {
    private List<OrderItem> _orderItems;
    
    public void AddItem(OrderItem item) {
        // Business rule: Ensure no duplicate items are added
        if (_orderItems.Any(i => i.ProductId == item.ProductId)) {
            throw new InvalidOperationException("Item already added.");
        }
        _orderItems.Add(item);
    }

    // All modifications to the Order must go through the aggregate root
}
```

In this example, the Order aggregate root acts as the single gatekeeper for any modifications to the order items. All rules are enforced through the aggregate, ensuring consistency.

### Example - Value Objects in Domain-Driven Design

[Value Objects](/domain-driven-design/value-object) encapsulate specific concepts and behaviors, ensuring that certain operations, such as validation, formatting, and comparisons, are centralized. They enforce immutability and other rules to maintain consistency.

#### Code Example

```csharp
public class Money : ValueObject {
    public decimal Amount { get; }
    public string Currency { get; }

    public Money(decimal amount, string currency) 
    {
        // All operations involving money must respect these rules

        if (amount < 0) throw new ArgumentException("Amount must be non-negative.");
        if (string.IsNullOrEmpty(currency)) throw new ArgumentException("Currency must be specified.");
        
        Amount = amount;
        Currency = currency;
    }
}
```

Here, the Money value object acts as the single point of enforcement for all money-related operations. Any invalid input is immediately rejected, ensuring that all instances of Money are valid.

## Patterns That Support SPE

Aggregates (DDD): Aggregates act as a natural SPE by funneling all operations through the aggregate root, enforcing rules and consistency.

Value Objects (DDD): Value Objects enforce consistency and rules at a fine-grained level, ensuring that individual units of data maintain integrity.
Command Handlers: In command-based architectures, command handlers centralize the execution of operations, ensuring that validation and business logic are applied in one place.

[Facade Pattern](/design-patterns/facade-pattern): The Facade Pattern provides a simplified interface to complex subsystems, acting as a single gatekeeper through which all operations must pass.

## Conclusion

The Single Point of Enforcement principle is a powerful approach to ensuring that critical business rules and validations are applied consistently across a system. By funneling all relevant operations through a single gatekeeper, you reduce duplication, improve maintainability, and increase the reliability of your codebase. This practice is supported by various design patterns, including DDD aggregates and value objects, which naturally enforce these principles within their bounded contexts.
