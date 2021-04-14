---
title: "Ubiquitous Language"
date: "2015-07-24"
description: All stakeholders on a software application, from users to product managers to developers, should share the same terminology when discussing the elements of the application.
---

All stakeholders on a software application, from users to product managers to developers, should share the same terminology when discussing the elements of the application. Use of a _ubiquitous language_ reduces the risk of miscommunication and the need to translate between technical abstractions and real world elements.

[Naming things](/practices/naming-things/) is one of the most difficult tasks in software development. One of the very real benefits of [pair programming](/practices/pair-programming/), as well as working closely with (as in, in the same room) users or product owners is that names can quickly be agreed upon by the [whole team](/practices/whole-team-activity/). Names that are chosen for marketing purposes or in early architectural diagrams that do not translate into the application's design as expressed in its codebase are harmful. They breed confusion. In the simple case, there is a simple disconnect, in which the developers have chosen to refer to a concept as Foo, but others think of it as Bar. In this case, the developers must often translate on the fly whenever discussing the Foo concept. A worse case occurs when the developer has implemented Foo, but it's different from what others think of as Foo. Foo has two, perhaps nuanced, meanings, and the potential for confusion or miscommunication is greatly enhanced.

The code for the application should be the authority on naming things, but this doesn't mean the software developers are the decision makers when it comes to names. Users and other project stakeholders are unlikely to take on programmer jargon terms, nor should they be expected to do so. Rather, it's the responsibility of the software development team to learn from users and product owners, and model their system using the terminology that makes sense to these stakeholders.

The ubiquitous language should be rigorously used within a given bounded context. Between different bounded contexts, terminology may differ. The use of a term in one context should not constrain the use of that term in another bounded context (otherwise, the context isn't being properly "bound").

Seth Godin [writes about terms](https://seths.blog/2021/03/what-does-it-stand-for/), saying:

> We need a new word when the old words are insufficient to express a shared understanding. And the new word is a placeholder for a story.
>
> If we share the same story about a word, about its place, its possibility and its promise–then we know what it stands for.
>
> New words give us new ways to understand the world, because new words come with stories attached.
>
> And disagreements often happen simply because while we’re using the same word as someone else, we’re not telling the same story they are.

## On Twitter

https://twitter.com/JefClaes/status/624551894275522560

## References

[Domain-Driven Design Fundamentals](https://www.pluralsight.com/courses/domain-driven-design-fundamentals) Pluralsight
