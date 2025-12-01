<template>
  <div class="school-page  g-container">
    <div class="school-page__content  g-container-inner-small">
      <NuxtPicture
          src="images/temp/school.jpg"
          sizes="sm:960 xs:736 488"
          class="school-page__img"
      />

      <div class="school-page__header">
        <NuxtImg
            width="96"
            height="96"
            src="/images/school.jpg"
            class="school-page__header-img"
        />

        <div class="school-page__main-wrapper">
          <div class="school-page__main">
            <h2 class="school-page__name">
              Körkortskola, Solna
            </h2>
            <p class="school-page__description">
              <span>Bildhuggarvägen 1, Stockholm</span>

              <span>
              <IconStar class="school-page__star-icon"/>
              ({{
                  t('school-page.header.reviews', {
                    value: '14,456'
                  }, 14456)
                }})
           </span>

              <span>
              <IconMapPointFilled class="school-page__map-point-icon"/>
                {{ t('school-page.header.km', { value: '8' }) }}
            </span>
            </p>
          </div>


          <BaseBtn
              rounded
              size="small"
              :icon-prepend="IconChat"
              class="school-page__chat-btn"
          >
            {{ t('school-page.header.chat-btn') }}
          </BaseBtn>
        </div>

        <div class="school-page__tabs">
          <NuxtLinkLocale
              active-class="_active"
              to="/search/school/wings-trafikskola"
              class="school-page__tab"
          >
            {{ t('school-page.tabs.main') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
              active-class="_active"
              to="/search/school/wings-trafikskola/about"
              class="school-page__tab"
          >
            {{ t('school-page.tabs.about') }}
          </NuxtLinkLocale>
        </div>
      </div>

      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSetBreadCrumbs } from '~/composables/useSetBreadCrumbs'
import IconChat from '~/components/icons/IconChat.vue'
import IconStar from '~/components/icons/IconStar.vue'
import IconMapPointFilled from '~/components/icons/IconMapPointFilled.vue'

definePageMeta({
  layout: 'search',
})

useSetBreadCrumbs([{
  title: 'Search Results',
  to: '/search/school',
}, {
  title: 'School Profile: Wings Traficskola'
}])

const { t } = useI18n()
</script>

<style lang="scss">
.school-page {

  &__content {
    padding: 24px 0 80px;
  }

  &__img {
    display: flex;
    width: 100%;
    aspect-ratio: 2.27488 / 1;
    border-radius: $radius-xl $radius-xl 0 0;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__header {
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 32px;
    padding: 68px 24px 0;
    border-radius: 0 0 $radius-xl $radius-xl;
    background-color: white;
    margin-bottom: 24px;
  }

  &__header-img {
    position: absolute;
    left: 24px;
    top: -51px;
    width: 102px;
    height: 102px;
    border-radius: $radius-xl;
    border: 3px solid white;
  }

  & &__chat-btn {
    min-width: 110px;

    background-color: #EFEEEE;

    color: $c-teal;

    @include hover {
      background-color: $c-teal;

      color: white;
    }
  }

  &__tabs {
    display: flex;
    align-items: center;
  }

  &__tab {
    position: relative;
    width: 20%;
    flex-grow: 1;
    display: block;
    padding: 10px 12px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    color: $c-teal;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      border-radius: 4px 4px 0 0;

      transition: $time;
    }

    @include hover {
      &::after {
        background-color: rgba($c-teal, 0.5);
      }
    }

    &._exact-active::after {
      background-color: $c-teal;
    }
  }

  &__main-wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  &__main {
    width: 50%;
    flex-grow: 1;
  }

  &__name {
    margin: 0 0 8px;

    font-size: 24px;
  }

  &__description {
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 12px;

    font-size: 14px;
    line-height: 18px;
    font-weight: $w-DMSans-medium;
    color: #8590A2;

    & > span {
      white-space: nowrap;
    }
  }

  &__star-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: -2px 0 0 0;
    vertical-align: middle;

    color: #E2B203;
  }

  &__map-point-icon {
    width: 16px;
    height: 16px;
    margin: -2px 0 0 0;
    vertical-align: middle;

    color: #8590A2;
  }

  &__tabs {
    width: 100%;
  }

  @include media-sm {
    &__header {
      padding: 16px 16px 0;
      gap: 24px 16px;
    }

    &__header-img {
      position: static;
    }

    &__main-wrapper {
      width: 50%;
      flex-grow: 1;
      flex-direction: column;
      gap: 16px;
    }

    &__main {
      width: 100%;
    }

    &__name {
      font-size: 18px;
    }
  }
}
</style>