---
title: "Magic Strings"
date: "2015-05-15"
description: Magic strings are string values that are specified directly within application code that have an impact on the application's behavior.
---

Magic strings are string values that are specified directly within application code that have an impact on the application's behavior. Frequently, such strings will end up being duplicated within the system, and since they cannot automatically be updated using refactoring tools, they become a common source of bugs when changes are made to some strings but not others. Alternately, the string may be associated with some form of external infrastructure or dependency, such as a configuration filename, a web URL, or a setting string. In each of these cases, if the location of the external resource or how it is accessed changes, any magic strings referring to these resources would need to be updated.

Consider the following example, which uses a magic string several times to represent the key to a cache/dictionary resource:

```java
public SomeType GetValue()
{
  var someValue = cache\["valueKey"\];

  if(someValue == null)
  {
    cache\["valueKey"\] = CalculateValue();
    someValue = cache\["valueKey"\];
  }

  return someValue;
}
```

In order to follow the [DRY principle](/principles/dont-repeat-yourself/), strings within an application should be specified in a single location. References to the value represented by the string should be made through some kind of strongly typed value, such as a constant, or alternately a factory method that is able to create the correct string given some parameters (for instance, a method that can create the correct path to a file).

In the case of the above example, a simple approach, assuming the cache key isn't used outside of the method shown, would be to assign the key value to a local variable before using it:

```java
public SomeType GetValue()
{
  var cacheKey = "valueKey";
  var someValue = cache\[cacheKey\];

  if(someValue == null)
  {
    cache\[cacheKey\] = CalculateValue();
    someValue = cache\[cacheKey\];
  }

  return someValue;
}
```

A common practice is to allow the use of magic strings the first time a value is needed, and only address the code smell created by the magic string when it is needed elsewhere in the system. In this way, [YAGNI](/principles/yagni/) can be followed and no additional abstraction is added to the system until it is required.
