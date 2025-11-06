---
title: "Make Invalid States Unrepresentable"
date: "2025-11-06"
description: "Design your types and data structures so that invalid or illegal states cannot be expressed or constructed in the first place."
featuredImage: "./images/make-invalid-states-unrepresentable.png"
---

"Make Invalid States Unrepresentable" is a design principle that advocates for structuring your types, classes, and data models in such a way that invalid or illegal states simply cannot be expressed or constructed. By leveraging the type system and careful API design, you can eliminate entire categories of bugs at compile time rather than having to validate and handle invalid states at runtime.

## The Problem

In many software systems, data structures are designed in ways that allow invalid combinations of values. For example, consider a user profile that can be in one of two states: a guest user or an authenticated user. A naive implementation might look like this:

```csharp
public class UserProfile
{
    public bool IsAuthenticated { get; set; }
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? SessionToken { get; set; }
}
```

This design allows for invalid states such as:

- `IsAuthenticated = true` but `Username`, `Email`, or `SessionToken` are null
- `IsAuthenticated = false` but authentication fields are populated
- Any combination where the boolean flag doesn't match the presence of authentication data

These invalid states lead to defensive code throughout the application, with constant null checks and validation logic scattered everywhere. This principle is highly correlated with the [primitive obsession code smell](/code-smells/primitive-obsession-code-smell), since primitive types almost always are able to represent more possible values than a specific property or variable's set of valid states.

## The Solution

Instead of allowing invalid states to exist, redesign the types to make them impossible:

```csharp
public abstract class UserProfile
{
    private UserProfile() { } // Prevent external instantiation
    
    public sealed class Guest : UserProfile { }
    
    public sealed class Authenticated : UserProfile
    {
        public string Username { get; }
        public string Email { get; }
        public string SessionToken { get; }
        
        public Authenticated(string username, string email, string sessionToken)
        {
            Username = username ?? throw new ArgumentNullException(nameof(username));
            Email = email ?? throw new ArgumentNullException(nameof(email));
            SessionToken = sessionToken ?? throw new ArgumentNullException(nameof(sessionToken));
        }
    }
}
```

Now it's impossible to have an authenticated user without the required fields, and there's no boolean flag that can be out of sync with the actual state.

## Benefits

1. **Compile-Time Safety**: Many bugs are caught at compile time rather than runtime
2. **Reduced Testing Burden**: You don't need to test for invalid states that can't exist
3. **Clearer Intent**: The code explicitly communicates what states are valid
4. **Less Defensive Programming**: Eliminate scattered validation and null checks
5. **Better Refactoring**: Changes to state machines become safer and more obvious

## Real-World Examples

### Payment Status

Instead of using flags (see [Flags Over Objects Antipattern](https://deviq.com/antipatterns/flags-over-objects)) that can conflict:

```csharp
// Bad: Invalid states possible
public class Payment
{
    public bool IsPending { get; set; }
    public bool IsCompleted { get; set; }
    public bool IsFailed { get; set; }
    public string? TransactionId { get; set; }
    public string? FailureReason { get; set; }
}
```

Use a proper state representation:

```csharp
// Good: Only valid states possible
public abstract class PaymentState
{
    private PaymentState() { }
    
    public sealed class Pending : PaymentState { }
    
    public sealed class Completed : PaymentState
    {
        public string TransactionId { get; }
        public Completed(string transactionId) 
            => TransactionId = transactionId;
    }
    
    public sealed class Failed : PaymentState
    {
        public string Reason { get; }
        public Failed(string reason) 
            => Reason = reason;
    }
}
```

### Optional Values

Instead of using null with a separate "has value" flag:

```csharp
// Bad: Flag and value can be inconsistent
public class Configuration
{
    public bool HasCustomTimeout { get; set; }
    public int TimeoutSeconds { get; set; }
}
```

Use proper optional types:

```csharp
// Good: Either has a value or doesn't
public class Configuration
{
    public int? TimeoutSeconds { get; set; }
    // Or use Option<T> from functional libraries
}
```

## Related Principles and Patterns

- [Encapsulation](/principles/encapsulation) - Protecting object invariants
- [Fail Fast](/principles/fail-fast) - Detecting problems as early as possible
- [Type Safety](/principles/encapsulation) - Using the type system to prevent errors
- [Parse, Don't Validate](/practices/parse-dont-validate) - Creating valid objects from input
- [Guard Clause](/design-patterns/guard-clause)

## Language Support

Some programming languages make this principle easier to apply than others:

- **Algebraic Data Types** (F#, Haskell, Rust, TypeScript): Native support for discriminated unions makes invalid states naturally unrepresentable
- **Sealed Class Hierarchies** (C#, Java, Kotlin): Can simulate discriminated unions through inheritance
- **Generics and Type Parameters**: Help create type-safe abstractions
- **Immutability**: Prevents objects from transitioning into invalid states after construction

## References

This principle originates from the functional programming community, particularly from the work of [Yaron Minsky](https://blog.janestreet.com/effective-ml-revisited/), who popularized the phrase in the context of OCaml development. The principle has since been widely adopted across different programming paradigms.
