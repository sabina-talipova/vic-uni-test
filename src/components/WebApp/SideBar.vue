<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { Home, User, Users, Settings } from 'lucide-vue-next'

const route = useRoute()

const navigation = [
  { name: 'Home', href: '/', icon: 'Home' },
  { name: 'Our students', href: '/our-students', icon: 'User' },
  { name: 'Our tutors', href: '/our-tutors', icon: 'Users' },
  { name: 'Settings', href: '/settings', icon: 'Settings' },
]

const icons = {
  Home,
  Settings,
  User,
  Users,
}
</script>

<style lang="css">
.active {
  font-weight: 700;
  background: var(--color-light-green-2);
  border-radius: 10px;
}
</style>

<template>
  <div class="fixed inset-y-0 left-0 w-64 max-lg:hidden">
    <nav class="flex h-full min-h-0 flex-col">
      <div
        class="flex flex-col border-b border-zinc-950/5 py-6 dark:border-white/5 [&[data-slot=section]+[data-slot=section]]:mt-2.5"
      >
        <span class="relative">
          <RouterLink to="/">
            <img
              class="h-4 lg:h-8 w-auto m-auto"
              src="https://puaha.wgtn.ac.nz/logo-green-full.svg"
              alt="Victoria University of Wellington - Te Whare Wānanga o te Ūpoko o te Ika a Māui"
            />
          </RouterLink>
        </span>
      </div>
      <div
        class="flex flex-1 flex-col overflow-y-auto p-4 [&[data-slot=section]+[data-slot=section]]:mt-8"
      >
        <div data-slot="section" class="flex flex-col gap-0.5">
          <span class="relative">
            <div v-for="item in navigation" :key="item.name">
              <RouterLink
                :to="item.href"
                :class="[
                  route.path === item.href
                    ? 'active'
                    : 'text-gray-600 hover:bg-white/5 hover:text-[#669787]',
                  'flex items-center w-full px-3 py-2 text-base font-medium relative',
                ]"
                :aria-current="route.path === item.href ? 'page' : undefined"
              >
                <component :is="icons[item.icon]" class="w-4 h-4 mr-2" />
                {{ item.name }}
              </RouterLink>
            </div>
          </span>
        </div>
      </div>
      <div
        class="max-lg:hidden flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&[data-slot=section]+[data-slot=section]]:mt-2.5"
      >
        <span class="relative">
          <span class="flex min-w-0 items-center gap-3">
            <span
              data-slot="avatar"
              class="size-10 inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-(--avatar-radius) *:rounded-(--avatar-radius)"
            >
              <img
                class="size-full"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt=""
              />
            </span>
            <span class="min-w-0">
              <span class="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                Test user
              </span>
              <span class="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                test-user@example.com
              </span>
            </span>
          </span>
        </span>
      </div>
    </nav>
  </div>
</template>
