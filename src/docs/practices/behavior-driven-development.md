---
title: "Behavior Driven Development"
date: "2023-10-15"
description: 
featuredImage: "./images/behavior-driven-development.png"
---
Behavior Driven Development (BDD) is a software development practice that focuses on defining the behavior of a software system in a way that's easy to understand for both technical and non-technical stakeholders. It's a [whole team activity](/practices/whole-team-activity) that encourages collaboration among developers, testers, and business stakeholders by using plain language descriptions of how a system should behave.

## How BDD Works

These are the building blocks in BDD:

- User Stories
- Scenarios
- Steps
- Automation

There is a plain language with various cadences used throughout the process. [Gherkin](https://specflow.org/learn/gherkin/) is the domain-specific language commonly used in BDD.

### User Stories

BDD often starts with **user stories**. These are high-level descriptions of a feature or functionality from the end user's perspective. These are the smallest unit of work in an Agile environment. User stories are typically written in plain language, making them easy for non-technical team members to understand.

The plain language for user stories may follow a cadence of:

- As a [user type/system role/person]
- I want to [do something/see something/achieve something]
- So that [reason why]

The main point of user stories in BDD is to understand what is the desired behavior and why.

A sample user story may read like this:

```gherkin
Feature: Checking out books
	As a library patron,
	I want to check out eBooks,
    So that I can read eBooks on my eBook reader.
```

Another cadence may be:

- In order to [goal],
- As a [persona],
- I want [something]

The same feature above could be written as:

```gherkin
Feature: Checking out books
	In order to read eBooks on my eBook reader,
	As a library patron,
	I want to check out eBooks.
```

### Scenarios

Each user story is broken down into multiple scenarios. These scenarios describe specific instances or use cases of the feature. For BDD, scenarios are written in a specific cadence called "Given-When-Then."

- **Given**: Describes the starting conditions.
- **When**: Describes an action or event that triggers something.
- **Then**: Describes the expected outcome or result.

Writing scenarios in this format makes it clear what the system's behavior should be under certain conditions.

This is an example of a scenario for a library system.

```gherkin
Feature: Online Checkout
  Scenario: Checking out a single book
	Given the library collection has the book I want to check out
	When I check out the book
	Then the library collection’s available count is reduced by 1
```

### Automated Testing

One of the key aspects of BDD is the automation of tests based on the scenarios. The features, user stories, and scenarios are written in a domain-specific language such as Gherkin with consistency to make it easier to automate. Automated testing ensures that the software behaves according to the defined scenarios.

Gherkin allows support for variables within each step of the Scenario in the plain language documentation through a feature called Scenario Outlines.

Here is an example of using variables within Gherkin syntax:

```gherkin
Scenario Outline: Checking book checkout expiration
	Given a checkout period of <checkout_period> days
	When I open the book at day <open> 
	Then the book should expire in <left> days
Examples:
	| checkout_period	 | open	| left	|
	| 7			         | 2	| 5	    |
	| 14			     | 10	| 2	    |
	| 21			     | 18	| 3	    |

```

There are many programming libraries that allow you to map Gherkin files to code, so that you can automate the tests. Common BDD libraries include:

- Java: [Cucumber-JVM](https://cucumber.io/docs/installation/java/), [JBehave](https://jbehave.org/)
- C#: [SpecFlow](https://specflow.org/)
- Python: [behave](https://behave.readthedocs.io/en/stable/),[pytest-bdd](https://pypi.org/project/pytest-bdd/)
- Ruby: [Cucumber - Ruby Tools](https://cucumber.io/docs/tools/ruby/)

### Collaboration

BDD encourages collaboration among team members. Developers, testers, and business stakeholders work together to define and refine the scenarios. This collaboration helps ensure that everyone has a shared understanding of what the software is supposed to do.

### Continuous Feedback

With BDD, you can continuously test the software as you develop it. If a scenario fails, it's an indication that the behavior of the software doesn't match the expected behavior, and it needs to be fixed. This early feedback helps in catching and addressing issues at an earlier stage, which can save time and resources.

## Conclusion

In a nutshell, Behavior Driven Development is all about defining and automating the expected behavior of a software system using plain language descriptions and automated tests. It promotes collaboration, clear [communication](https://deviq.com/values/communication), and a shared understanding of the software's functionality among the entire development team, which ultimately leads to more reliable and customer-focused software.

## References

- [Cucumber.io Guides](https://cucumber.io/docs/guides/)
- [Intro to Test Driven Development (Sadukie)](https://www.slideshare.net/sadukie/introduction-to-test-driven-development-31743982)

## See Also

- [Test Driven Development](/practices/test-driven-development)