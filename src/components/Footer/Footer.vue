<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const linkGroups = [
  {
    title: 'University',
    links: ['About Us', 'Leadership', 'History', 'Careers', 'News'],
  },
  {
    title: 'Academics',
    links: ['Programs', 'Faculties', 'Library', 'Research', 'Online Learning'],
  },
  {
    title: 'Resources',
    links: ['Student Portal', 'Alumni', 'Campus Map', 'Contact', 'Safety'],
  },
]
</script>

<template>
  <footer class="bg-zinc-900 text-zinc-400 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="flex flex-col gap-4 items-start">
          <img
            class="h-12"
            src="https://www.wgtn.ac.nz/__data/assets/git_bridge/0005/1778018/dist/images/new/v2/logo-white-full.svg"
            alt="Te Heranga Waka – Wellington University logo"
          />
          <p class="text-sm leading-relaxed max-w-xs">
            New Zealand’s number one university for intensity of high-quality research and
            consistently rank among the world’s best universities.
          </p>
        </div>
        <div v-for="group in linkGroups" :key="group.title">
          <h4 class="text-white font-semibold mb-6">{{ group.title }}</h4>
          <ul class="space-y-4">
            <li v-for="link in group.links" :key="link">
              <a href="#" class="text-sm hover:text-white transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div class="text-xs">
          Copyright © {{ currentYear }} Victoria University of Wellington, New Zealand
        </div>

        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-white transition-colors"><Facebook :size="18" /></a>
          <a href="#" class="hover:text-white transition-colors"><Twitter :size="18" /></a>
          <a href="#" class="hover:text-white transition-colors"><Instagram :size="18" /></a>
          <a href="#" class="hover:text-white transition-colors"><Linkedin :size="18" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
