---
title: "Ubiquitous Language"
date: "2015-07-24"
description: All stakeholders on a software application, from users to product managers to developers, should share the same terminology when discussing the elements of the application.
---

All stakeholders on a software application, from users to product managers to developers, should share the same terminology when discussing the elements of the application. Use of a _ubiquitous language_ reduces the risk of miscommunication and the need to translate between technical abstractions and real world elements.

[Naming things](/naming-things/) is one of the most difficult tasks in software development. One of the very real benefits of [pair programming](/pair-programming/), as well as working closely with (as in, in the same room) users or product owners is that names can quickly be agreed upon by the [whole team](/whole-team-activity/). Names that are chosen for marketing purposes or in early architectural diagrams that do not translate into the application's design as expressed in its codebase are harmful. They breed confusion. In the simple case, there is a simple disconnect, in which the developers have chosen to refer to a concept as Foo, but others think of it as Bar. In this case, the developers must often translate on the fly whenever discussing the Foo concept. A worse case occurs when the developer has implemented Foo, but it's different from what others think of as Foo. Foo has two, perhaps nuanced, meanings, and the potential for confusion or miscommunication is greatly enhanced.

The code for the application should be the authority on naming things, but this doesn't mean the software developers are the decision makers when it comes to names. Users and other project stakeholders are unlikely to take on programmer jargon terms, nor should they be expected to do so. Rather, it's the responsibility of the software development team to learn from users and product owners, and model their system using the terminology that makes sense to these stakeholders.

The ubiquitous language should be rigorously used within a given bounded context. Between different bounded contexts, terminology may differ. The use of a term in one context should not constrain the use of that term in another bounded context (otherwise, the context isn't being properly "bound").

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">If you don't have the language to express a concept, there is no way to grow understanding. <a href="https://twitter.com/hashtag/DDDesign?src=hash">#DDDesign</a></p>— Jef Cλaes (@JefClaes) <a href="https://twitter.com/JefClaes/status/624551894275522560">July 24, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
