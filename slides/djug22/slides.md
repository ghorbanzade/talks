---
theme: seriph
class: ""
highlighter: shiki
lineNumbers: false
info: Improving Developer Productivity through Continuous Regression Testing
drawings:
  persist: false
layout: cover
background:
---

## Improving Developer Productivity through
# Continuous Regression Testing

### Denver Java User Group, April 13, 2022

Pejman Ghorbanzade

<style>
h1 {
  font-size: 3rem !important;
}
</style>

---

# Format

- Interactive
- Hands-on Live Coding
- Ask questions any time

<style>
li {
  font-size: 1.25em;
}
</style>

---

# Agenda

- Motivation
- Snapshot Testing
- Regression Testing
- Continuous Testing

<style>
li {
  font-size: 1.25em;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="h-full">

<div class="h-8" />

# About Me

- 6 Years of Experience
  - VMWare Carbon Black
  - Canon Medical Informatics
- Working full-time on touca.io
  - Continuous Regression Testing
- Passionate about maintaining software at scale

</div>
</template>
<template v-slot:right>
<div class="h-full grid place-content-center">

<div class="w-[25vw] mx-auto">
<img border="rounded" src="/img/showcase-global-illumination.jpg" />
</div>

</div>
</template>

---
layout: two-cols
---

<template v-slot:default>
<div class="h-full">

<div class="h-8" />

# Software Engineering

- Programming
  - Theoretical problem solving
  - Like sport
- Software Engineering
  - Problem solving within business constraints
  - Like gardening

<div class="h-8" />

> Software Engineering is programming integrated over time

</div>
</template>
<template v-slot:right>
<div class="h-full grid place-content-center">

<div class="w-[25vw] mx-auto">
<img border="rounded" src="/img/building-rotation.jpg" />
<div class="text-center">
<p class="text-sm"><a href="https://www.archdaily.com/973183/the-building-that-moved-how-did-they-move-an-11000-ton-telephone-exchange-without-suspending-its-operations" target="_blank">The Building that Moved</a></p>
</div>
</div>

</div>
</template>

---
layout: two-cols
---

<template v-slot:default>
<div class="h-full">

<div class="h-8" />

# Business Value

- Think like an engineer
  - Civil engineering: Building a house
  - Software engineering: Building with mud

<div class="h-8" />

> Software is a tractable medium.

</div>
</template>
<template v-slot:right>
<div class="h-full grid place-content-center">

<div class="w-[20vw] mx-auto">
<img border="rounded" src="/img/tower.jpg" />
</div>

</div>
</template>

---
layout: two-cols
---

<template v-slot:default>
<div class="h-full">

<div class="h-8" />

# Software Testing Pyramid

- Good tests are:
  - Cheap to Write
  - Easy to Read
  - Fast to Run
  - Easy to Change

<div class="h-8" />

> Good tests have high return on investment.

</div>
</template>
<template v-slot:right>
<div class="h-full grid place-content-center">

<div class="grid place-content-center w-80 mx-auto h-[50vh]">
<img border="rounded" src="/img/test-pyramid.png" />
</div>

</div>
</template>

---
layout: center
---

<div class="w-100 mx-auto">
<img border="rounded" src="/img/developer-inner-loop.jpg" />
</div>

---
layout: center
---

| | |
| ------------------------------- | ------ |
| Finding bugs after deployment   | 💰💰💰💰💰 |
| Finding bugs before release     | 💰💰💰    |
| Finding bugs during QA testing  | 💰💰     |
| Finding bugs during code review | 💰       |
| Finding bugs during development |          |

---
layout: center
---

<p class="text-3xl">It takes <span class="text-yellow-500">23 days</span> for software engineers to gain confidence that a given code change works as they expect.</p>

<style>
p {
  line-height: 2.5rem;
}
</style>

---
layout: center
---

The Problem

# How can we refactor half a million lines of code without causing any side effects?

---

Motivation

# Candidate Solution A

```java
Output newOutput = newSystem(testcase);
Output oldOutput = oldSystem(testcase);
compare(newOutput, oldOutput);
```

<div class="h-10" />

## Disadvantages

- Test is difficult to setup
- Test system is inefficient to run
- Test system is not reusable

---

Motivation

# Candidate Solution B

```java
Output newOutput = newSystem(testcase);
File newFile = writeToFile(testcase, newOutput);
File oldFile = findOldFile(testcase);
compare(newFile, newOutput);
```

<div class="h-10" />

## Disadvantages

- Dealing with files is no fun
- Test system is hard to maintain
- Test system is not reusable

---
layout: cover
background:
---

# Demo Time

## Approval Testing

---

Motivation

# Candidate Solution C

```java
final Output newOutput = newSystem(testcase);
final Description newDescription = describe(testcase, newOutput);
submit(testcase, newDescription);
```

<div class="h-10" />

## Disadvantages

- Limited customization
- Overkill for small projects
- Requires remote computing resources

---

Motivation

# Simple Example

```java
public record Student(
  String username,
  String fullname,
  LocalDate dob,
  double gpa
) {}

public static Student findStudent(final String username) {
  // ...
}
```

---

Motivation

# High-level API

```java
import io.touca.Touca;

public final class StudentsTest {

  @Touca.Workflow
  public void findStudent(final String username) {
      Student student = Students.findStudent(username);
      Touca.assume("username", student.username);
      Touca.check("fullname", student.fullname);
      Touca.check("birth_date", student.dob);
      Touca.check("gpa", student.gpa);
  }

  public static void main(String[] args) {
    Touca.run(StudentsTest.class, args);
  }
}
```

---

Motivation

# Design Requirements

- Intuitive developer experience
- Intrinsic support for common types
  - Must support integral types, fractional types, Strings, Iterables,
    and other common standard types
- Extensible design to support user-defined types
  - Must allow users to introduce logic for handling custom types

---
layout: cover
background:
---

# Demo Time

## Regression Testing

---
layout: center
---

# Questions

- https://touca.io
- https://github.com/trytouca/trytouca
- https://twitter.com/heypejman
- [pejman@touca.io](mailto:pejman@touca.io)
