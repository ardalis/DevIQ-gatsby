---
title: "Stable Dependencies"
date: "2015-11-17"
description: The Stable Dependencies Principle states that "The dependencies between software packages should be in the direction of the stability of the packages. That is, a given package should depend only on more stable packages."
---

![Stable Dependencies Principle](images/stable-dependencies-400x400.png)

The Stable Dependencies Principle states that "The dependencies between software packages should be in the direction of the stability of the packages. That is, a given package should depend only on more stable packages." Whenever a package changes, all packages that depend on it must be validated to ensure they work as expected after the change. Thus, the more packages that depend on an unstable package, the greater the disruption whenever it changes.

## Quotes

"Writing software that fully meets its specifications is like walking on water. For each, the former is easy if the latter is frozen and near impossible if fluid." - Anonymous

## References

- [Stable Dependencies Principle](https://wiki.c2.com/?StableDependenciesPrinciple)
- 2016 Software Craftsmanship Calendar
