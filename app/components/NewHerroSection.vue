<template>
  <section class="new-herro-section  g-container">
    <div class="new-herro-section__content  g-container-inner">
      <NuxtPicture
          src="/images/new-herro/herro.jpg"
          sizes="md:1360 sm:998 xs:736 488"
          class="new-herro-section__bg"
      />

      <div class="new-herro-section__main">
        <h1 class="new-herro-section__title">
          {{ t('new-herro-section.title') }}
        </h1>
        <p class="new-herro-section__description">
          {{ t('new-herro-section.description') }}
        </p>

        <StartSearch class="new-herro-section__form"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss">
.new-herro-section {

  &__content {
    position: relative;
    aspect-ratio: auto 1.9/1;
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    min-height: 100%;
    border-radius: $radius-xl;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__main {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    margin: 0 0 20px;
    max-width: 600px;

    font-size: 65px;
    line-height: 1;
    font-weight: $w-Poppins-semi-bold;
    text-align: center;
    letter-spacing: -0.02em;
    color: white;
  }

  &__description {
    margin: 0 0 48px;
    max-width: 600px;

    font-size: 18px;
    font-weight: $w-DMSans-medium;
    text-align: center;
    color: white;
  }

  &__form {
    width: 720px;
    max-width: 100%;
  }

  @include media-sm {
    &__content {
      padding: 40px 20px 20px;
    }

    &__title {
      font-size: 40px;
    }

    &__description {
      margin-bottom: 24px;

      font-size: 16px;
    }
  }
}
</style>