---
title: "Fail Fast"
date: "2021-04-08"
description: "'Fail fast' suggests that if an error or problem is going to occur, it's best to detect it as early as possible."
---

'Fail fast' suggests that if an error or problem is going to occur, it's best to detect it as early as possible. Improper or invalid inputs to a system or to individual methods, are a common source of problems in software applications. Sometimes, these problems are persisted, resulting in corrupt or invalid data that can be difficult to isolate and correct. Sometimes, the problems leave the system in an unresponsive state, consuming resources and possibly denying other users access to it.

The principle of fail fast helps reduce the feedback loop when problematic inputs enter a system. The sooner a user or another system is notified there is a problem with processing its input, the better. The system will be more responsive and will consume fewer resources dealing with inputs that will ultimately result in errors or system failure.

Practices like [defensive programming](/practices/defensive-programming) and patterns like [guard clauses](/design-patterns/guard-clause) are frequently applied in order to follow the fail fast principle.

Fail fast doesn't just apply to low level coding. It is also often applied to product development and marketing experiments. Rather than committing a large amount of resources to a product or campaign that is destined for failure, fail fast suggests running experiments as quickly as possible that can determine whether the product, campaign, or idea has merit before committing full resources to it.

## See Also

[Defensive Programming](/practices/defensive-programming)

[Guard Clause](/patterns/guard-clause)
