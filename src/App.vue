<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/WebApp/SideBar.vue'
import NavBar from './components/WebApp/NavBar.vue'

// import NavBar from './components/NavBar/NavBar.vue'
// import Footer from './components/Footer/Footer.vue'
</script>

<!-- <template>
  <NavBar />
  <RouterView />
  <Footer />
</template> -->

<template>
  <div
    class="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950"
  >
    <NavBar />
    <SideBar />
    <main class="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
      <div
        class="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10"
      >
        <RouterView />
      </div>
    </main>
  </div>
</template>
