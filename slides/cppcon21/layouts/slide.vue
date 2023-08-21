<script setup>
defineProps(['section', 'slide']);
</script>

<template>
  <div class="slidev-layout default">
    <div class="min-h-full flex flex-col">
      <SlideTitle :title="slide" :chapter="section"></SlideTitle>
      <div class="flex-1 grid content-center">
        <slot />
      </div>
    </div>
  </div>
</template>
