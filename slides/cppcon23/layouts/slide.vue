<script setup>
defineProps(['section', 'slide']);
</script>

<template>
  <div class="slidev-layout default">
    <div class="min-h-full flex flex-col">
      <div class="space-y-1">
        <div class="text-sm">{{ section }}</div>
        <div class="text-xl font-600">{{ slide }}</div>
      </div>
      <div class="flex-1 grid content-center">
        <slot />
      </div>
    </div>
  </div>
</template>
