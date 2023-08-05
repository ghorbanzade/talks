<template>
  <footer class="absolute bottom-0 py-4 px-8 w-full">
    <div class="flex justify-between items-center text-blue-400 text-sm font-medium">
      <a href="mailto:pejman@touca.io" target="_blank" title="Pejman Ghorbanzade">
        pejman@touca.io
      </a>
      <div v-if="$slidev.nav.currentLayout !== 'cover'">
          {{ $slidev.nav.currentPage }}
      </div>
    </div>
  </footer>
</template>
