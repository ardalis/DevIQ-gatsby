---
title: "Once and Only Once"
date: "2014-11-26"
description: The Once and Only Once principle can be thought of as a subset of the Don't Repeat Yourself principle, and is one of the most fundamental principles of software development.
---

The Once and Only Once principle can be thought of as a subset of the [Don't Repeat Yourself principle](/principles/dont-repeat-yourself), and is one of the most fundamental principles of software development.  Once and Only Once basically states that any given behavior within an application is defined _Once and Only Once_.  Duplication of behavior is one of the most common sources of bugs in software systems, since it becomes increasingly likely that changes to behavior defined in one location may not be propagated to all locations where this behavior is defined.  Eliminating the duplication caused by not following the Once and Only Once principle is one of the primary reasons for refactoring and is also at the core of many design patterns.

## See Also

[Don't Repeat Yourself](dont-repeat-yourself.md)

## References

[OnceAndOnlyOnce](http://c2.com/cgi/wiki?OnceAndOnlyOnce) on the C2 Wiki

[Principles of Object Oriented Design course](https://www.pluralsight.com/courses/principles-oo-design) from Pluralsight

[Design Patterns Library](https://www.pluralsight.com/courses/patterns-library) from Pluralsight
