---
title: "Open-Closed Principle"
date: "2014-11-26"
description: The Open-Closed Principle (OCP) states that software entities (classes, modules, methods, etc.) should be open for extension, but closed for modification.
---

![OpenClosedPrinciple](images/OpenClosedPrinciple-300x300.jpg)

The Open-Closed Principle (OCP) states that software entities (classes, modules, methods, etc.) should be open for extension, but closed for modification.

In practice, this means creating software entities whose behavior can be changed without the need to edit and recompile the code itself. The simplest way to demonstrate this principle is to consider a method that does one thing. Let's say it writes to a particular file, the name of which is hard-coded into the method. If the requirements change, and the filename now needs to be different in certain situations, we must open up the method to change the filename. If, on the other hand, the filename had been passed in as a parameter, we would be able to modify the behavior of this method without changing its source, keeping it closed to modification.

The Open-Closed Principle can also be achieved in many other ways, including through the use of inheritance or through compositional design patterns like the [Strategy pattern](http://deviq.com/most-popular-patterns/strategy-design-pattern).

## Quotes

<blockquote class="twitter-tweet" lang="en"><p>The strategy pattern is the backbone of the Open/Closed Principle (from Bob Martin's SOLID principles discussed yesterday). <a href="https://twitter.com/hashtag/ccoz09?src=hash">#ccoz09</a></p>— Matt Hamilton (@mabster) <a href="https://twitter.com/mabster/status/1454186880">April 4, 2009</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" lang="en"><p>This class violates both Single Responsibility Principle and Open/Closed Principle. Not surprisingly, I've run into issue modifying it.</p>— Jonathan Hammond (@Hamman359) <a href="https://twitter.com/Hamman359/status/48772493363781632">March 18, 2011</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## See Also

[Strategy Design Pattern](http://deviq.com/most-popular-patterns/strategy-design-pattern)

[SOLID Principles](http://deviq.com/solid)

## References

[SOLID Principles of Object Oriented Design](http://bit.ly/ydqXXN) - Pluralsight Online Training - Steve Smith

[Principles, Patterns, and Practices of Agile Software Development](http://amzn.to/1cu7La6) - Amazon

[Principles, Patterns, and Practices of Agile Software Development in C#](http://amzn.to/RiNdCs) - Amazon
