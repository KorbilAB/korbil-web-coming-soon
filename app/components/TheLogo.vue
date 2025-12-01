<template>
  <NuxtLinkLocale
      to="/"
      aria-label="Go to homepage – Korbil"
      class="the-logo"
  >
    <img
        :src="color === 'white' ? '/logo-white.svg' : '/logo.svg'"
        alt="Korbil logo"
        class="the-logo__img"
    >
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
defineProps<{
  color?: 'white' | null
}>()
</script>

<style lang="scss">
.the-logo {
  display: flex;
  height: 32px;

  &__img {
    height: 100%;
  }
}
</style>