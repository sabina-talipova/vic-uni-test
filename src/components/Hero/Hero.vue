<template>
  <section class="relative h-screen min-h-[700px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        :src="
          heroContent.image
            ? heroContent.image
            : 'https://www.wgtn.ac.nz/__data/assets/image/0009/2066580/students-lecture-2000x800.jpg'
        "
        alt="University Campus"
        class="w-full h-full object-cover"
        referrer-policy="no-referrer"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <Transition name="fade-up" appear>
        <div class="max-w-2xl text-white">
          <span
            class="inline-block px-4 py-1 rounded-full bg-[#004b34] border border-[#669787] text-white text-xs font-bold uppercase tracking-widest mb-6"
          >
            Est. 1897
          </span>

          <h1 class="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[0.9]">
            {{ heroContent.title }}
            <span class="italic font-normal text-[#fce500]">{{ heroContent.subtitle.main }}</span>
            {{ heroContent.subtitle.emphasis }}.
          </h1>

          <p class="text-lg md:text-xl text-zinc-200 mb-10 leading-relaxed max-w-lg">
            {{ heroContent.description }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <!-- <button
              class="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all group"
            >
              Explore Programs
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              class="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Virtual Tour
            </button> -->
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { Content } from '@/types'

defineProps<{
  heroContent: Content
}>()
</script>
<style lang="css">
.fade-up-enter-active {
  transition: all 0.5s ease-out;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
