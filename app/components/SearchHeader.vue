<template>
  <div class="search-header  g-container">
    <div class="search-header__content  g-container-inner-small">
      <NuxtLinkLocale
          to="/"
          class="search-header__btn"
      >
        <IconArrowLongRight style="transform: rotate(180deg)"/>
      </NuxtLinkLocale>

      <BreadCrumbs
          :items="breadcrumbsStore.items"
          class="search-header__breadcrumbs"
      />

      <NuxtLinkLocale
          to="/"
          class="search-header__btn"
      >
        <IconClose/>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowLongRight from '~/components/icons/IconArrowLongRight.vue'
import IconClose from '~/components/icons/IconClose.vue'
import { useBreadcrumbsStore } from '~/stores/breadcrumbs'

const breadcrumbsStore = useBreadcrumbsStore()

// preventing ssr warn
await useAsyncData(async () => {
  return true
})
</script>

<style lang="scss">
.search-header {
  background-color: white;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 0;
  }

  &__btn {
    @include reset-button;
    flex-shrink: 0;
    cursor: pointer;

    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFEEEE;
    border-radius: 50%;

    color: #626F86;

    transition: $time;

    & svg {
      width: 20px;
      height: 20px;
    }

    @include hover {
      background-color: $c-teal-lighter;
    }
  }

  &__breadcrumbs {
    width: 50%;
    flex-grow: 1;
  }
}
</style>