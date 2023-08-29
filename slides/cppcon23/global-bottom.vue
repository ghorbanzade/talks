<template>
  <footer class="absolute bottom-0 py-4 px-14 w-full">
    <div
      class="min-h-6 items-center grid grid-cols-3 text-sm font-medium dark:text-sky-400"
    >
      <div />
      <div class="text-center">
        <span v-if="$slidev.nav.currentLayout !== 'cover'">
          {{ $slidev.nav.currentPage }}
        </span>
      </div>
      <div class="text-xs text-right">
        <a
          v-if="$slidev.nav.currentLayout !== 'cover'"
          href="https://aurora.tech"
          target="_blank"
          title="Aurora Innovation"
        >
          Aurora Innovation &copy; 2023
        </a>
      </div>
    </div>
  </footer>
</template>
