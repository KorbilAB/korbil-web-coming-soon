<template>
  <section
      id="hero"
      class="herro-section  g-container"
  >
    <div class="herro-section__content  g-container-inner">
      <h1
          v-motion-fade-down
          :delay="100"
          class="herro-section__title"
      >
        {{ t('herro-section.title') }}
      </h1>
      <p
          v-motion-fade-down
          :delay="250"
          class="herro-section__description"
      >
        {{ t('herro-section.description') }}
      </p>

      <BaseBtn
          v-motion-fade-down
          :delay="400"
          to="/#wait-list"
          class="herro-section__btn"
      >
        {{ t('herro-section.btn') }}
      </BaseBtn>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss">
.herro-section {

  &__content {
    padding: 80px 0 120px;
    display: flex;
    flex-direction: column;

    text-align: center;
  }

  &__title {
    margin: 0 auto 8px;
    max-width: 800px;

    font-size: 56px;
  }

  &__description {
    margin: 0;

    font-size: 20px;
    font-weight: $w-DMSans-medium;
    white-space: pre-line;
  }

  &__btn {
    align-self: center;
    margin-top: 40px;
    min-width: 240px;
  }

  @include media-sm {
    &__content {
      padding: 40px 0 80px;
    }

    &__title {
      font-size: 40px;
    }

    &__description {
      font-size: 16px;
    }
  }
}
</style>