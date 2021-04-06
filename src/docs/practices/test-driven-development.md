---
title: "Test Driven Development"
date: "2014-11-26"
description: Test Driven Development, or TDD, also known as Test Driven Design, is a process for writing code using tests to define and then confirm the software's behavior.
---

Test Driven Development, or TDD, also known as Test Driven Design, is a process for writing code using tests to define and then confirm the software's behavior. It is characterized by a set of steps known as "Red - Green - Refactor" which are followed in very short cycles to incrementally build up working software.

The first step is to write a failing test for some new feature or behavior. To ensure the test is, in fact, failing, you must run it, in which case the test runner should display a failure (typically accompanied by a _**RED**_ indicator).

Once a failing test has been written describing the desired behavior, and it has been shown to fail, the system under test (SUT) is modified, minimally, to make the test pass. Frequently, and especially when one is new to the TDD process, this step should literally be "the simplest change that can make the test pass". If the test is asserting that the method return a certain value, and you can simply hard-code that value in the return statement to make the test pass, that's fine (for now). The goal is to get to a passing test as quickly and simply as possible. Once you've done so, your test runner should indicate _**GREEN**_.

The next step is to [refactor](/practices/refactoring) your code. Since the second step is all about getting to _**GREEN**_ as quickly and simply as possible, sometimes there will be duplication or inelegant code that needs to be fixed up. Look for any [code smells](/antipatterns/code-smells) or obvious [technical debt](/terms/technical-debt), especially [duplication](/principles/dont-repeat-yourself) [duplication](/principles/once-and-only-once), and clean it up during this stage. Be sure to continue to run your test suite and ensure it remains _**GREEN**_ - refactoring should not change what your code does but only how it does it, and your tests are there to ensure this is the case. Learn about [refactoring fundamentals](https://www.pluralsight.com/courses/refactoring-fundamentals) to make sure you're keeping your codebase clean.

Once you're happy with the code, it's time to move on to the next test. Before you do, especially if you're using a lightweight source control system and/or working in your own branch, consider committing your code after each step in the process. You can think of [Red-Green-Refactor-Commit as being the new Red-Green-Refactor for TDD](http://ardalis.com/rgrc-is-the-new-red-green-refactor-for-test-first-development). In fact, you may even want to commit before your refactor, especially if you're thinking about starting a significant refactoring.
