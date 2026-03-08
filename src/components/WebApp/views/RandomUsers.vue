<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UserCard from '@/components/WebApp/UserCard.vue'
import UserModal from '@/components/WebApp/UserModal.vue'

import { useUserStore } from '../../../stores/users'
import Loader from '@/components/Loader.vue'
import { useRoute } from 'vue-router'

const users = useUserStore()
const isModalOpen = ref(false)
const selectedUser = ref(null)

const route = useRoute()

onMounted(() => {
  if (users.length === 0) users.getData()
})

const getNewUsers = () => {
  users.getData()
}

const handleOpenModal = (userData: any) => {
  selectedUser.value = userData
  isModalOpen.value = true
}
</script>
<template>
  <div class="mx-auto max-w-6xl">
    <div class="flex items-end justify-between gap-4">
      <h1 class="text-3xl/8 font-semibold text-zinc-950 sm:text-xl/8">
        {{ route.name }}
      </h1>
      <button
        @click="getNewUsers"
        class="flex justify-between items-center w-[180px] bg-[#0d4c38] text-white font-bold text-sm hover:bg-[#669787] py-[10px] px-[10px] rounded-[10px]"
      >
        <span v-if="users.loading"><Loader /></span>
        <span v-else> Load more </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </span>
      </button>
    </div>
    <hr class="w-full border-t-0 border-b-1 border-zinc-950/10 py-3" />
    <div class="flex items-end justify-between gap-4 pt-12">Loaded: {{ users.length }}</div>
    <div class="flow-root">
      <div
        class="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)] -mx-(--gutter) overflow-x-auto whitespace-nowrap"
      >
        <div class="inline-block min-w-full align-middle sm:px-(--gutter)">
          <table class="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
            <thead class="text-zinc-500 dark:text-zinc-400">
              <tr class="">
                <th
                  class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                ></th>
                <th
                  class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                >
                  Name
                </th>
                <th
                  class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                >
                  Location
                </th>
                <th
                  class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                >
                  Email
                </th>
                <th
                  class="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                >
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <UserCard
                v-for="person in users.rawUsers"
                :key="person.email"
                :person="person"
                @open="handleOpenModal"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <UserModal :isOpen="isModalOpen" :person="selectedUser" @close="isModalOpen = false" />
  </div>
</template>
