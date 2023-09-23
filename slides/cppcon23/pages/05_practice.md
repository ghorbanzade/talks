---
slide: Agenda
section: ''
---

<Agenda section="practice" />

<!--
The use-cases we reviewed are just a few examples of going beyond finding
behavioral regressions. I hope that they can serve as inspiration for tracking
regressions in whatever metric you care about during day-to-day development.
-->

---
slide: A roller coaster story
---

<div class="grid grid-cols-5 gap-6">
  <div class="grid col-span-2 place-content-around">
    <div class="wsl-card space-y-1 px-4">
      <div>"Touca gives us the confidence to develop new features faster and with fewer problems."</div>
    </div>
    <div class="space-y-2">
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>10+ paying customers</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>100+ workflows continuously tested</div>
      </div>
      <div class="flex items-center space-x-2">
        <div><heroicons-check-badge class="text-green-500" /></div>
        <div>1000+ unexpected regressions found</div>
      </div>
    </div>
  </div>
  <div class="col-span-3 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-growing-usage-dark.png" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-growing-usage-light.png" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

<!--
I shared a lot about Touca, this product that has consumed so much of my life
in the past two years. It's been a rewarding journey full of ups and downs.
In the two years of operating Touca as a startup, we had our fair share of
success stories. I'm proud of the fact that we helped more than 10 companies
find more than 1000 unintended regressions during their development workflow.
-->

---
slide: A humbling journey
---

<div class="grid grid-cols-5 gap-6">
  <div class="grid col-span-2 place-content-around">
    <div class="wsl-card space-y-1">
      <div>"Success is stumbling from failure to failure with no loss of enthusiasm."</div>
      <div class="text-right text-xs">- Winston Churchill</div>
    </div>
  </div>
  <div class="col-span-3 grid place-content-center space-y-2">
    <img src="/images/touca-blog-230330-1.png" class="rounded-xl" />
    <div class="flex justify-end">
      <a class="flex items-center space-x-1" href="https://touca.io/blog/touca-shutting-down/" target="_blank" rel="noreferrer">
        <heroicons-link class="rounded-full text-xs" />
        <span class="text-xs font-mono">touca.io/blog/touca-shutting-down</span>
      </a>
    </div>
  </div>
</div>

<!--
But there is always an end to every chapter and for Touca, as a company, this
end was in March this year, when we announced that the company is shutting down.

Now in the past six months, the second most frequent question I've got is
what I've learned building and selling this product.

And what I've learned is that testing is cultural. How an organization tests
their software, always goes back to their team culture, not the set of tools
that they use.
-->

---
slide: Broken windows theory
---

<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 grid place-content-between">
    <div class="space-y-2">
      <div class="py-4 px-8">
        <q>If a window in a building is broken and is left
        unrepaired, all the rest of the windows will soon be broken. [...]
        Window-breaking does not necessarily occur on a large scale because
        some areas are inhabited by determined window-breakers, rather, one
        unrepaired broken window is a signal that no one cares, and so
        breaking more windows costs nothing.</q>
      </div>
      <div class="flex justify-end">
        <a class="flex items-center space-x-1" href="https://www.theatlantic.com/magazine/archive/1982/03/broken-windows/304465/" target="_blank" rel="noreferrer">
          <heroicons-link class="rounded-full text-xs" />
          <span class="text-xs font-mono">The Atlantic, 1982</span>
        </a>
      </div>
    </div>
    <div class="wsl-card flex items-center space-x-2">
      <heroicons-light-bulb class="text-4xl" />
      <div>
        No tool can address software quality issues more effectively than
        fostering a culture of continuous improvement.
      </diV>
    </div>
  </div>
  <div class="space-y-2">
    <img src="/images/broken-windows-sm.png" class="rounded-xl" />
    <div class="flex justify-end text-sm">
      AI-generated
    </div>
  </div>
</div>

<!--
Now to better convey my point, I'd like to remind you of the broken windows
theory, that was first introduced in 1982 in The Atlantic magazine.

This theory suggests that if a window in a building is broken and is left
unrepaired, all the other windows in that building are doomed to brake as well.
And the authors reason that an unrepaired broken window is often a signal that
no one cares, so breaking more windows costs nothing.

This theory suggests that the most effective solution to large-scale
bad behavior like window breaking, is encouraging and promoting good behavior
like window fixing.

I think that this theory holds true for software quality. In an organization
where builds are slow, tests are flaky, no-one cares about compiler
warnings, and low-quality pull requests are landed without any conversation,
the released server is likely defective. Tools like Touca can help, but the
real champion who makes a difference is an engineer with abundant patience,
perseverance and grit to slowly change the culture and make their colleagues
care.
-->

---
slide: Improving software quality
---

<div class="grid grid-cols-3 gap-2">
  <div class="wsl-card space-y-2">
    <div class="flex space-x-2 items-center">
      <div><heroicons-finger-print class="text-gray-300" /></div>
      <div class="wsl-text-primary text-xl font-bold">Culture</div>
    </div>
    <div class="wsl-text-secondary text-sm">
      Teams need to foster ownership and accountability for software quality.
      reward continuous improvements and actively share about technical debt.
    </div>
  </div>
  <div class="wsl-card space-y-2">
    <div class="flex space-x-2 items-center">
      <div><heroicons-lock-closed class="text-gray-300" /></div>
      <div class="wsl-text-primary text-xl font-bold">Commitment</div>
    </div>
    <div class="wsl-text-secondary text-sm">
      Teams need to commit to continued investment in maintaining software
      quality and continuously measure their RoI by tracking developer
      productivity.
    </div>
  </div>
  <div class="wsl-card space-y-2">
    <div class="flex space-x-2 items-center">
      <div><heroicons-book-open class="text-gray-300" /></div>
      <div class="wsl-text-primary text-xl font-bold">Education</div>
    </div>
    <div class="wsl-text-secondary text-sm">
      Engineers need to understand their product to know what to test,
      and learn how to write tests that are fast to run, cheap to maintain,
      and reliable to use.
    </div>
  </div>
</div>

<!--
So if we are serious about improving the quality of our software, we need to
embrace a culture of continuous improvement that promotes and rewards fixing
broken windows.

Improving software quality is a continuous process, so it also needs
commitment which is only possible if we prove the return on investment
by measuring the impact of our efforts on developer productivity.

And we need to educate software engineers about the best practices for
building good quality software.

Let's quickly review these topics one by one.
-->

---
slide: Improving team culture
---

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-3 grid space-content-between">
    <div class="space-y-2">
      <div class="flex">
        <div class="wsl-card"><heroicons-chat-bubble-bottom-center-text class="text-xl" /></div>
      </div>
      <div class="text-base">
        <li>Maintaining software quality is a collective effort.</li>
        <li>Shift-left testing reduces development cost and improves efficiency.</li>
        <li>Effective communication about software quality helps improve it.</li>
      </div>
    </div>
    <div class="space-y-2">
      <div class="flex">
        <div class="wsl-card"><heroicons-light-bulb class="text-xl" /></div>
      </div>
      <div class="text-base">
        <li>Reward and promote continuous improvements.</li>
        <li>Continuously measure developer experience and productivity.</li>
      </div>
    </div>
  </div>
  <div class="col-span-2">
    <img src="/images/garden.jpg" class="rounded-xl" />
  </div>
</div>

<!--
I already outlined the importance of continuous improvement. But to drive this
point home, let's go back to the analogy between a complex software and a garden.

A good gardener is one with a habit of continuous improvement who is always
tending to their plants, making sure that they have enough water, sunlight,
and humidity. A bad gardener is one that is totally ignorant of their plants
until they start to die for one reason or another.

An organization that waits until they find a serious defect in production to
improve their testing practices, will have the same luck as a bad gardener.
-->

---
slide: Proving business value
---

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-3 grid space-content-center">
    <div class="grid content-center wsl-card gap-2">
      Continuously:
      <div class="text-base">
        <li>Measure developer experience and productivity.</li>
        <li>Monitor changes to developer feedback cycles.</li>
        <li>Track the effectiveness of existing testing practices.</li>
        <li>Extract real-time insights about software development life-cycle.</li>
      </div>
    </div>
  </div>
  <div class="col-span-2">
    <img src="/images/water-fountain.jpeg" class="rounded-xl" />
  </div>
</div>

<!--
To unlock a culture of continuous improvement, we need long-term
commitment and care from the software team and the best way to earn that
commitment is to collect data and metrics to show how improving the inner
developer loop is correlated with improving software development life-cycle
as the outer loop and leads to releasing better quality products.

Sadly, most engineering teams don't invest in measuring developer productivity
enough.
-->

---
slide: Learning what to test
---

<div class="grid grid-cols-5 gap-2">
  <div class="col-span-3 space-y-2 grid content-center">
    <div class="wsl-card text-base">
      <li>Good tests verify a system expectation that is prone to change.</li>
      <li>Good tests are the ones that fail from time to time.</li>
      <li>Good tests make efficient use of the resources they need.</li>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="wsl-card flex items-center justify-center space-x-2">
        <div><heroicons-map class="text-lg" /></div>
        <span class="text-lg">Scope</span>
      </div>
      <div class="wsl-card flex items-center justify-center space-x-2">
        <div><heroicons-shield-check class="text-lg" /></div>
        <span class="text-lg">Confidence</span>
      </div>
    </div>
  </div>
  <div class="col-span-2 space-y-2">
    <img src="/images/plane.jpg" class="rounded-xl" />
    <div class="flex justify-end">
      <a class="flex items-center space-x-1" href="https://unsplash.com/@etien_nl" target="_blank" rel="noreferrer">
        <heroicons-link class="rounded-full text-xs" />
        <span class="text-xs font-mono">By Etienne Jong</span>
      </a>
    </div>
  </div>
</div>

<!--
As for education, I cannot begin to pretend to cover these best practices
in just a few minutes, but I have a few thoughts, or hot takes if you will,
that are relevant to testing and refactoring.

And they start with learning what to test. Because testing the wrong thing is
the easiest recipe for generating low-quality and flaky tests.

When testing becomes a chore, we give in to
the temptation to create a template for it and blindly follow that template.
But testing is the exercise of verifying our system expectations, not
the change we are making. And system expectations are prone to change, so
our tests are only effective if they fail from time to time.

A good rule-of-thumb to measure whether we are testing the right thing is to
think of our software as an airplane and then ask: if all our tests are
passing, would we dare to board this plane?
-->

---
slide: Learning how to test
---

<div class="grid grid-cols-4 gap-2">
  <div class="col-span-3 grid place-content-center">
    <div class="grid grid-rows-4 grid-cols-3 gap-2">
      <div class="wsl-card row-span-3 space-y-2">
        <div class="flex items-center space-x-2">
          <div>Expressive</div>
        </div>
        <div class="text-sm">
          Good tests are easy to read and effective way of learning business logic.
          Apply the same code hygiene to your tests as your production code.
        </div>
      </div>
      <div class="wsl-card row-span-3 space-y-2">
        <div class="flex items-center space-x-2">
          <div>Scalable</div>
        </div>
        <div class="text-sm">
          Good tests are reusable. Optimize for low per-input execution cost.
          Prefer writing test code with loose assumptions about individual test inputs.
        </div>
      </div>
      <div class="wsl-card row-span-3 space-y-2">
        <div class="flex items-center space-x-2">
          <div>Extensible</div>
        </div>
        <div class="text-sm">
          Good tests are easy to change. Optimize for low maintenance cost.
          Single use-case test frameworks have the same cost as production code.
        </div>
      </div>
      <div class="col-span-3 wsl-card grid place-content-center">
        Measure test coverage in terms of verified business requirements.
      </div>
    </div>
  </div>
  <div class="grid place-content-center">
    <img src="/images/squarepegroundhole.jpg" class="rounded-lg" />
  </div>
</div>

<!--
We also need to learn how to write good tests. And regardless of what type
of tests we write, I think a good test is one that is expressive (so that
it is easy to read), scalable (so that it is easy to run), and extensible
(so that it is easy to change). When the tests are not easy to read, run,
or change, that's a sign that our system interface is poorly designed, or
that we're not using the right type of test for this interface.
-->

---
slide: Learning when to run each test
---

<div class="grid grid-cols-5 gap-2">
  <div class="col-span-3 space-y-2 grid content-center">
    <div class="grid grid-cols-2 gap-2">
      <div class="wsl-card flex items-center justify-center space-x-2">
        <div><heroicons-shield-check class="text-lg" /></div>
        <span class="text-lg">Reliability</span>
      </div>
      <div class="wsl-card flex items-center justify-center space-x-2">
        <div><heroicons-rocket-launch class="text-lg" /></div>
        <span class="text-lg">Fast Feedback</span>
      </div>
    </div>
    <div class="wsl-card text-base">
      <li>Optimize for return on investment.</li>
      <li>Avoid reusing paradigms of a specific test stage in others.</li>
      <li>Leverage selective test execution for shorter feedback cycle.</li>
      <li>Use periodic test execution for more confidence.</li>
    </div>
  </div>
  <div class="col-span-2 space-y-2">
    <img src="/images/aurora-test-track.jpg" class="rounded-xl" />
  </div>
</div>

<!--
Running the right type of test at the right time significantly impacts test
effectiveness. Obviously, higher-level tests continue to be more expensive
and slower to run. But they are better and easier for some scenarios and provide
more confidence than running a thousand unit tests. And we can always leverage
methods like selective test case execution to run only a subset of them to get
faster feedback.
-->

---
slide: Learning how to read code
---

<div class="grid grid-cols-5 gap-4">
  <div class="col-span-2 grid space-content-between">
    <div class="grid content-center wsl-card gap-2">
      <div class="text-base">
        <li>Understand the business.</li>
        <li>Learn code context and history.</li>
        <li>Ask questions and share concerns.</li>
        <li>Take ownership and accountability.</li>
      </div>
    </div>
  </div>
  <div class="col-span-3">
    <img src="/images/architecture.jpg" class="rounded-xl" />
  </div>
</div>

<!--
And writing good tests require deep understanding of the system and business
requirements. Some of this understanding comes with time and experience but
reading source code can help too which is a skill by itself. It is easy to
get distracted by implementation details. A good software engineer pierces
through that layer to learn the context and history of the software instead.

I like to think of those of us who work on large software systems as
urban planners trying to improve a historic city. Trying to modernize
the first thing we find by using a shiny new language feature is often
wrong and hurts readability.
-->

---
slide: Learning how to change code
---

<div class="space-y-8">
  <div class="grid grid-cols-7 gap-2 place-content-between">
    <div class="col-span-4 text-base wsl-card grid content-center">
      <li>Understand the system</li>
      <li>Study the call-sites</li>
      <li>Resolve unexpected use cases</li>
      <li>Measure the impact</li>
      <li>Mitigate surprises</li>
      <li>Favor incremental rollout</li>
      <li>Communicate your thought process</li>
      <li>Share changes to expectations</li>
    </div>
    <div class="col-span-3">
      <img src="/images/construction-zone.jpg" class="rounded-lg" />
    </div>
  </div>
  <div class="italic text-center">
    <q>Take many more much smaller steps.</q><span class="text-sm"> — GeePaw Hill</span>
  </div>
</div>

<!--
I used to live in Minnesota which makes most people immediately think of
frigid cold winters which could be annoying. But if you've ever lived in the
midwest, you know that the most annoying thing is constant road constructions.

Construction zones are annoying in the world of software too. And it is so
easy to end up creating a construction zone when we embark on large-scale
migration projects. So whenever possible, we should favor small incremental
refactors over big-bang migrations.
-->
