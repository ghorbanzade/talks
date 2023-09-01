---
slide: Agenda
---

- Motivation
- The Basics
- <span class="wsl-highlight">Practical Example</span>
- Concepts
- Argument Dependent Lookup
- Static Reflection

---
section: 'Practical Example'
slide: 'User-facing API'
---

```cpp
check("some-boolean", true);
check("some-number", 42.0f);
check("some-string", "forty two");
check("some-array", std::vector<int>{42});
check("some-date", Date{.year=2021, .month=10, .day=29});
check("some-map",
      std::map<std::string, Date>{{"today", Date(2021, 10, 29)},
                                  {"yesterday", Date(2020, 10, 28)}});
```

---
section: 'Practical Example'
slide: 'Perfect Forwarding'
---

```cpp
template <typename Char, typename Value>
void check(Char&& key, const Value& value) {
  detail::check(std::forward<Char>(key),
                serializer<Value>().serialize(value));
}
```

---
section: 'Practical Example'
slide: 'Specializing User-defined Types'
---

```cpp
template <>
struct serializer<Date> {
  generic_value serialize(const Date& value) {
    return object()
      .add("year", value.year)
      .add("month", value.month)
      .add("day", value.day);
  }
};
```

---
section: 'Practical Example'
slide: 'Primary Template'
---

```cpp
template <typename T, typename = void>
struct serializer {
  generic_value serialize(const T& value) {
    static_assert(std::is_same<generic_value, T>::value,
                  "did not find any specialization of serializer "
                  "for the given type");
    return static_cast<T>(value);
  }
};
```

---
section: 'Practical Example'
slide: 'Basic Types'
---

<div class="grid grid-cols-2 gap-2">
<div>

- Dependent on product requirements
- Other Types
  - Binary data
  - Short string
  - Large text
  - Large number sequences
- Properties
  - Ordered/Unordered
  - File Paths

</div>
<div>

```cpp
enum class internal_type : std::uint8_t {
  null,
  object,
  array,
  string,
  boolean,
  number_signed,
  number_unsigned,
  number_float,
  number_double,
  unknown
};
```

</div>
</div>

---
section: 'Practical Example'
slide: 'Data Storage'
---

<div class="grid grid-cols-2 gap-2">
<div>

```cpp
union internal_value {
  object_t* object;
  array_t* array;
  string_t* string;
  boolean_t boolean;
  number_signed_t number_signed;
  number_unsigned_t number_unsigned;
  number_float_t number_float;
  number_double_t number_double;
}
```

</div>
<div>

```cpp
using object_t =
  std::map<std::string, generic_value>;
using array_t =
  std::vector<generic_value>;
using string_t = std::string;
using boolean_t = bool;
using number_signed_t = int64_t;
using number_unsigned_t = uint64_t;
using number_float_t = float;
using number_double_t = double;
```

</div>
</div>

---
section: 'Practical Example'
slide: 'Type Wrapper'
---

```cpp
class generic_value {
 public:
  generic_value(const internal_type type) : _type(type) {}

  static generic_value boolean(const boolean_t value)
      : _type(internal_type::boolean), _value(value) {}

  /** and so it goes */

 private:
  internal_type _type = internal_type::null;
  internal_value _value;
};
```

---
section: 'Practical Example'
slide: 'Specializing for Boolean Types'
---

```cpp
template <typename T>
struct serializer<T, std::enable_if_t<std::is_same_v<T, bool>>> {
  generic_value serialize(const T& value) { return value; }
};
```

---
section: 'Practical Example'
slide: 'Specializing for Boolean Types'
---

```cpp
template <typename T>
constexpr bool is_boolean_v = std::is_same_v<T, bool>;
```

```cpp
template <typename T>
struct serializer<T, std::enable_if_t<is_boolean_v<T>>> {
  generic_value serialize(const T& value) { return value; }
};
```

---
section: 'Practical Example'
slide: 'Specializing for Numeric Types'
---

```cpp
template <typename T>
struct serializer<T, std::enable_if_t<is_number_signed_v<T>>> {
  generic_value serialize(const T& value) {
    return static_cast<std::int64_t>(value);
  }
};
```

---
section: 'Practical Example'
slide: 'Specializing for Numeric Types'
---

```cpp
template <typename T, typename = void>
struct is_number_signed : std::false_type {};

template <typename T>
struct is_number_signed<
    T, std::enable_if_t<!std::is_same_v<T, bool> &&
                        std::is_integral_v<T> &&
                        std::is_signed_v<T>>>
    : std::true_type {};
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<heroicons-solid-x class="text-md text-red-500" />
<span>We can do better</span>
</div>

---
section: 'Practical Example'
slide: 'Specializing for Numeric Types'
---

```cpp
template <typename T>
constexpr bool is_number_signed_v =
    std::conjunction_v<std::negation<std::is_same<T, bool>>,
                       std::is_integral<T>,
                       std::is_signed<T>>;
```

---
section: 'Practical Example'
slide: 'Specializing for String-like Types'
---

```cpp
template <typename T>
using is_string =
    std::disjunction<std::is_constructible<std::string, T>,
                     std::is_constructible<std::wstring, T>>;
```

---
section: 'Practical Example'
slide: 'Specializing for Containers - Attempt 1'
---

```cpp
template <typename T, typename = void>
struct is_array : std::false_type {};

template <typename T, std::size_t N>
struct is_array<std::array<T, N>> : std::true_type {};

template <typename... args>
struct is_array<std::set<args...>> : std::true_type {};

template <typename... args>
struct is_array<std::vector<args...>> : std::true_type {};

/** and so it goes */
```

---
section: 'Practical Example'
slide: 'Helper Trait: is_specialization'
---

```cpp
template <typename Test, template <typename...> class Ref>
struct is_specialization : std::false_type {};

template <template <typename...> class Ref, typename... Args>
struct is_specialization<Ref<Args...>, Ref> : std::true_type {};
```

---
section: 'Practical Example'
slide: 'Specializing for Containers - Attempt 2'
---

```cpp
template <typename T>
struct is_array<T, enable_if_t<disjunction<
    is_specialization<T, std::deque>,
    is_specialization<T, std::list>,
    is_specialization<T, std::map>,
    is_specialization<T, std::set>,
    is_specialization<T, std::unordered_map>,
    is_specialization<T, std::vector>>::value>> : std::true_type {};
```

---
section: 'Practical Example'
slide: 'Helper Trait: is_iterable'
---

```cpp
template <typename T, typename = void>
struct is_iterable : std::false_type {};

template <typename T>
struct is_iterable<T, void_t<decltype(std::begin(std::declval<T>())),
                             decltype(std::end(std::declval<T>()))>>
    : std::true_type {};
```

---
section: 'Practical Example'
slide: 'Specializing for Containers - Attempt 3'
---

```cpp
template <typename T>
using is_array =
    std::conjunction<std::negation<is_string<T>>, is_iterable<T>>;
```

---
section: 'Practical Example'
slide: 'Specializing for Containers - Attempt 4'
---

```cpp
template <typename T>
struct serializer<T, std::enable_if_t<is_array<T>::value>> {
  generic_value serialize(const T& value) {
    generic_value out(internal_type::array);
    for (const auto& v : value) {
      out.add(serializer<typename T::value_type>().serialize(v));
    }
    return out;
  }
};
```

---
section: 'Practical Example'
slide: 'Specializing for other Standard Types'
---

```cpp
template <typename T>
struct serializer<T,
    std::enable_if_t<is_specialization<T, std::pair>::value>> {
  generic_value serialize(const T& value) {
    return detail::array()
      .add(serializer<typename T::first_type>().serialize(value.first))
      .add(serializer<typename T::second_type>().serialize(value.second));
  }
};
```

---
section: 'Practical Example'
slide: 'Specializing for other Standard Types'
---

<div class="grid grid-cols-4 gap-2">
<div>

- Pointer Types
- Enum Types
- std::variant
- std::tuple
- std::optional
- And so it goes...

</div>
<div class="col-span-3 grid place-content-center">
<div class="text-xl text-center">
<p>What are we doing with our lives?</p>
<p>This is clearly not elegant.</p>
</div>
</div>
</div>
