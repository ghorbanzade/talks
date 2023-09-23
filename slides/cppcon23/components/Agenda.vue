<script setup lang="ts">
const props = defineProps({ section: String });
const sections = {
  intro: 'What is continuous regression testing',
  demo: 'How does regression testing work in practice',
  tooling: 'How to build a regression testing system',
  beyond: 'Going beyond finding behavioral regressions',
  practice: 'How to use regression testing effectively',
  safety: 'Establishing a culture of safety at scale'
};
</script>

<template>
  <ul>
    <li v-for="[key, section] in Object.entries(sections)">
      <span v-bind:class="{ 'wsl-highlight': key === props.section }">
        {{ section }}
      </span>
    </li>
  </ul>
</template>
