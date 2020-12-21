---
title: "Simple Design"
date: "2014-11-26"
design: Kent Beck created four rules of Simple Design.
---

[Kent Beck](http://en.wikipedia.org/wiki/Kent_Beck) created four rules of Simple Design. These are sometimes referred to as The Four Commandments or the [XP Simplicity Rules](http://c2.com/cgi/wiki?XpSimplicityRules). The rules, in priority order, are that code should:

1. Pass all tests
2. Express the author's ideas
3. Avoid duplication
4. Minimize number of classes, methods, and modules

Since the rules are in priority order, the most important thing is that the code _works_. If you're an XP developer, the way you know the code works is that it passes the automated unit tests that prove that it works.

Once you have working code, the next most important thing is to ensure that it is clear, consistent, and expressive. Cryptic code that works is of little value, since it is difficult to update or maintain in the future. Thus, the second-most-important rule is that the code expresses the author's intent, so that this intent is clear to future developers (including the original author).

The third rule is actually another fundamental principle, [Don't Repeat Yourself (DRY)](/principles/dont-repeat-yourself). If following this rule makes the code stop working (rule #1), or makes it more difficult to understand (rule #2), then it is more important to allow for some duplication than to follow the DRY principle in this case. However, in most situations you should be able to consolidate duplication in logic into separate methods or classes that are then referenced everywhere the duplication originally existed. This is a very common refactoring step and one with which professional developers should be familiar.

The last rule isn't really necessary - why would you create more code than necessary, especially if you've already eliminated duplication? However, the most important thing to remember with this rule is that it is the _lowest_ priority. Do not worry that you are creating a lot of small classes and methods that do one thing and do it well - unless you're violating any of the first three rules. If, while passing all of the first three rules, you find that you can reduce the total number of programming constructs your design has, then by all means, do so to simplify things.

JB Rainsberger has posted his own view of [The Four Elements of Simple Design](http://www.jbrains.ca/permalink/the-four-elements-of-simple-design), which are similar but slightly re-ordered.
