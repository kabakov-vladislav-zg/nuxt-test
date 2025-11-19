<script setup lang="ts">
import { usePostsStore } from '~/entities/posts';
import { usePagination } from '~/shared/model/usePagination';
import AppPagination from '~/shared/ui/AppPagination.vue';

const store = usePostsStore();
callOnce(store.fetchPosts);
const itemsPerPage = 8;
const { page, currentList } = usePagination(() => store.postsList, itemsPerPage);
</script>

<template>
  <UContainer class="mt-10">
    <AppPagination
      v-model:page="page"
      :items-per-page="itemsPerPage"
      :total="store.postsList.length"
    />
    <pre>
      {{ currentList }}
    </pre>
  </UContainer>
</template>