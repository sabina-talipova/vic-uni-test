<script setup lang="ts">
import FeaturedBlock from '@/components/FeaturedBlock/FeaturedBlock.vue'
import HeroBlock from '@/components/HeroBlock/HeroBlock.vue'
</script>

<template>
  <main
    class="flex flex-col justify-center px-6 md:mx-auto md:max-w-2/3 w-full mt-6 mb-6 min-h-screen"
  >
    <HeroBlock />
    <FeaturedBlock />
    <HeroBlock position="left" />
  </main>
</template>
