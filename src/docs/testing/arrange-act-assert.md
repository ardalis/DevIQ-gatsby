---
title: "Arrange-Act-Assert"
date: "2023-12-18"
description: Arrange-Act-Assert is a pattern for setting up tests.
featuredImage: "./images/arrange-act-assert.png"
---

The Arrange-Act-Assert (AAA) pattern is a simple yet powerful way to structure your test cases, particularly in unit testing. It provides a clear and concise format for testing code, making your tests easier to read, understand, and maintain. The code structure looks like this:

```csharp
public void ShouldDoSomethingAndReturnExpectedValue(){
    // Arrange
    // Act
    // Assert
}
```

Let's look at each of these steps.

### Arrange

This is the step where you configure your known starting conditions. Initialize all knowns or assumed values. Set the stage for the test.

### Act

Do the thing that is under test. This usually means calling a method and capturing its result. This could also be calling a process and capturing outputs or state values throughout the process. At this step, you should only capture the outputs or state values. You should not be validating them yet.

### Assert

This is when you can assert that the states and outputs captured during "Act" are what you expect them to be. If they are not acting as expected, the test should fail.

## Benefits of Arrange-Act-Assert

These are some benefits of following the Arrange-Act-Assert pattern within your tests:

- **Improved Readability**: By clearly separating the setup, execution, and verification, tests become easier to follow and understand, even for newcomers.
- **Enhanced Maintainability**: Changes in test logic are contained within specific sections, making updates and debugging simpler.
- **Reduced Redundancy**: The pattern encourages concise and focused tests, minimizing unnecessary code repetition.
- **Increased Reusability**: Components of the Arrange and Act sections can be reused across different tests, saving time and effort.

## Arrange-Act-Assert in Action

Let's look at Arrange-Act-Assert in action.

Suppose we have a calculator class that looks like this:

```csharp
public class Calculator {
    public int Add(int num1, int num2){
        return num1 + num2;
    }
}
```

Now let's test this. Given I have a calculator object, two input numbers, and an expected value:

```csharp
public void ShouldAddTwoNumbers(){
    // Arrange
    Calculator calc = new();
    int num1 = 3;
    int num2 = 5;
    int expectedValue = 8;
    // Act
    // Assert
}
```

When I call `Add` with my given inputs and capture the result in a variable called `actualOutput`:

```csharp
public void ShouldAddTwoNumbers(){
    // Arrange
    Calculator calc = new();
    int num1 = 3;
    int num2 = 5;
    int expectedValue = 8;
    // Act
    var actualOutput = calc.Add(num1,num2);
    // Assert
}
```

Then I should assert that the actual output matches the expected value:

```csharp
public void ShouldAddTwoNumbers(){
    // Arrange
    Calculator calc = new();
    int num1 = 3;
    int num2 = 5;
    int expectedValue = 8;
    // Act
    var actualOutput = calc.Add(num1,num2);
    // Assert
    Assert.AreEqual(expectedValue, actualOutput);
}
```

Notice that we left the comments in the code for you to see each step. As you adopt this pattern in your code, you may want to use comments to remind you of the pattern. Eventually, you will write tests without those comments.