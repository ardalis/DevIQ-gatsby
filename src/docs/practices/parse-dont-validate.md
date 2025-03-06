---
title: "Parse, Don't Validate"
date: "2024-07-11"
description: "In many software applications, validation is used to determine whether or not a given data structure or object conforms to certain requirements. However, it doesn't (shouldn't) mutate or change the object in question, and thus any further change might invalidate the validation. By contrast, parsing a less-structured object and producing form it a more-structured one is a one-way operation that results in more useful data structures."
featuredImage: "./images/parse-dont-validate.png"
---

![Parse, Don't Validate](images/parse-dont-validate.png)

In many software applications, validation is used to determine whether or not a given data structure or object conforms to certain requirements. However, it doesn't (shouldn't) mutate or change the object in question, and thus any further change might invalidate the validation. By contrast, parsing a less-structured object and producing form it a more-structured one is a one-way operation that results in more useful data structures.

Alexis King describes this eloquently in her original 2019 blog post, [Parse, don't validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/). Mark Seemann references it in his book, [Software That Fits in Your Head](https://amzn.to/3xTL8NO)

## Validation

Validation is a point-in-time method that typically returns *true* or *false* (and if false a list of reasons why it's false). It doesn't typically and should not have any side effects, such as mutating the thing it's validating. If the data structure or object is passed between routines within the application, then the system probably cannot assume assume based on its type that the object remains valid from one context to another. Thus you'll often encounter validation taking place at multiple points within an application even for the same instance of a variable or structure (a practice sometimes called *shotgun validation*).

Immutable types help, of course, and can be validated once and then assumed to remain valid - *but only if the validation occurs as part of their construction*. That is, types that are able to enforce design invariants as part of their construction, and which are immutable, can be counted on by the system to be valid anywhere they appear.

The process of taking less constrained types and producing more constrained types from them (or throwing an exception if this cannot be done) is known as *parsing*.

## Parsing

The act of parsing involves taking less structured data and turning it into more-structured data. It adds additional constraints, and as such, it reduces the total range of possible values the resulting type can represent.

Consider `int.Parse(string input)`.

The input string might be a relatively short sequence of numeric digits (perhaps prefixed with a `-`). But if it's anything else, it's still a valid `string`, but it won't be a valid `int`, and thus the `Parse()` operation will fail with an exception. If your application needs a numeric value to use within certain methods or functions, it's much better to convert an input string to an integer value and then pass that than to pass around a string everywhere and validate that it can represent an integer as needed.

You can use parsers and this practice alongside [Value Objects](/domain-driven-design/value-object), which are immutable data structures. By taking less structured primitive data and parsing it into Value Objects, your software will be less error-prone and you'll have fewer variables to keep track of (in your head).

## DateTime as an Example

A great example of this approach is the DateTime type available in .NET (and other frameworks/libraries). Imagine if this type didn't exist, and you needed a way to represent date and time values down to the second in your application. You might pass around a string that would need to be parsed anywhere it was used as a date and/or time value. At which point, hopefully you can see that ideally you would only perform the parsing operation once, after which you'd have a non-string type representing the date and time value.

But alternately you might have methods with argument lists like `(int year, int month, int day, int hour, int minute, int second)`. Six integer values, each with separate acceptable ranges. You might then perform validation on these 6 values within such a method before proceeding with its actual logic. Such *shotgun validation* tends to clutter up code and obscure the real work, while also frequently missing validation of some inputs in some contexts.

The beauty of the DateTime type is that developers can be confident that it is always valid. **That's the point of parsing - to produce a higher level more constrained type that doesn't require validation because it cannot be invalid.** Using proper types instead of [the primitive obsession code smell](/antipatterns/code-smells) will make your methods easier to write correctly.

## Quotes

"...a program that does not parse all of its input up front runs the risk of acting upon a valid portion of the input, discovering a different portion is invalid, and suddenly needing to roll back whatever modifications it already executed in order to maintain consistency." -- Alexis King

## References

- [Parse, don't validate (Alexis King)](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
- [Parse, Don't Validate (YouTube)](https://www.youtube.com/watch?v=KQVy0CaB7ds&ab_channel=Ardalis)
- [Code That Fits in Your Head (Mark Seeman)](https://amzn.to/3xTL8NO)