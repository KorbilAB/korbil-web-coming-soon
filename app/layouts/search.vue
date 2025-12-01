<template>
  <div class="search-layout">
    <SearchHeader class="page__header"/>
    <NuxtPage class="page__main"/>
    <TheFooter class="page__footer"/>
  </div>
</template>

<script setup lang="ts">
import { useCustomSeo } from '~/composables/useCustomSeo'

useCustomSeo()
</script>

<style lang="scss">
.search-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F4F4F4;

  &__main {
    flex-grow: 1;
  }
}
</style>