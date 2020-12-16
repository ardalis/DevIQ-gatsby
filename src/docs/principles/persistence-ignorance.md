---
title: "Persistence Ignorance"
date: "2015-06-22"
description: The principle of Persistence Ignorance (PI) holds that classes modeling the business domain in a software application should not be impacted by how they might be persisted.
---

The principle of Persistence Ignorance (PI) holds that classes modeling the business domain in a software application should not be impacted by how they might be persisted. Thus, their design should reflect as closely as possible the ideal design needed to solve the business problem at hand, and should not be tainted by concerns related to how the objects' state is saved and later retrieved. Some common violations of Persistence Ignorance include domain objects that must inherit from a particular base class, or which must expose certain properties. Sometimes, the persistence knowledge takes the form of attributes that must be applied to the class, or support for only certain types of collections or property visibility levels. There are degrees of persistence ignorance, with the highest degree being described as Plain Old CLR Objects (POCOs) in .NET, and Plain Old Java Objects (POJOs) in the Java world.
