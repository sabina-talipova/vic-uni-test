<script setup lang="ts">
import FeaturedItem from './FeaturedItem.vue'

const items = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed pulvinar nibh. Proin in erat orci. ',
    link: '/our-students',
    buttonText: 'Learn more',
    image: 'https://www.wgtn.ac.nz',
    bannerTitle: 'Current students',
    bannerText: 'Find information and resources to support you throughout your studies.',
  },
  {
    title: 'Donec elit tortor, accumsan ut lacus ',
    description:
      'Donec elit tortor, accumsan ut lacus a, tristique gravida elit. Nam semper nulla ligula. ',
    link: '/our-students',
    buttonText: 'Learn more',
    image: 'https://www.wgtn.ac.nz',
    bannerTitle: 'Current students',
    bannerText: 'Find information and resources to support you throughout your studies.',
  },
  {
    title: 'Mauris gravida erat non ante vehicula',
    description:
      'Mauris gravida erat non ante vehicula, gravida auctor sem accumsan. Sed id nisl quis magna luctus interdum. In nec commodo ex.',
    link: '/our-students',
    buttonText: 'Learn more',
    image: 'https://www.wgtn.ac.nz',
    bannerTitle: 'Current students',
    bannerText: 'Find information and resources to support you throughout your studies.',
  },
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center my-16">
      <h2 class="text-3xl lg:text-4xl font-black text-slate-900 mb-8">Our Core Values</h2>
    </div>
    <div class="flex flex-col xl:flex-row gap-6 xl:gap-24 content-center my-24">
      <FeaturedItem v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>
