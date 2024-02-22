---
title: "Decorator Design Pattern"
date: "2024-02-22"
description: "The Decorator Design Pattern is a structural pattern used to add new functionalities to objects dynamically without altering their structure. This pattern relies on a decorator class which wraps the original class and matches its interface, while providing additional behavior before or after the delegate call to the original class method."
featuredImage: "./images/decorator-design-pattern.png"
---

## What is the Decorator Design Pattern?

The Decorator Design Pattern is a structural pattern used to add new functionalities to objects dynamically without altering their structure. This pattern relies on a decorator class which wraps the original class and matches its interface, while providing additional behavior before or after the delegate call to the original class method.

This pattern is an excellent way to follow the [Single Responsibility Principle](/principles/single-responsibility-principle), since cross-cutting concerns like Logging, Validation, Authorization checks, and more can be pulled out of a class and moved into a single-purpose decorator class. This also helps achieve the [Open-Closed Principle](/principles/open-closed-principle), since new functionality can be added to existing classes (without modifying them) through the use of decorators.

## When to Use It

The Decorator design pattern is a versatile tool in software development, allowing for the dynamic extension of an object's behavior without altering its structure. Here are key scenarios when it's particularly useful:

- **Adding Responsibilities Dynamically**: Use the Decorator pattern when you need to add additional responsibilities to objects at runtime without affecting other objects.

- **Modular and Reusable Extensions**: When you want to create functionalities that can be applied to objects without changing those objects' classes, making the extensions modular and reusable across different scenarios.

- **Avoiding Subclass Explosion**: If extending functionality through subclassing leads to an excessive number of classes, the Decorator pattern can help manage this complexity by allowing you to combine behaviors.

- **Extension Without Modification**: In situations where modifying the original class is not possible due to restrictions like access levels or when the class is part of a library you do not control, decorators provide a way to add behavior.

- **Conditional Behavior Addition**: When the behavior needs to be added to objects only under certain conditions or contexts, decorators can be dynamically applied and removed.

- **Enhancing Legacy Code**: For enhancing or fixing legacy code where changing the original codebase is risky or impractical, applying decorators can introduce new behavior or fix issues without touching the original code.

- **Compliance and Logging**: In scenarios requiring compliance, logging, or audit trails where these concerns are secondary to the main business logic, decorators can inject these cross-cutting concerns transparently.

- **Validation and Security**: To add validation, authentication, or other security layers around core functionalities without embedding these concerns directly into the primary classes.

- **Flexible Alternative to Inheritance**: When inheritance is too rigid or not suitable for adding functionalities, the Decorator pattern offers a more flexible solution by allowing mixing and matching of behaviors.

Utilizing the Decorator pattern under these circumstances can lead to cleaner, more maintainable, and scalable code architectures by promoting separation of concerns and adherence to the Open/Closed Principle.

## C# Example

Let's implement the Decorator Pattern in a .NET application. We'll start with a basic `BookService` that adds a book to a repository. Then, we'll add decorators for logging with a stopwatch/timer and for validating the book using [FluentValidation](https://docs.fluentvalidation.net/en/latest/).

### The Underlying Service

First, define the `IBookService` interface and implement a basic `BookService`.

```csharp
public interface IBookService
{
    void AddBook(Book book);
}

public class BookService : IBookService
{
    private readonly IRepository<Book> _repository;

    public BookService(IRepository<Book> repository)
    {
        _repository = repository;
    }

    public void AddBook(Book book)
    {
        _repository.Add(book);
    }
}
```

### Implement a Logging Decorator

The logging decorator will log how long it takes to add a book to the repository:

```csharp
public class LoggingBookServiceDecorator : IBookService
{
    private readonly IBookService _decoratedBookService;
    private readonly ILogger<LoggingBookServiceDecorator> _logger;

    public LoggingBookServiceDecorator(IBookService decoratedBookService, ILogger<LoggingBookServiceDecorator> logger)
    {
        _decoratedBookService = decoratedBookService;
        _logger = logger;
    }

    public void AddBook(Book book)
    {
        _logger.LogInformation($"Adding a book: {book}", book);
        var stopwatch = Stopwatch.StartNew();
        _decoratedBookService.AddBook(book);
        stopwatch.Stop();
        _logger.LogInformation($"Book {book} added in {stopwatch.ElapsedMilliseconds} ms.", book);
    }
}

public class Book
{
    public string Title {get; set;} = string.Empty;
    public string Author {get; set;} = string.Empty;
    public decimal Price {get; set;}

    public override string ToString()
    {
        return $"{Title} by {Author} for ${Price.ToString("F2")}";
    }
}
```

### Validation

A Validation decorator will make sure the book being added is valid.

```csharp
using FluentValidation;
using System.Collections.Generic;
using System.Linq;

public class ValidationBookServiceDecorator : IBookService
{
    private readonly IBookService _decoratedBookService;
    private readonly IEnumerable<IValidator<Book>> _validators;

    public ValidationBookServiceDecorator(IBookService decoratedBookService, IEnumerable<IValidator<Book>> validators)
    {
        _decoratedBookService = decoratedBookService;
        _validators = validators;
    }

    public void Add(Book book)
    {
        var context = new ValidationContext<Book>(book);
        var failures = _validators
            .Select(v => v.Validate(context))
            .SelectMany(result => result.Errors)
            .Where(f => f != null)
            .ToList();

        if (failures.Any())
        {
            throw new ValidationException(failures);
        }

        _decoratedBookService.Add(book);
    }
}

public class BookValidator : AbstractValidator<Book>
{
    public BookValidator()
    {
        // Ensure the Title is not empty
        RuleFor(book => book.Title)
            .NotEmpty().WithMessage("Title is required.");

        // Ensure the Author is not empty
        RuleFor(book => book.Author)
            .NotEmpty().WithMessage("Author is required.");

        // Ensure the Price is greater than 0
        RuleFor(book => book.Price)
            .GreaterThan(0).WithMessage("Price must be greater than 0.");
    }
}
```

### Service Registration

For all of this to work, you just need to wire things up appropriately in your DI service registration in Program.cs (or wherever you do this in your app):

```csharp
// Register the base service and dependencies
services.AddScoped<IBookRepository, BookRepository>(); // Example dependency of BookService
services.AddSingleton<IValidator<Book>, BookValidator>();

// Register the BookService as a transient or scoped service, depending on your needs
// but do not expose it via any interface directly to ensure it's wrapped by decorators
services.AddScoped<BookService>();

// Register the decorators
// Note: The order of registration matters for decorators, last registered is the outermost
services.AddScoped<IBookService>(provider => {
    var baseService = provider.GetRequiredService<BookService>(); // Get the base implementation
    var validators = provider.GetRequiredService<IEnumerable<IValidator<Book>>>(); // Get validators
    
    // First wrap the base service with the Validation decorator
    var validationDecorator = new ValidationBookServiceDecorator(baseService, validators);

    // Then wrap the validation decorator with the Logging decorator
    return new LoggingBookServiceDecorator(validationDecorator);
});
```

Now when a call is made to add a book, the logging decorator will log that it's adding the book. The validator will fire, and if validation fails, an exception will be thrown. Otherwise, the BookService will save the book, and then the logging decorator will log the total time it took.

Note that each class has only a single responsibility, but they're able to be combined in such a way that richer behavior is established.

## Related Patterns

### Proxy

The Decorator pattern is most closely related to the Proxy design pattern, which has identical structure but a different intent. While a proxy is also a wrapper, the intent of a proxy is to *control access* to the underlying class. The intent of the Decorator pattern is to *add behavior*.

### Chain of Responsibility

The [Chain of Responsibility pattern](/design-patterns/chain-of-responsibility-pattern) also provides a way to break up responsibilities into individual classes, each one wrapping the next. However, it requires a specific interface for the service being wrapped. The Decorator pattern can be applied to any class, so in one way it is more flexible. However, if you can design your application so that most of your services have a `Handle` method, you may be able to reuse Chain of Responsibility wrappers (often referred to as middleware or behaviors) for many different services (instead of having to write custom decorators for every bespoke class/service).

## Conclusion

The Decorator pattern offers a flexible approach to extend object behavior dynamically. While .NET's default DI container lacks built-in support for decorators, you can achieve similar results with custom extension methods or third-party libraries. This pattern is especially useful for adding cross-cutting concerns like logging, validation, or caching without modifying existing code, adhering to the Open/Closed Principle.

## References

- Amazon - [Design Patterns: Elements of Reusable Object-Oriented Software](http://amzn.to/vep3BT) - Gang of Four
- [Pluralsight - Design Patterns Library](http://bit.ly/DesignPatternsLibrary)
- [Pluralsight - Proxy Design Pattern](https://www.pluralsight.com/courses/c-sharp-design-patterns-proxy)
- [YouTube - Using the Decorator, Mediator, and Chain of Responsibility Patterns in C#](https://www.youtube.com/watch?v=eSQHpfaYspw&ab_channel=dotnetFlix)
