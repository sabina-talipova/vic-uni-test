<template>
  <tr
    class="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/2.5 hover:bg-zinc-950/2.5 dark:hover:bg-white/2.5 cursor-pointer"
    @click="emit('open', person)"
  >
    <td
      class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
    >
      <div class="flex items-center gap-2">
        <span
          data-slot="avatar"
          class="size-6 inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-full *:rounded-full"
        >
          <img
            loading="lazy"
            :alt="`${person?.name?.first} ${person?.name?.last}` || 'user'"
            :src="person?.image"
          />
        </span>
      </div>
    </td>
    <td
      class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
    >
      <span>
        {{ person?.name?.title }}
        {{ person?.name?.first }}
        {{ person?.name?.last }}
      </span>
    </td>
    <td
      class="text-zinc-500 relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
    >
      {{ person?.city || 'Unknown' }} - {{ person?.country || 'Unknown' }}
    </td>
    <td
      class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
    >
      {{ person?.email }}
    </td>
    <td
      class="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
    >
      <div class="flex items-center gap-2">
        <span>{{ person?.phone }}</span>
      </div>
    </td>
  </tr>
</template>
<script setup lang="ts">
import type { Person } from '@/types'

defineProps<{
  person?: Person
}>()

const emit = defineEmits(['open'])
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
