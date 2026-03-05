<template>
  <div class="flex flex-col xl:grid xl:grid-cols-8 gap-6 xl:gap-24 content-center mt-6 mb-6">
    <div :class="[position == 'left' ? 'order-last xl:order-first' : 'order-last', 'col-span-3']">
      <h1 class="max-w-3xl mb-8 mx-auto">
        <div class="leading-tight tracking-tight heading-1">
          <span class="text-[#0d4c38] heading-1">Bachelor of </span>
          <span class="heading-1">Engineering</span>
        </div>
        <div class="leading-tight tracking-tight heading-2">with Honours – BE(Hons)</div>
      </h1>
      <div class="max-w-3xl mx-auto lg:text-lg text-gray-600 mt-3 leading-normal font-light">
        The Bachelor of Engineering with Honours (BE(Hons)) is a four-year professional degree
        that’s accredited by Engineering New Zealand to internationally recognised benchmarks.
      </div>
      <RouterLink
        to="our-students"
        class="mt-12 flex justify-between items-center w-[200px] bg-gray-600 text-white font-bold text-lg hover:bg-gray-500 button-primary py-[5px] px-[12px]"
      >
        <span>Learn more</span>
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
      </RouterLink>
    </div>
    <div class="w-full flex flex-col relative self-start col-span-5">
      <div
        class="w-full h-[300px] banner-image xl:rounded-tl-[2vw] xl:rounded-br-[2vw]"
        :style="[
          position == 'left'
            ? 'background-image: url(https://www.wgtn.ac.nz/__data/assets/image/0009/2066580/students-lecture-2000x800.jpg);'
            : 'background-image: url(https://www.wgtn.ac.nz/__data/assets/image/0015/2082003/varieties/ls_medium.jpg)',
        ]"
      ></div>
      <div
        :class="[
          position == 'left' ? 'xl:-left-12' : 'xl:-right-12',
          'flex-1 relative xl:-bottom-12 xl:absolute bg-[#0d4c38] p-6 xl:w-[500px] flex flex-col justify-between xl:rounded-tl-[2vw] xl:rounded-br-[2vw]',
        ]"
      >
        <div class="banner-title">
          <h2>Current students</h2>
        </div>
        <div class="banner-text">
          <p>Find information and resources to support you throughout your studies.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  position?: string
}>()
</script>
<style lang="css">
.banner-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.banner-title h2 {
  color: var(--vt-c-white);
  font-size: 32px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 700;
  position: relative;
}
.banner-title h2::after {
  content: '';
  bottom: 0;
  left: 0;
  background-color: var(--color-yellow);
  width: 50px;
  height: 5px;
  position: absolute;
}
.banner-text {
  margin-top: 20px;
  color: var(--vt-c-white);
}
.heading-1 {
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 1.15;
}
.heading-2 {
  margin-top: 2px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
}

@media screen and (max-width: 1440px) {
  .heading-1 {
    font-size: 42px;
  }
  .heading-2 {
    font-size: 20px;
  }
}
</style>
