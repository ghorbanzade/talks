---
slide: Agenda
section: ''
---

<Agenda section="demo" />

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

---
slide: Writing tests
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center gap-6">
    <div>Test your complex software workflows for any number of inputs by capturing values of variables and runtime of functions.</div>
    <div class="flex space-x-2">
      <img class="h-[3rem]" src="/images/icon-python.svg" />
      <img class="h-[3rem]" src="/images/icon-cpp.svg" />
      <img class="h-[3rem]" src="/images/icon-nodejs.svg" />
      <img class="h-[3rem]" src="/images/icon-java.svg" />
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
      <div class="font-mono text-sm wsl-card p-4">
        $ brew install touca<br />
        $ touca login
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

---
slide: Automating tests
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center gap-6">
    <div>
      Integrate your tests with the CI/CD pipeline to automate their
      execution and receive feedback when you need it.
    </div>
    <div class="flex space-x-2">
      <img class="h-[5rem] wsl-card" src="/images/icon-github-actions.svg" />
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


---
slide: Visualizing differences
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-12">
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

---
slide: Comparing images and videos
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <div>
      Shared test results with team members, visualize differences of any kind,
      collaborate in investigating regressions and managing baseline versions.
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
        <img src="/images/touca-feature-image-visualization.dark.jpg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-feature-image-visualization.dark.jpg" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>

---
slide: Finding performance regressions
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <div>
      Gain insights and analytics about how your software is evolving over time.
      Subscribe to any suite to get notified about regressions in any version.
    </div>
    <div class="flex space-x-2">
      <div class="wsl-card"><heroicons-light-bulb class="text-2xl" /></div>
      <div class="wsl-card"><heroicons-presentation-chart-line class="text-2xl" /></div>
    </div>
  </div>
  <div class="col-span-2 grid place-content-center">
    <LightOrDark>
      <template #dark>
        <img src="/images/touca-feature-metrics.dark.jpg" class="rounded-xl" />
      </template>
      <template #light>
        <img src="/images/touca-feature-metrics.dark.jpg" class="rounded-xl" />
      </template>
    </LightOrDark>
  </div>
</div>
