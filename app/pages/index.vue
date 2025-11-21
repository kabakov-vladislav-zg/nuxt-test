<script setup lang="ts">
import { PostsList } from '~/widgets/posts';
</script>

<template>
  <UContainer class="mt-10">
    <UPageHeader title="Articles" />
    <UPageBody>
      <PostsList />
    </UPageBody>
  </UContainer>
</template>