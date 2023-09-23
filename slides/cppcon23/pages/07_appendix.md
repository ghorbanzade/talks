---
layout: center
---

Appendix


---
slide: Data Capturing Internals
---

<div class="space-y-2 wsl-code-p-sm">
<div>

```cpp
void touca::detail::check(const std::string& key, const data_point& value) {
  instance.check(key, value);
}
```

</div>
<div v-click>

```cpp
void Client::check(const std::string& key, const data_point& value) {
  if (has_last_testcase()) {
    _testcases.at(get_last_testcase())->check(key, value);
  }
}
```

</div>
<div v-click>

```cpp
void Testcase::check(const std::string& key, const data_point& value) {
  _resultsMap.emplace(key, ResultEntry{value, ResultCategory::Check});
  _posted = false;
}
```

</div>
</div>

<!--
Touca data capturing functions are stateful and are implemented to hold
their captured data in a good old singleton.

(click)

They are also stand-alone functions so we can call them from anywhere within
our code, including our production code. This design enables tracking important
data points that may not be exposed in the output of our software or accessible
from its interface.

But because capturing data points in production environments doesn't make sense,
these functions are implemented to be default no-op unless they are called
from the test framework or explicitly activated via calling the
`touca::configure` function.

(click)

And the library has a mechanism to avoid submitting captured data points for
test cases that have been submitted before, unless new data is captured
for those test cases.
-->

---
section: Data Serialization
slide: Serializing User-Defined Types - Implementation
---

```cpp {1-3,14-17|5-10} {lines:true}
class object final {
 public:
  explicit object(std::string arg_name) : name(std::move(arg_name)), _v() {}

  template <typename T>
  object& add(std::string&& key, T&& value) {
    using type = typename std::remove_cv<typename std::remove_reference<T>::type>::type;
    _v.emplace(std::move(key), serializer<type>().serialize(std::forward<T>(value)));
    return *this;
  }

  /** ... */

 private:
  std::string name;
  std::map<std::string, data_point> _v;
}
```

---
section: Data Submission
slide: Serializing Test Cases
---

```cpp {|4-7}
std::vector<uint8_t> Testcase::serialize(const std::vector<Testcase>& testcases) {
  flatbuffers::FlatBufferBuilder builder;
  std::vector<flatbuffers::Offset<fbs::MessageBuffer>> messageBuffers;
  for (const auto& tc : testcases) {
    const auto& out = tc.flatbuffers();
    messageBuffers.push_back(fbs::CreateMessageBufferDirect(builder, &out));
  }
  const auto& messages = fbs::CreateMessagesDirect(builder, &messageBuffers);
  builder.Finish(messages);
  const auto& ptr = builder.GetBufferPointer();
  return {ptr, ptr + builder.GetSize()};
}
```

---
section: Data Submission
slide: Serializing Data Points
---

<div class="space-y-2 wsl-code-text-sm wsl-code-p-sm">

```cpp
std::vector<uint8_t> Testcase::flatbuffers() const {
  /**  ... */
  std::vector<flatbuffers::Offset<fbs::Result>> fbsResultEntries;
  for (const auto& result : _resultsMap) {
    const auto& key = result.first.c_str();
    const auto& value = result.second.val.serialize(builder);
    fbsResultEntries.push_back(fbs::CreateResultDirect(builder, key, value));
  }
  /** ... */
}
```

```cpp
flatbuffers::Offset<fbs::TypeWrapper> data_point::serialize(
    flatbuffers::FlatBufferBuilder& builder) const {
      return touca::detail::visit(data_point_serializer_visitor(builder), _value);
    }
)
```

</div>
