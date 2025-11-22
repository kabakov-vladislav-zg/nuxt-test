<script setup lang="ts">
import { usePostsStore, PostsItem } from '~/entities/posts';
import { usePagination } from '~/shared/model/usePagination';
import AppPagination from '~/shared/ui/AppPagination.vue';

const store = usePostsStore();

await useAsyncData(
  'posts',
  async () => {
    return store.fetchPosts()
  },
);

const itemsPerPage = 8;
const { page, currentList } = usePagination(() => store.postsList, itemsPerPage);
</script>

<template>
  <UBlogPosts>
    <PostsItem
      v-for="post in currentList"
      :key="post.createdAt"
      :post="post"
      to="/1"
    />
  </UBlogPosts> 
  <AppPagination 
    v-model:page="page"
    :items-per-page="itemsPerPage"
    :total="store.postsList.length"
  />
</template>