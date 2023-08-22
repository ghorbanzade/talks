---
layout: slide
slide: Agenda
---

- Motivation
- <span class="text-yellow-500">The Basics</span>
- Practical Example
- Concepts
- Argument Dependent Lookup
- Static Reflection

---
layout: slide
section: 'The Basics'
slide: 'Function Overloading'
---

```cpp
void check(const std::string& key, const boolean_t value);
void check(const std::string& key, const number_unsigned_t value);
void check(const std::string& key, const array_t& value);
void check(const std::string& key, const object_t& value);
void check(const std::string& key, const string_t& value);
/** and so it goes... */
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<heroicons-solid-x class="text-md text-red-500" />
<span>Extensible design to support user-defined types</span>
</div>

---
layout: slide
section: 'The Basics'
slide: 'Callback Functions'
---

```cpp
check("some-date", [&date]() {
  return object()
      .add("year", date.year)
      .add("month", date.month)
      .add("day", date.day);
});
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<heroicons-solid-x class="text-md text-red-500" />
<span>Intrinsic support for common types</span>
</div>

---
layout: slide
section: 'The Basics'
slide: 'Polymorphism'
---

```cpp
struct Date : public Serializable {
  /* ... */

  generic_value serialize() const override;
};
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<heroicons-solid-x class="text-md text-red-500" />
<span>Intuitive Developer Experience</span>
</div>

---
layout: slide
section: 'The Basics'
slide: 'com.google.gson'
---

```cpp
private class MyDateSerializer implements
          JsonSerializer<MyDate> {
  public JsonElement serialize(MyDate src, Type typeOfSrc,
            JsonSerializationContext context) {
    JsonObject obj = new JsonObject();
    obj.addProperty("year", src.getYear());
    obj.addProperty("month", src.getMonth());
    obj.addProperty("day", src.getDay());
    return obj;
  }
}
```

---
layout: slide
section: 'The Basics'
slide: 'com.google.gson'
---

Type adapters are introduced <span class="text-yellow-500">at runtime</span> and
considered during serialization of any given value.

```cpp
final Gson gson = new GsonBuilder()
    .registerTypeAdapter(MyDate.class, new MyDateSerializer())
    .create();
```

Runtime resolution is slow and inefficient. We can do much better in C++.

---
layout: slide
section: 'The Basics'
slide: 'Simple Example'
---

```cpp
struct Date {
  unsigned short year;
  unsigned short month;
  unsigned short day;

  std::string to_string() const;

  /** and so it goes */
};
```

---
layout: slide
section: 'The Basics'
slide: 'std::ostream'
---

```cpp
struct Date {
  /* ... */

  friend std::ostream& operator<<(std::ostream& os, const Date& dt);
};
```

```cpp
std::ostream &operator <<(std::ostream &o, const Date &date) {
  return o << date.to_string();
}
```

---
layout: slide
section: 'The Basics'
slide: 'QDataStream'
---

```cpp
QFile file("file.dat");
file.open(QIODevice::WriteOnly);
QDataStream out(&file);
out << QString("the answer is ");
out << (qint32) 42;
```

```cpp
QDataStream& operator<<(QDataStream&, const Date&);
QDataStream& operator>>(QDataStream&, Data&);
```

---
layout: slide
section: 'The Basics'
slide: 'boost::serialization'
---

```cpp
namespace boost {
namespace serialization {

template<class Archive>
void serialize(Archive& archive, Date& date, const unsigned int version)
{
    archive & date.year;
    archive & date.month;
    archive & date.day;
}

} // namespace serialization
} // namespace boost
```

---
layout: slide
section: 'The Basics'
slide: 'boost::serialization'
---

```cpp
struct Date {
  /* ... */

private:
  friend class boost::serialization::access;

  template<class Archive>
  void serialize(Archive & ar, const unsigned int version) {
    ar & year;
    ar & month;
    ar & day;
  }
};
```

---
layout: slide
section: 'The Basics'
slide: 'std::format'
---

```cpp
template <>
struct std::formatter<Date> : std::formatter<std::string> {
  auto format(const Date& p, auto& ctx) {
    return formatter<std::string>::format(
        std::format("{}/{}/{}", p.month, p.day, p.year), ctx);
  }
};
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<span>(since C++20)</span>
</div>

---
layout: slide
section: 'The Basics'
slide: 'Function Template Specialization'
---

```cpp
template <typename T>
void print(T arg) {
  std::cout << arg << std::endl;
}
```

```cpp
template <>
void print(const Date& date) {
  std::cout << date.to_string() << std::endl;
}
```

---
layout: slide
section: 'The Basics'
slide: 'Function Template Specialization'
---

```cpp
void print(auto arg) { std::cout << arg << std::endl; }
```

```cpp
void print(const Date& date) {
  std::cout << date.to_string() << std::endl;
}
```

---
layout: slide
section: 'The Basics'
slide: 'Class Template Specialization'
---

```cpp
template <typename T>
struct printer {
  void print(T arg) { std::cout << arg << std::endl; }
};
```

```cpp
template <>
struct printer<Date> {
  void print(const Date& arg) {
    std::cout << arg.to_string() << std::endl;
  }
};
```

---
layout: slide
section: 'The Basics'
slide: 'std::hash'
---

```cpp
template <>
struct std::hash<Date> {
  std::size_t operator()(const Date& date) const noexcept {
    return std::hash<std::string>{}(date.to_string());
  }
};
```

---
layout: slide
section: 'The Basics'
slide: 'Partial Template Specialization'
---

```cpp
template <typename T, typename U>
struct printer {
  void print(T prefix, U value) {
    std::cout << prefix << value << std::endl;
  }
};

template <typename T>
struct printer<T, Date> {
  void print(T prefix, Date value) {
    std::cout << prefix << value.to_string() << std::endl;
  }
};
```

---
layout: slide
section: 'The Basics'
slide: 'std::enable_if'
---

```cpp
template<bool B, class T = void>
struct enable_if {};

template<class T>
struct enable_if<true, T> { typedef T type; };
```

---
layout: slide
section: 'The Basics'
slide: 'Substitution Failure is not an Error'
---

```cpp
template <typename T, typename Enabled = void>
struct printer {
  void print(T value) { std::cout << value << std::endl; }
};

template <typename T>
struct printer<T,
    typename std::enable_if<std::is_same<T, Date>::value>::type> {
  void print(T value) { std::cout << value.to_string() << std::endl; }
};
```

---
layout: slide
section: 'The Basics'
slide: 'Helper Types'
---

```cpp
template <bool B, class T = void>
using enable_if_t = typename enable_if<B,T>::type;
```

```cpp
template <class T, class U>
constexpr bool is_same_v = is_same<T, U>::value;
```

---
layout: slide
section: 'The Basics'
slide: 'Leveraging Helper Types'
---

```cpp
template <typename T, typename = void>
struct printer {
  void print(T value) { std::cout << value << std::endl; }
};

template <typename T>
struct printer<T, std::enable_if_t<std::is_same_v<T, Date>>> {
  void print(T value) { std::cout << value.to_string() << std::endl; }
};
```

<div class="text-xs flex w-full items-end justify-end space-x-1">
<span>(since C++17)</span>
</div>
