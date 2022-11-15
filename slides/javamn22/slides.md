---
theme: seriph
class: ""
highlighter: shiki
lineNumbers: false
info: Continuous Regression Testing in Java
drawings:
  persist: false
layout: cover
background:
---

# Continuous Regression Testing in Java

## Java MN Meetup, March 2022

Pejman Ghorbanzade

<style>
h1 {
  font-size: 3rem !important;
}
</style>

---

Intro

# Format...

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

# About Me

<div grid="~ cols-2 gap-4">
<div>

- Professional Software Engineer
  - Canon Medical Informatics
  - VMWare Carbon Black
- Working full-time on touca.io
  - Continuous Regression Testing
- Passionate about maintaining software at scale

</div>
<div>

<div class="flex justify-center h-80">
<img border="rounded" src="/img/showcase-global-illumination.jpg" />
</div>

</div>
</div>

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
layout: center
---

# Questions

- https://github.com/trytouca/trytouca
- https://touca.io

- https://twitter.com/heypejman
- [pejman@touca.io](mailto:pejman@touca.io)
