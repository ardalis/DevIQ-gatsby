---
title: "Gall's Law for Software Developers"
date: "2023-10-04"
description: "Gall's Law is an observation about the nature and evolution of complex systems. It's a principle that resonates deeply within the world of software development and system architecture." 
featuredImage: "./images/galls-law.png"
---

Gall's Law is an observation about the nature and evolution of complex systems. It's a principle that resonates deeply within the world of software development and system architecture. John Gall, in his book "Systemantics: How Systems Really Work and How They Fail", posits this principle, which has since been referenced in many discussions on system design and software development.

## The Law Stated

> "A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system." - John Gall

## A Parable: The Failed Digital City

Once upon a time, in a burgeoning tech city named Digitopolis, the city council decided to create an all-encompassing digital platform that would integrate all public services — transportation, utilities, healthcare, education, and more. Envisioned to be the future of smart cities, they aimed to have everything interconnected from day one.

They hired the best engineers and poured millions into the project. The blueprint was intricate with a web of interdependencies. The team was excited but overwhelmed, as every module was dependent on another. Two years into development, with mounting costs and complex bugs cropping up from the interconnected nature of the services, it was clear that the project was on the brink of failure.

Finally, the city had to pull the plug. The vision of a full platform was not to be, but they hoped to recover some small pieces of functionality in the aftermath of the project failure. Even that was difficult, though, with little appetite for additional budget and every component highly dependent on the others as well as "the system".

Had they started with just one service, say transportation, and got that working perfectly before integrating the next, they could have built upon successive successes. Instead, they had a colossal, expensive, and ultimately non-working system.

Remembering this tale, the lesson is clear: start simple, make it work, then build upon it.

## Breakdown and Interpretation

1. **Start Simple**: The idea is that we should start with the simplest possible version of a system that can achieve its primary goal. In the software world, this often aligns with the Minimum Viable Product (MVP) methodology. Borrowing from [Kent Beck's quote, "Make it work, make it right, make it fast."](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast) Step one is to make the simplest possible version of the thing work.

2. **Evolve and Expand**: Once you have a simple system that works, it can be extended and evolved into a more complex system. This gradual addition of complexity is more manageable and allows developers to test and validate each new feature or component in the context of a working system. This is where Kent Beck's quote continues with, "make it right, make it fast." In practice, you only need to worry about making it fast if you have some reason to believe it's not already fast enough.

3. **Avoid Overengineering**: Designing a highly complex system from the outset often leads to unforeseen problems and complications. This can result in wasted time, resources, and can lead to a system that never fully meets its intended goals.

## Application in Software Development

- **Agile and Iterative Development**: Agile methodologies emphasize iterative development, delivering small chunks of functionality in short cycles. This approach aligns well with Gall's Law, as it promotes starting with a simple, working system and evolving it over time.

- **Refactoring**: Once a simple solution is in place and working, developers can refactor and improve the codebase, ensuring that the system remains maintainable as it grows in complexity. Repeatable tests are a prerequisite of proper refactoring, and ensure that the system can evolve safely without risk of introducing regressions.

- **Modular Monoliths**: Instead of diving straight into microservices, one can design a monolith that is modular in nature. This allows for clear boundaries and separations of concern within a single codebase. It makes the potential transition to microservices smoother, should the need arise.

- **Microservices Architecture**: Breaking down a large, complex application into smaller, simpler services (or microservices) allows each service to evolve independently. This modular approach can result in more robust and scalable systems, but at the expense of greatly increased complexity.

## Implications for Software Teams

- **Risk Management**: By starting simple and iterating, teams can reduce the risk associated with software projects. If a certain approach or technology doesn't work out, it's easier to pivot when the system is still relatively simple.

- **Improved Collaboration**: A focus on simplicity can foster better communication among team members. It's easier to discuss, understand, and collaborate on simpler systems.

- **Customer Feedback**: Releasing a simple, working version of your software early can provide valuable feedback from end-users, guiding the evolution of the system in a direction that meets real-world needs. As [ardalis](https://ardalis.com) is fond of saying, "As software developers we fail in two ways: we build the thing wrong or we build the wrong thing." Getting customer feedback sooner helps ensure developers don't build the wrong thing, which is often more expensive than mistakes made building the right thing.

## Conclusion

Gall's Law offers valuable insights for software developers and architects. By understanding and applying this principle, teams can create more successful, robust, and scalable systems.

## References

1. Gall, John. ["Systemantics: How Systems Really Work and How They Fail." Quadrangle/New Times Book, 1975](https://amzn.to/3QdAPKV).
2. Beck, Kent. ["Extreme Programming Explained: Embrace Change." Addison-Wesley Professional, 1999](https://amzn.to/46BxlHb).
3. Fowler, Martin. ["Refactoring: Improving the Design of Existing Code." Addison-Wesley Professional, 2nd ed. 2018](https://amzn.to/3rwkE1J).
4. Newman, Sam. ["Building Microservices: Designing Fine-Grained Systems." O'Reilly Media, 2015](https://amzn.to/46gRHG2).
5. "Agile Manifesto." [Agilemanifesto.org](http://agilemanifesto.org/).

