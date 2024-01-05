---
title: "Laws of Software Architecture"
date: "2022-11-30"
description: "Software architecture is a very broad topic, but even so there are some fundamental laws that all architects should understand."
featuredImage: "./images/laws-of-software-architecture.png"
---

Software architecture is a very broad topic, but even so there are some fundamental laws that all architects should understand.

## First Law of Software Architecture

> Everything in software architecture is a trade-off.

Of course, you might not believe this. You might think you know of something that is universally good to have in every architecture, without downsides. Which leads to the first corollary of this law.

### Corollary 1

> If an architect thinks they have discovered something that isn't a trade-off, more likely they just haven't yet identified the trade-off.

There's always a trade-off somewhere, even if only opportunity cost because a decision to use something is always a decision not to use an alternative.

## Second Law of Software Architecture

> Why is more important than how.

There are many ways to implement a particular facet of software architecture. And while implementation details are important, what's more important from the perspective of a software architect is *why* a particular implementation or approach was chosen over its alternatives. A common way to document decisions like this is to use [architecture decision records](https://ardalis.com/getting-started-with-architecture-decision-records/), ideally stored in source control with or near the application(s) impacted by the decision.

## References

- [Fundamentals of Software Architecture](https://amzn.to/3gKrewb)

