<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';
import { usePostsStore, PostsItem } from '~/entities/posts';
import { usePagination } from '~/shared/model/usePagination';
import AppPagination from '~/shared/ui/AppPagination.vue';

const { page, to } = defineProps<{
  page: number,
  to: (page: number) => ButtonProps['to'],
}>();

const itemsPerPage = 8;
const store = usePostsStore();
const { status, pending } = await useAsyncData(
  'posts',
  async () => {
    return store.fetchPosts()
  },
  {
    lazy: true,
  }
);

const list = usePagination({
  page: () => page,
  list: () => store.postsList,
  itemsPerPage
});

const { y } = useWindowScroll({ behavior: 'smooth' })
watch(() => page, () => {
  y.value = 0;
})
</script>

<template>
  <UBlogPosts v-if="pending">
    <div
      v-for="n in itemsPerPage"
      :key="n"
      class="pt-6!"
    >
      <USkeleton
        class="aspect-13/21"
      />
    </div>
  </UBlogPosts>
  <div v-else-if="status === 'error'">
    Oooops... Something went wrong
  </div>
  <template v-else>
    <UBlogPosts>
      <PostsItem
        v-for="post in list"
        :key="post.createdAt"
        :post="post"
        to="/1"
      />
    </UBlogPosts> 
    <AppPagination 
      :page="page"
      :items-per-page="itemsPerPage"
      :total="store.postsList.length"
      :to="to"
    />
  </template>
</template>