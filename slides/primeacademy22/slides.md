---
theme: seriph
class: ""
highlighter: shiki
lineNumbers: false
info: Software Testing Best Practices
drawings:
  persist: false
layout: cover
background:
---

# Software Testing Best Practices

## Prime Digital Academy, March 2022

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

- Story Time
- Software Testing
- The Testing Pyramid
- Case Study: Regression Testing
- Touca: Continuous Regression Testing

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

Story Time

# Candidate Solution A

```python
def first_solution():
  new_output = new_system(testcase)
  old_output = old_system(testcase)
  compare(new_output, old_output)
```

<div class="h-10" />

## Disadvantages

- Test is difficult to setup
- Test system is inefficient to run
- Test system is not reusable

---

Story Time

# Candidate Solution B

```python
def second_solution():
  new_output = new_system(testcase)
  new_file = write_to_file(testcase, new_output)
  old_file = find_old_file(testcase)
  compare(new_file, old_file)
```

<div class="h-10" />

## Disadvantages

- Dealing with files is no fun
- Test system is hard to maintain
- Test system is not reusable

---

Story Time

# Candidate Solution C

```python
def third_solution():
  new_output = new_system(testcase)
  new_description = describe(testcase, new_output)
  submit(testcase, new_description)
```

<div class="h-10" />

## Disadvantages

- Limited customization
- Overkill for small projects
- Requires remote computing resources

---

Story Time

# Simple Example

```python
@dataclass
class Student:
    username: str
    fullname: str
    dob: date
    gpa: float

def find_student(username: str) -> Student:
```

---

Story Time

# High-level API

```python
import touca

@touca.Workflow
def students_test(username: str):
  student = find_student(username)
  touca.check("username", student.username)
  touca.check("fullname", student.fullname)
  touca.check("birth_date", student.dob)
  touca.check("gpa", student.gpa)
```

---

Story Time

# Design Requirements

- Intuitive developer experience
- Intrinsic support for common types
  - Must support integral types, fractional types, Strings, Iterables,
    and other common standard types
- Extensible design to support user-defined types
  - Must allow users to introduce logic for handling custom types

---
layout: cover
---

# Software Testing Best Practices

---

Software Testing Best Practices

# Software Engineering

<div grid="~ cols-2 gap-4">
<div>

- Programming
  - Theoretical problem solving
  - Like sport
- Software Engineering
  - Problem solving within business constraints
  - Like gardening

<div class="h-8" />

> Software Engineering is programming integrated over time

</div>
<div>

<div class="flex flex-col items-center justify-center h-80">
<img border="rounded" src="/img/building-rotation.jpg" />
<p class="text-sm"><a href="https://www.archdaily.com/973183/the-building-that-moved-how-did-they-move-an-11000-ton-telephone-exchange-without-suspending-its-operations" target="_blank">The Building that Moved</a></p>
</div>

</div>
</div>

---

<div grid="~ cols-2 gap-4">
<div>

Software Testing Best Practices

# Business Value

- Think like an engineer
  - Civil engineering: Building a house
  - Software engineering:
    - Like building with mud, on Mars, during a war

<div class="h-8" />

> Software is abstract. Many ways to use, misuse. Race against time.

</div>
<div>

<div class="flex flex-col items-center justify-center w-80 mx-auto">
<img border="rounded" src="/img/tower.jpg" />
</div>

</div>
</div>

---

Software Testing Best Practices

# Software Testing Principles

- Think about the *What*
- Think about the *Why*
- Think about the Return on Investment

---

<div grid="~ cols-2 gap-4">
<div>

Software Testing Best Practices

# Software Testing Pyramid

- Good tests are:
  - Cheap to Write
  - Easy to Read
  - Fast to Run
  - Easy to Change

<div class="h-8" />

> Good tests have high return on investment.

</div>
<div>

<div class="grid place-content-center w-80 mx-auto h-[50vh]">
<img border="rounded" src="/img/test-pyramid.png" />
</div>

</div>
</div>

---

# Software Testing Methods

- Unit Testing
- Integration Testing
- End-to-End Testing
- Snapshot Testing
- Regression Testing
- Performance Testing

---
layout: cover
---

# Demo Time

---
layout: center
---

# Questions

- https://github.com/trytouca/trytouca
- https://twitter.com/heypejman
- [pejman@touca.io](mailto:pejman@touca.io)
