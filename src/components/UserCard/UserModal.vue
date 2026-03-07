<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        class="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm animate-backdrop-in"
        @click="emit('close')"
      ></div>
      <div
        class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-modal-in"
      >
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-zinc-900"
        >
          <X class="w-5 h-5" />
        </button>
        <div class="p-6">
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
          <button
            class="w-full mt-8 py-3 bg-[#0d4c38] text-white rounded-full font-semibold hover:bg-zinc-800 transition-all"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { X, Mail, MapPin, Calendar } from 'lucide-vue-next'
import type { Person } from '@/types'

defineProps<{
  isOpen: Boolean
  person?: Person | null
}>()

const emit = defineEmits(['close'])
</script>
