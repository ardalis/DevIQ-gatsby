---
title: "Entity"
date: "2024-04-02"
description: An Entity is an object that has some intrinsic identity, apart from the rest of its state.
featuredImage: "./images/entity.png"
---

An Entity is an object that has some intrinsic identity, apart from the rest of its state. Even if its properties are the same as another instance of the same type, it remains distinct because of its unique identity. As an example, consider a Person class, with properties for first name, last name, and birth date. It's possible that two different instances of Person could have the same name and date of birth, but that wouldn't make them the same person! By contrast, consider a mailing address. If two different packages are being shipped to John Smith, 123 Main Street, Anytown, OH 12345, USA, there is no need to track those two separate addresses as Entities. They are the same because their properties (addressee, street, city, etc.) are identical, and as a result they could be modeled as a [Value Object](/domain-driven-design/value-object/).

Entities are responsible for encapsulating their state and behavior, ensuring consistent domain logic and data integrity.

## Sample Entity

Here is an example of the `ToDoItem` entity from [the .NET 6 version of Ardalis' CleanArchitecture template](https://github.com/ardalis/CleanArchitecture/releases/tag/dotnet-6).

```csharp
using Ardalis.GuardClauses;
using Clean.Architecture.Core.ProjectAggregate.Events;
using Clean.Architecture.SharedKernel;

namespace Clean.Architecture.Core.ProjectAggregate;

public class ToDoItem : EntityBase
{
  public string Title { get; set; } = string.Empty;
  public string Description { get; set; } = string.Empty;
  public int? ContributorId { get; private set; }
  public bool IsDone { get; private set; }

  public void MarkComplete()
  {
    if (!IsDone)
    {
      IsDone = true;

      RegisterDomainEvent(new ToDoItemCompletedEvent(this));
    }
  }

  public void AddContributor(int contributorId)
  {
    Guard.Against.Null(contributorId, nameof(contributorId));
    ContributorId = contributorId;

    var contributorAddedToItem = new ContributorAddedToItemEvent(this, contributorId);
    base.RegisterDomainEvent(contributorAddedToItem);
  }

  public void RemoveContributor()
  {
    ContributorId = null;
  }

  public override string ToString()
  {
    string status = IsDone ? "Done!" : "Not done.";
    return $"{Id}: Status: {status} - {Title} - {Description}";
  }
}
```

## References

- [Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight
- [Ardalis' CleanArchitecture template](https://github.com/ardalis/CleanArchitecture/)

## Learn More

- [On-Demand Webinar: Intro to Domain-Driven Design with C#](https://mailchi.mp/nimblepros/af2112un73)
- [On-Demand Webinar: Domain Storytelling](https://mailchi.mp/nimblepros/domain-storytelling)
- [On-Demand Webinar: From Chaos to Clarity: How EventStorming Streamlines Complex Domains](https://mailchi.mp/nimblepros/eventstorming-recording)]
- [Email Course: Intro to DDD](https://mailchi.mp/nimblepros/intro-to-ddd-email-course)