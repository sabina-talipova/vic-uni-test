<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import MobileNavBar from './MobileNavBar.vue'

const isMobileOpen = ref(false)

const user = {
  name: 'Erica',
  avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
}
</script>

<template>
  <header class="flex flex-col relative h-12">
    <div class="flex flex-row items-center content-center justify-between px-4 lg:hidden">
      <div class="py-2.5">
        <span class="relative">
          <button
            v-if="isMobileOpen"
            @click="isMobileOpen = !isMobileOpen"
            aria-label="Open navigation"
            type="button"
            class="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 dark:text-white hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
          <button
            v-else
            @click="isMobileOpen = !isMobileOpen"
            aria-label="Open navigation"
            type="button"
            class="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 dark:text-white hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors"
          >
            <Menu class="w-5 h-5" />
          </button>
        </span>
      </div>
      <div class="">
        <button class="">
          <RouterLink to="/">
            <img
              class="h-12 py-3"
              src="https://puaha.wgtn.ac.nz/logo-green-full.svg"
              alt="Victoria University of Wellington - Te Whare Wānanga o te Ūpoko o te Ika a Māui"
            />
          </RouterLink>
        </button>
      </div>
    </div>
    <MobileNavBar :isOpen="isMobileOpen" @close="isMobileOpen = false" />
  </header>
</template>
