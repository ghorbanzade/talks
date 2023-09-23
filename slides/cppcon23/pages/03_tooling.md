---
slide: Agenda
section: ''
---

<Agenda section="tooling" />

<!--
So now that we saw what Touca does, let's briefly review how it works.
My hope is that this exercise would inspire you to take these concepts
and apply them to your own regression testing system.
-->

---
slide: System Architecture
---

<div class="grid place-content-center w-3/4 mx-auto">
  <LightOrDark>
    <template #dark>
      <img src="/images/system-architecture-sm-dark.svg" />
    </template>
    <template #light>
      <img src="/images/system-architecture-sm-light.svg" />
    </template>
  </LightOrDark>
</div>

<!--
Here's the high-level architecture of Touca. We already
covered the SDKs, the CLI, and CI plugins, all of which help us describe the
behavior and performance of a version and submit it to the Touca Server API,
which is written in NodeJS in TypeScript. The server performs data ingestion
and uses third-party services for caching and storing the results.
In self-hosted deployments, we use Redis for caching, MongoDB for storing,
and MinIO as an objet store.

For cloud deployments, Touca provides the option to replace these services
with Cloud Services, using Elasticache instead of Redis, DocumentDB instead
of Mongo, and S3 instead of MinIO.
-->

---
slide: C++ SDK
---

<div class="grid grid-cols-2 gap-12">
  <div class="grid grid-cols-3 gap-2">
    <div class="wsl-card grid place-content-center"><div>GCC</div><div class="text-xs text-center">9.4.0</div></div>
    <div class="wsl-card grid place-content-center"><div>Clang</div><div class="text-xs text-center">11.0.0</div></div>
    <div class="wsl-card grid place-content-center"><div>MSVC</div><div class="text-xs text-center">1900</div></div>
    <div class="wsl-card grid place-content-center col-span-3">C++11 through C++23</div>
    <div class="wsl-card grid place-content-center"><div>CMake</div><div class="text-xs text-center">3.14</div></div>
    <div class="wsl-card grid place-content-center"><div>Conan</div><div class="text-xs text-center">v1</div></div>
    <div class="wsl-card grid place-content-center"><div>Bazel</div><div class="text-xs text-center">v6.3.2</div></div>
  </div>
  <div class="grid place-content-center space-y-2">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-sdk-install-dark.svg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-sdk-install-light.svg" class="rounded-xl" />
      </template>
    </LightOrDark>
    <a class="flex items-center justify-end space-x-1" href="https://touca.io/docs/sdk/installing" target="_blank" rel="noreferrer">
      <heroicons-link class="rounded-full text-xs" />
      <span class="text-xs font-mono">touca.io/docs/sdk/installing</span>
    </a>
  </div>
</div>

<!--
The C++ SDK is designed to support a broad range of standard versions all
the way to C++11. This is by choice as we want to enable refactoring all types
of legacy software. With that same logic, Touca supports most versions of
GCC, Clang, and MSVC compilers.

To support older standard versions, the SDK has a few dependencies, listed here,
so we don't offer single-header installation. Instead you can build and
install Touca with CMake and pull it as a dependency using FetchContent.
We also have limited support for Conan and Bazel.
-->

---
slide: Data Capturing API
---

<div class="grid grid-cols-7 gap-2">
  <div class="col-span-5 grid wsl-code-h-full">

```cpp {|3-5}
touca::workflow("students", [](const std::string& username) {
  const auto& student = find_student(username);
  touca::check("name", student.name);
  touca::check("birth_date", student.dob);
  touca::check("gpa", student.gpa);
});
```

  </div>
  <div v-click class="col-span-2 grid wsl-code-h-full">

```cpp
struct Date {
  unsigned short year;
  unsigned short month;
  unsigned short day;
};
```

  </div>
  <div v-click class="col-span-7">

```cpp
template <typename Char, typename Value>
void check(Char&& key, const Value& value) {
  touca::detail::check(std::forward<Char>(key),
                       serializer<Value>().serialize(value));
}
```

  </div>
</div>

<!--
Now that we learned what a simple test workflow looked like with Touca.
Let's see what's behind the data capturing functions like `touca::check`.

(click)

We want capturing of data points to be easy and developer friendly, so these
functions provides out-of-the-box support for any primitive and standard data
type and are designed to be extensible to support any custom user-defined type.

(click)

Take date of birth for example which could be defined as a Date object with
the structure presented here.

(click)

We perfect forward the type of the given value parameter to a class template
called serializer that enables template specialization for any custom type.
-->

---
slide: Capturing behavior data
---

<div class="grid grid-cols-2 gap-2">
<div class="wsl-code-p-sm">

```cpp
touca::log("timestamp", student.created_at);
```

</div>
<div v-click class="wsl-code-p-sm">

```cpp
touca::assume("username", student.username);
```

</div>
<div v-click class="col-span-2 wsl-code-p-sm">

```cpp
for (const auto& course : student.courses) {
  touca::add_array_element("courses", course);
  touca::add_hit_count("number of courses");
}
```

</div>
<div v-click class="col-span-2 wsl-code-p-sm">

```cpp
void Client::check(const std::string& key, const data_point& value) {
  if (has_last_testcase()) {
    _testcases.at(get_last_testcase())->check(key, value);
  }
}
```

</div>
</div>

<!--
`touca::check` is not the only data capturing function.
You can use `log` to capture any value without having it affect the comparison status of the test case.

(click)

And you can use `assume` to make the test immediately fail because an
assumption about a test input is not consistent with the assumption from a
previous version.

(click)

And you can use the syntax-sugar functions like `add_array_element` and
`add_hit_count` that work like check but make it easy to capture data from
inside a for loop.

(click)

Note that these functions are stateful and stand-alone so we can call them
from anywhere within our code, including our production code. This design
enables tracking important data points that may not be exposed in the output
of our software or accessible from its interface.

But because capturing data points in production environments doesn't make sense,
these functions are implemented to be default no-op unless they are called
from the test framework or explicitly activated via calling the
`configure` function.
-->

---
slide: Capturing performance data
---

<div class="grid grid-rows-2 grid-cols-2 gap-2">
<div class="wsl-code-h-full">

```cpp
touca::start_timer("find_student");
const auto& student = find_student(username);
touca::stop_timer("find_student");
```

</div>
<div v-click class="wsl-code-text-sm wsl-code-h-full">

```cpp
Student find_student(const std::string& username) {
  touca::scoped_timer timer("find_student");
  // ...
}
```

</div>
<div v-click class="wsl-code-h-full">

```python
with touca.scoped_timer("find_student"):
    student = find_student(username)
```

</div>
<div v-click class="wsl-code-h-full">

```cpp
touca::add_metric("external_source", 1500);
```

</div>
</div>

<!--
Touca supports tracking the runtime of our functions as well.

Here is the low-level functions start_timer and stop_timer that enable
find-grained runtime measurement of any arbitrary execution flow.

(click)

If this feels too verbose and difficult to work with, we also provide a
scoped_timer that measures its own lifetime and is easy to tack on top of
compute-intensive workflows.

(click)

This scoped variable is unique to C++ and is implemented differently in other
languages. Here's the same concept, implemented using with-statement in Python.

(click)

The SDK also provides an add_metric function to enable capturing runtime
measured using other libraries or functions.
-->

---
section: Data Serialization
slide: Partial Template Specialization
---

```cpp
template <typename T, typename = void>
struct serializer {
  data_point serialize(const T& value) {
    static_assert(std::is_same<data_point, T>::value,
                  "did not find any specialization of "
                  "serializer for the given type");
    return static_cast<T>(value);
  }
};
```

<!--
I mentioned that all data passed to the value parameter of data capturing
functions are perfect forwarded to a serializer class template. This way,
we can use partial template specialization, a language feature available
in C++11, to convert any given type to a `data_point` variant that we know
how to handle and store efficiently.

We chose partial template specialization because the library can provide
specializations for common data types, and allow users to introduce further
specializations for their own user-defined types.

(SKIP) By disabling the primary template, as shown here, we ensure that the
library can generate easy to read and understand compile-time errors when a
user passes a data type that we don't know how to convert to a `data_point`.
-->

---
section: Data Serialization
slide: Specializing Standard Types
---

<div class="grid grid-rows-5 grid-flow-col gap-2">
  <div class="row-span-2 wsl-code-p-sm wsl-code-h-full">

```cpp
template <typename T>
using is_number_signed =
    conjunction<negation<std::is_same<T, bool>>,
                std::is_integral<T>,
                std::is_signed<T>>;
```

  </div>
  <div class="row-span-3 wsl-code-p-sm wsl-code-h-full">

```cpp
template <typename T>
struct serializer<
    T, enable_if_t<is_number_signed<T>::value>> {
  data_point serialize(const T& value) {
    return data_point::number_signed(value);
  }
};
```

  </div>
  <div class="row-span-5 wsl-code-p-sm wsl-code-h-full">

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

<!--
Here's an example of how the library supports capturing signed integers.
We add a template specialization for all non-boolean types that are integral
and signed. We implement this specialization by copying the integer value into
our `data_point` variant.
Internally, this variant supports the core types listed on the right side of
the screen, where object and array are implemented to store a map and a vector
of other data_points.
-->

---
section: Data Serialization
slide: Specializing User-Defined Types
---

```cpp
template <>
struct serializer<Date> {
  data_point serialize(const Date& date) {
    return object("Date")
        .add("year", date.year)
        .add("month", date.month)
        .add("day", date.day);
  }
};
```

<!--
We expose object and array to make it convenient and elegant for users to
add specializations for their custom user-defined types.

Here's an example of a specialization for a Date object.

The outcome of this design is an implementation that is as expressive as we
can get with partial template specialization.
-->

---
section: Data Serialization
slide: Deeper Dive
---

<div class="px-24 space-y-2">
  <img src="/images/cppcon21.jpeg" class="rounded-xl" />
  <div class="flex justify-start">
    <a class="flex items-center space-x-1" href="https://pejman.dev/talks/cppcon21" target="_blank" rel="noreferrer">
      <heroicons-link class="rounded-full text-xs" />
      <span class="text-xs font-mono">pejman.dev/talks/cppcon21</span>
    </a>
  </div>
</div>

<!--
But partial template specialization is not the only language feature that
enables designing extension points. Two years ago, at this conference, I
presented a practical overview of other approaches to creating extensible
libraries, including using concepts, ADL, and static reflection. And I tried
to show how the language is evolving towards simplicity and facilitating the
expression of intent. If you are interested in learning more about this subject,
I hope that you find that talk insightful.
-->

---
section: Data Submission
slide: Low-Level API
---

<div class="grid grid-rows-2 grid-flow-col gap-2">
  <div class="wsl-code-text-xs wsl-code-p-sm wsl-code-h-full">

```cpp
touca::workflow("students", [](const std::string& username) {
  const auto& student = find_student(username);
  touca::check("name", student.name);
  touca::check("birth_date", student.dob);
  touca::check("gpa", student.gpa);
});
```

  </div>
  <div class="wsl-code-text-xs wsl-code-p-sm wsl-code-h-full">

```cpp
Post::Status ClientImpl::post() const {
  /** ... */
  const auto& buf = Testcase::serialize(testcases);
  std::string content((const char*)buf.data(), buf.size());
  const auto& response = transport->binary(content);
  /** ... */
}
```

  </div>
  <div class="row-span-2 wsl-code-text-xs wsl-code-p-sm wsl-code-h-full">

```cpp
int main() {
  touca::configure();
  for (const auto& username : {"alice", "bob", "charlie"}) {
    touca::declare_testcase(username);
    const auto& student = find_student(username);
    touca::check("name", student.name);
    touca::check("birth_date", student.dob);
    touca::check("gpa", student.gpa);

    touca::post();
    touca::save_binary("touca_" + username + ".bin");
    touca::save_json("touca_" + username + ".json");
    touca::forget_testcase(username);
  }
  touca::seal();
}
```

  </div>
</div>

<!--
Let's now move on to data submission; when we've collected all our data points
of interest and want to submit them to the server.

The top left code snippet uses the high-level test framework that automatically
takes care of this operation when a test case is executed. But using this
framework is optional. If we are not happy with the framework or want to
integrate Touca with an existing test framework, we can use the lower-level
API as shown in the right code snippet.

In this low-level API, data submission is handled by the touca::post function
that is implemented to serialize all our captured data_point objects and submit
them as binary data to the Touca server.
-->

---
section: Data Submission
slide: FlatBuffers Schema
---

<div class="grid grid-rows-1 grid-cols-2 gap-2">
  <div class="wsl-code-text-sm wsl-code-p-sm wsl-code-h-full">

```lua
union Type {
  Bool,
  Int,
  /** ... */
  String,
  Object,
  Array
}
table TypeWrapper {
  value:Type;
}
table Result {
  key:string;
  value:TypeWrapper;
}
```

  </div>
  <div class="wsl-code-text-sm wsl-code-p-sm wsl-code-h-full">

```lua
table Results {
  entries:[Result];
}
table Message {
  metadata:Metadata;
  results:Results;
  metrics:Metrics;
}
table MessageBuffer {
  buf:[uint8] (nested_flatbuffer: "Message");
}
table Messages {
  messages:[MessageBuffer];
}
root_type Messages;
```

  </div>
</div>

<!--
We use FlatBuffers to perform this serialization, in a way that preserves the
type of our data points so that the server can compare them in their original
data types.

Here's the FlatBuffers schema used by Touca, where each captured data point is
represented by a Result object, and each performance data is serialized into
a Metric. This way, we can store all the collected data for each test case
in a Message object. We serialize each Message individually, then package our
messages into a Messages object which is then serialized and submitted to the
server.

This double packaging may feel excessive at first but it enables saving network
IO on the client side and, more importantly, it leads to faster data ingestion
on the server side as the server can deserialize our top-level Messages object
but defer deserializing each Message to its workers.
-->

---
slide: Data ingestion w/ async processing
---

<div>
  <LightOrDark>
    <template #dark>
      <img src="/images/data-ingestion-async-dark.svg" class="rounded-xl" />
    </template>
    <template #light>
      <img src="/images/data-ingestion-async-light.svg" class="rounded-xl" />
    </template>
  </LightOrDark>
</div>

<!--
Here's how the server handles an incoming submission when a test is run in
CI or on a decided test server. In these environments, we're not
looking to fail the CI if we find a mismatch so the test framework can
submit the data for a given test case and moves on to execute the next test
case.

When the server receives the data, it deserializes the high-level Messages
object, and stores the binary content representing each Message into the data
store. Then it creates a job for each message to hand off the deserialization
and processing to Server Workers. This is when the server can acknowledge
receipt of the submitted data so that the test framework can move on to submit
next messages.
-->

---
slide: Data ingestion w/ on-demand processing
---

<div>
  <LightOrDark>
    <template #dark>
      <img src="/images/data-ingestion-sync-dark.svg" class="rounded-xl" />
    </template>
    <template #light>
      <img src="/images/data-ingestion-sync-light.svg" class="rounded-xl" />
    </template>
  </LightOrDark>
</div>

<!--
Now much of this workflow is the same when we run our tests locally.
But in this case, we want the output of the test to report whether our
test results match that of the baseline version.

So instead of returning 204 after data ingestion, we wait until the messages
are compared and then report the status of the comparison result.
-->

---
slide: Data Retention
---

<div class="space-y-2">
  <LightOrDark>
    <template #dark>
      <img src="/images/data-retention-dark.svg" class="rounded-xl" />
    </template>
    <template #light>
      <img src="/images/data-retention-light.svg" class="rounded-xl" />
    </template>
  </LightOrDark>
  <div class="grid grid-cols-2 gap-6 place-content-around">
    <div class="wsl-card flex items-center space-x-2 justify-center">
      <div><heroicons-check-badge class="text-green-500" /></div>
      <div>Local Filesystem Backup</div>
    </div>
    <div class="wsl-card flex items-center space-x-2 justify-center">
      <div><heroicons-check-badge class="text-green-500" /></div>
      <div>Configurable Retention Duration</div>
    </div>
  </div>
</div>

<!--
Now remote storage of test results is very convenient but storage has a cost
and when testing real-world systems at scale, we may want to decide when to
remove older test results.

Touca server includes a data retention service that is configurable and helps
remove older submitted data or move them to longer-term archival solutions.
We also allow storing a local copy of captured data on the filesystem
in a format that can later be used to restore that data back into the server.
-->
