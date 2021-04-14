---
title: "Code Smells"
date: "2015-10-16"
description: Code smells, or bad smells in code, refer to symptoms in code that may indicate deeper problems.
---

Code smells, or bad smells in code, refer to symptoms in code that may indicate deeper problems. They're a diagnostic tool used when considering [refactoring](/practices/refactoring/) software to improve its design. Not all code smells should be "fixed" - sometimes code is perfectly acceptable in its current form. Context is important, so what may be inappropriate in one application or part of an application may be appropriate elsewhere.

Each of these smells is demonstrated, and corrective actions described, in the [Refactoring Fundamentals](https://www.pluralsight.com/courses/refactoring-fundamentals) course on Pluralsight.

## Common Code Smells

### Bloaters

- Long Method
- Primitive Obsession
- Long Parameter List
- Data Clumps
- Combinatorial Explosion
- Oddball Solution
- Class Doesn't Do Much
- Required Setup/Teardown Code

### Obfuscators

- Regions
- Comments
- Poor Names
- Vertical Separation
- Inconsistency
- Obscured Intent

### Object Orientation Abusers

- Switch Statements
- Temporary Field
- Alternative Class with Different Interfaces
- Class Depends on Subclass
- Inappropriate Static / [Static Cling](/antipatterns/static-cling/)

### Change Preventers

- Divergent Change
- Shotgun Surgery
- Parallel Inheritance Hierarchies
- Inconsistent Abstraction Levels
- Conditional Complexity
- Poorly Written Tests

### Dispensables

- Lazy Class
- Data Class
- Duplicate Code
- Dead Code
- Speculative Generality

### Couplers

- Feature Envy
- Inappropriate Intimacy
- Law of Demeter Violations
- Indecent Exposure
- Message Chains
- Middle Man
- Tramp Data
- Artificial Coupling
- Hidden Temporal Coupling
- Hidden Dependencies

### Test Smells

- Not Enough Tests
- [DRY](/principles/dont-repeat-yourself/) versus DAMP
- Fragility
- The Liar
- Excessive Setup
- The Giant
- The Mockery
- The Inspector
- Generous Leftovers
- The Local Hero
- The Nitpicker
- The Secret Catcher
- The Loudmouth
- The Greedy Catcher
- The Sequencer
- The Hidden Dependency
- The Enumerator
- The Stranger
- The OS Evangelist
- Success Against All Odds
- The Free Ride
- The One
- The Peeping Tom
- The Slow Poke
- The Contradiction
- Roll the Dice
- Hidden Tests
- Second Class Citizens
- Wait and See
- Inappropriate Test Group
- The Optimist
- The Sleeper
- The Void

## References

[Refactoring Fundamentals](http://www.pluralsight.com/courses/refactoring-fundamentals) on Pluralsight
