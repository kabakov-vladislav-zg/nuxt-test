<script setup lang="ts">

</script>

<template>
  <footer class="bg-secondary pt-35">
    <UContainer class="lg:grid grid-cols-12 overflow-hidden">
      <div class="pb-14 col-span-12">
        Is there a project?
      </div>
      <div class="pb-35 col-span-8">
        <ULink to="/" raw class="text-9xl underline decoration-1 underline-offset-16">
          Let’s work<br> together
        </ULink>
      </div>
      <div class="pb-35 col-span-4">
        <div class="space-y-9 w-40">
          <div>
            <div class="mb-3">For all questions</div>
            <div class="mb-1">+7 (920) 278—00—68</div>
            <div class="">qtim@agency.com</div>
          </div>
          <div>
            <div class="mb-3">Office in Russia</div>
            <div class="mb-2">139 Ruben Station Lake Drew, NM 52678</div>
            <UButton
              color="neutral"
              class="size-8 rounded-full! flex justify-center items-center"
              to="/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M6.69995 9.69995L9.69995 0.699951L0.699951 3.69995L4.44995 5.94995L6.69995 9.69995Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </UButton>
          </div>
          <div>
            <div class="mb-3">Office in Dubai</div>
            <div class="mb-2">139 Ruben Station Lake Drew, NM 52678</div>
            <UButton
              color="neutral"
              class="size-8 rounded-full! flex justify-center items-center"
              to="/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M6.69995 9.69995L9.69995 0.699951L0.699951 3.69995L4.44995 5.94995L6.69995 9.69995Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </UButton>
          </div>
        </div>
      </div>
      <div class="flex gap-8 col-span-3 justify-start items-end pb-8">
        <ULink to="/" raw class="underline">
          Facebook
        </ULink>
        <ULink to="/" raw class="underline">
          Instagram
        </ULink>
        <ULink to="/" raw class="underline">
          Telegram
        </ULink>
      </div>
      <div class="flex gap-8 col-span-3 order-1 justify-start items-end pb-8">
        <ULink to="/" raw class="underline">
          Behance
        </ULink>
        <ULink to="/" raw class="underline">
          Linkedn
        </ULink>
        <ULink to="/" raw class="underline">
          Privacy Policy
        </ULink>
      </div>
      <div class="col-span-6 flex">
        <div class="w-full flex justify-center items-center">
          <UButton
            color="neutral"
            class="aspect-square size-90 -mb-45 rounded-full! flex justify-center items-center"
            to="/"
          >
            <div class="translate-y-[-50%] p-6 text-3xl">
              Go
            </div>
          </UButton>
        </div>
      </div>
    </UContainer>
  </footer>
</template>