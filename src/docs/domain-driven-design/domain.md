---
title: "Domains in DDD"
date: "2024-04-02"
description: In Domain-Driven Design (DDD), a domain represents the specific knowledge, activities, and concerns related to a particular business or application context. 
featuredImage: "./images/domain.png"
---

In Domain-Driven Design (DDD), a domain represents the specific knowledge, activities, and concerns related to a particular business or application context. It encompasses all the concepts, rules, and processes that are relevant to the business and are often too complex to be modeled as a single unit. For example, the overall domain for an eCommerce system might be "online retail".

## Characteristics of a domain

A domain has several key characteristics:

- [Entities](./entity): These are the key things that exist within the domain, such as customers, products, and orders.
- **Rules**: These are the rules that govern the behavior of entities within the domain.
- **Processes**: These are the processes that are carried out within the domain, such as order processing and customer service.
- **Complexity and size**: Domains can range in complexity and size, from simple domains with a small number of entities and rules to complex domains with a large number of entities and rules.
- **Domain boundaries**: These are the boundaries that separate one domain from another. It is important to define clear domain boundaries to avoid duplication of effort and ensure that teams are working towards a common goal.

## Types of Domains

There are a few types of domains in DDD.

### Core Domain

The core domain represents the primary area of focus for a business. It includes the key business processes, rules, and concepts that differentiate the business from its competitors. The core domain is where the business aims to excel and gain a competitive advantage.

In our eCommerce example, the core domain is "online retail".

### Strategic Domains

Strategic domains are those areas of the business that have a significant impact on the overall success of the organization. Decisions related to strategic domains often involve key business strategies and can significantly influence the direction of the entire business. These may be core domains for other projects.

In eCommerce, strategic domains could include Personalization and Recommendations, Supply Chain Optimization, and Market Entry.

### Subdomains

Subdomains are smaller subsets of a domain. [Read more on subdomains.](./subdomain)

## Identifying and defining domains

Domains are created through the practice of [domain modeling](./domain-model).

## Learn More

- [On-Demand Webinar: Intro to Domain-Driven Design with C#](https://mailchi.mp/nimblepros/af2112un73)
- [On-Demand Webinar: Domain Storytelling](https://mailchi.mp/nimblepros/domain-storytelling)
- [On-Demand Webinar: From Chaos to Clarity: How EventStorming Streamlines Complex Domains](https://mailchi.mp/nimblepros/eventstorming-recording)]
- [Email Course: Intro to DDD](https://mailchi.mp/nimblepros/intro-to-ddd-email-course)