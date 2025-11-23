<script setup lang="ts">
import AppHeader from '~/shared/ui/layout/AppHeader.vue';
import AppFooter from '~/shared/ui/layout/AppFooter.vue';

</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <UPage>
      <NuxtPage />
    </UPage>
    <AppFooter />
  </UApp>
</template>
