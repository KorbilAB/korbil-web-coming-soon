<template>
  <section class="about-us-section  g-container">
    <div class="about-us-section__content g-container-inner">
      <SectionHeader
          :title="t('about-us-section.title')"
          :subtitle="t('about-us-section.subtitle')"
          :description="t('about-us-section.description')"
          class="about-us-section__header"
      />

      <div class="about-us-section__main">
        <NuxtPicture
            src="/images/about-us-section/1.png"
            sizes="lg:544 md:400 sm:320 400"
            class="about-us-section__img"
        />

        <div class="about-us-section__main-content">
          <IconComma
              v-motion-fade-up
              class="about-us-section__comma"
          />
          <p
              v-motion-fade-up
              :delay="200"
              class="about-us-section__comment"
          >
            {{ t('about-us-section.comment') }}
          </p>
          <p
              v-motion-fade-up
              :delay="200"
              class="about-us-section__comment-author"
          >
            {{ t('about-us-section.comment-author') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";
import IconComma from "~/components/icons/IconComma.vue";

const { t } = useI18n()
</script>

<style lang="scss">
.about-us-section {
  &__content {
    padding: 80px 0;
  }

  &__header {
    margin-bottom: 44px;
  }

  &__main {
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 40px;
    border-radius: $radius-xl;
    background-color: $c-teal;
  }

  &__img {
    align-self: flex-start;
    border-radius: $radius-l;
    overflow: hidden;
    display: flex;
    width: 544px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__main-content {
    width: 20%;
    flex-grow: 1;

    color: white;
  }

  &__comma {
    margin-bottom: 36px;
    opacity: 0.45;
  }

  &__comment {
    margin: 0;

    font-size: 26px;
    font-weight: $w-DMSans-medium;
  }

  &__comment-author {
    margin: 36px 0 0;
    font-size: 22px;
    font-weight: $w-DMSans-medium;
  }

  @include media-lg {
    &__content {
      padding-left: 32px;
      padding-right: 32px;
    }

    &__main {
      gap: 24px;
    }

    &__img {
      width: 400px;
    }
  }

  @include media-md {
    &__content {
      padding-left: 0;
      padding-right: 0;
    }

    &__img {
      width: 320px;
    }
  }

  @include media-sm {
    &__content {
      padding: 40px 0;
    }

    &__main {
      flex-direction: column;
      gap: 32px;
      padding: 24px;
    }

    &__main-content {
      width: 100%;
    }

    &__img {
      width: 400px;
      max-width: 100%;
      height: 250px;
    }

    &__comma {
      margin-bottom: 28px;
    }

    &__comment {
      font-size: 22px;
    }

    &__comment-author {
      margin-top: 28px;
      font-size: 18px;
    }
  }
}
</style>