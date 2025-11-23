<script setup lang="ts">
import { usePostsStore } from '~/entities/posts';
import logo from '~/shared/assets/img/logo.svg';

const route = useRoute();
const id = computed(() => {
  const { id } = route.params;
  return Number(id) || 1;
});
const store = usePostsStore();
const post = computed(() => store.post);
const { status, pending } = await useAsyncData(
  () => `post-${id.value}`,
  async () => {
    return store.fetchPostById(id.value)
  },
  { lazy: true }
);
</script>

<template>
  <UContainer class="mt-10">
    <UPageHeader :title="store.post?.title" />
    <UPageBody>
      <USkeleton
        v-if="pending"
        class="aspect-12/7"
      />
      <div v-else-if="status === 'error'">
        Oooops... Something went wrong
      </div>
      <template v-else-if="post">
        <div class="aspect-12/7 mt-8">
          <NuxtImg
            class="object-cover object-top w-full h-full"
            :src="post.image"
            :placeholder="logo"
            placeholder-class="object-contain! object-center! scale-50"
          />
        </div>
        <div class="mt-20!">
          About
        </div>
        <div class="mt-8 grid grid-cols-12">
          <div class="text-3xl/[1.2] col-span-12 lg:col-span-8">
            {{ post.description }}
          </div>
        </div>
      </template>
    </UPageBody>
  </UContainer>
</template>