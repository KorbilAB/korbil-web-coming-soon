<template>
  <div class="schools-page  g-container">
    <div class="schools-page__content  g-container-inner-small">
      <h1 class="schools-page__title">
        {{ t('schools-page.title') }}
      </h1>

      <div class="schools-page__filters-wrapper">
        <Filter current-type-key="school"/>
      </div>

      <div class="schools-page__list">
        <SchoolPreview class="schools-page__card"/>
        <SchoolPreview class="schools-page__card"/>
        <SchoolPreview class="schools-page__card"/>
        <SchoolPreview class="schools-page__card"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSetBreadCrumbs } from '~/composables/useSetBreadCrumbs'
import Filter from '~/components/Filter.vue'

definePageMeta({
  layout: 'search',
})

useSetBreadCrumbs([{
  title: 'Search Results '
}])

const { t } = useI18n()
</script>

<style lang="scss">
.schools-page {

  &__content {
    padding: 24px 0 80px;
  }

  &__title {
    margin: 0 0 24px;

    font-size: 32px;
    font-weight: $w-Poppins-semi-bold;
  }

  &__filters-wrapper {
    margin-bottom: 24px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__card {
    padding: 24px;
    border-radius: $radius-xl;
    background: white;
    box-shadow: 0 8px 8px -4px rgba(10, 12, 18, 0.03), 0 20px 24px -4px rgba(10, 12, 18, 0.08);
  }
}
</style>