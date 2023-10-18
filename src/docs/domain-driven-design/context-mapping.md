---
title: "Context Mapping"
date: "2023-08-08"
description: Context Mapping enables seeing how bounded contexts integrate with each other.
featuredImage: "./images/context-mapping.png"
---

Context Mapping enables seeing how [bounded contexts](./bounded-context) integrate with each other. Context maps show the relationships between bounded contexts and may also indicate relations of teams maintaining those bounded contexts.

## Team Relationships

There are three common team relationships:

- Partnership
- Upstream/Downstream
- Nonrelated

### Partnership

In a partnership, the maintainers of both bounded contexts are aligned with a common set of goals. These teams must collaborate and communicate in order to be successful.

### Upstream/Downstream

The Upstream/Downstream relationship means that the effects of the Upstream team are felt by the Downstream team. However, changes made by the Downstream team do not significantly impact the Upstream.

Think of a Publisher/Subscriber (PubSub) relationship. When a publisher publishes messages, the subscribers all retrieve their messages. If a subscriber changes how they handle a message, the other subscribers and the publisher aren't impacted by those changes. However, if the publisher publishes the message in a different format, all subscribers are impacted by that change.

### Nonrelated

When the teams maintaining two bounded contexts are independent, they may be seen as nonrelated. Another term that you may see is "Free". Just as the bounded contexts aren't linked, the teams do not need to be linked either.

## Context Map Patterns

There are different patterns of maps that can happen between bounded contexts. Note that some of these are good, while others are anti-patterns.

The common context map patterns are:

- Anti-Corruption Layer
- Big Ball of Mud
- Conformist
- Customer-Supplier
- Open Host Service
- Partnership
- Published Language
- Separate Ways
- Shared Kernel

### Anti-Corruption Layer
**Team Relationship**: Upstream/Downstream

The [anti-corruption layer](./anti-corruption-layer) serves as a translation layer between upstream and downstream teams. This layer is commonly built with [Facades](/design-patterns/facade-pattern) and [Adapters](/design-patterns/adapter-design-pattern).

### Big Ball of Mud

In a [Big Ball of Mud](/antipatterns/big-ball-of-mud), the code is as gross as the name implies. In DDD, the big ball of mud may have aggregates muddied together with no clear understanding of [bounded contexts](./bounded-context). The code is tightly-coupled. Debugging turns into a game of "whack-a-mole" in terms of trying to track bugs throughout the code. This is a nightmare.

### Conformist
**Team Relationship**: Upstream/Downstream

The Conformist pattern can be seen as a dysfunctional upstream/downstream relationship. The upstream has no motivation to support the downstream. The downstream may struggle with establishing a ubiquitous language with the upstream and be dependent on the upstream to establish it. When the struggles are bad and the support isn't there, the downstream has to conform to whatever the upstream has as-is and hope that it gets it right.

### Customer-Supplier
**Team Relationship**: Upstream/Downstream

The Customer-Supplier pattern where the Supplier is the upstream, and the Customer is the downstream. They work together to establish the needs of the Customer. The Customer indicates priority of needs, and the Supplier takes that into consideration when planning its delivery. Ultimately, the Customer is relying on the Supplier to deliver a solution that fulfills their needs.

### Open Host Service
**Team Relationship**: Upstream/Downstream

The Open Host Service gives access to a system via services. It may be implemented through protocols or interfaces.

APIs that are well-documented and pleasing to use are Open Host Services. These are hosted by upstream teams and consumed by downstream teams.

### Partnership
**Team Relationship**: Partnership

When a failure in delivering one bounded context can result in a failure of another bounded context, those two contexts are a partnership. The teams that maintain those bounded contexts must work together to ensure success of both contexts and avoid total failure due to the failure of at least one.

### Published Language
**Team Relationship**: Upstream/Downstream

With the Published Language pattern, there is a common language used for information exchange. This pattern goes well with the Open Host Service.  Examples of Published Language include XML, JSON, iCal, vCard, Avro, and Protobuf.

### Separate Ways
**Team Relationship**: Nonrelated

In Separate Ways, there is no significant relationship between two bounded contexts. These two bounded contexts can exist without having an established relationship between them.

### Shared Kernel
**Team Relationship**: Partnership

The Shared Kernel is the intersection between bounded contexts. When there is a shared component between bounded contexts, both teams maintaining those bounded contexts must establish a ubiquitous language and apply it to their shared

## References

- [Domain-Driven Design Distilled by Vaughn Vernon](https://amzn.to/2MfNzT6)
- [DDD Reference, Eric Evans](https://www.domainlanguage.com/ddd/reference/)
- [Context Mapper](https://contextmapper.org/)