---
layout: slide
slide: Agenda
---

- Motivation
- The Basics
- Practical Example
- <span class="wsl-highlight">Concepts</span>
- Argument Dependent Lookup
- Static Reflection

---
layout: slide
section: 'Concepts'
slide: 'The Basics'
---

- Concepts are named predicates evaluated at compile-time.
  - Constrain template parameters
- Reaching for the aims of C++
  - Improved readability
  - Reduced complexity
  - Better diagnostics
  - Faster compilation time

---
layout: slide
section: 'Concepts'
slide: 'The Basics'
---

```cpp
template <typename T>
requires CONDITION
void foo(T t) {}

template <typename T>
void foo(T t) requires CONDITION {}

template <CONDITION T>
void foo(T t) {}

void foo(CONDITION auto t) {}
```

---
layout: slide
section: 'Concepts'
slide: 'The Basics'
---

```cpp
template <typename T>
concept HasToString = requires(const T& value) {
  value.to_string();
};

template <typename T>
void printer(const T& value) {
  std::cout << value << std::endl;
}

template <HasToString T>
void printer(const T& value) {
  std::cout << value.to_string() << std::endl;
}
```

---
layout: slide
section: 'Concepts'
slide: 'The Basics'
---

```cpp
template <typename T>
concept HasToString = requires(const T& value) {
  value.to_string()
};

void printer(const auto& value) {
  std::cout << value << std::endl;
}

void printer(const HasToString auto& value) {
  std::cout << value.to_string() << std::endl;
}
```

---
layout: slide
section: 'Concepts'
slide: 'Reconsidering our Approach'
---

```cpp
template <typename Char, typename Value>
void check(Char&& key, const Value& value) {
  detail::check(std::forward<Char>(key), serialize(value));
}
```

---
layout: slide
section: 'Concepts'
slide: 'Specializing Basic Types'
---

```cpp
generic_value serialize(std::nullptr_t value) {
  /** and so it goes */
}
```

```cpp
generic_value serialize(const bool value) {
  /** and so it goes */
}
```

---
layout: slide
section: 'Concepts'
slide: 'Specializing Numeric Types'
---

```cpp
template <typename T>
concept Arithmetic = std::integral<T> || std::floating_point<T>;
```

```cpp
generic_value serialize(const Arithmetic auto& value) {
  /** and so it goes */
}
```

---
layout: slide
section: 'Concepts'
slide: 'Specializing String Types'
---

```cpp
template <typename T>
concept StringLike =
    std::convertible_to<T, std::basic_string<typename T::value_type>>;
```

```cpp
generic_value serialize(const StringLike auto& value) {
  /** and so it goes */
}
```

---
layout: slide
section: 'Concepts'
slide: 'Specializing Fixed-Sized Arrays'
---

```cpp
template <typename Char, std::size_t N>
generic_value serialize(const Char (&value)[N]) {
  /** and so it goes */
}
```

---
layout: slide
section: 'Concepts'
slide: 'Helper Trait: is_iterable'
---

```cpp
template <typename T, typename = void>
struct is_iterable : std::false_type {};

template <typename T>
struct is_iterable<T, void_t<decltype(std::declval<T>().begin()),
                             decltype(std::declval<T>().end())>>
    : std::true_type {};
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<heroicons-solid-x class="text-md text-red-500" />
<span>We can do better</span>
</div>

---
layout: slide
section: 'Concepts'
slide: 'Helper Concept: Iterable'
---

```cpp
template <typename T>
concept Iterable = requires(const T x) {
  { x.begin() } -> std::same_as<typename T::const_iterator>;
  { x.end() } -> std::same_as<typename T::const_iterator>;
};
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<heroicons-solid-x class="text-md text-red-500" />
<span>We can do better</span>
</div>

---
layout: slide
section: 'Concepts'
slide: 'Helper Concept: Container'
---

```cpp
template <typename T>
concept Container = requires(T a, const T b) {
  { a.begin() } -> std::same_as<typename T::iterator>;
  { a.end() } -> std::same_as<typename T::iterator>;
  { b.begin() } -> std::same_as<typename T::const_iterator>;
  { b.end() } -> std::same_as<typename T::const_iterator>;
  { a.cbegin() } -> std::same_as<typename T::const_iterator>;
  { a.cend() } -> std::same_as<typename T::const_iterator>;
  { a.size() } -> std::same_as<typename T::size_type>;
  { a.max_size() } -> std::same_as<typename T::size_type>;
  { a.empty() } -> std::same_as<bool>;

  /** part 1/3 */
};
```

---
layout: slide
section: 'Concepts'
slide: 'Helper Concept: Container'
---

```cpp
template <typename T>
concept Container = requires(T a, const T b) {
  /** ... */

  requires std::regular<T>;
  requires std::swappable<T>;
  requires std::destructible<typename T::value_type>;
  requires std::same_as<typename T::reference, typename T::value_type&>;
  requires std::same_as<typename T::const_reference, const typename T::value_type&>;
  requires std::forward_iterator<typename T::iterator>;
  requires std::forward_iterator<typename T::const_iterator>;

  /** part 2/3 */
};
```

---
layout: slide
section: 'Concepts'
slide: 'Helper Concept: Container'
---

```cpp
template <typename T>
concept Container = requires(T a, const T b) {
  /** ... */

  requires std::signed_integral<typename T::difference_type>;
  requires std::same_as<
      typename T::difference_type,
      typename std::iterator_traits<typename T::iterator>::difference_type>;
  requires std::same_as<
      typename T::difference_type,
      typename std::iterator_traits<typename T::const_iterator>::difference_type>;

  /** part 3/3 */
};
```

---
layout: slide
section: 'Concepts'
slide: 'Specializing for Containers'
---

```cpp
template <typename T>
concept ArrayLike = !StringLike<T> && Container<T>;
```

```cpp
generic_value serialize(const ArrayLike auto& values) {
  auto& out = generic_value::array();
  for (const auto& v : values) {
    out.add(serialize(v));
  }
  return out;
}
```

---
layout: slide
section: 'Concepts'
slide: 'Taking a Step Back'
---

```cpp
struct Date {
  unsigned short year;
  unsigned short month;
  unsigned short day;

  /** and so it goes */

  generic_value serialize() const;
};
```

---
layout: slide
section: 'Concepts'
slide: 'Specializing for User-defined Types'
---

```cpp
template <typename T>
concept Serializable = requires(T x) {
  { x.serialize() } -> std::same_as<generic_value>;
};
```

```cpp
generic_value serialize(const Serializable auto& value) {
  return value.serialize();
}
```

---
layout: slide
section: 'Concepts'
slide: 'Handling unsupported types'
---

```cpp
template <typename T>
generic_value serialize(const T& value) {
  static_assert(std::is_same_v<generic_value, T>,
                "did not find any serializer for the given type");
  return static_cast<T>(value);
}
```
