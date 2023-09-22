---
slide: Agenda
section: ''
---

<Agenda section="tooling" />

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

---
slide: Self-hosting
---

<div class="grid grid-cols-3 gap-6">
  <div class="grid place-content-around space-y-4">
    <div class="flex items-center justify-center space-x-1">
      <div class="text-xl">github.com</div>
      <div>/</div>
      <div class="text-2xl font-bold">trytouca</div>
    </div>
    <div class="grid">
      <div class="font-mono wsl-card p-4">
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

---
slide: C++ SDK
---

<div class="grid grid-cols-2 gap-12">
  <div class="grid grid-cols-3 gap-2">
    <div class="wsl-card grid place-content-center"><div>GCC</div><div class="text-xs text-center">9.4.0</div></div>
    <div class="wsl-card grid place-content-center"><div>Clang</div><div class="text-xs text-center">11.0.0</div></div>
    <div class="wsl-card grid place-content-center"><div>MSVC</div><div class="text-xs text-center">1900</div></div>
    <div class="wsl-card grid place-content-center col-span-3">C++11 through C++20</div>
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
    <div class="text-right text-sm"><a href="https://touca.io/docs/sdk/installing" target="_blank" rel="noreferrer">https://touca.io/docs/sdk/installing</a></div>
  </div>
</div>

---
slide: Data Capturing
---

