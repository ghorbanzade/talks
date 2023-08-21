<script setup>
defineProps(['title', 'chapter']);
</script>

<template>
  <div class="min-h-full flex flex-col">
    <SlideTitle :title="title" :chapter="chapter"></SlideTitle>
    <div class="flex-1 grid content-center">
      <slot />
    </div>
  </div>
</template>
