<template>
  <li
    class="grid grid-cols-1 gap-2 justify-items-center border border-gray-100 rounded-md shadow-md hover:shadow-xl p-12"
  >
    <div class="w-32 mx-auto">
      <div
        class="block focus:outline-none focus:ring focus:ring-black/20 focus:border-black rounded-full transition-all shadow-gray-300/20 shadow-lg border hover:shadow-xl"
      >
        <div class="rounded-full">
          <div class="aspect-square bg-gray-200 relative overflow-hidden rounded-full">
            <img
              loading="lazy"
              :alt="`${person?.name?.first} ${person?.name?.last}` || 'user'"
              :src="person?.image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <h3 class="font-bold text-lg tracking-tight">
        <span>
          {{ person?.name?.title }}
          {{ person?.name?.first }}
          {{ person?.name?.last }}
        </span>
      </h3>
      <p class="">{{ person?.city || 'Unknown' }} - {{ person?.country || 'Unknown' }}</p>
      <a class="text-sm hover:underline flex flex-row gap-3" :href="`mailto:${person?.email}`">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </span>
        <span>{{ person?.email }}</span>
      </a>
    </div>
  </li>
</template>
<script setup lang="ts">
import type { Person } from '@/types'

defineProps<{
  person?: Person
}>()
</script>
