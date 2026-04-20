<script setup lang="ts">
const pageTitle = 'Home'
const pageLead = 'Willkommen auf der Startseite dieser Vue-Anwendung.'
</script>

<template>
  <section>
    <h1 class="h3 mb-3">{{ pageTitle }}</h1>
    <p class="mb-0">
      {{ pageLead }}
    </p>
  </section>
</template>
