<template>
  <div class="risk-courses-page  g-container">
    <div class="risk-courses-page__content  g-container-inner-small">
      <h1 class="risk-courses-page__title">
        {{ t('risk-courses-page.title') }}
      </h1>

      <div class="risk-courses-page__filters-wrapper">
        <Filter current-type-key="risk-course"/>
      </div>

      <div class="risk-courses-page__list">
        <CoursePreview
            class="risk-courses-page__card"
            @open="selectedCourse = {}"
        />
        <CoursePreview
            class="risk-courses-page__card"
            @open="selectedCourse = {}"
        />
        <CoursePreview
            class="risk-courses-page__card"
            @open="selectedCourse = {}"
        />
        <CoursePreview
            class="risk-courses-page__card"
            @open="selectedCourse = {}"
        />
      </div>
    </div>

    <BaseModal
        :model-value="!!selectedCourse && !selectedSession"
        @close="selectedCourse = null"
    >
      <CourseSessionsList @select="selectedSession = $event"/>
    </BaseModal>

    <BaseModal
        :model-value="!!selectedSession"
        @close="selectedCourse = null, selectedSession = null"
    >
      <CourseSessionDetails
          @back="selectedSession = null"
      />
    </BaseModal>
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

const selectedCourse = ref<any>(null)
const selectedSession = ref<any>(null)
</script>

<style lang="scss">
.risk-courses-page {

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