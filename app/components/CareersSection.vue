<template>
  <section class="careers-section">
    <SectionHeader
        :title="t('careers-section.title')"
        :subtitle="t('careers-section.subtitle')"
        class="careers-section__header"
    />

    <div class="careers-section__list">
      <CareerPreview
          v-motion-fade-up
          :delay="200"
      />

      <CareerPreview
          v-motion-fade-up
          :delay="200"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";

const { t } = useI18n()
</script>

<style lang="scss">
.careers-section {
  padding: 80px;
  border-radius: $radius-xl;
  background-color: $c-gray-lightest;

  &__header {
    margin-bottom: 40px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>