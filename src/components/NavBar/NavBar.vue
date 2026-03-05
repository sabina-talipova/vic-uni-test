<template>
  <header class="">
    <Disclosure
      as="nav"
      class="flex flex-col justify-content-center mx-auto w-full w-full bg-[#f7f7f7] py-3"
      v-slot="{ open }"
    >
      <div class="flex flex-row sm:flex-col justify-center relative sm:mx-auto sm:max-w-2/3 w-full">
        <div class="flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="left-0 absolute inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray/5 hover:text-gray-300 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start pb-3">
          <div class="flex shrink-0 items-center pr-[16px]">
            <RouterLink to="/">
              <img
                class="h-12 lg:h-16 w-auto"
                src="https://puaha.wgtn.ac.nz/logo-green-full.svg"
                alt="Victoria University of Wellington - Te Whare Wānanga o te Ūpoko o te Ika a Māui"
              />
            </RouterLink>
          </div>
          <div class="hidden sm:flex flex-1 pl-[16px] divider-left">
            <span class="page-title items-center">
              {{ route.name }}
            </span>
          </div>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-4 gap-2">
            <div v-for="item in navigation" :key="item.name" class="flex mr-0">
              <RouterLink
                :to="item.href"
                :class="[
                  route.path === item.href
                    ? 'active'
                    : 'text-gray-600 hover:bg-[#004b34] hover:text-white',
                  'block px-3 py-2 text-base font-medium relative',
                ]"
                :aria-current="route.path === item.href ? 'page' : undefined"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <div v-for="item in navigation" :key="item.name">
            <RouterLink
              :to="item.href"
              :class="[
                route.path === item.href
                  ? 'active'
                  : 'text-gray-600 hover:bg-white/5 hover:text-white',
                'block px-3 py-2 text-base font-medium relative',
              ]"
              :aria-current="route.path === item.href ? 'page' : undefined"
              >{{ item.name }}</RouterLink
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <div class="gradient-line"></div>
  </header>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our students', href: '/our-students' },
]
</script>
<style lang="css">
.gradient-line {
  display: block;
  content: '';
  width: 100%;
  height: 6px;
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
