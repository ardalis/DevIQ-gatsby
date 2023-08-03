---
title: "Domain Storytelling"
date: "2023-07-25"
description: Domain Storytelling allows domain experts to tell the stories, capture the workflows, and illustrate those stories.
featuredImage: ./images/domain-storytelling.png
---

Communication is important in [DDD](./ddd-overview), especially in developing [ubiquitous language](./ubiquitous-language). It allows domain experts to tell the stories, capture the workflows, and illustrate those stories.

The stories of the domains are illustrated with iconography and arrows, with labels to identify the actors and their relationships with the work objects.

While talking through the various scenarios, the following goals are achieved:

- [Ubiquitous language](./ubiquitous-language) develops.
- [Bounded contexts](./bounded-context) may be identified.
- Requirements and scope may be established.

The sample below talks through the process you go through when you sign up for a domain storytelling (or any other topic) webinar through [NimblePros](https://nimblepros.com).

1. You register on a website.
2. The website tags you as someone interested in domain storytelling (or *topic*).
3. The website sends you the meeting info.
4. You join the online meeting with other attendees.
5. The website will send you a "thank you email" with links related to the webinar, including the webinar recording.
6. You watch the recording afterwards to get those morsels of knowledge.

![Domain storytelling for someone who registers for a webinar, gets tagged interested in "domain-storytelling", gets the meeting info, attends the event, gets a thank you email, and watches the recording.](./images/domain-storytelling-animated.gif)

Domain storytelling is a powerful technique in domain-driven design that enables the understanding and modeling of complex business domains. It involves engaging domain experts and stakeholders in creating narratives about how different domain elements interact to achieve business objectives. This narrative-driven approach allows for a deeper understanding of the underlying processes, relationships, and rules governing the domain, hence helping to design software that mirrors and supports the real-world intricacies of the business.

The use of visual maps or storyboards, with symbols representing actors and arrows indicating actions or events, adds clarity to these narratives. Domain storytelling assists with [context mapping](./context-mapping), serving as a bridge and helping to translate the language and complex concepts of the business domain into a shared model for the design of software. This shared understanding improves alignment between business needs and software design, ultimately leading to more effective and value-adding software solutions.

## Why not just gather requirements using other techniques?

Traditional requirements gathering techniques often focus on isolated features or functionalities, without adequately addressing the bigger picture of how these elements interconnect within the broader business domain. This often leads to misunderstandings and misconceptions, creating a gap between what the business needs and what the software does.

Domain storytelling, on the other hand, seeks to bridge this gap by fostering a deeper, holistic understanding of the business domain. It doesn't just catalog a list of needs or features but captures the complex interactions, processes, and rules that constitute the domain's fabric. By telling the story of the domain, all stakeholders - including developers, domain experts, and users - gain a shared understanding of how things work and why they work that way. This process contextualizes the requirements and exposes hidden assumptions, thus leading to more robust, coherent, and fit-for-purpose software solutions.

Furthermore, domain storytelling helps to facilitate better communication between technical and non-technical stakeholders. The use of stories, visual symbols, and language common to the business domain makes the complexities and nuances of the domain more digestible and engaging, enhancing the collaboration between domain experts and software developers. This effective communication minimizes misinterpretation and ensures that the resulting software is closely aligned with the business's actual processes and needs, a challenge that traditional requirements gathering methods often struggle to meet.

## What about event storming?

Domain Storytelling and Event Storming are both highly collaborative, narrative-based practices used in Domain-Driven Design, and they can complement each other quite effectively.

Domain storytelling focuses on modeling business activities through scenarios, which includes the identification of actors, work objects, and interactions. It helps create a shared language and understanding of the business processes, uncovering implicit rules, constraints, and requirements that might be overlooked in a less holistic, more fragmented approach.

Event Storming, on the other hand, is a workshop-based method where domain events are identified and organized in a chronological order to create a time-based narrative of the business process. It facilitates the exploration of complex business domains by mapping out the sequence of events, and can also uncover bottlenecks, inconsistencies, or potential areas of improvement within a process.

When these techniques are combined, they can offer an even richer, more detailed picture of the business domain. Domain storytelling can provide the groundwork by establishing the main actors, their interactions, and the value exchanges that define the domain. Then, event storming can build on this foundation by adding temporal information, showing how these interactions occur over time, and what triggers or results they have.

Furthermore, the common narrative approach shared by both practices can help in transitioning from one to the other. The stories developed during the domain storytelling phase can naturally lead into event storming sessions, making it easier for participants to understand and engage with the process. Conversely, event storming can provide the broader context that helps participants to identify and detail new stories for further exploration in domain storytelling sessions.

## Domain Storytelling resources

- Learn more at [DomainStorytelling.org](https://domainstorytelling.org/)
- Draw your domain stories using [Egon.io](https://egon.io)
