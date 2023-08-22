---
layout: slide
slide: Agenda
---

- Motivation
- The Basics
- Practical Example
- Concepts
- <span class="wsl-highlight">Argument Dependent Lookup</span>
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

<!--
- Name lookup
- Function template name lookup
- May involve argument-dependent lookup
- Template argument deduction
- Template argument substitution
- Overload resolution
-->

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'absl::Hash'
---

```cpp
struct Date {
  unsigned short year;
  unsigned short month;
  unsigned short day;

  /** and so it goes */

  friend bool operator==(const Date& lhs, const Date& rhs);

  template <typename H>
  friend H AbslHashValue(H h, const Date& m);
};
```

<!--
Can be used standalone as an alternative to std::hash but is also used by
Swiss Table {flat/node}_hash{set/map} that Abseil provides.

Advantages over std::hash:
- Support for a large set of standard types
- Extensible to support user-defined types
- Easier to write thanks to hash::combine
-->

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'absl::Hash'
---

```cpp
bool operator==(const Date& lhs, const Date& rhs) {
  return lhs.year == rhs.year &&
      lhs.month == rhs.month &&
      lhs.day == rhs.day;
}

template <typename Hash>
H AbslHashValue(Hash h, const Date& date) {
  return H::combine(std::move(h),
      date.year, date.month, date.day);
}
```

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'nlohmann::json'
---

- Modern JSON library with intuitive API
  - Extensible
  - Customizable

<div class="grid grid-cols-2 gap-4">

```cpp
json j = {
  {"year", date.year},
  {"month", date.month},
  {"day", date.day}
};
```

```json
{
  "year": 2021,
  "month": 10,
  "day": 29
}
```

</div>

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'nlohmann::json'
---

```cpp
template <typename T>
struct adl_serializer {
  static void to_json(json& j, const T& value) {
    // calls the "to_json" method in T's namespace
  }

  static void from_json(const json& j, T& value) {
    // calls the "from_json" method in T's namespace
  }
};
```

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'nlohmann::json'
---

```cpp
using namespace nlohmann;

void to_json(json& j, const Date& date) {
  j = json{{"year", date.year}, {"month", date.month}, {"day", date.day}};
}
```

```cpp
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Date, year, month, day)
```

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'Specializing for User-defined Types'
---

```cpp
struct Date {
  unsigned short year;
  unsigned short month;
  unsigned short day;

  friend void serialize(generic_value& context, const Date& date);
};
```

---
layout: slide
section: 'Argument Dependent Lookup'
slide: 'Specializing for User-defined Types'
---

```cpp
void serialize(generic_value& context, const Date& date) {
  return context
      .add("year", date.year)
      .add("month", date.month)
      .add("day", date.day);
});
```
