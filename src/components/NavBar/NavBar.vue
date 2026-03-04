<template>
  <header class="">
    <Disclosure
      as="nav"
      class="flex flex-col justify-content-center mx-auto w-full py-12 px-6 sm:p-12 w-full"
      v-slot="{ open }"
    >
      <div class="flex justify-center relative">
        <div class="flex h-16 items-center justify-between">
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
          <div
            class="flex flex-1 gap-6 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="https://puaha.wgtn.ac.nz/logo-green-full.svg"
                alt="Victoria University of Wellington - Te Whare Wānanga o te Ūpoko o te Ika a Māui"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4 gap-6">
                <div v-for="item in navigation" :key="item.name">
                  <RouterLink
                    :to="item.href"
                    :class="[
                      route.path === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-[#004b34] hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    ]"
                    :aria-current="route.path === item.href ? 'page' : undefined"
                    >{{ item.name }}</RouterLink
                  >
                </div>
              </div>
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
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
              :aria-current="route.path === item.href ? 'page' : undefined"
              >{{ item.name }}</RouterLink
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our students', href: '/random-users' },
]
</script>
