<template>
  <section
      id="frequently-asked-questions"
      class="faq-section  g-container"
  >
    <div class="faq-section__content g-container-inner">
      <SectionHeader
          :title="t('faq-section.title')"
          class="faq-section__header"
      />

      <div class="faq-section__list">
        <FAQItem
            v-for="(item, index) in tm('faq-section.list') as any"
            :key="index"
            :title="rt(item.title)"
            :text="rt(item.text)"
            class="faq-section__list-item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";

const { t, tm, rt } = useI18n()
</script>

<style lang="scss">
.faq-section {
  &__content {
    padding: 80px 0;
  }

  &__header {
    margin-bottom: 44px;
  }

  &__list {
    width: 550px;
    max-width: 100%;
    margin: 0 auto;
  }

  &__list-item {
    border-bottom: 1px solid rgba($c-gray-black, 0.05);
  }
}
</style>