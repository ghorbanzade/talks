---
slide: Agenda
section: ''
---

<Agenda section="demo" />

<!--
Now before I start sharing about this product, note that Touca is no longer
an active company and is now free and fully open-source for personal and
commercial use.
-->

---
slide: Touca Server
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-around">
    <div>Remotely compare the output of your software against a previous baseline version.</div>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>Free and Open Source</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>Developer Friendly</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>Language Agnostic</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>Battle Tested</div>
      </div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-suite-page.dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-suite-page.light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Let's start with the Touca Server that receives data that represent the behavior
or performance of our software workflow and remotely compares them, with the
previously captured data for a trusted version of that workflow. If the server
finds any differences, it visualizes those differences in real-time, and reports
them on this web dashboard and via email or slack notification to the
subscribed stakeholders.

Here is a preview of that web dashboard, showing a high-level overview of how
a particular software workflow has evolved over time. The left panel shows
changes in behavior, and the right panel shows changes in performance.
-->

---
slide: Self-hosting
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-around space-y-4">
    <a class="text-center text-xl" href="https://github.com/trytouca/trytouca" target="_blank" rel="noreferrer">
      <bi-github class="rounded-full mr-2" />
      <span class="text-xl">github.com</span>
      <span class="px-1">/</span>
      <span class="text-2xl font-bold">trytouca</span>
    </a>
    <div class="grid">
      <div class="font-mono text-base wsl-card p-4">
        $ brew install touca<br />
        $ touca server install
      </div>
    </div>
    <div class="flex items-center space-x-2 justify-center">
      <div><heroicons-check-badge class="text-green-500" /></div>
      <div>Apache 2.0 License</div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-cli-server-install.dark.gif" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-cli-server-install.light.gif" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
This server, and the entire product, is open-source and available on GitHub
under the Apache-2.0 license. You can self-host it anywhere you like, using
the Touca CLI (as shown here), or the helm chart that we provide for deploying
it to a Kubernetes cluster.
-->

---
slide: Test Framework
---

<div class="grid grid-cols-5 gap-2">
  <div class="grid col-span-2 place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/unit-test-dark.svg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/unit-test-light.svg" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
  <div class="grid col-span-3 place-content-center space-y-2">
    <div v-click>
      <LightOrDark>
        <template #dark>
          <img src="/images/touca-test-dark.svg" class="rounded-xl" />
        </template>
        <template #light>
          <img src="/images/touca-test-light.svg" class="rounded-xl" />
        </template>
      </LightOrDark>
    </div>
    <ul v-click class="wsl-card">
      <li class="text-sm">Parses command-line arguments</li>
      <li class="text-sm">Retrieves test cases</li>
      <li class="text-sm">Submits captured data</li>
      <li class="text-sm">Reports test progress</li>
      <li class="text-sm">Handles any errors</li>
    </ul>
  </div>
</div>

<!--
To describe the behavior and performance of our software, Touca provides various
SDKs that facilitate writing the tests.

Let's start with unit tests for a simple software that takes the username
of students and provides basic information about them. We pass a particular
username to our software, and verify that its output matches our hard-coded
expected values. These expected values are different for different inputs,
so we would need a separate section for each user input.

(click)

Now if we were to test for regression, we wouldn't need to hard-code the
expected values. We would capture any variable of interest and submit
it to the server to compare it against the value of our baseline version.

Once we remove the expected values, then the content of each section only
differs in the test input we pass to our workflow. But we don't need to
hard-code these inputs either. We can draw inspiration from property-based
testing and parameterize this input so we can externally feed our test cases
to our workflow.

(click)

Even better, we can let the test framework reuse the set of inputs that we
used in the the previous version and retrieve them from the server.

It can also perform common operations such as submitting captured data,
error handling and progress reporting.
-->

---
slide: Writing tests
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center gap-6">
    <div>Test your complex software workflows for any number of inputs by capturing values of variables and runtime of functions.</div>
    <div class="flex space-x-2 text-[2.5rem]">
      <div><devicon-python /></div>
      <div><devicon-cplusplus /></div>
      <div><devicon-nodejs /></div>
      <div><devicon-java /></div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-sdk-dark.svg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-sdk-light.svg" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Notice how removing expected values has made it so much easier to write
our test and express our intention. And because our test inputs are
decoupled from the test code, this is all we need to write regardless
of how many test cases we want to feed to our workflow under test.

This test code here is in C++, but we also have SDKs for Python, Java, and JavaScript.
-->

---
slide: Running tests
---

<div class="grid grid-cols-2 gap-6">
  <div class="grid place-content-center gap-6">
    <div>
      Run your tests for each code change or pull request, as part of CI or
      on a dedicated test machine, to get fast feedback during the development
      stage.
    </div>
    <div class="flex">
      <div class="font-mono text-base wsl-card p-4">
        $ brew install touca<br />
        $ touca login<br />
        $ touca test
      </div>
    </div>
  </div>
  <div class="grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-cli-dark.svg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-cli-light.svg" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Now that we know how to write our test, let's see how we can run it locally.
For that, Touca provides a command-line tool that runs our tests and makes
it easy to specify which server the captured data should be submitted to.

So no matter how many regression test workflows we have, all it takes to run
them is one `touca test` command and, of course, we can pass additional options
to customize which workflow to run and with what test case.
-->

---
slide: Automating tests
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center gap-6">
    <div>
      Integrate your tests with the CI/CD pipeline to automate their
      execution and receive feedback when you need it.
    </div>
    <div class="flex space-x-2 text-[2rem]">
      <div class="wsl-card"><devicon-githubactions /></div>
      <img class="h-[5rem] wsl-card" src="/images/icon-jfrog.svg" />
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-github-actions-code-dark.svg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-github-actions-code-light.svg" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
But we don't always want to run our tests locally. With high-level tests,
chances are that we have a large number of test cases and that running them
all could take a long time. So while the CLI is convenient and developer
friendly, Touca provides a GitHub Actions plugin to make it easy to run
the tests as part of our CI.

(SKIP) In other cases, we may want to run our tests in a dedicated environment
with particular system resources and dependencies. So the CLI provides
a separate `touca run` command that can be automatically triggered when
a PR is submitted, to download a deployment artifact
from Artifactory, install it on our dedicated test system, and
run the tests and submit the results.
-->

---
slide: Visualizing differences
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid py-8 place-content-around">
    <div>
      Automatically compare new test results and visualizing inspect potential
      differences against your baseline.
    </div>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div class="text-sm">Automatic and on-demand comparison</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div class="text-sm">Overall insights and summary reports</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div class="text-sm">Custom comparison rules</div>
      </div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-element-page.dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-element-page.light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
As the results are submitted to the server, they are automatically compared
against the baseline version and we can use the web dashboard to see the
comparison results in real-time.

And because the remote server has access to all the captured data for other
versions of our test, we can manually compare any two versions with each other
and generate a summary report, which is handy when investigating the root cause
of a particular difference.
-->

---
slide: Comparing images and videos
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <div>
      Share test results with team members and visualize differences of any kind.
    </div>
    <div class="flex space-x-2">
      <div class="wsl-card"><heroicons-document-text class="text-2xl" /></div>
      <div class="wsl-card"><heroicons-photo class="text-2xl" /></div>
      <div class="wsl-card"><heroicons-film class="text-2xl" /></div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-feature-image-visualization.dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-feature-image-visualization.light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Given that we are capturing values of variables and runtime of functions,
most of our data points are usually numbers and strings and custom objects.
But the server supports binary data too and can compare and visualize
differences in images and videos.
-->

---
slide: Finding performance regressions
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <div>
      Gain insights and analytics about how your software is evolving over time.
    </div>
    <div class="flex space-x-2">
      <div class="wsl-card"><heroicons-light-bulb class="text-2xl" /></div>
      <div class="wsl-card"><heroicons-presentation-chart-line class="text-2xl" /></div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-feature-metrics.dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-feature-metrics.light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Sometimes our
code changes don't affect the behavior of our software, but negatively impact
its performance. Those are regressions too that are important for us to catch
during the development. So Touca has special features to capture performance
data and visualize how they change over time.

Why are they special features? Because unlike behavior data, performance data
are usually noisy and can change across test runs. So we need to account for
this noise and handle small differences so that we only report performance
spikes and changes that fall outside the usual performance trend.
-->

---
slide: Reporting Results
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <div>
      Subscribe to any suite to get notified about new regressions.
    </div>
    <div class="flex space-x-2">
      <div class="wsl-card"><bi-filetype-pdf class="text-2xl" /></div>
      <div class="wsl-card"><heroicons-envelope class="text-2xl" /></div>
      <div class="wsl-card"><bi-slack class="text-xl" /></div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-server-integrations-mail-form.dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-server-integrations-mail-form.light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Now visualizing differences on a web dashboard is super helpful but it involves
a context switch to browse to the dashboard and inspect the results.
In most cases and specially when running the tests on the CI or a dedicated
test server, we may forget to do that.

So Touca includes a reporting engine that automatically processes all the
comparison results for a given version, once it is fully submitted, and
reports the status of that version, along with high-level insights, in form
of an email or a slack message.
-->

---
slide: Baseline Management
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <div>
      Collaborate with your team members in investigating regressions and
      managing baseline versions.
    </div>
    <div class="flex space-x-2">
      <div class="wsl-card"><heroicons-chat-bubble-left-right class="text-xl" /></div>
      <div class="wsl-card"><heroicons-document-check class="text-xl" /></div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-page-version-promote.dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-page-version-promote.light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>


<!--
And because software development is team work, anyone can subscribe to a given
test workflow to receive notifications about the changes to it and collaborate
in investigating potential regressions.

Sometimes the outcome of that investigation is that the changes are unintended.
So we can fix that regression in a subsequent PR.

But sometimes our changes are intended improvements to the existing behavior
of our system. So we want to mark differences as justified and promote our new
version to be the new baseline, so that subsequent versions would be compared
against it.
-->
