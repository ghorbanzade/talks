---
theme: seriph
class: ''
highlighter: prism
lineNumbers: false
info:
  Building an Extensible Type Serialization System using Partial Template
  Specialization
drawings:
  persist: false
download: 'https://touca.io/talks/cppcon21/slides-cppcon21-pejman.pdf'
layout: image
image: ./public/img/cppcon-cover.png
---

---
layout: cover
background:
---

<p class="text-left text-sky-500 w-4/5 mx-auto invisible">.</p>
<div class="space-y-12">
  <h1>Building an Extensible Type Serialization<br /> System using Partial Template Specialization</h1>
  <div class="justify-between flex w-4/5 mx-auto">
    <div class="w-40"><img src="/img/cppcon-logo.png" /></div>
    <div class="w-1/2 text-right">
      <div class="font-600 p-0 m-0 text-2xl">Pejman Ghorbanzade</div>
      <div class="font-400 text-md text-yellow-500">pejman@touca.io</div>
    </div>
  </div>
</div>

---
layout: cover
background:
---

<p class="text-left text-sky-500 w-4/5 mx-auto">Or...</p>
<div class="space-y-12">
  <h1>A Practical Review of Approaches to<br /> Designing Extension Points in C++</h1>
  <div class="justify-between flex w-4/5 mx-auto">
    <div class="w-40"><img src="/img/cppcon-logo.png" /></div>
    <div class="w-1/2 text-right">
      <div class="font-600 p-0 m-0 text-2xl">Pejman Ghorbanzade</div>
      <div class="font-400 text-md text-yellow-500">pejman@touca.io</div>
    </div>
  </div>
</div>

---

<Slide chapter="Intro" title="This talk will not include...">

- An exhaustive tutorial about building serialization libraries
- An exhaustive tutorial about partial template specialization
- A deep-dive into generic programming
- An endorsement of any one method for creating extension points

</Slide>

---

<Slide chapter="Intro" title="This talk attempts to...">

- Review language features for building extensible libraries
- Showcase a real-world library with an extensible type system
- Make you excited about the new and upcoming language features

</Slide>

---
src: ./pages/01_motivation.md
---

---
src: ./pages/02_basics.md
---

---
src: ./pages/03_practical_example.md
---

---
src: ./pages/04_concepts.md
---

---
src: ./pages/05_adl.md
---
