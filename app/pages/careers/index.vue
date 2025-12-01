<template>
  <div class="careers-list-page  g-container">
    <div class="careers-list-page__content  g-container-inner">
      <h1
          v-motion-fade-up
          class="careers-list-page__title">
        {{ t('careers-list-page.title') }}
      </h1>
      <p
          v-motion-fade-up
          :delay="200"
          class="careers-list-page__description"
      >
        {{ t('careers-list-page.description') }}
      </p>
      <CareersSection
          v-motion-fade-up
          :delay="300"
          class="blog-list-page__main"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style lang="scss">
.careers-list-page {
  &__content {
    padding: 80px 0;
  }

  &__title {
    margin: 0 auto 24px;
    max-width: 800px;

    font-size: 56px;
    text-align: center;
  }

  &__description {
    max-width: 800px;
    margin: 0 auto 80px;

    text-align: center;
  }

  @include media-sm {
    &__title {
      font-size: 40px;
    }
  }
}
</style>