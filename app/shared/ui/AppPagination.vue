<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

defineProps<{
  to?: (page: number) => ButtonProps['to'],
  itemsPerPage?: number,
  total?: number,
}>()

const page = defineModel<number>('page')
</script>

<template>
  <UPagination
    v-model:page="page"
    :items-per-page="itemsPerPage"
    :total="total"
    :ui="{
        list: 'gap-2!',
        first: 'hidden',
        prev: 'hidden',
        last: 'hidden',
        next: 'p-2.5 *:size-6',
    }"
  >
    <template #item="{ item }">
      <UButton
        v-if="item.type === 'page'"
        color="neutral"
        :variant="page === item.value ? 'solid' : 'soft'"
        :label="String(item.value)"
        :to="to?.(item.value)"
        class="size-11 flex justify-center items-center text-base"
        square 
      />
    </template>
  </UPagination>
</template>