---
title: "Anderson's Law"
date: "2023-10-03"
description: "Anderson's Law posits, "I have yet to see any problem, however complicated, which, when you looked at it in the right way, did not become still more complicated." This insightful aphorism perfectly encapsulates many scenarios in software development." 
featuredImage: "./images/andersons-law.png"
---
## Introduction

Anderson's Law posits, "I have yet to see any problem, however complicated, which, when you looked at it in the right way, did not become still more complicated." This insightful aphorism perfectly encapsulates many scenarios in software development. Whether you're dissecting an intricate bug, pondering architectural choices, or grappling with the ever-evolving demands of stakeholders, problems in software development often become more complicated upon closer inspection.

It was [coined by Poul William Anderson](https://quoteinvestigator.com/2015/06/15/complicated/), an American science fiction author.

## Complexity in Software Architecture

The intricacies of software architecture often become evident only when we dive deep into the specifics. What may initially seem like a straightforward microservices architecture can quickly become a convoluted maze of inter-service communication, latency issues, and data consistency challenges.

Many aspects of software design and architecture are simple... for the "happy path." But once various failure conditions and inconsistent states are considered, the complexity of keeping the system working properly under real world conditions begins to rear its ugly head.

### Case Study: Database Selection

Take the example of choosing a database for your application. A simple choice between SQL and NoSQL databases soon spirals into a complex decision matrix involving factors like:

- Scalability
- ACID compliance
- Speed and performance
- Specific query requirements
- Cost

## Anderson's Law and Estimates

It should be obvious that software estimation is incredibly difficult in light of Anderson's Law. At a high level, any given software feature or task may appear to have a certain level of scope and complexity. But as it is investigated further, often once the task has begun, the additional complexity is discovered. Any estimate based on the original assessment is doomed to irrelevance, as the true complexity is often far greater. See the [5 Laws of Software Estimates](https://ardalis.com/the-5-laws-of-software-estimates/) for more on this effect.

## Agile and Lean Methodologies

Agile and Lean methodologies aim to manage complexity by adopting iterative approaches and emphasizing customer value. However, implementing these methodologies is seldom as straightforward as one might assume.

### The Complexity of Simplicity

Even seemingly simple Agile practices like Scrum can unfold into layers of complexity involving roles, ceremonies, and various tools for backlog management, sprint planning, and so on. Simpler practices like Kanban have their own unfolding complexities, as much of the implementation details are left to the teams adopting the practice.

## The Importance of Quality Software

Quality software is often seen as the antidote to complexity, but achieving quality itself is a complicated process involving:

- Code reviews
- Testing protocols
- Continuous integration and delivery
- Performance metrics
- Security measures

Even things as seemingly simple as defining what "done" means for a given step in a software development process can involve hidden complexities.

## Solving Problems Elegantly

Despite the inevitability of increasing complexity, effective problem-solving involves finding elegant, if not always simple, solutions. This is where expertise in software architecture and engineering shines: transforming complex problems into manageable solutions.

## Conclusion

Anderson's Law, though articulated humorously, holds a significant truth that resonates deeply with software development. Understanding that problems will often become more complex when scrutinized allows developers to approach issues with a level of sophistication and preparedness that can lead to more sustainable solutions.

The complexities in software are numerous but identifying the right path amid the complexities is the essence of good engineering.

## References

1. Anderson, P. W. (1972). "More is Different". [Science, New Series](https://www.jstor.org/stable/1734697), 177(4047), 393-396.
2. Martin, R. C. (2003). "Agile Software Development: Principles, Patterns, and Practices". [Amazon](https://amzn.to/46EaMlr).
3. Fowler, M. (2018). "Refactoring: Improving the Design of Existing Code". [Amazon](https://amzn.to/3ti55em).
4. Evans, E. (2003). "Domain-Driven Design: Tackling Complexity in the Heart of Software". [Amazon](https://amzn.to/3F40wXU).
5. Newman, S. (2015). "Building Microservices: Designing Fine-Grained Systems". [Amazon](https://amzn.to/3RLYsve).
6. Smith, Steve (2015). [The 5 Laws of Software Estimates](https://ardalis.com/the-5-laws-of-software-estimates/)
