<script setup lang="ts">
import AppLogo from "./AppLogo.vue";
import { ButtonLanguage } from "~/features/language-menu";

const route = useRoute()

const items = computed(() => [
  {
    label: 'Works',
    to: '/works',
    active: route.path.startsWith('/docs')
  },
  {
    label: 'About',
    to: '/about'
  },
])
</script>

<template>
  <UHeader
    :ui="{
      right: 'lg:hidden'
    }"
  >
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="mr-22!"
    />
    <ButtonLanguage />
    <UButton
      label="Let’s work"
      color="neutral"
      class="text-xl px-8! py-4! rounded-full! ml-4!"
      to="/"
    />
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>