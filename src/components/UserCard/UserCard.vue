<template>
  <li
    class="flex flex-col xl:flex-wrap xl:flex-row gap-6 xl:gap-12 xl:items-center content-start border border-gray-100 hover:shadow-md p-6"
  >
    <div class="w-32 flex-none">
      <div
        class="block focus:outline-none transition-all shadow-gray-300/20 shadow-lg hover:shadow-xl rounded-full"
      >
        <div class="w-full">
          <div class="bg-gray-200 relative overflow-hidden rounded-full">
            <img
              loading="lazy"
              :alt="`${person?.name?.first} ${person?.name?.last}` || 'user'"
              :src="person?.image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="text-left flex-1">
      <h3 class="student_title">
        <span>
          {{ person?.name?.title }}
          {{ person?.name?.first }}
          {{ person?.name?.last }}
        </span>
      </h3>
      <p class="student_subtitle">
        {{ person?.city || 'Unknown' }} - {{ person?.country || 'Unknown' }}
      </p>
      <a
        class="text-sm hover:underline flex flex-row gap-3 highlight"
        :href="`mailto:${person?.email}`"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </span>
        <span class="email_block">{{ person?.email }}</span>
      </a>
      <a
        class="text-sm hover:underline flex flex-row gap-3 highlight"
        :href="`tel:${person?.phone}`"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone-icon lucide-phone"
          >
            <path
              d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
            />
          </svg>
        </span>
        <span>{{ person?.phone }}</span>
      </a>
    </div>
  </li>
</template>
<script setup lang="ts">
import type { Person } from '@/types'

defineProps<{
  person?: Person
}>()
</script>
<style lang="css">
.student_title span,
.student_subtitle {
  color: var(--color-primary-green);
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 12px;
}
.student_title span {
  font-size: 26px;
}
.student_subtitle {
  font-size: 16px;
}

.highlight {
  padding: 0.5rem 1rem;
  background-color: var(--color-light-green-2);
  color: var(--color-primary-green);
  width: fit-content;
  border-radius: 50px;
  align-items: center;
}
.highlight:not(:last-of-type) {
  margin-bottom: 6px;
}

.email_block {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (max-width: 425px) {
  .highlight {
    font-size: 12px;
  }
}
</style>
