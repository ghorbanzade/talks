---
slide: Agenda
section: ''
---

<Agenda section="beyond" />

<!--
Let's now see how continuous regression testing can help us identify
other types of regressions that we may want to identify and mitigate during
the development cycle.

What we'll review in this section are just a handful of examples to show you
the power of this method and they are by no means a comprehensive list of
use cases.
-->

---
slide: Custom comparison rules
---

<div class="space-y-4">
  <div class="grid grid-cols-2 gap-6 place-content-around w-3/4 mx-auto">
    <div class="wsl-card flex items-center space-x-2 justify-center">
      <div><heroicons-check-badge class="text-green-500" /></div>
      <div>Language Agnostic</div>
    </div>
    <div class="wsl-card flex items-center space-x-2 justify-center">
      <div><heroicons-check-badge class="text-green-500" /></div>
      <div>Real-Time Feedback</div>
    </div>
  </div>
  <div class="w-3/4 mx-auto">

```cpp
touca::check("gpa", student.gpa, touca::decimal_rule::min_absolute(3));
```

  </div>
  <div class="w-3/4 mx-auto py-8 space-y-4 wsl-card">
    <div class="flex justify-around space-x-12">
      <div class="flex space-x-4 items-center">
        <div class="px-8 py-4 text-lg rounded-lg bg-slate-200 dark:bg-sky-300 dark:bg-opacity-10 font-bold">3.8</div>
        <div class="text-xs">Actual value<br>Version v5.1</div>
      </div>
      <div class="flex space-x-4 items-center">
        <div class="px-8 py-4 text-lg rounded-lg bg-slate-200 dark:bg-sky-300 dark:bg-opacity-10 font-bold">3.9</div>
        <div class="text-xs">Previous value<br>Version v2.0</div>
      </div>
    </div>
    <div class="text-sm text-center">
      Value passes minimum threshold of <b>3</b>.
    </div>
  </div>
</div>

<!--
I mentioned earlier that the handling of performance data are slightly different
given that they are prone to noise that needs dealing with. But performance
data are not the only data susceptible to noise. In fact, in real-world
applications, we often want to allow a degree of non-determinism in the data
that we capture. Sometimes we can set that threshold as a minimum or maximum
value, and sometimes we may want to set that threshold relative to the value
of our baseline version and allow, for example, plus or minus one percent
differences from that value.

Touca supports introducing these constraints as a third argument to the data
capturing functions and takes them into account when comparing test results
remotely.

While our way of finding performance regressions does not use absolute or
relative thresholds, the use-cases we'll review in the next slides make
extensive use of this feature.
-->

---
slide: Tracking performance benchmarks
---

<div class="grid grid-rows-3 grid-cols-2 gap-2">
  <div class="row-span-2 wsl-code-text-sm wsl-code-p-sm wsl-code-h-full">

```cpp
#include <benchmark/benchmark.h>

static void BM_String(benchmark::State& state) {
  for (auto _ : state)
    std::string empty_string;
}

BENCHMARK(BM_String);
BENCHMARK_MAIN();
```

  </div>
  <div class="row-span-3 wsl-code-p-sm wsl-code-h-full">

```json
{
  "context": {
    "date": "2023/09/25-18:40:25",
    "num_cpus": 40,
    "mhz_per_cpu": 2801,
    "cpu_scaling_enabled": false,
    "build_type": "debug"
  },
  "benchmarks": [
    {
      "name": "BM_String",
      "iterations": 94877,
      "real_time": 29275,
      "cpu_time": 29836,
      "bytes_per_second": 134066,
      "items_per_second": 33516
    }
  ]
}
```

  </div>
  <div class="wsl-card row-span-1 wsl-code-p-sm grid content-center">
    <div class="font-mono text-sm">
    $ touca plugin add plugins://google_benchmark<br />
    $ touca google_benchmark output.json
    </div>
  </div>
</div>

<!--
The performance API that I showed you earlier is primitive. It is sufficient
for tracking wall-time performance of long-running workflows, but if we really
care about the performance of individual functions, we'd need a proper
performance benchmarking library that allows executing our function millions
of times to obtain reliable performance measurements.

These libraries have their own way of reporting results. In the example shown
here, we're using the well-known Google Benchmark library that can report
measurements in various formats including JSON.

It is very easy to write custom code to take in output of another tool and
submit some of its data to the Touca server. In fact, Touca CLI already ships
with a handful of plugins, one of which is for Google Benchmark.
All we need to do is to install this plugin and use it to submit our
performance benchmarks to the server.
-->

---
slide: Profiling build times
---

<div class="wsl-code-text-sm">

```plaintext {1-2|3|6-14|14|7,9,11} {lines:true}
$ bazel build :sample_app --generate_json_trace_profile \
   --profile sample_app.profile.gz --noslim_json_profile
$ bazel analyze-profile sample_app.profile.gz
=== PHASE SUMMARY INFORMATION ===

Total launch phase time                              0.014 s    0.42%
Total init phase time                                0.048 s    1.46%
Total target pattern evaluation phase time           0.006 s    0.19%
Total interleaved loading-and-analysis phase time    0.153 s    4.64%
Total preparation phase time                         0.001 s    0.05%
Total execution phase time                           3.084 s   93.19%
Total finish phase time                              0.001 s    0.03%
---------------------------------------------------------------------
Total run time                                       3.309 s  100.00%
```

</div>
<div v-click class="wsl-card row-span-2 wsl-code-p-sm wsl-code-h-full grid content-center">
  <div class="font-mono text-sm">
  $ touca plugin add plugins://bazel<br />
  $ touca bazel sample_app.profile.gz
  </div>
</div>

<!--
Now tracking runtime performance is great, but maybe we want to track changes
in compile time of our software. If any of you is using Bazel as their build
system, you may already know that Bazel enables creating a build profile that
details what Bazel spent time on during the invocation.

(click)

There is also the Bazel analyze-profile command that is handy for generating
a textual report of that build profile.

(click)

So it is incredibly easy to capture elements of this output and track changes
to them.

(click)

We may want to track the overall build time

(click)

Or include the duration for each stage of the build.

(click)

Either way, we can use the Touca plugin for Bazel, or write our very own plugin
to track this data from one version to another.

-->

---
slide: Profiling the size of binaries
---

<div class="wsl-code-text-sm">

```plaintext {1|5|13} {lines:true}
$ ./bloaty bloaty -d compileunits
    FILE SIZE        VM SIZE
 --------------  --------------
  57.5%  17.4Mi    68%  4.60Mi    [175 Others]
  17.2%  5.08Mi   4.3%   295Ki    third_party/protobuf/src/google/protobuf/descriptor.cc
   7.3%  2.14Mi   2.6%   179Ki    third_party/protobuf/src/google/protobuf/descriptor.pb.cc
   4.6%  1.36Mi   1.1%  78.4Ki    third_party/protobuf/src/google/protobuf/text_format.cc
   3.7%  1.10Mi   4.5%   311Ki    third_party/capstone/arch/ARM/ARMDisassembler.c
   1.3%   399Ki  15.9%  1.07Mi    third_party/capstone/arch/M68K/M68KDisassembler.c
   3.2%   980Ki   1.1%  75.3Ki    third_party/protobuf/src/google/protobuf/generated_message_reflection.cc
   3.2%   965Ki   0.6%  40.7Ki    third_party/protobuf/src/google/protobuf/descriptor_database.cc
   1.8%   549Ki   1.7%   114Ki    src/bloaty.cc
 100.0%  29.5Mi 100.0%  6.69Mi    TOTAL
```

</div>
<div v-click class="wsl-card row-span-2 wsl-code-p-sm wsl-code-h-full grid content-center">
  <div class="font-mono text-sm">
  $ touca plugin add plugins://bloaty<br />
  $ touca bloaty ./bloaty
  </div>
</div>

<!--
Another less-common use-case for regression testing is tracking the size
of our binaries. One way to do this is using a tool called Bloaty that is
maintained by Google.

(click)

And while tracking everything in the Bloaty output is likely unnecessary,
It is easy to track larger files that we care about.

(click)

Or we can track the overall file size and VM size of our binary for a start.

(click)

Similarly for this case, we can write our own plugin, or use the bloaty
plugin that already ships with Touca CLI.

-->

---
slide: Tracking exported symbols of a shared library
---

```plaintext
$ nm -gU ./my.dylib | grep touca
000000000006ad64 T __ZNK5touca8Testcase11flatbuffersEv
000000000006a514 T __ZNK5touca8Testcase4jsonEv
000000000006a358 T __ZNK5touca8Testcase7metricsEv
0000000000069508 T __ZNK5touca8Testcase8Metadata4jsonEv
0000000000069370 T __ZNK5touca8Testcase8Metadata8describeEv
00000000000691b0 T __ZNK5touca8Testcase8Overview4jsonEv
0000000000069310 T __ZNK5touca8Testcase8metadataEv
000000000006b9ec T __ZNK5touca8Testcase8overviewEv
```

<div class="wsl-card text-base font-mono">
$ touca plugin add plugins://cpp_symbols<br />
$ touca cpp_symbols ./my.dylib --filter touca
</div>

<!--
And as a final example, Touca can track the list of exported symbols of a
shared library to make sure changes to our library do not inadvertently remove
an exported function that consumers may rely on.

Here is just one example of how to obtain this list for a given `dylib`
using `nm` on macOS.
-->
