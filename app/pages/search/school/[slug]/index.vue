<template>
  <div class="school-main-page">
    <h2 class="school-main-page__section-title">
      {{ t('school-main-page.packages-title') }}
    </h2>

    <div class="school-main-page__packages-list">
      <SchoolPackagePreview salary="10%"/>
      <SchoolPackagePreview/>
      <SchoolPackagePreview/>
    </div>

    <h2 class="school-main-page__section-title">
      {{ t('school-main-page.group-lessons-title') }}
    </h2>

    <div class="school-main-page__group-lessons-list">
      <SchoolGroupLessonPreview/>
      <SchoolGroupLessonPreview salary="10%"/>
      <SchoolGroupLessonPreview/>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  scrollToTop: (to, from) => {
    return to.params.slag === from.params.slug
  }
})

const { t } = useI18n()
</script>

<style lang="scss">
.school-main-page {
  padding: 0 16px 24px;

  &__section-title {
    margin: 0 0 16px;

    font-family: $ff-DMSans;
    font-weight: $w-DMSans-semi-bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
  }

  &__packages-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 32px;
  }

  &__group-lessons-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @include media-sm {
    padding-left: 0;
    padding-right: 0;

    &__packages-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>