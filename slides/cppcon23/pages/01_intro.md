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
How do I know refactoring is your bread and butter? Because, according to a 2019
report by Strip that surveyed more than 1,000 professional software engineers,
we spend 17 hours of our working week maintaining existing software.

So for anyone who's been in this industry for a while, chances are that
you either love maintaining software or are unhappy at least half the time.
-->

---
slide: Maintaining Software
---

<div class="space-y-4">
  <div>
    <ul>
      <li>Reading</li>
      <li>Debugging</li>
      <li>Refactoring</li>
      <li>Adding tests</li>
      <li>Writing documentation</li>
      <li>Resolving technical debt</li>
    </ul>
  </div>
  <div v-click class="italic text-center">
    <quote>"The only constant in life is change."</quote><span class="text-sm"> - Heraclitus</span>
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

click

After all, software is much like a living organism. It is constantly evolving
until it ceases to deliver value.
-->

---
slide: Types of Change
---

<div class="space-y-4">
  <div>
    <ul>
      <li>Fixing a defect</li>
      <li>Enabling code reuse</li>
      <li>Adjusting to new expectations</li>
      <li>Improving a function implementation</li>
      <li>Upgrading a third-party dependency</li>
      <li>Renaming a function or variable</li>
      <li>Changing system configuration</li>
      <li>Updating build system toolchain</li>
    </ul>
  </div>
  <div v-click class="italic text-center">
    <quote>"Software engineering is programming integrated over time."</quote><span class="text-sm"> - Titus Winters</span>
  </div>
</div>

<!--
We change software for a variety of reasons: To make it work better, faster and
more efficient. To make the code simpler, more readable, easier to understand
and change in the future.

We make these changes with good intentions. Some changes are easy and limited
in scope, like improving a function implementation, and some are hard and may
require large-scale refactoring, like supporting a new compiler. But regardless
of their type, every change to our software runs the risk of breaking it.

click

Managing this risk is the art that makes our craft interesting.
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
The faster we get to confidence about a given code change, the sooner we can
move on and make more follow-up changes.

But despite our best efforts, we are far from having fast feedback cycles
that provide sufficient confidence for every day code changes.
On average, it takes engineering teams 23 days to get feedback on whether their
code changes work as they expect.

The goal of this talk is to present Continuous Regression Testing as a method
to help us address this problem and shorten this feedback cycle.
-->

---
slide: Agenda
section: ''
---

<Agenda section="intro" />

<!--
In the next hour, we are going to cover what Continuous Regression Testing is
and how it is useful.

Then we will have a live demo of a free and open source
Continuous Regression testing system to understand how it can be used in
practice and for real-world use cases.

Then we will see how that system works and review some of its design decisions
that could be helpful for building other similar systems.

Next, we will cover how to use a regression testing tool effectively and how
to navigate the common pitfalls that lead to slow and flaky high-level tests.

Then we will have another series of live demos to see how Continuous Regression
Testing can help us identify other types of regressions such as changes in
performance, and output binary size.

And lastly, I hope to convince you that no tool or method could serve as a
silver bullet and efficiently building safe systems requires a culture of
safety that combines a variety of tools and methods to mitigate the risks of
everyday code changes.

As you can tell, we are going to cover a lot of content within the next hour.
If you have any questions, please wait until the end to ask them.

But there is one exception: I assume you already know a lot about software
testing. So, to respect you and your time, I intend to skip over the basics and
dive straight in. But if you felt I am going too fast and need me to elaborate,
please don't hesitate to let me know.
-->

---
slide: About Aurora
---

<img src="/images/aurora-truck.jpg" class="rounded-l-[3rem] absolute bottom-7vh right-0 w-3/5" />
<div class="min-h-[20vh] w-1/3 grid place-content-center space-y-8">
  <div class="text-2xl font-medium">
    Delivering the benefits of self-driving technology, safely, quickly, and broadly.
  </div>
  <div class="text-right wsl-highlight font-mono">
    <a href="https://aurora.tech/careers">aurora.tech/careers</a>
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
      <li v-click>8 years of professional experience</li>
      <li v-after>Maintaining mission-critical software systems</li>
      <li v-after>Ex VMware Carbon Black, <span>Canon Medical Informatics</span></li>
      <li v-after>Former founder of a developer tools startup</li>
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
While most of core technology is written in C++, we have a variety of web
applications for visualization, simulation, logistics management, and many other
purposes. My team and I help accelerate the development of those applications
by maintaining core libraries and improving shared components such as our build
system toolchain.

click

I have 8 years of experience in building and maintaining mission-critical
software systems. I started my career at a cyber-security company acquired
by VMware, then moved to Canon to build medical imaging software for four
years.

A part of my talk today showcases the software that I originally built for my
team at Canon, and then sold to other companies when I got the IP rights and
started a startup. What I am sharing today is the story of this adventure
that I've pursued with passion for the past five years.
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
At Canon, I was part of Canon Medical Informatics, building a software for
3D visualization of medical images such as CT and MRI datasets.

The image you see on the screen is a sample output of that software, showing
a CT Carotids Angiogram dataset taken as part of the stroke work-up process
to find potential occlusions in head and neck blood vessels.

Now I don't have any medical background but I loved working at Canon and on
this software. We had this sign in our lobby that read "What we do matters".
And it was true. We were literally saving lives. And I was fortunate to be
part of a small team of highly accomplished software engineers in charge of
improving the quality of our overall codebase, maintaining our core libraries
and the lower-level components of our software such as our data ingestion
pipeline.

This was challenging work. Because medical imaging datasets are a set 2D images
taken at different points of space and time. It takes significant engineering
work to construct the 3D object you see here that the user can interact
with.
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
Now medical images are supposed to conform to a DICOM standard that specifies
a non-proprietary image format that defines how to store and retrieve
information in each 2D image. This information includes voxel data and
other metadata (also known as tags) such as study date, image acquisition date,
patient orientation and other patient information like name and date of birth.
You can see five of these tags listed here.

But this standard is very old and competes in complexity with the C++ standard.
And because there is no enforcement mechanism, it is up to medical device
manufacturers to decide how closely they follow the standard and what tags
to populate. As a result, one may encounter real-world datasets in which
required tags are missing or inconsistent across images. For a mission-critical
medical software, this is a source of complexity and risk.
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
taking images were more primitive.

In contrast to modern imaging devices that take thousands of a high-quality
images with sub-millimeter precision, older machines could take as few as a
hundred sparse images and their robotic arm moved with invariable speed,
resulting in non-equidistant 2D images.

A medical software designed for use by surgeons and clinicians cannot afford
dismissing these subtle issues as they may lead to measurement discrepancies
that could be life-threatening.
-->

---
slide: Everything could go wrong
---

<div class="space-y-12">
  <div class="text-2xl px-16">
    <quote>The inherent complexity of the real world and the continuous change of requirements result in large and complex software systems that are costly and difficult to maintain.</quote>
  </div>
  <div class="italic text-center">
    <quote>"In a sufficiently long time horizon, all possible behaviors of your system will occur."</quote><span class="text-sm"> - Hyrum's law (modified)</span>
  </div>
</div>
