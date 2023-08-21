<script setup>
defineProps(['title', 'chapter']);
</script>

<template>
  <div class="space-y-1">
    <div class="text-sm">{{ chapter }}</div>
    <div class="text-xl font-600">{{ title }}</div>
  </div>
</template>
