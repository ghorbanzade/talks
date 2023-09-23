---
slide: Agenda
section: ''
---

<Agenda section="safety" />

<!--
And my last parting thought is that adopting continuous improvement is
embracing a culture of safety. Safety is essential to the company I
work for. So I'd like to share some of our practices in building and
testing software for autonomous driving and show how these practices
can be generalized and applied to other types of software.
-->

---
slide: What we do matters
---

<div class="grid grid-cols-3 gap-2 w-6/7 mx-auto">
  <div class="grid gap-2 text-sm">
    <div class="wsl-card py-1 flex items-center">Unit and Integration Tests</div>
    <div class="wsl-card py-1 flex items-center">Simulation Tests</div>
    <div class="wsl-card py-1 flex items-center">Perception Scenarios</div>
    <div class="wsl-card py-1 flex items-center">Hardware-in-The-Loop Tests</div>
    <div class="wsl-card py-1 flex items-center">On-vehicle Tests</div>
  </div>
  <div class="col-span-2 grid content-center">
    <img src="/images/aurora-approach-to-dev.gif" class="rounded-lg" />
  </div>
</div>

<!--
At Aurora, safety is a team sport. We take a holistic view of safety, focusing
on creating a strong safety culture that permeates every part of our company.
We're taking on the ambitious challenge of operating vehicles safely and
autonomously in a real-world that is complex, messy, and ever-changing.
To ensure the safety of our product, we leverage multiple tiers of testing,
some of which are listed here.

We take our offline tests very seriously and fundamentally believe that they
are more effective for building a good product than simply collecting vast
amount of data from low-value autonomy miles.
-->

---
slide: Simulation Tests
---

<div class="grid grid-cols-5 gap-2">
  <div class="col-span-2 grid grid-rows-3 gap-2">
    <div class="wsl-card grid grid-cols-2 gap-6">
      <div class="text-2xl font-bold grid content-center justify-items-end">
        60,000
      </div>
      <div class="grid content-center justify-items-start">
        <div class="text-lg">CPUs utilized</div>
        <div class="text-sm">each hour</div>
      </div>
    </div>
    <div class="wsl-card grid grid-cols-2 gap-6">
      <div class="text-2xl font-bold grid content-center justify-items-end">
        6 million
      </div>
      <div class="grid content-center justify-items-start">
        <div class="text-lg">Simulation runs</div>
        <div class="text-sm">per day</div>
      </div>
    </div>
    <div class="wsl-card grid grid-cols-2 gap-6">
      <div class="text-2xl font-bold grid content-center justify-items-end">
        6 billion
      </div>
      <div class="grid content-center justify-items-start">
        <div class="text-lg">Equivalent miles</div>
        <div class="text-sm">driven to date</div>
      </div>
    </div>
  </div>
  <div class="col-span-3 grid place-content-center">
    <video class="rounded-xl" autoplay loop muted>
      <source src="/images/aurora-simulation.mp4" type="video/mp4" />
    </video>
  </div>
</div>

<!--
Because our product needs to handle a large variety of scenarios, we heavily
rely on simulation tests for testing our perception and motion planning systems.
If we wanted to test these scenarios on the road and in the real-world, we would
need 100 vehicle fleet, operating 10 hours per day, every day, for 50 years
to test every single change to our software. And we make more than 200
code changes each day.

This is why simulation tests are so important. We run 6 million simulations
each day, to test various systems of our software in very realistic conditions
without causing dangerous condition for others.
-->

---
slide: Virtual world-building
---

<div class="grid grid-cols-5 gap-2">
  <div class="wsl-card col-span-2 grid gap-2 place-content-center">
  Simulating how sensors perceive objective events in the world, helps curate realistic rare-event scenario data that are difficult, dangerous, or expensive to acquire in the real world.
  </div>
  <div class="col-span-3 grid place-content-center">
    <video class="rounded-xl" autoplay loop muted>
      <source src="/images/aurora-perception-scenarios.mp4" type="video/mp4" />
    </video>
  </div>
</div>

<!--
We build custom software to simulate sensor perceptions with a degree of
required accuracy. We build a virtual world that mimics the real environment.
With a world in place, we describe how events are to take place in
a time interval. Our simulator perceives this curated world and then writes a
log of what it sees. These synthetic log data help our internal partners train,
validate, and test perception systems at scale.
-->

---
slide: Machine Learning
---

<div class="grid grid-cols-3 gap-2">
  <div class="grid gap-2 text-sm">
    <div class="wsl-card py-1 flex items-center space-x-4">
      <div><bi-1-circle class="text-lg" /></div>
      <div>Data Selection</div>
    </div>
    <div class="wsl-card py-1 flex items-center space-x-4">
      <div><bi-2-circle class="text-lg" /></div>
      <div>Data Labeling</div>
    </div>
    <div class="wsl-card py-1 flex items-center space-x-4">
      <div><bi-3-circle class="text-lg" /></div>
      <div>Synthetic Data Generation</div>
    </div>
    <div class="wsl-card py-1 flex items-center space-x-4">
      <div><bi-4-circle class="text-lg" /></div>
      <div>Model Training</div>
    </div>
    <div class="wsl-card py-1 flex items-center space-x-4">
      <div><bi-5-circle class="text-lg" /></div>
      <div>Model Evaluation</div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <video class="rounded-xl" autoplay loop muted>
      <source src="/images/aurora-fod.mp4" type="video/mp4" />
    </video>
  </div>
</div>

<!--
And finally, we make these simulations an essential part of the feedback
loop for our machine learning models to learn how to navigate important
situations that are rare to see and dangerous to replicate in the real-world.

When we observe rare but interesting events in the real-world, we can use our
virtual world and synthetically generate more of those events, and include
those extreme cases in the datasets our machine learning models train on.
-->

---
slide: Safety Case Framework
---

<div class="space-y-2">
  <div class="wsl-card">
  Goal: Aurora's self-driving vehicles are acceptably safe to operate on public roads.
  </div>
  <div class="grid grid-cols-5 gap-2">
    <div class="wsl-card grid content-start gap-4">
      <div class="flex items-center space-x-2 min-h-[3rem]">
        <div>Proficient</div>
      </div>
      <div class="text-xs">
        The self-driving vehicle is acceptably safe duration nominal operation.
      </div>
    </div>
    <div class="wsl-card grid content-start gap-4">
      <div class="flex items-center space-x-2 min-h-[3rem]">
        <div>Fail-Safe</div>
      </div>
      <div class="text-xs">
        The self-driving vehicle is acceptably safe in presence of faults and failures.
      </div>
    </div>
    <div class="wsl-card grid content-start gap-4">
      <div class="flex items-center space-x-2 min-h-[3rem]">
        <div>Continuously Improving</div>
      </div>
      <div class="text-xs">
        Safety issues are resolved with appropriate corrective
        and preventative actions.
      </div>
    </div>
    <div class="wsl-card grid content-start gap-4">
      <div class="flex items-center space-x-2 min-h-[3rem]">
        <div>Resilient</div>
      </div>
      <div class="text-xs">
        The self-driving vehicle is acceptably safe in case of
        misuse and unavoidable events.
      </div>
    </div>
    <div class="wsl-card grid content-start gap-4">
      <div class="flex items-center space-x-2 min-h-[3rem]">
        <div>Trustworthy</div>
      </div>
      <div class="text-xs">
        The self-driving enterprise is trustworthy.
      </div>
    </div>
  </div>
</div>

<!--
These multiple triers of extensive testing help us build confidence in what
we are building and let us improve our product safely and quickly.

But keeping this infrastructure running requires embracing safety as a culture,
an operational framework, and an enabler of success, not just some business
requirement. In fact, Aurora is the only autonomous vehicles company to date
to have a public safety case framework.

And while our framework and particular testing practices may not be directly
applicable to other spaces and application domains, I think that this approach
to safety can be relevant and easy to get inspiration from. And I hope to see
all companies maintain and publicize their own safety case framework.
-->

---
slide: Conclusion
---

- Fast feedback cycles improve developer experience and boost productivity.
- Continuous regression testing facilitates changing software safely and with confidence.
- Shift-left testing reduces development cost and improves efficiency.
- Maintaining software quality requires fostering a culture of continuous improvements.
- Ensuring software safety requires incorporating multiple software testing methods.

<!--
We covered a lot today. We saw how fast feedback cycles improve developer
productivity, and how continuous regression testing can help us change
software safer and faster. But to achieve overall safety, we need to incorporate
multiple tiers of testing and adopt a culture of continuous improvement.
-->

---
layout: center
---

<div class="text-center space-y-8">
  <div class="text-4xl font-600">Questions</div>
  <div class="space-y-3">
    <div>
    <a class="flex items-center text-xl" href="https://pejman.dev/talks/cppcon23" target="_blank" rel="noreferrer">
      <heroicons-presentation-chart-bar class="rounded-full mr-2" />
      <span>pejman.dev</span>
      <span class="px-[0.2rem]">/</span>
      <span>talks</span>
      <span class="px-[0.2rem]">/</span>
      <span>cppcon23</span>
    </a>
    </div>
    <div>
    <a class="text-center text-xl" href="https://github.com/trytouca/trytouca" target="_blank" rel="noreferrer">
      <bi-github class="rounded-full mr-2" />
      <span>github.com</span>
      <span class="px-[0.2rem]">/</span>
      <span>trytouca</span>
      <span class="px-[0.2rem]">/</span>
      <span>trytouca</span>
    </a>
    </div>
    <div>
    <a class="text-center text-xl" href="https://touca.io/docs" target="_blank" rel="noreferrer">
      <heroicons-book-open class="rounded-full mr-2" />
      <span>touca.io</span>
      <span class="px-[0.2rem]">/</span>
      <span>docs</span>
    </a>
    </div>
  </div>
</div>

<!--
And with that, I'd like to thank you once again for your time, and I am now
ready to take your questions.
-->
