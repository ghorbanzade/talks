<template>
  <footer class="absolute bottom-0 py-4 px-8 w-full">
    <div class="flex justify-between items-center text-blue-400 text-xs font-medium">
      <a href="https://twitter.com/heypejman" target="_blank" title="Pejman on Twitter">
        @heypejman
      </a>
      <div v-if="$slidev.nav.currentLayout !== 'cover'">
          {{ $slidev.nav.currentPage }}
      </div>
      <a href="https://touca.io" target="_blank" title="Touca Website">
        touca.io
      </a>
    </div>
  </footer>
</template>
