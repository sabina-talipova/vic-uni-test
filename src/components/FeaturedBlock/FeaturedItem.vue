<script setup lang="ts">
defineProps<{
  item: {
    title: string
    description: string
    link: string
    buttonText: string
    image: string
    bannerTitle: string
    bannerText: string
  }
}>()
</script>

<template>
  <div class="text-center space-y-4">
    <div class="w-16 h-16 bg-[#99b9af] rounded-[1rem] flex items-center justify-center mx-auto">
      <svg
        class="h-7 w-7 text-slate-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>

    <h3 class="font-bold text-slate-900 text-lg lg:text-xl">{{ item.title }}</h3>

    <p class="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
      {{ item.description }}
    </p>
  </div>
</template>
