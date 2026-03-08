<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Home, User, Users, Settings } from 'lucide-vue-next'
const currentPath = ref('/')

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

defineProps<{
  isOpen: Boolean
}>()

const route = useRoute()

const emit = defineEmits(['close'])
</script>
<template>
  <div v-if="isOpen" class="absolute top-full left-0 right-0 bg-white p-6 md:hidden shadow-md">
    <nav class="flex h-full min-h-0 flex-col">
      <div class="flex flex-1 flex-col overflow-y-auto gap-0.5">
        <div v-for="item in navigation" :key="item.name" class="relative">
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
      </div>
    </nav>
  </div>
</template>
