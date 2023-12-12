---
title: "Subdomains in DDD"
date: "2023-12-08"
description: In Domain-Driven Design (DDD), a subdomain represents a smaller, well-defined area of knowledge or responsibility within a larger domain.
featuredImage: "./images/subdomain.png"
---

In Domain-Driven Design (DDD), a subdomain represents a smaller, well-defined area of knowledge or responsibility within a larger [domain](./domain). It can be further decomposed into even smaller subdomains if necessary, and should be cohesive with clear boundaries from other subdomains.

Here's an example:

Within the "online retail" domain, a subdomain could be "product management". This subdomain would be responsible for defining products, managing product data, and implementing product search functionality.

## Types of subdomains

There are two main types of subdomains: supporting subdomains and generic subdomains.

### Generic subdomain:

A generic subdomain is an area of the business that is important for operations but doesn't provide a competitive advantage. It typically includes generic, widely applicable functionalities that are necessary for the business to operate efficiently but are not unique to the business. While these functionalities are essential for many businesses, they are not the primary focus or differentiator.

Generic subdomains may be reusable on other projects.

Here are some examples of generic subdomains:

- Authentication and Authorization
- Payment processing
- Messaging

### Supporting subdomain:

Supporting subdomains are areas that provide auxiliary or supporting functions for the core domain. These subdomains often involve shared services, utilities, or common functionalities that multiple parts of the system can leverage.

These are some supporting subdomains in eCommerce:

- Customer Support and Service
- Payment Gateway Integration
- Digital Marketing and Promotions

## Benefits of using subdomains

There are several benefits to using subdomains in DDD:

- **Improved understanding and reduced complexity**: By breaking down the domain into smaller pieces, it becomes easier for stakeholders to understand the overall problem space and the specific responsibilities of each subdomain.
- **Enables independent development and deployment**: Subdomains can be developed and deployed independently, which can speed up the development process and reduce risk.
- **Promotes better communication**: By using a shared vocabulary and ubiquitous language within each subdomain, teams can communicate more effectively and avoid misunderstandings.
- **Provides a framework for organizing and managing the domain**: Subdomains provide a clear and structured way to organize the domain model, which can make it easier to maintain and evolve over time.

## Defining and managing subdomains

Here are some key steps in defining and managing subdomains:

1. Identify and define subdomains.

Analyze the domain model and identify areas of functionality that can be grouped together.
Use techniques like [EventStorming](./eventstorming) and [ubiquitous language](./ubiquitous-language) to ensure that everyone involved agrees on the boundaries of each subdomain.

2. Establish clear boundaries between subdomains.

Define the specific responsibilities of each subdomain and avoid duplication of effort.
Use [bounded contexts](./bounded-context) to ensure that different parts of your application can work together without conflicting with each other.

3. Choose the right type of domain or subdomain for each area of functionality.

- Use the core domain for the most important and complex functionality.
- Use supporting subdomains for functionality that is essential for the core subdomain to function.
- Use generic subdomains for general-purpose functionality that can be reused across different projects.

By following these steps, you can define and manage subdomains effectively to improve the organization, maintainability, and scalability of your software applications.

## References

- *Domain-Driven Design: Tackling Complexity in the Heart of Software* by Eric Evans (Chapter 5: Subdomains)
- *Implementing Domain-Driven Design* by Vaughn Vernon (Chapter 9: Subdomains)
- *Building Evolutionary Architectures: Support Constant Change* by Neal Ford, Rebecca Parsons, Patrick Kua (Chapter 4: Decomposing Monoliths by Subdomain)