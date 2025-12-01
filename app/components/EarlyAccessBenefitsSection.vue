<template>
  <section
      id="early-access-benefits"
      class="early-access-benefits-section  g-container"
  >
    <div class="early-access-benefits-section__content g-container-inner">
      <SectionHeader
          :title="t('early-access-benefits-section.title')"
          :subtitle="t('early-access-benefits-section.subtitle')"
          :description="t('early-access-benefits-section.description')"
      />

      <div class="early-access-benefits-section__tabs">
        <BaseBtn
            v-for="(el, index) in tabs"
            :key="index"
            rounded
            :outlined="index !== currentTabIndex"
            :class="{
              _current: index === currentTabIndex,
            }"
            class="early-access-benefits-section__tabs-btn"
            @click.prevent="currentTabIndex = index"
        >
          {{ rt(el.name) }}
        </BaseBtn>
      </div>

      <div
          :key="currentTabIndex"
          class="early-access-benefits-section__main"
      >
        <NuxtPicture
            :src="rt(tabs[currentTabIndex].img)"
            sizes="lg:484 sm:360 420"
            class="early-access-benefits-section__img"
        />

        <div class="early-access-benefits-section__main-content">
          <ul class="early-access-benefits-section__list">
            <li v-for="item in tabs[currentTabIndex].list">
              <h4
                  v-motion-fade-up
                  class="early-access-benefits-section__list-title"
              >
                {{ rt(item.title) }}
              </h4>
              <p
                  v-motion-fade-up
                  :delay="200"
                  class="early-access-benefits-section__list-text"
              >
                {{ rt(item.text) }}
              </p>
            </li>
          </ul>

          <BaseBtn
              v-if="tabs[currentTabIndex].btn"
              :to="rt(tabs[currentTabIndex].btn.link)"
              v-motion-fade-up
              :delay="200"
              class="early-access-benefits-section__btn"
          >
            {{ rt(tabs[currentTabIndex].btn.text) }}
          </BaseBtn>

          <div
              v-if="tabs[currentTabIndex].contacts"
              class="early-access-benefits-section__contacts"
          >
            <div class="early-access-benefits-section__contacts-title">
              {{ rt(tabs[currentTabIndex].contacts.title) }}
            </div>
            <a
                v-if="rt(tabs[currentTabIndex].contacts.email)"
                :href="`mailto:${rt(tabs[currentTabIndex].contacts.email)}`"
                class="early-access-benefits-section__contacts-contact"
            >
              {{ rt(tabs[currentTabIndex].contacts.email) }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";

const { t, tm, rt, te } = useI18n()

const tabs = (tm('early-access-benefits-section.tabs') as any)

const currentTabIndex = ref(1)
</script>

<style lang="scss">
.early-access-benefits-section {
  &__content {
    padding: 80px;
  }

  &__tabs {
    display: flex;
    gap: 16px;
    width: 992px;
    max-width: 100%;
    margin-top: 56px;
    margin-bottom: 20px;
  }

  &__tabs-btn {
    width: 25%;
    flex-grow: 1;
  }

  &__main {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 992px;
    max-width: 100%;
  }

  &__img {
    align-self: flex-start;
    border-radius: $radius-xl;
    overflow: hidden;
    display: flex;
    width: 484px;
    height: 484px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__main-content {
    width: 20%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    counter-reset: num;
  }

  &__list-title {
    margin: 0 0 15px;

    font-size: 24px;
  }

  &__list-text {
    margin: 0;
  }

  &__btn {
    align-self: flex-start;
    margin-top: 30px;
  }

  &__contacts {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  &__contacts-title {
    font-weight: $w-DMSans-semi-bold;
    color: $c-gray;
  }

  &__contacts-contact {
    text-decoration: none;
    font-weight: $w-DMSans-semi-bold;
    color: $c-teal;
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
      width: 360px;
      height: 360px;
    }
  }

  @include media-md {
    &__content {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @include media-sm {
    &__content {
      padding: 40px 0;
    }

    &__tabs {
      gap: 8px;
      margin-top: 40px;
    }
    //
    //&__tabs-btn {
    //  width: 100%;
    //}

    &__img {
      width: 420px;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }

    &__main {
      flex-direction: column;
    }

    &__main-content {
      width: 100%;
    }

    &__list-title {
      font-size: 20px;
    }
  }
}
</style>