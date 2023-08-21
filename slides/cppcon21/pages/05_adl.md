---
layout: slide
slide: 'Agenda'
---

- Motivation
- The Basics
- Practical Example
- Concepts
- <span class="text-yellow-500">Argument Dependent Lookup</span>
- Static Reflection

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'The Basics'
---

Argument-Dependent Lookup (ADL) enables the lookup of an unqualified function name, in a function call expression, in the namespaces of its arguments.

<div class="text-xs flex w-full items-end justify-end space-x-1">
<span>*Some restrictions apply</span>
</div>

```cpp
endl(std::cout);
```
