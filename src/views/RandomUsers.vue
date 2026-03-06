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
  color: var(--color-yellow);
  font-size: 48px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 700;
  position: relative;
}
</style>

<template>
  <div
    class="flex flex-col justify-center relative px-6 md:mx-auto md:max-w-2/3 w-full mt-6 mb-6 min-h-screen"
  >
    <div class="w-full flex flex-col relative self-start col-span-5 mb-24">
      <div
        class="w-full h-[300px] banner-image md:rounded-tl-[2vw] md:rounded-br-[2vw]"
        style="
          background-image: url('https://www.wgtn.ac.nz/__data/assets/image/0015/2082003/varieties/ls_medium.jpg');
        "
      ></div>
      <div
        class="md:-right-12 flex-1 relative md:-bottom-12 md:absolute bg-[#0d4c38] p-6 md:w-[500px] flex flex-col justify-between md:rounded-tl-[2vw] md:rounded-br-[2vw]"
      >
        <div class="banner-title">
          <h1 class="text-3xl lg:text-4xl font-black text-slate-900 page-heading">Our students</h1>
        </div>
        <div class="banner-text">
          <p>Find information and resources to support you throughout your studies.</p>
        </div>
      </div>
    </div>
    <div class="">
      <ul class="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-6 w-full sm:w-auto">
        <UserCard v-for="person in users.rawUsers" :key="person.email" :person="person" />
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
</template>
