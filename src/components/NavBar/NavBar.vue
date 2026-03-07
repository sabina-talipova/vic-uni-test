<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'backdrop-blur-md bg-[#ffffffb3] py-3 shadow-md'
        : isMobileMenuOpen
          ? 'bg-white py-3 shadow-md'
          : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <RouterLink to="/">
          <img
            v-if="isScrolled || isMobileMenuOpen"
            class="h-12 lg:h-16 w-auto"
            src="https://puaha.wgtn.ac.nz/logo-green-full.svg"
            alt="Victoria University of Wellington - Te Whare Wānanga o te Ūpoko o te Ika a Māui"
          />
          <img
            v-else
            class="h-12 lg:h-16 w-auto"
            src="https://www.wgtn.ac.nz/__data/assets/git_bridge/0005/1778018/dist/images/new/v2/logo-white-full.svg"
            alt="Victoria University of Wellington - Te Whare Wānanga o te Ūpoko o te Ika a Māui"
          />
        </RouterLink>
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="item in navLinks"
          :key="item.name"
          :to="item.href"
          :class="[
            route.path === item.href
              ? 'active'
              : 'hover:bg-[#004b34] hover:text-white hover:rounded-full',
            isScrolled ? 'text-[#004b34]' : 'text-white',
            'block px-5 py-2 text-base font-medium relative',
          ]"
          :aria-current="route.path === item.href ? 'page' : undefined"
          >{{ item.name }}</RouterLink
        >
        <button
          :class="[
            'px-5 py-2 rounded-full text-sm font-semibold transition-all',
            isScrolled
              ? 'bg-[#004b34] text-white hover:bg-indigo-700'
              : 'bg-white text-[#004b34] hover:bg-zinc-100',
          ]"
        >
          Apply Now
        </button>
      </nav>
      <button class="md:hidden" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <component
          :is="isMobileMenuOpen ? X : Menu"
          :class="isScrolled || isMobileMenuOpen ? 'text-zinc-900' : 'text-white'"
        />
      </button>
    </div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 md:hidden"
      >
        <div class="flex flex-col gap-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            @click="isMobileMenuOpen = false"
            class="text-lg font-medium text-zinc-900 hover:text-[#004b34]"
          >
            {{ link.name }}
          </RouterLink>
          <button class="w-full bg-[#004b34] text-white py-3 rounded-full font-semibold">
            Apply Now
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { GraduationCap, Menu, X } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our students', href: '/our-students' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="css">
.gradient-line {
  display: block;
  content: '';
  width: 100%;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--color-primary-green) 0%,
    var(--color-secondary-green) 77.11%,
    var(--color-light-green) 100%
  );
}
.page-title {
  font-size: 29px;
  font-weight: 600;
  display: inline-flex;
  color: var(--color-primary-green);
  letter-spacing: 0.2px;
  line-height: 1.08;
}

.divider-left {
  border-left: 2px solid var(--color-light-gray);
}
.active {
  font-weight: 700;
}

.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  background-color: var(--color-light-green);
  color: var(--color-primary-green);
  width: 100%;
  height: 2px;
  left: 0;
}
</style>
