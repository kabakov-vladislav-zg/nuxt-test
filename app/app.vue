<script setup lang="ts">
import AppHeader from '~/shared/ui/layout/AppHeader.vue';

</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <UPage>
      <NuxtPage />
    </UPage>
  </UApp>
</template>
