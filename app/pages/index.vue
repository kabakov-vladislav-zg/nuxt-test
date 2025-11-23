<script setup lang="ts">
import { PostsList } from '~/widgets/posts';

const route = useRoute();
const page = computed(() => {
  const { page } = route.query;
  return Number(page) || 1;
});
function to(page: number) {
  return page > 1
    ? `/?page=${page}`
    : '/'
}
</script>

<template>
  <UContainer class="mt-10">
    <UPageHeader title="Articles" />
    <UPageBody>
      <PostsList :page="page" :to="to" />
    </UPageBody>
  </UContainer>
</template>