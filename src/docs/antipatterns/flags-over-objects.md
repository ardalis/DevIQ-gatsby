---
title: "Flags Over Objects"
date: "2024-06-28"
description: The Flags Over Objects anti-pattern occurs when behavior is written outside of an object by inspecting flags (such as status codes), rather than within the object itself.
featuredImage: "./images/flags-over-objects-400x400.jpg"
---

![Flags_Over_Objects_July_2014](images/flags-over-objects-400x400.jpg)

The Flags Over Objects anti-pattern occurs when behavior is written outside of an object by inspecting flags (such as status codes), rather than within the object itself. This violates the [Tell, Don't Ask principle](/principles/tell-dont-ask/), and results in chatty interfaces and distribution of behavior that probably belongs within the object. Working around this issue, one will often experience the Shotgun Surgery coding smell, in which many small changes to many files are required in order to make changes to the system.

There are many ways to address this anti-pattern. In the worst cases, the State design pattern can effectively be used to bring all state-transition related behavior into the object, or at least into objects specifically constructed to handle the responsibility of state and state transitions.

## References

[Pluralsight Design Patterns Library](http://bit.ly/DesignPatternsLibrary) (which includes the State pattern)

[Pluralsight Refactoring for C# Developers course](https://www.pluralsight.com/courses/refactoring-csharp-developers) (which includes dozens of other code smells and how to correct them)
