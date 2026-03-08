<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main
    class="flex flex-row items-start justify-center px-6 md:mx-auto md:max-w-2/3 w-full mt-6 mb-6 min-h-screen"
  >
    You are on {{ route.name }} section
  </main>
</template>
