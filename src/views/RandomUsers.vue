<script setup lang="ts">
import { onMounted } from 'vue'
import UserCard from '@/components/UserCard/UserCard.vue'

import { useUserStore } from '../stores/users'
import Loader from '@/components/Loader.vue'

const users = useUserStore()

onMounted(() => {
  if (users.length === 0) users.getData()
})

const getNewUsers = () => {
  users.getData()
}
</script>
<style lang="css">
.button-primary {
  background-color: #0d4c38;
  color: #fef9f0;
}
.button-primary:hover {
  background-color: #11664b;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0 1px 2px 0,
    rgba(60, 64, 67, 0.15) 0 1px 3px 1px;

  cursor: pointer;
}
.page-heading {
  color: var(--color-primary-green);
  font-size: 48px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 700;
  position: relative;
}
</style>

<template>
  <div
    class="flex flex-col justify-center relative px-6 sm:mx-auto sm:max-w-2/3 w-full mt-6 mb-6 min-h-screen"
  >
    <div class="text-left my-12">
      <h1 class="text-3xl lg:text-4xl font-black text-slate-900 page-heading">Our students</h1>
    </div>
    <div class="flex justify-center">
      <ul class="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-12 w-full sm:w-auto">
        <UserCard
          v-for="person in users.rawUsers"
          :key="person.email"
          :person="person"
          @add="users.addItem(person)"
        />
      </ul>
    </div>
    <!-- <div class="flex justify-center pt-12">Loaded: {{ users.length }}</div> -->
    <div class="flex justify-center py-12">
      <button
        @click="getNewUsers"
        class="flex justify-between items-center w-[200px] mb-24 bg-gray-600 text-white font-bold text-lg hover:bg-gray-500 button-primary py-[5px] px-[12px]"
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
  </div>
</template>
