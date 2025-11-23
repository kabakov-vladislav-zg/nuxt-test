<script setup lang="ts">
import type { Post } from '../index';
import logo from '~/shared/assets/img/logo.svg';

defineProps<{
  post: Post,
  to: string,
}>()

</script>

<template>
  <div class="flex flex-col flex-1 overflow-hidden! *:transform *:transition-transform *:duration-200 hover:*:-translate-y-6!">
    <UBlogPost
      :description="post.preview"
      :image="post.image"
      :to="to"
      variant="naked"
      :ui="{
        root: 'flex-1 -mb-6! rounded-none pt-6!',
        header: 'aspect-square rounded-none shadow-none',
        body: 'px-0! pb-3!',
        description: 'text-xl/[1.2] text-text'
      }"
    >
      <template #header>
        <NuxtImg
          class="object-cover object-top w-full h-full"
          :src="post.image"
          :placeholder="logo"
          placeholder-class="object-contain! object-center! scale-50"
        />
      </template>
      <template #footer>
        <div class="text-secondary text-xl/[1.2]">
          Read more
        </div>
      </template>
    </UBlogPost>
  </div>
</template>