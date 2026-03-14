---
title: "Architecture by Implication: An Antipattern in Software Design"
date: "2023-04-24"
description: The Architecture by Implication (ABI) antipattern is a common issue that arises in software design when developers make design decisions implicitly rather than explicitly, which can lead to a poorly defined and chaotic architecture.
featuredImage: ./images/architecture-by-implication.png
---

## Introduction

The Architecture by Implication (ABI) antipattern is a common issue that arises in software design when developers make design decisions implicitly rather than explicitly, which can lead to a poorly defined and chaotic architecture. This antipattern often emerges when teams lack experience, proper communication, or sufficient design documentation, causing developers to assume that their colleagues share their understanding of the system's design. In this article, we will discuss the causes, symptoms, and solutions to this antipattern.

## Causes

1. **Lack of experience**: Inexperienced developers may not fully comprehend the importance of a well-defined architecture and may neglect its explicit definition.
2. **Poor communication**: Teams that do not communicate effectively may have difficulty establishing a shared understanding of the system's design.
3. **Insufficient design documentation**: A lack of written design documentation can make it difficult for team members to understand and adhere to the intended architecture. At a minimum [Architecture Decision Records](https://ardalis.com/getting-started-with-architecture-decision-records/) should exist to prevent retreading previous decisions and discussions.

## Symptoms

1. **Inconsistent design decisions**: Without a [clear architectural vision](/practices/common-architectural-vision), developers may make design decisions that are inconsistent with each other, leading to a disjointed system.
2. **High coupling and low cohesion**: The system may exhibit high coupling between components and low cohesion within components, making it difficult to maintain and scale.
3. **Difficulty in understanding the system**: New team members may struggle to grasp the system's architecture, leading to a slower onboarding process and increased likelihood of introducing errors.

## Solutions

1. **Create a clear and well-documented architecture**: Establish a formal architecture that explicitly defines the system's design, and ensure that it is well-documented and easily accessible to all team members.
2. **Improve communication**: Encourage open communication among team members to facilitate a shared understanding of the system's design.
3. **Use architectural patterns**: Leverage established architectural patterns to guide design decisions and provide a solid foundation for the system.

## Further Reading

1. [Software Architecture in Practice](https://amzn.to/3AwKcMJ) (Amazon.com)
2. [AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis](https://amzn.to/3L2uIVF) (Amazon.com)
3. [Recognizing and Refactoring Antipatterns in Software Design](https://www.researchgate.net/publication/318320120_Recognizing_and_Refactoring_Antipatterns_in_Software_Design)
4. [Getting Started with Architecture Decision Records](https://ardalis.com/getting-started-with-architecture-decision-records/)

