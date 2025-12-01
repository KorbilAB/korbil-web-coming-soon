<template>
  <div class="page">
    <TheHeader class="page__header"/>
    <NuxtPage class="page__main"/>
    <TheFooter class="page__footer"/>
  </div>
</template>

<script setup lang="ts">
import { useCustomSeo } from '~/composables/useCustomSeo'

useCustomSeo()
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex-grow: 1;
  }
}
</style>