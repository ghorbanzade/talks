---
theme: seriph
class: ""
highlighter: shiki
lineNumbers: false
info: Finding Regressions in Mission Critical Software Workflows
drawings:
  persist: false
layout: cover
download: 'https://touca.io/talks/cppbay23/slides-cppbay23-pejman.pdf'
background:
---

# Finding Regressions in Mission Critical Software Workflows
## San Francisco Bay Area C++ User Group, January 10, 2023

Pejman Ghorbanzade

<style>
h1 {
  font-size: 1.75rem !important;
}
h2 {
  font-size: 1.25rem !important;
}
</style>

---
layout: center
---

This talk is opinionated.

<style>
p {
  font-size: 1.5rem !important;
}
</style>

---
layout: two-cols
---

<div class="h-full">
<div class="h-8" />

# About Me

<div class="h-8" />

- Founder and CEO of [Touca.io](https://touca.io) (Techstars '22)
- Canon Medical Informatics
- VMware Carbon Black
- Digi International

- Passionate about maintaining software at scale

</div>

::right::

<div class="h-full grid place-content-center">
<div class="m-8">
<img border="rounded" src="/img/presenter.jpg" />
</div>
</div>

---
layout: two-cols
---

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

> "Software engineering is programming integrated over time." - Titus Winters

</div>

::right::

<div class="h-full grid place-content-center">
<div class="m-8">
<img border="rounded" src="/img/building-rotation.jpg" />
<div class="text-center">
<p class="text-sm"><a href="https://www.archdaily.com/973183/the-building-that-moved-how-did-they-move-an-11000-ton-telephone-exchange-without-suspending-its-operations" target="_blank">The Building that Moved</a></p>
</div>
</div>
</div>

---
layout: two-cols
---

<div class="h-full">
<div class="h-8" />

# Software Gardening

- Why building software is just like building a house
- Why software development is not like building a house

<div class="h-8" />

> Software is a tractable medium.

<div class="h-8" />

> "The most helpful thing I learnt from chess is to make good decisions
> on incomplete data in a limited amount of time." - Magnus Carlsen

</div>

::right::

<div class="h-full grid place-content-center">
<div class="m-8">
<img border="rounded" src="/img/showcase-global-illumination.jpg" />
</div>
</div>

---
layout: center
---

<Youtube id="ELLdITfDo1E" width="800" height="400" />

---
layout: two-cols
---

<div class="h-full">
<div class="h-8" />

# Software Testing

- Good tests are:
  - Cheap to Write
  - Easy to Read
  - Fast to Run
  - Easy to Change

<div class="h-8" />

> Good tests have high return on investment.

<div class="h-8" />

> Good tests give you confidence when they pass and teach you something when they fail.

</div>

::right::

<div class="h-full grid place-content-center">
<div class="m-12">
<img border="rounded" src="/img/test-pyramid.png" />
</div>
</div>

---
layout: center
---

Question

# How do you measure the return on investment of software testing?

---

<div class="h-full">
<div class="h-8" />

# The Cost of a Bug

<div class="center my-8 mx-24">

| | |
| ------------------------------- | ------ |
| Finding bugs after deployment   | 💰💰💰💰💰 |
| Finding bugs before release     | 💰💰💰    |
| Finding bugs during QA testing  | 💰💰     |
| Finding bugs during code review | 💰       |
| Finding bugs during development |          |

</div>
</div>

---
layout: two-cols
---

<div class="h-full">
<div class="h-8" />

# Developer Productivity

<div class="h-16" />

- Depth: Does this test provide adequate confidence?

- Speed: Does this test provide timely feedback?

<div class="h-8" />

> Confidence level and feedback cycle are non-const variables.

<style>
blockquote {
  font-size: 1rem;
}
</style>

</div>

::right::

<div class="h-full grid place-content-center">
<div class="m-12">
<img border="rounded" src="/img/developer-inner-loop.jpg" />
</div>
</div>

---
layout: center
---

# Fun Fact
<div/>

<p style="line-height: 2.5rem;" class="text-3xl">Most engineering teams think that they are doing <span class="text-red-500">worse</span> than average in following industry best practices.</p>

---

<div class="h-full">
<div class="h-8" />

# Hot Take

<div/>

<div class="my-16 grid place-content-center">

Improving software testing is a ______ problem.

1. business
2. culture
3. design
4. tooling

</div>
</div>

<style>
p {
  font-size: 1.5rem;
}
li {
  font-size: 1.5rem;
  padding: 0 2rem;
}
</style>

---
layout: two-cols
---

<div class="h-full">
<div class="h-8" />

Improving Culture

# Active Debate

<div class="h-8" />

- Regular technical debt review
- Periodic code review policy
- Pair/Ensemble programming sessions
- Regular knowledge hand-off sessions
- Collecting and sharing software quality metrics

</div>

::right::

<div class="h-full grid place-content-center">
<div class="m-8">
<img border="rounded" src="/img/angry.jpg" />
</div>
</div>

---
layout: two-cols
---

<div class="h-full">
<div class="h-8" />

Improving Culture

# No Broken Windows

<div class="h-8" />

> In criminology, the broken windows theory states that visible signs of
> crime, anti-social behavior and civil disorder create an urban environment
> that encourages further crime and disorder, including serious crimes.
> The theory suggests that policing methods that target minor crimes such
> as vandalism, loitering, public drinking, jaywalking, and fare evasion
> help to create an atmosphere of order and lawfulness.

</div>

<style>
blockquote {
  font-size: 1rem;
}
</style>

::right::

<div class="h-full grid place-content-center">
<div class="w-[20vw]">
<img border="rounded" src="/img/culture.jpg" />
</div>
</div>

---
layout: center
---

# Fun Fact
<div/>

<p style="line-height: 2.5rem;" class="text-3xl">It takes <span class="text-yellow-500">23 days</span> for software engineers to gain confidence that a given code change works as they expect.</p>

---
layout: center
---

The Problem

# How can we refactor half a million lines of code without causing any side effects?

---

<div class="h-full">
<div class="h-8" />

# Candidate Solution A

<div class="h-8" />

```cpp
auto new_output = new_system(testcase);
auto old_output = old_system(testcase);
compare(new_output, old_output);
```

<div class="h-8" />

## Disadvantages

<div class="h-8" />

- Test is difficult to setup
- Test system is inefficient to run
- Test system is not reusable

</div>

---

<div class="h-full">
<div class="h-8" />

# Candidate Solution B

<div class="h-8" />

```cpp
auto new_output = new_system(testcase);
auto new_file = write_to_file(testcase, new_output);
auto old_file = find_old_file(testcase);
compare(new_file, new_output);
```

<div class="h-8" />

## Disadvantages

<div class="h-8" />

- Dealing with files is no fun
- Test system is hard to maintain
- Test system is not reusable

</div>

---
layout: cover
background:
---

# Demo Time

## Approval Testing

---

<div class="h-full">
<div class="h-8" />

# Candidate Solution C

<div class="h-8" />

```cpp
auto new_output = new_system(testcase);
auto new_description = describe(new_output);
submit(testcase, new_description);
```

<div class="h-8" />

## Disadvantages

<div class="h-8" />

- Limited customization
- Overkill for small projects
- Requires remote computing resources

</div>

---

Example

# Code Under Test

```cpp
struct Student {
  std::string username;
  std::string fullname;
  Date birth_date;
  std::vector<Course> courses;
};

Student find_student(const std::string& username);
```

---

Example

# Regression Test

```cpp
#include "students.hpp"
#include "touca/touca.hpp"

int main(int argc, char* argv[]) {
  touca::workflow("students", [](const std::string& username) {
    const auto& student = find_student(username);
    touca::check("username", student.username);
    touca::check("fullname", student.fullname);
    touca::check("birth_date", student.birth_date);
    touca::check("courses", student.courses);
  });
  touca::run(argc, argv);
}
```

---

<div class="h-full">
<div class="h-8" />

Example

# Serializing Custom Types

<div class="h-8" />

```cpp
template <>
struct touca::serializer<Date> {
  data_point serialize(const Date& value) {
    return object("Date")
        .add("year", value.year)
        .add("month", value.month)
        .add("day", value.day);
  }
};
```

<div class="h-8" />

> 👉🏼 CppCon2021: "Building an Extensible Type Serialization System Using Partial Template Specialization", Pejman Ghorbanzade

</div>

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

---
layout: two-cols
---

<div class="h-full grid place-content-center">
<div class="m-24">
<img border="rounded-full" src="/img/pejman.jpg" />
</div>
</div>

::right::

<div class="h-full pl-16">
<div class="h-24" />

# Questions

<div class="h-8" />

- https://touca.io
- https://github.com/trytouca/trytouca
- https://fosstodon.org/@heypejman
- https://linkedin.com/in/ghorbanzade
- [pejman@touca.io](mailto:pejman@touca.io)

</div>
