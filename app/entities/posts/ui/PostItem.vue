<script setup lang="ts">
import type { Post } from '../index';
import logo from '~/shared/assets/img/logo.svg';

defineProps<{
  post: Post,
  to: string,
}>()

</script>

<template>
  <UBlogPost
    :description="post.preview"
    :image="post.image"
    :to="to"
    variant="naked"
    :ui="{
      root: 'rounded-none pt-6! overflow-hidden!',
      header: 'aspect-square rounded-none shadow-none transform transition-transform duration-200 group-hover/blog-post:-translate-y-6!',
      body: 'px-0! pb-3! transform transition-transform duration-200 group-hover/blog-post:-translate-y-6!',
      footer: 'absolute top-full start-0 end-0 transform transition-transform duration-200 group-hover/blog-post:-translate-y-6!',
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
</template>