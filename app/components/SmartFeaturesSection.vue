<template>
  <section class="smart-features-section  g-container">
    <div class="smart-features-section__content g-container-inner">
      <SectionHeader
          :title="t('smart-features-section.title')"
          :subtitle="t('smart-features-section.subtitle')"
          :description="t('smart-features-section.description')"
      />

      <div class="smart-features-section__main">
        <div class="smart-features-section__item _1">
          <h3
              v-motion-fade-up
              class="smart-features-section__item-title"
          >
            {{ t('smart-features-section.items[0].title') }}
          </h3>
          <p
              v-motion-fade-up
              :delay="200"
              class="smart-features-section__item-text"
          >
            {{ t('smart-features-section.items[0].text') }}
          </p>
          <div
              v-motion-fade-up
              :delay="300"
              class="smart-features-section__item-img-wrapper"
          >
            <NuxtImg
                :delay="300"
                preset="default"
                src="/images/smart-features-section/1.png"
                class="smart-features-section__item-img"
            />
          </div>
        </div>
        <div class="smart-features-section__item _2">
          <h3
              v-motion-fade-up
              class="smart-features-section__item-title"
          >
            {{ t('smart-features-section.items[1].title') }}
          </h3>
          <p
              v-motion-fade-up
              :delay="200"
              class="smart-features-section__item-text"
          >
            {{ t('smart-features-section.items[1].text') }}
          </p>
          <div
              v-motion-fade-up
              :delay="300"
              class="smart-features-section__item-img-wrapper"
          >
            <NuxtImg
                :delay="300"
                preset="default"
                src="/images/smart-features-section/2.png"
                class="smart-features-section__item-img"
            />
          </div>
        </div>
        <div class="smart-features-section__item _3">
          <h3
              v-motion-fade-up
              class="smart-features-section__item-title"
          >
            {{ t('smart-features-section.items[2].title') }}
          </h3>
          <p
              v-motion-fade-up
              :delay="200"
              class="smart-features-section__item-text"
          >
            {{ t('smart-features-section.items[2].text') }}
          </p>
          <div
              v-motion-fade-up
              :delay="300"
              class="smart-features-section__item-img-wrapper"
          >
            <NuxtImg
                :delay="300"
                preset="default"
                src="/images/smart-features-section/3.png"
                class="smart-features-section__item-img"
            />
          </div>
        </div>
        <div class="smart-features-section__item _4">
          <h3
              v-motion-fade-up
              class="smart-features-section__item-title"
          >
            {{ t('smart-features-section.items[3].title') }}
          </h3>
          <p
              v-motion-fade-up
              :delay="200"
              class="smart-features-section__item-text"
          >
            {{ t('smart-features-section.items[3].text') }}
          </p>
          <div
              v-motion-fade-up
              :delay="300"
              class="smart-features-section__item-img-wrapper"
          >
            <NuxtImg
                :delay="300"
                preset="default"
                src="/images/smart-features-section/4.png"
                class="smart-features-section__item-img"
            />
          </div>
        </div>
        <div class="smart-features-section__item _5">
          <h3
              v-motion-fade-up
              class="smart-features-section__item-title"
          >
            {{ t('smart-features-section.items[4].title') }}
          </h3>
          <p
              v-motion-fade-up
              :delay="200"
              class="smart-features-section__item-text"
          >
            {{ t('smart-features-section.items[4].text') }}
          </p>
          <div
              v-motion-fade-up
              :delay="300"
              class="smart-features-section__item-img-wrapper"
          >
            <NuxtImg
                :delay="300"
                preset="default"
                src="/images/smart-features-section/5.png"
                class="smart-features-section__item-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";

const { t } = useI18n()
</script>

<style lang="scss">
.smart-features-section {
  &__content {
    padding: 80px;
    border-radius: $radius-xl;
    background-color: $c-gray-lightest;
  }

  &__main {
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
  }

  &__item {
    position: relative;
    padding: 40px 205px 40px 40px;
    background-color: white;
    border-radius: $radius-l;

    &._1 {
      grid-column: span 8;
      padding-bottom: 212px;
      padding-right: 40px;
    }

    &._2 {
      padding-top: 196px;
      padding-right: 40px;
      grid-column: span 4;
    }

    &._3,
    &._4 {
      grid-column: span 6;
    }

    &._5 {
      grid-column: span 12;
    }
  }

  &__item-title {
    margin: 0 0 12px;

    font-size: 28px;
  }

  &__item-text {
    margin: 0;
  }

  &__item._1 &__item-text {
    padding-right: 220px;
  }

  &__item-img-wrapper {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__item-img {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    height: 143px;
  }

  &__item._1 &__item-img {
    top: auto;
    left: auto;
    right: 16px;
    bottom: 17px;
    transform: none;
    height: 239px;
  }

  &__item._2 &__item-img {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  @include media-lg {
    &__content {
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  @include media-md {
    &__item {
      grid-column: span 12 !important;
    }
  }

  @include media-sm {
    border-radius: $radius-xl;
    background-color: $c-gray-lightest;

    &__content {
      padding: 40px 0;
    }

    &__main {
      margin-top: 40px;
    }

    & &__item {
      overflow: hidden;
      padding: 128px 18px 32px;

      &._1 {
        padding-top: 32px;
        padding-bottom: 160px;
      }
    }

    &__item-title {
      font-size: 22px;
    }

    &__item-text {
      padding: 0 !important;
    }

    &__item-img,
    &__item._2 &__item-img {
      top: 10px;
      left: auto;
      right: 50%;
      transform: translateX(50%);
      height: 110px;
    }

    &__item._1 &__item-img {
      height: 170px;
      right: 50%;
      bottom: -24px;
      transform: translateX(50%);
    }
  }
}
</style>