---
layout: cover
background: null
---

<p class="text-left wsl-highlight w-4/5 mx-auto invisible">.</p>
<div class="space-y-12">
  <h1>Continuous Regression Testing<br /> for Safer and Faster Refactoring</h1>
  <div class="justify-between items-center flex w-4/5 mx-auto">
    <div class="w-50 bg-gradient-to-bl to-[#074b7a] from-[#0d0d2b] p-4 rounded-2xl dark:bg-none dark:rounded-none">
      <img src="/images/cppcon-logo.png" />
    </div>
    <div class="w-1/2 text-right">
      <div class="font-600 p-0 m-0 text-2xl">Pejman Ghorbanzade</div>
      <div class="font-400 text-md wsl-highlight">Aurora Innovation</div>
    </div>
  </div>
</div>

<!--
Good Afternoon, everyone!

It is great to be back at CppCon!

Thank you for choosing to spend your time here with me and
I hope that you would find this talk worthwhile and insightful.

My name is Pejman and I am going to talk about your favorite subject: Refactoring.
-->

---
slide: ''
section: ''
---

<div class="relative h-[25vh] flex items-center justify-center">
  <div class="text-2xl font-bold text-center">
  Engineers spend <span class="dark:text-yellow-500 text-sky-600">17 hours</span> per week maintaining software.
  </div>
  <div class="text-xs dark:text-sky-500 absolute bottom-0 left-0">
    <a href="https://drive.google.com/file/d/1jO1v0qxvAWzdFq7dl82di8V4pSbcaLsB/view?usp=sharing" target="_blank" rel="noreferrer">
      *Stripe 2019 Developer Coefficient Report
    </a>
  </div>
</div>

<!--
How do I know refactoring is your bread and butter? Because, as software
engineers, we spend 17 hours of our working week maintaining existing software.

So for anyone who's been in this industry for a while, chances are that
you either love maintaining software or are unhappy at least half the time.
-->

---
slide: Maintaining Software
---

<div class="space-y-2">
  <div class="grid grid-cols-3 gap-2 place-content-between">
    <div class="col-span-1 text-base wsl-card grid content-center">
      <li>Reading</li>
      <li>Refactoring</li>
      <li>Upgrading</li>
      <li>Migrating</li>
      <li>Debugging</li>
      <li>Adding tests</li>
      <li>Writing documentation</li>
      <li>Resolving technical debt</li>
    </div>
    <div class="col-span-2">
      <img src="/images/japanese-garden.jpg" class="rounded-lg" />
    </div>
  </div>
  <div class="italic text-center">
    <q>The only constant in life is change.</q><span class="text-sm"> - Heraclitus</span>
  </div>
</div>

<!--
But what do we mean by maintaining software? We could define it based on
all the activities that it involves. Or we can put our business hats on and
define it as introducing changes to make way for new features and improvements.

But I like to simplify it as reacting to the changes in the outside world.
It could be that product requirements have changed, or our understanding of the
what would meet those requirements, our preferred way of solving a given problem
have changed. Either way, we change code to tend to our software, just like
a gardener tends to its garden.

After all, software is much like a living organism. It is constantly evolving.
-->

---
slide: Types of Change
---

<div class="space-y-8">
  <div class="grid grid-cols-7 gap-2 place-content-between">
    <div class="col-span-4 text-base wsl-card grid content-center">
      <li>Fixing a defect</li>
      <li>Enabling code reuse</li>
      <li>Adjusting to new expectations</li>
      <li>Improving a function implementation</li>
      <li>Upgrading a third-party dependency</li>
      <li>Renaming a function or variable</li>
      <li>Changing system configuration</li>
      <li>Updating build system toolchain</li>
    </div>
    <div class="col-span-3">
      <img src="/images/indiana-bell.jpg" class="rounded-lg" />
    </div>
  </div>
  <div class="italic text-center">
    <q>Software engineering is programming integrated over time.</q><span class="text-sm"> - Titus Winters</span>
  </div>
</div>

<!--
We change software for a variety of reasons: To make it work better, faster and
more efficient. To make the code simpler, more readable, easier to understand
and change in the future.

We make these changes with good intentions. Some changes are easy and
limited in scope, like fixing a compiler warning. And some are difficult
and may require large-scale refactoring and migration.
Like this Indiana Bell building here on the screen that was
rotated in 1930, without ceasing operations, to make room for a new city
projects.

But regardless of their type, every change to our software runs the risk of
breaking it. Managing this risk is the art that makes our craft interesting.
-->

---
slide: ''
section: ''
---

<div class="relative h-[25vh] flex items-center justify-center">
  <div class="text-2xl font-bold text-center">
  It takes <span class="dark:text-yellow-500 text-sky-600">23 days</span> for
  software engineers to gain<br />confidence that a code change works as expected.
  </div>
  <div class="text-xs dark:text-sky-500 absolute bottom-0 left-0">
    <a href="https://drive.google.com/file/d/1jN3PMwJUYInwglZiPLa8OKqLX60pjvo3/view" target="_blank" rel="noreferrer">
      *Tricentis 2021 Report: How The World's Top Organizations Test
    </a>
  </div>
</div>

<!--
Whether it's renaming a function or upgrading a third-party dependency, it is
always possible for something to go wrong sometimes. To manage this risk,
we need to gain confidence that our changes are safe. The time that it takes
to get to this confidence directly determines our productivity and efficiency.

But despite our best efforts, it takes engineering teams 23 days to get
feedback on whether their code changes work as they expect.

The goal of this talk is to present Continuous Regression Testing as a method
to help us address this problem and shorten this feedback cycle.
-->

---
slide: Agenda
section: ''
---

<Agenda section="intro" />

<!--
In the next hour, we are going to cover what Continuous Regression Testing is,
how a continuous regression testing looks like in practice, how to build one,
and how to use it to identify all sorts of regressions including changes
to build-time and runtime performance.

Then we're going to take a step back and think about what it takes to build
high-quality software. And I hope to convince you that no tool or method could
serve as a silver bullet; And building software efficiently requires a
culture of safety that combines a variety of tools and methods to mitigate
the risks of everyday code changes.

As you can tell, we are going to cover a lot of content within the next hour.
If you have any questions, please wait until the end to ask them.
-->

---
slide: About Aurora
---

<div class="grid grid-cols-3 gap-8">
  <div class="grid place-content-center space-y-8">
    <div class="text-xl font-medium">
      Delivering the benefits of self-driving technology, safely, quickly, and broadly.
    </div>
    <div class="text-right wsl-highlight font-mono">
      <a href="https://aurora.tech/careers">aurora.tech/careers</a>
    </div>
  </div>
  <div class="col-span-2">
    <img src="/images/aurora-truck.jpg" class="rounded-[3rem]" />
  </div>
</div>

<!--
A little about me: I am a staff software engineer at Aurora. Our mission is to
deliver the benefits of self-driving technology, safely, quickly, and broadly.

Every year, 42000 in the US, and 1.5 million people globally are killed in
traffic accidents. It's a pandemic and it's something we can address. At Aurora,
we are building technology that provides an incredible opportunity to save lives,
make our roads safer, and give more people access to mobility.

We are always looking for great engineers. If you like to work for a noble cause
and at the forefront of technology, I hope that you consider joining us.
-->

---
slide: About Me
---

<div class="grid grid-cols-7 gap-2">
  <div class="col-span-4">
    <ul>
      <li>Staff Software Engineer at <span class="wsl-highlight">Aurora Innovation</span></li>
      <li>Building tooling to improve developer experience</li>
      <li>Accelerating the development of web applications</li>
      <li>8 years of professional experience</li>
      <li>Maintaining mission-critical software systems</li>
      <li>Ex VMware Carbon Black, <span>Canon Medical Informatics</span></li>
      <li>Former founder of a developer tools startup</li>
    </ul>
  </div>
  <div class="col-span-3 space-y-2">
    <img class="rounded-full h-48 mx-auto" src="/images/presenter.jpg" />
    <div class="text-center">
      <div class="font-bold text-lg">Pejman Ghorbanzade</div>
      <div class="text-sm wsl-highlight">
        <a href="https://pejman.dev" target='_blank' rel="noreferrer">pejman.dev</a>
      </div>
    </div>
  </div>
</div>

<!--
At Aurora, I am part of our Technology Foundations team, building tooling and
infrastructure to improve developer experience and productivity.
While most of our core technology is written in C++, my team and I help
accelerate the development of our web applications by maintaining core
libraries and improving shared components such as our build system toolchain.

I have 8 years of experience in building and maintaining mission-critical
software systems. I started my career in cyber-security, then moved to Canon
to build software for 3D visualization of medical images like CT and MRI
datasets. We had this sign in our lobby that read "What we do matters".
And it was true. We were literally saving lives.
-->

---
slide: What we do matters
---

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-3 grid place-content-center space-y-4 w-4/5">
    <p>Low-dose Ultra Helical CT Angiogram of the Carotids and Circle of Willis
    for stroke work-up.</p>
    <p>Clear visualization of contrast enhanced vessels and surrounding soft
    tissue enables fast and confident rule-out of occlusion.</p>
  </div>
  <div class="col-span-2">
    <img class="rounded-lg" src="/images/canon-carotid-angiography.jpg" />
    <div class="text-right">
      <a class="text-xs text-sky-500" href="https://global.medical.canon/products/computed-tomography/aq_one_prism_cg_headneck" target="_blank" rel="noreferrer">Courtesy of Canon Medical Group</a>
    </div>
  </div>
</div>

<!--
The image you see on the screen is a sample output of that software, showing
a CT Carotids Angiogram dataset taken as part of the stroke work-up process
to find potential occlusions in head and neck blood vessels.

Building this image is challenging work. Because medical imaging datasets
are a set 2D images taken at different points of space and time. It takes
significant engineering work to construct the 3D object you see here that
the user can interact with.
-->

---
slide: Digital Imaging and Communications in Medicine
---

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-3 grid place-content-center w-4/5">

| Group | Element | Tag name                   |
|------:|:-------:|----------------------------|
|  0008 | 0020    | Study date                 |
|  0008 | 002A    | Acquisition DateTime       |
|  0010 | 0010    | Patient's name             |
|  0020 | 0013    | Instance Number            |
|  0020 | 0020    | Patient orientation        |

  </div>
  <div class="col-span-2">
    <img class="rounded-lg" src="/images/canon-2d-image.jpg" />
    <div class="text-right">
      <a class="text-xs text-sky-500" href="https://global.medical.canon/products/computed-tomography/aq_one_prism_cg_headneck" target="_blank" rel="noreferrer">Courtesy of Canon Medical Group</a>
    </div>
  </div>
</div>


<!--
Medical images conform to a DICOM standard that defines how to store and
retrieve information in each 2D image. This information includes image data
and other metadata some of which are listed here.

But this standard is very old and because there is no enforcement mechanism, it
is up to medical device manufacturers to decide how closely they follow the
standard and what tags to populate. As a result, one may encounter real-world
datasets in which required tags are missing or inconsistent across images. For
a mission-critical medical software, this is a source of complexity and risk.
-->

---
slide: What could go wrong?
---

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-3 grid place-content-center">
    <span class="text-2xl">Incorrect interpolation and misrepresenting image
    positions could result in inaccurate measurements, causing patient harm.</span>
  </div>
  <div class="col-span-2">
    <video class="rounded-lg" autoplay loop muted>
      <source src="/images/canon-carotid-angiography.mp4" type="video/mp4" />
    </video>
    <div class="text-right">
      <a class="text-xs text-sky-500" href="https://global.medical.canon/products/computed-tomography/aq_one_prism_cg_headneck" target="_blank" rel="noreferrer">Courtesy of Canon Medical Group</a>
    </div>
  </div>
</div>

<!--
To make things more difficult, our software needed to support medical datasets
that were created decades ago, when the standard was different, manufacturers
were even less compliant to the standard, and the physical hardware used for
taking images were more primitive, resulting in non-equidistant 2D images.

A medical software designed for use by surgeons and clinicians cannot afford
dismissing these issues as they may lead to measurement discrepancies
that could be life-threatening.
-->

---
slide: Everything could go wrong
---

<div class="space-y-12">
  <div class="text-2xl px-16">
    <q>The inherent complexity of the real world and the continuous change
    of requirements result in large and complex software systems that are
    costly and difficult to maintain.</q>
  </div>
  <div class="italic text-center">
    <q>In a sufficiently long time horizon, all possible behaviors of your system will occur.</q><span class="text-sm"> - Hyrum's law (modified)</span>
  </div>
</div>

<!--
I share all this to remind you:

1. that the real world is messy and complicated
2. and imposes ever-changing constraints.
3. and real world software are expected to meet those constraints.
4. which is why they are large and complex.

Because of this complexity, any changes to the system runs the risk of breaking it
in ways that we do not expect. The interdependencies between system
components and implicit assumptions made by each component are just too many
to keep track of. This is why when building real-world software,
it is often good practice to validate our assumptions and instead of dismissing
edge cases as unlikely, we embrace this mindset that "in a sufficiently
long time horizon, anything that could go wrong, will go wrong".
-->

---
slide: Testing as risk mitigation
---

<div class="space-y-4">
  <div class="w-2/3 wsl-card flex items-center space-x-4">
    <div><heroicons-question-mark-circle class="text-gray-300 text-xl" /></div>
    <div>If every code change can break our software, how could we stay productive
  and safely introduce frequent changes?</div>
  </div>
  <div class="ml-12 w-3/4 wsl-card flex items-center space-x-4">
    <div><heroicons-light-bulb class="text-gray-300 text-xl" /></div>
    <div>Implement high-level tests and continuously run them at scale to cover real-world system behaviors with reasonable degree of confidence.</div>
  </div>
</div>

<!--
Defensive programming is a reasonable software development methodology.
But validating every assumption is just not practical. So if we truly believe
that every code change can break our software, how could we stay productive
and find the courage and confidence to make frequent changes?

It's by establishing a mechanism to receive fast and reliable feedback
on the impact of each code change. In practice, this means implementing
multiple tiers of testing, from unit tests and component tests to higher-level
system tests, and scaling those tests to be exhaustive enough to yield a high
degree of confidence in the overall behavior of the system.
-->

---
slide: Developer inner and outer loops
---

<div class="grid grid-cols-2 gap-6">
  <div class="grid place-content-center text-xl space-y-12">
    <div class="leading-7">
      Fast feedback cycles boost development confidence and productivity.
    </div>
    <div class="leading-7">
      Moving high-level tests out of the developer loop results in slow
      and inefficient application life-cycles.
    </div>
  </div>
  <LightOrDark>
    <template #dark>
      <img src="/images/sdlc-dark.svg" class="rounded-lg" />
    </template>
    <template #light>
      <img src="/images/sdlc-light.svg" class="rounded-lg" />
    </template>
  </LightOrDark>
</div>

<!--
Most organizations attempt to implement this mechanism to a varying extent
and degree of success. For example, they run unit tests and integration tests
as part of the CI. But in most cases, higher-level system tests are pushed
to the testing phase of the software development life-cycle; the outer loop
in the diagram you see here.

But there is a separate loop at the developer level whose each cycle represents
an iteration to the codebase, like a PR that gets merged.
This inner loop is incredibly important to the productivity of engineers and
is expected to be well in sync with the outer loop.
-->

---
slide: The myth of the testing pyramid
---

<div class="grid grid-cols-2 gap-16">
  <div class="grid">
    <table class="table-fixed">
      <thead>
        <tr>
          <th scope="col"><span class="font-bold">Concerns</span></th>
          <th scope="col"><span class="font-bold">Benefits</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="space-y-1">
            <div class="wsl-text-primary">Difficult</div>
            <div class="wsl-text-secondary text-xs">costly to setup and run</div>
          </td>
          <td class="space-y-1">
            <div class="wsl-text-primary">Expressive</div>
            <div class="wsl-text-secondary text-xs">easy to read and modify</div>
          </td>
        </tr>
        <tr>
          <td class="space-y-1">
            <div class="wsl-text-primary">Expensive</div>
            <div class="wsl-text-secondary text-xs">need system deployment</div>
          </td>
          <td class="space-y-1">
            <div class="wsl-text-primary">Scalable</div>
            <div class="wsl-text-secondary text-xs">can run many test cases</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="wsl-text-primary">Slow</div>
            <div class="wsl-text-secondary text-xs">take long to execute</div>
          </td>
          <td>
            <div class="wsl-text-primary">Comprehensive</div>
            <div class="wsl-text-secondary text-xs">cover component interactions</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="wsl-text-primary">Brittle</div>
            <div class="wsl-text-secondary text-xs">flaky and easy to break</div>
          </td>
          <td>
            <div class="wsl-text-primary">Reassuring</div>
            <div class="wsl-text-secondary text-xs">provide more confidence</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-click class="space-y-4">
    <img class="rounded-lg mx-auto px-16" src="/images/testing-trophy.png" />
    <div class="text-xs rounded-lg bg-opacity-5 bg-white p-4 text-center">
      <span>"Write tests. Not too many. Mostly integration."</span><span> - <a class="text-sky-500" href="https://kentcdodds.com/blog/write-tests" target="_blank" rel="noreferrer">Guillermo Rauch</a></span>
    </div>
  </div>
</div>

<!--
But excluding higher-level system tests from the inner loop makes this
synchronization difficult. Historically, the prevalent argument has been
that high-level tests are too difficult for developers to setup
locally and run without the help of test engineers. And if you recall the
popular testing pyramid, it's also because higher-level tests are deemed
slower and more expensive to run.

These are all valid arguments. But higher-level tests have advantages too.
For example, they are easier to read; and because they cover more system
components, they better represents the end-user environment, and are more
reassuring than unit tests.
So, as with anything in software, using higher-level tests is often a
trade-off between costs and benefits.

(click)

But the commoditization of cloud compute resources and various improvements in
developer tooling has reduced the cost of higher-level tests. And in many
application domains, they are no longer prohibitively expensive to be part
of the developer inner-loop.

But why is this general industry trend less pronounced in C++ application domains?
C++ applications are complex, mission-critical, and resource-intensive.
So to test them and ensure that they meet our requirements, we need a large
number of datasets that take time to run.
So the concerns outlined here usually outweigh the benefits.
-->

---
slide: Continuous regression testing
---

<div class="space-y-4">
  <div class="wsl-card">
  Continuously verifying that the software works as well as before, during the development stage.
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="wsl-card space-y-2">
      <div class="flex items-center space-x-2">
        <div><heroicons-check-circle class="text-gray-300 text-lg" /></div>
        <div>Testing for Correctness</div>
      </div>
      <div class="text-sm">
        <li>Requires describing the expected behavior for each test input.</li>
        <li>Mismatches against the expected values indicate failure.</li>
        <li>Tests are difficult to maintain, scale, and automate.</li>
      </div>
    </div>
    <div class="wsl-card space-y-2">
      <div class="flex items-center space-x-2">
        <div><heroicons-magnifying-glass-circle class="text-gray-300 text-lg" /></div>
        <div>Testing for Regression</div>
      </div>
      <div class="text-sm">
        <li>Treats a released version of software as baseline.</li>
        <li>Mismatches against the baseline require justification.</li>
        <li>Tests are expressive and decoupled from the test input.</li>
      </div>
    </div>
  </div>
</div>

<!--
But we can make a compromise to reduce these concerns by slightly changing
the problem statement from "testing for correctness" to "testing for regression".
You see, we often associate testing with verifying that our software is
behaving correctly. But during development, it is enough to test that our
software works as well as before.

Testing for regression is easier and faster than testing for correctness
because it removes the need for us to know the correct behavior of our
software for each test case. So it can shift the balance towards the benefits
of high-level tests.
-->

---
slide: Higher-level tests in practice
---

<div class="grid grid-cols-2 gap-12">
  <div class="space-y-8 grid place-content-center">
    <div>Safely rewriting a critical data ingestion pipeline</div>
    <div class="grid grid-cols-2 gap-2">
      <div class="wsl-card">
        <div class="wsl-text-primary text-2xl">500,000<span>&thinsp;+</span></div>
        <div class="wsl-text-secondary text-xs">lines of code</div>
      </div>
      <div class="wsl-card">
        <div class="wsl-text-primary text-2xl">12,000<span>&thinsp;+</span></div>
        <div class="wsl-text-secondary text-xs">real-world datasets</div>
      </div>
      <div class="wsl-card">
        <div class="wsl-text-primary text-2xl">10,000<span>&thinsp;+</span></div>
        <div class="wsl-text-secondary text-xs">attributes to verify</div>
      </div>
      <div class="wsl-card">
        <div class="wsl-text-primary text-2xl">16,000<span>&thinsp;+</span></div>
        <div class="wsl-text-secondary text-xs">gigabytes of input data</div>
      </div>
    </div>
  </div>
  <div class="grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/data-ingestion-pipeline.dark.svg" class="rounded-lg" />
      </template>
      <template #light>
        <img src="/images/data-ingestion-pipeline.light.svg" class="rounded-lg" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
Regression testing is not a new concept. Our industry has been using this
testing method for decades. But often times, we use this method for testing
certain types of changes, such as when performing migrations or doing rewrites.

Remember that medical software I told you about? It had a data ingestion
pipeline that took DICOM data from different sources and processed
that data to produce an in-memory Volume that was then used by higher-level
system components.

And at some point, we wanted to rewrite all of that code to improve robustness
and efficiency. And we used regression testing for that.
-->

---
slide: In-Memory Comparison
---

<div class="grid grid-cols-2 gap-6">
  <div class="space-y-6 px-12">
    <ul>
      <li>Test is difficult to setup</li>
      <li>Test system is inefficient to run</li>
      <li>Test system is not reuseable</li>
    </ul>
    <div class="grid grid-cols-2 gap-2">
      <div class="wsl-card">
        <div class="wsl-text-primary text-2xl">50,000<span>&thinsp;+</span></div>
        <div class="wsl-text-secondary text-xs">LoC test framework</div>
      </div>
      <div class="wsl-card">
        <div class="wsl-text-primary text-2xl">16<span>&thinsp;+</span></div>
        <div class="wsl-text-secondary text-xs">hours to run test</div>
      </div>
    </div>
  </div>
  <div>

```cpp
for (auto test_case: test_suite) {
 auto new_output = new_system(test_case);
 auto old_output = old_system(test_case);
 auto report = compare(new_output, old_output);
 report.store(test_case);
}
generate_summary_report();
```

  </div>
</div>

<!--
But our custom purpose-built regression testing system was taking a long time
to run and was so complex that it required its own maintenance and support.

This system worked by loading any given test case, first with the new version
of our pipeline and then with the older production version. And then it
compared the output of those two systems that were two volume objects.

And I always found it annoying that every time we ran this system, we had to
feed our input to the old version of our pipeline, knowing full well,
that it is going to produce the same result as before.
This particular step felt like a waste of time and resources.
-->

---
slide: Snapshot Testing
---

<div class="grid grid-cols-2 gap-6">
  <div class="space-y-6 grid place-content-center">
    <div class="grid grid-cols-2 gap-2">
      <div class="wsl-card space-y-1">
        <div class="wsl-text-primary">Debugging</div>
        <div class="wsl-text-secondary text-xs">System is treated as a black box. Output may miss important data.</div>
      </div>
      <div class="wsl-card space-y-1">
        <div class="wsl-text-primary">Reliability</div>
        <div class="wsl-text-secondary text-xs">Output may include nondeterministic data.</div>
      </div>
      <div class="wsl-card space-y-1">
        <div class="wsl-text-primary">Data Management</div>
        <div class="wsl-text-secondary text-xs">Output is stored in version control along with source code.</div>
      </div>
      <div class="wsl-card space-y-1">
        <div class="wsl-text-primary">Reporting</div>
        <div class="wsl-text-secondary text-xs">Differences are difficult to inspect, understand, and manage.</div>
      </div>
    </div>
  </div>
  <div>

```cpp
for (auto test_case: test_suite) {
 auto new_output = new_system(test_case);
 store_snapshot(test_case, new_output);
 auto old_output = load_snapshot(test_case);
 auto report = compare(new_output, old_output);
 report.store(test_case);
}
generate_summary_report();
```

  </div>
</div>

<!--
One way of making the test faster is storing the output
of the old system somewhere and reusing it at test time so that we don't
have to pay the cost of running the old pipeline again.

And this is not a new concept either. This method of taking a snapshot of
your software behavior and storing it to disk for future comparison is called
snapshot testing or characterization testing.

But this method has its own challenges.
-->

---
slide: "Problem: Debugging"
---

<div class="grid gap-8">
  <LightOrDark>
    <template #dark>
      <img src="/images/debugging-black-box-dark.svg" class="w-3/4 mx-auto"/>
    </template>
    <template #light>
      <img src="/images/debugging-black-box-light.svg" class="w-3/4 mx-auto"/>
    </template>
  </LightOrDark>
  <div class="grid w-3/4 mx-auto">
    <div class="wsl-card text-center text-sm">Good tests point to the root cause when they fail.</div>
  </div>
</div>

<!--
For one, snapshot testing treats the system as a black box. Snapshot files
only include the final output of the system so any important data that is
not included in the output, cannot be tracked via this system. For complex
multi-stage software workflows, this is a major limitation and one that makes
it difficult to trace a difference to the root cause.

(SKIP) Ideally, we want a system that enables capturing any number of data
points from anywhere within our system.
-->

---
slide: "Problem: Reliability"
---

<div class="grid grid-cols-2 gap-6">
  <div class="grid place-content-center space-y-12">
    <div class="space-y-2">
      <div>Snapshot tests</div>
      <ul>
        <li class="text-base">are prone to capturing non-deterministic data.</li>
        <li class="text-base">are prone to capturing unimportant data.</li>
        <li class="text-base">may leave out changes not captured in the output.</li>
        <li class="text-base">fail to compare captured data in their original type.</li>
      </ul>
    </div>
    <div class="wsl-card text-center text-sm">Good tests pass and fail only when they are supposed to.</div>
  </div>
  <div>

```plaintext
          The Alameda ALM 408-207-1126
                777 The Alameda
              San Jose, CA 95126
  CANTALOUPE                       $3.99 F
    *Sale*            $3.32       -$0.67
    Prime Extra 10.00%            -$0.33
            Subtotal:              $3.99
            Total Savings:        -$1.00
            Net Sales:             $2.99
                Total:             $2.99
                Sold Items:            1

********************************************

      901 61797 09/15/2023 05:46 PM
```

  </div>
</div>

<!--
Another limitation of snapshot testing is that the system output is stored in
the snapshot file as one single entity. There is no distinction between
various data points in the output. Any small difference in any part of the
snapshot file would be enough to trigger a mismatch.

Consider this receipt, for example, as a possible output of a retail checkout
system. If we want to test this system with snapshot testing, it would be
tempting to store this output in a snapshot file. But the last line of the
receipt includes a timestamp which is going to differ from one version to
another. So even if the implementation of our system remains the same,
our snapshot tests are going to fail, unless we massage the final output so
that the content stored in the snapshot file remains deterministic.
-->

---
slide: "Problem: Data Management"
---

<div class="grid gap-4">
   <div class="grid place-content-center w-3/4 mx-auto">
    <LightOrDark>
      <template #dark>
        <img src="/images/data-management-dark.svg" class="rounded-lg" />
      </template>
      <template #light>
        <img src="/images/data-management-light.svg" class="rounded-lg" />
      </template>
    </LightOrDark>
  </div>
  <div class="grid w-3/4 mx-auto">
    <div class="wsl-card text-center text-sm">Good test systems enable auditing how software evolves.</div>
  </div>
</div>

<!--
Another limitation is that most snapshot testing libraries advocate for
storing snapshot files in the source code repository.
This approach may be convenient at first, but it quickly breaks down at scale.
Because in real-world software, the snapshot files may be too large in size
or too many to track in version control.
-->

---
slide: "Problem: Reporting"
---

<div class="grid gap-4">
  <div class="grid place-content-center w-3/4 mx-auto">
    <LightOrDark>
      <template #dark>
        <img src="/images/reporting-dark.svg" class="rounded-lg" />
      </template>
      <template #light>
        <img src="/images/reporting-light.svg" class="rounded-lg" />
      </template>
    </LightOrDark>
  </div>
  <div class="grid w-3/4 mx-auto">
    <div class="wsl-card text-center text-sm">Good test systems report insights as output, not raw test results .</div>
  </div>
</div>

<!--
And lastly, snapshot files don't preserve the type of our captured data.
They often store the textual representation of our output which means
mismatches are also reported as string differences which could be really
difficult to collect insights from.

(SKIP) Another implication of this is that we often need a separate step to
convert our original output to the textual output that is stored in the file.
-->

---
slide: Design Principles
---

<div class="grid grid-cols-3 gap-2">
  <div class="wsl-card space-y-2">
    <div class="flex space-x-2 items-center">
      <div><heroicons-command-line class="text-gray-300" /></div>
      <div class="wsl-text-primary text-xl font-bold">Developer Friendly</div>
    </div>
    <div class="wsl-text-secondary text-sm">
      Designed for everyday use by developers.
      Should enable creating tests that are cheap to write, fast to run,
      and easy to modify.
    </div>
  </div>
  <div class="wsl-card space-y-2">
    <div class="flex space-x-2 items-center">
      <div><heroicons-puzzle-piece class="text-gray-300" /></div>
      <div class="wsl-text-primary text-xl font-bold">Flexible</div>
    </div>
    <div class="wsl-text-secondary text-sm">
      Designed for capturing values of variables and runtime of functions.
      Should handle data points with primitive or user-defined data types.
    </div>
  </div>
  <div class="wsl-card space-y-2">
    <div class="flex space-x-2 items-center">
      <div><heroicons-rocket-launch class="text-gray-300" /></div>
      <div class="wsl-text-primary text-xl font-bold">Scalable</div>
    </div>
    <div class="wsl-text-secondary text-sm">
      Designed for testing mission-critical software.
      Should handle capturing data from large number of test cases and report
      test results as actionable insights.
    </div>
  </div>
</div>

<!--
So about 5 years ago, I started a side project to build a regression
testing system to address the common limitations of snapshot testing.

I wanted this new system to be tailored and optimized for use by developers,
so it can be used continuously for testing day-to-day code changes. I wanted
it to be flexible and provide fine-grained control over what data is captured
and how it should be compared.

And I wanted it to be scalable so that it can be used by my team and any other
teams for testing complex real-world software.
-->

---
slide: Rethinking snapshot testing
---

<div class="grid place-content-center">
  <LightOrDark>
    <template #dark>
      <img src="/images/snapshot-testing-md-dark.svg" class="rounded-lg" />
    </template>
    <template #light>
      <img src="/images/snapshot-testing-md-light.svg" class="rounded-lg" />
    </template>
  </LightOrDark>
</div>

<!--
The overall architecture of that system was something like this, where a C++
library would capture values of variables and runtime of functions from the
workflow under test, then submit those captured data to a remote server, that
handles everything from data retention and comparison against baseline, to
reporting and visualizing differences.
-->

---
slide: About Touca
---

<div class="grid grid-cols-3 gap-2">
  <div class="flex flex-col justify-between bg-[#074b7a] p-4 rounded-2xl dark:bg-transparent dark:rounded-none">
    <div class="space-y-2">
      <div><img src="/images/logo-touca.svg" class="h-[2.5rem]" /></div>
      <div class="text-white">
        Find the unintended side-effects of your day-to-day code changes
      </div>
    </div>
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="text-sm text-white">Trusted By:</div>
        <img src="/images/logo-canon.svg" class="h-[1rem]" />
      </div>
      <div class="space-y-2">
        <div class="text-sm text-white">Backed By:</div>
        <img src="/images/logo-techstars.svg" class="h-[1.5rem]" />
      </div>
    </div>
  </div>
  <div class="col-span-2">
    <img src="/images/touca-techstars.jpg" class="rounded-2xl" />
  </div>
</div>

<!--
This project was adopted by my team and gradually matured as a product
to cover multiple critical workflows of our software. After another two
years of building over nights and weekend, I was fortunate to receive the
IP rights for it. So I started showing it to software engineers outside
the company and in March 2021, their positive feedback made me decide to
leave Canon and start working on this project full-time.

I founded a company, re-branded the tool as Touca, and started selling it to
other companies. The picture you see here is me presenting Touca at the
Techstars demo day last year.
-->
