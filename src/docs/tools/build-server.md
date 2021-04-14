---
title: "Build Server"
date: "2015-02-19"
description: A build server is a tool that enables Continuous Integration, an excellent practice to follow when developing software.
---

A build server is a tool that enables [Continuous Integration](/practices/continuous-integration/), an excellent practice to follow when developing software. Build servers are commonly referred to as continuous integration servers or simply CI servers. There are a number of open source and commercial options available in this category of tools, and you can write your own simple build server as just a script that is able to detect when an update has been made to [Version Control](/tools/version-control/), and triggers a build as a result. Most mature versions of this tool will support a variety of different version control systems and many different options for when and how to trigger a build, what to do as part of a build (e.g. run tests, deploy to a staging server), and how to notify team members of the results of builds. Beyond Continuous Integration, build servers can enable Continuous Deployment, deploying updates to production when builds succeed and pass all tests.

Even if a project has only one developer working on it, a build server adds value in several ways. It eliminates the "It works on my machine" syndrome, in which software only functions when in a particular environment, and these hidden dependencies are not necessarily obvious, even to the developer of the software (on whose machine everything runs fine). If the project builds and runs on two machines, it's much more likely that it will run on many other machines than if it has only ever been tested on the developer's machine. If the project has automated tests, some of which may require more than a few seconds to run, the build server can offload this task from the developer's workflow and run them in parallel. Otherwise, the friction from running these tests might result in the developer choosing not to run them very often, reducing their value and increasing the feedback cycle between bugs being introduced and being detected (by tests or otherwise). They can also automate the process of pushing working code to a staging environment where the customer can interact with the code, making it frictionless for customers to always see the most recent working version of the software.

## Tools

[Jenkins](http://jenkins-ci.org) An extensible, free, open source continuous integration server

[JetBrains TeamCity](https://www.jetbrains.com/teamcity/) - A commercial CI server, free for up to 20 projects

[Team Foundation Server Build Server](https://msdn.microsoft.com/en-us/library/ms181712.aspx) - A commercial build server from Microsoft

## References

[What is the point of a build server?](http://stackoverflow.com/questions/1099133/what-is-the-point-of-a-build-server) - Stack Overflow

[A comparison of CI servers](http://en.wikipedia.org/wiki/Comparison_of_continuous_integration_software) - Wikipedia
