<script setup lang="ts">
import FeaturedBlock from '@/components/FeaturedBlock/FeaturedBlock.vue'
import HeroBlock from '@/components/HeroBlock/HeroBlock.vue'
import Hero from '@/components/Hero/Hero.vue'
</script>

<template>
  <div>
    <Hero
      :heroContent="{
        title: 'Shape Your',
        subtitle: { main: 'Future', emphasis: 'Today' },
        description:
          'Join a community of innovators, thinkers, and leaders. Discover our world-class programs and vibrant campus life.',
      }"
    />
    <main
      class="flex flex-col justify-center px-6 md:mx-auto md:max-w-2/3 w-full mt-6 mb-6 min-h-screen"
    >
      <HeroBlock />
      <FeaturedBlock />
      <HeroBlock position="left" />
    </main>
  </div>
</template>
