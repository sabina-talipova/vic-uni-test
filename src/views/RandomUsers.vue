<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UserCard from '@/components/UserCard/UserCard.vue'
import UserModal from '@/components/UserCard/UserModal.vue'
import Hero from '@/components/Hero/Hero.vue'

import { useUserStore } from '../stores/users'
import Loader from '@/components/Loader.vue'
import type { Person } from '@/types'

const users = useUserStore()
const isModalOpen = ref(false)
const selectedUser = ref(null)

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
  font-size: 32px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 900;
  position: relative;
  text-transform: uppercase;
}
</style>

<template>
  <div class="bg-[#f3f7f5]">
    <Hero
      :heroContent="{
        title: 'Make Wellington',
        subtitle: { main: 'Your', emphasis: 'Campus' },
        description:
          'Join a community of innovators, thinkers, and leaders. Discover our world-class programs and vibrant campus life.',
        image: 'https://www.wgtn.ac.nz/__data/assets/image/0004/2331976/varieties/ls_medium.jpg',
      }"
    />
    <div
      class="flex flex-col justify-center relative px-6 md:mx-auto md:max-w-2/3 w-full min-h-screen"
    >
      <div class="text-center my-16">
        <h2 class="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 page-heading">Our Students</h2>
        <p class="text-zinc-500 max-w-2xl mx-auto text-lg">
          Meet the bright minds shaping the future. Our students come from diverse backgrounds and
          pursue excellence in every field.
        </p>
      </div>
      <div class="">
        <ul class="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-6 w-full sm:w-auto">
          <li
            v-if="users.loading && users.length == 0"
            v-for="value in 2"
            :key="value"
            class="h-24 grid grid-col-2 rounded-[2px] animate-gradient-move bg-gradient-to-r from-[#e6e6e6] via-[#f6f6f6] to-[a6a6a6S] bg-[length:200%_200%]"
          ></li>
          <UserCard
            v-else
            v-for="person in users.rawUsers"
            :key="person.email"
            :person="person"
            @open="handleOpenModal"
          />
        </ul>
      </div>
      <!-- <div class="flex justify-center pt-12">Loaded: {{ users.length }}</div> -->
      <div class="flex justify-center py-12">
        <button
          @click="getNewUsers"
          class="flex justify-between items-center w-[200px] mb-24 bg-gray-600 text-white font-bold text-lg hover:bg-gray-500 button-primary py-[10px] px-[20px] rounded-full"
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
    <UserModal :isOpen="isModalOpen" :person="selectedUser" @close="isModalOpen = false" />
  </div>
</template>
