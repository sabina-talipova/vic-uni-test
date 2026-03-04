<script setup lang="ts">
import { onMounted } from 'vue'
import UserCard from '@/components/UserCard.vue'

import { useUserStore } from '../stores/users'

const users = useUserStore()

onMounted(() => {
  if (users.length === 0) users.getData()
})

const getNewUsers = () => {
  users.getData()
}
</script>

<template>
  <div class="flex flex-col justify-content-center mx-auto w-full py-12 px-6 sm:p-12 w-full">
    <div class="flex justify-center">
      <div class="col-span-12 lg:col-span-10 lg:col-start-2">
        <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UserCard
            v-for="person in users.rawUsers"
            :key="person.email"
            :person="person"
            @add="users.addItem(person)"
          />
        </ul>
      </div>
    </div>
    <div class="flex justify-center py-12">Loaded: {{ users.length }}</div>
    <div class="flex justify-center py-12">
      <button
        @click="getNewUsers"
        class="flex justify-center w-[200px] mb-24 bg-gray-600 text-white px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-gray-500"
      >
        Load more...
      </button>
    </div>
  </div>
</template>
