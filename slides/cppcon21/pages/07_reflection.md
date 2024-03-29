---
slide: Agenda
---

- Motivation
- The Basics
- Practical Example
- Concepts
- Argument Dependent Lookup
- <span class="wsl-highlight">Static Reflection</span>

---
section: 'Static Reflection'
slide: 'User-facing API'
---

```cpp
check("some-boolean", true);
check("some-number", 42.0f);
check("some-string", "forty two");
check("some-array", std::vector<int>{42});
check("some-date", Date{.year=2021, .month=10, .day=29});
check("some-map",
      std::map<std::string, MyDate>{{"today", MyDate(2021, 10, 29)},
                                    {"yesterday", MyDate(2020, 10, 28)}});
```

---
section: 'Static Reflection'
slide: 'Current Status'
---

Proposals

- Reflection TS Draft (N4856)
- Alternative Draft (P1240, P2237, P2320)

Circle Compiler (with Different Syntax)

---
section: 'Static Reflection'
slide: 'Relevant Talks'
---

<div class="space-y-8">
<div>
  <span class="block text-xl font-600">Andrew Sutton, ACCU 2021</span>
  <span class="block">"Reflection: Compile-Time Introspection of C++"</span>
</div>
<div>
  <span class="block text-xl font-600">Pavel Novikov, C++ on Sea 2020</span>
  <span class="block">"Serialization in C++ has never been easier! But wait, there's more"</span>
</div>
<div>
  <span class="block text-xl font-600">David Sankel, C++Now 2019</span>
  <span class="block">"The C++ Reflection TS"</span>
</div>
</div>

---
section: 'Static Reflection'
slide: 'TS Draft (N4856)'
---

```cpp
template <typename T> std::string get_type_name() {
  namespace reflect = std::experimental::reflect;
  using meta_t = reflexpr(T);
  using aliased_meta_t = reflect::get_aliased_t<meta_t>;
  return reflect::get_name_v<aliased_meta_t>;
}
```

```cpp
get_type_name<std::string>() // -> "basic_string"
get_type_name<int>() // -> "int"
```

<!--
ISO/IEC 23619:2021(E):

> The reflexpr-specifier evaluates to an unnamed type that allows inspection
> of some properties of its operand through type traits or type transformations
-->

---
section: 'Static Reflection'
slide: 'TS Draft (N4856)'
---

```cpp
namespace reflect = std::experimental::reflect;
using meta_t = reflexpr(Date);
using members_t = reflect::get_accessible_data_members_t<meta_t>;
using member_t = reflect::get_element_t<members_t, 0>;
std::cout << reflect::get_name_v<member_t>
          << reflect::get_name_v<reflect::get_type_t<member_t>>
          << std::endl;
```

---
section: 'Static Reflection'
slide: 'Constxpr Reflexpr (P0953)'
---

```cpp
template <typename T>
void to_json_impl(const T& object) {
  std::cout << '{';
  constexpr reflect::Class meta = reflexpr(T);
  constexpr auto members = meta.get_accessible_data_members();
  std::size_t count = 0;
  constexpr for(const RecordMember member : members) {
    std::cout << '"' << member.get_name() << '"' << ':';
    constexpr reflect::Constant member_ptr = member.get_pointer();
    to_json(object.*unreflexpr(member_ptr));
    if (++count != members.size()) {
      std::cout << ',';
    }
  }
  std::cout << '}';
}
```

---
section: 'Static Reflection'
slide: 'Value-based Reflection (P2320)'
---

```cpp
Date date{.year=2021, .month=10, .day=29};
template for (constexpr meta::info member : meta::members_of(^Date)) {
  std::cout << '"' << meta::name_of(member) << '"'
            << ':' << date.[:member:] << std::endl;
}
```

---
section: 'Static Reflection'
slide: 'Value-based Reflection (P2320)'
---

```cpp
template <typename T>
void to_json(const T& object) {
  std::cout << '{';
  constexpr auto members = meta::data_members_of(^T);
  std::size_t count = 0;
  template for (constexpr meta::info member : members) {
    std::cout << '"' << member.get_name() << '"' << ':';
    to_json(object.[:member:]);
    if (++count != size(members)) {
      std::cout << ',';
    }
  }
  std::cout << '}';
}
```

---
section: 'Static Reflection'
slide: 'Conclusion'
---

- Template meta programming will continue to have its place and use cases.
- Designing good software requires deep understanding of use cases.
- Designing user-friendly extension points requires leveraging multiple language features.
- C++ is evolving into a simpler, more readable, more maintainable language.

---
layout: center
---

<div class="text-center space-y-8">
<div class="text-4xl font-600">Questions</div>
<a href="https://github.com/ghorbanzade/cppcon21" target="_blank" class="font-mono text-lg block">https://github.com/ghorbanzade/cppcon21</a>
</div>
