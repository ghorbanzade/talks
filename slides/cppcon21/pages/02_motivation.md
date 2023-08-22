---
layout: slide
slide: Agenda
---

- <span class="text-yellow-500">Motivation</span>
- The Basics
- Practical Example
- Concepts
- Argument Dependent Lookup
- Static Reflection

---
layout: two-cols
---

<SlideTitle chapter="Motivation" title="About Me" />

Professional Software Engineer

- Canon Medical Informatics
- VMware Carbon Black

Working full-time on touca.io

- Continuous Regression Testing

Passionate about maintaining software at scale

::right::

<div class="h-full grid place-content-center p-12">
<img src="/images/vital_lung.jpg" class="rounded-xl" />
<div class="text-[0.6rem] text-right py-2">
<div>3D visualization of Lung CT</div>
<div>Courtesy of Canon Medical Information</div>
</div>
</div>

<style>
ul {
  @apply list-disc;
}
</style>

---
layout: slide
section: Motivation
slide: 'The Problem'
---

<div class="text-2xl w-3/5 leading-10">
How can we refactor half a million lines of code without causing any side effects?
</div>

---
layout: slide
section: Motivation
slide: 'Candidate Solution A'
---

```cpp
auto new_output = new_system(testcase);
auto old_output = old_system(testcase);
compare(new_output, old_output);
```

### Disadvantages

- Test is difficult to setup
- Test system is inefficient to run
- Test system is not reuseable

---
layout: slide
section: Motivation
slide: 'Candidate Solution B'
---

```cpp
auto new_output = new_system(testcase);
auto new_file = write_to_file(testcase, new_output);
auto old_file = find_old_file(testcase);
compare(new_file, new_output);
```

### Disadvantages

- Dealing with files is no fun
- Test system is hard to maintain
- Test system is not reusable

---
layout: slide
section: Motivation
slide: 'Candidate Solution C'
---

```cpp
auto new_output = new_system(testcase);
auto new_description = describe(new_output);
submit(testcase, new_description);
```

### Disadvantages

- Limited customization
- Overkill for small projects
- Requires remote computing resources

---
layout: slide
section: Motivation
slide: 'Simple Example'
---

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
layout: slide
section: Motivation
slide: 'High-level API'
---

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

<div class="text-xs font-mono text-right">
<a href="https://github.com/trytouca/trytouca" target="_blank">
https://github.com/trytouca/trytouca
</a>
</div>

---
layout: slide
section: Motivation
slide: 'Design Requirements'
---

- Intuitive developer experience
- Intrinsic support for common types
  - Must support integral types, floating point types, string-like types, containers, and other common standard types
- Extensible design to support user-defined types
  - Must allow users to introduce logic for handling custom types
