---
title: "Defensive Programming"
description: Defensive programming is the practice of anticipating problems that may arise in a software system and writing code to keep the system in a good state when such problems occur.
---

Defensive programming is the practice of anticipating problems that may arise in a software system and writing code to keep the system in a good state when such problems occur. A common way to apply defensive programming (also called defensive coding) is by verifying inputs to individual functions or methods. The [guard clause](/design-patterns/guard-clause) pattern is a common way to perform validation of inputs while also minimizing complexity in the function. It follows the [fail fast principle](/principles/fail-fast), ensuring that any problems are dealt with immediately, before the real work of the function starts.

## See Also

[Murphy's Law](/laws/murphys-law)

[Guard Clause](/design-patterns/guard-clause)

[Fail Fast](/principles/fail-fast)
