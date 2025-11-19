<script setup lang="ts">
const page = defineModel<number>('page')
defineProps<{
  itemsPerPage?: number,
  total?: number,
}>()
</script>

<template>
  <UPagination v-model:page="page" :items-per-page="itemsPerPage" :total="total">
    <template #first>
      <div class="" />
    </template>
    <template #prev>
      <div class="" />
    </template>
    <template #last>
      <div class="" />
    </template>
  </UPagination>
</template>