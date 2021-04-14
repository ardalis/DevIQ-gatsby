---
title: "Inversion of Control"
date: "2015-10-16"
description: Inversion of Control (IoC or IOC) describes a system that follows the Hollywood Principle.
---

Inversion of Control (IoC or IOC) describes a system that follows the [Hollywood Principle](/principles/hollywood-principle/). That is, flow of control within the application is not controlled by the application itself, but rather by the underlying framework. Typically in such an architecture, the application is written such that it ties into the application framework by handling framework events or plugging in to framework extension points.

An IOC Container, also known as a [Dependency Inversion (DI)](/principles/dependency-inversion-principle/) container, is a specialized factory used to facilitate [dependency injection](/practices/dependency-injection/).

### See Also

[Hollywood Principle](/principles/hollywood-principle/)

## References

[Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) (Wikipedia)

[Comparing Major C# IOC Containers](http://stackoverflow.com/questions/4581791/how-do-the-major-c-sharp-di-ioc-frameworks-compare)
