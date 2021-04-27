---
title: "Big Ball of Mud"
date: "2021-04-27"
---

![Big Ball of Mud](images/big-ball-of-mud-survivor.jpg)

The Big Ball of Mud is an architectural anti-pattern. It refers to an architecture that lacks any modular design, and thus becomes just a mass of disorganized code lacking any real structure. It is usually a result of accretion of new features over time without the required effort to design how such features should interact in a modular and maintainable fashion.

The Big Ball of Mud is closely related to [spaghetti code](/antipatterns/spaghetti-code) and may be the result of [duct tape coders'](/antipatterns/duct-tape-coder) efforts.

If you try to document the architecture of a software system and find it difficult to draw any boundaries around sub-systems or responsibilities, it's possible the system has no discernable architecture and is thus a Big Ball of Mud. The origination of the term comes from [Brian Foote and Joseph Yoder's 1997 paper of the same name](http://www.laputan.org/mud/). As with building anything of substantial size, small things generally require little planning, but large, multi-story buildings require more structure. When this is omitted, such large structures typically end up collapsing under their own weight, in gradual (sinking) or spectacular (whole thing falls down) fashion.

The biggest problem with the Big Ball of Mud architecture (or lack thereof) is that it makes it far more difficult to eliminate [technical debt](/terms/technical-debt). The lack of architectural patterns, encapsulation and boundaries is like a magnet for additional coding antipatterns, including most of the ones you find listed in this reference.

## Avoiding the Big Ball of Mud

The best way to avoid having a system turn into a Big Ball of Mud is to put thought and effort into its design once it reaches a certain size. It's fine to build a proof-of-concept or demo with no concern for well-known [principles](/principles/principles-overview) and [practices of software development](/practices/practices-overview). But when you start building mission-critical applications that organizations and sometimes lives depend on, you should consider how the application will grow and how it will be maintained over its lifetime.

Consider building the system with [SOLID principles](/principles/solid) in mind, following [separation of concerns](/principles/separation-of-concerns). As you extend the system, follow the [Boy Scout Rule](/principles/boy-scout-rule) to keep quality from degrading, and [refactor frequently](/practices/refactoring). Consider building the system using a [Clean Architecture template](https://github.com/ardalis/CleanArchitecture) that ensures your business logic never depends on your data access and other infrastructure code, and is separated from your user interface code. [Domain-Driven Design](/domain-driven-design/ddd-overview) works well with this approach.

Write automated tests, using [test-driven development](/practices/test-driven-development) or at least unit tests for your most critical code (even if written after the fact). Automated tests give you the confidence to continue updating your design without fear of creating sweeping regression errors.

## References

- [Big Ball of Mud](http://www.laputan.org/mud/) paper (1997)
- [Big Ball Of Mud](https://twitter.com/ObiOberoi/status/696398165289766912) via @ObiOberoi on Twitter
