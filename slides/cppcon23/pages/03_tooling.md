---
slide: Agenda
section: ''
---

<Agenda section="tooling" />

---
slide: Installing Touca
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-center space-y-4">
    <!-- <div>
      Gain insights and analytics about how your software is evolving over time.
      Subscribe to any suite to get notified about regressions in any version.
    </div>
    <div class="flex space-x-2">
      <div class="wsl-card"><heroicons-light-bulb class="text-2xl" /></div>
      <div class="wsl-card"><heroicons-presentation-chart-line class="text-2xl" /></div>
    </div> -->
    <div>
      <div><img class="wsl-card h-[3rem]" src="/images/icon-github.svg" /></div>
      <div class="font-mono text-sm p-4">
        github.com/trytouca/trytouca
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
      <div class="font-mono text-sm wsl-card p-4 col-span-3">
        $ brew install touca<br />
        $ touca server install
      </div>
      <div><img class="wsl-card" src="/images/icon-kubernetes.svg" /></div>
      <div><img class="wsl-card" src="/images/icon-docker.svg" /></div>
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
