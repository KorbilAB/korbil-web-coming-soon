<template>
  <section
      v-motion-fade-up
      id="how-it-works"
      class="how-it-works-section  g-container"
  >
    <div class="how-it-works-section__content g-container-inner">
      <SectionHeader
          :title="t('how-it-works-section.title')"
          :subtitle="t('how-it-works-section.subtitle')"
          :description="t('how-it-works-section.description')"
      />

      <div class="how-it-works-section__main">
        <NuxtPicture
            v-motion-fade-up
            src="images/how-it-works-section/main.jpg"
            sizes="md:476 sm:300 xs:736 488"
            height="676"
            class="how-it-works-section__img"
        />
        <ol class="how-it-works-section__list">
          <li>
            <h4
                v-motion-fade-up
                class="how-it-works-section__list-title"
            >
              {{ t('how-it-works-section.list[0].title') }}
            </h4>
            <p
                v-motion-fade-up
                :delay="200"
                class="how-it-works-section__list-text"
            >
              {{ t('how-it-works-section.list[0].text') }}
            </p>
            <NuxtLinkLocale
                v-motion-fade-up
                :delay="300"
                to="/#wait-list"
                class="how-it-works-section__list-link"
            >
              {{ t('how-it-works-section.list[0].link') }}
              <IconsIconArrowLongRight/>
            </NuxtLinkLocale>
          </li>
          <li>
            <h4
                v-motion-fade-up
                class="how-it-works-section__list-title"
            >
              {{ t('how-it-works-section.list[1].title') }}
            </h4>
            <p
                v-motion-fade-up
                :delay="200"
                class="how-it-works-section__list-text"
            >
              {{ t('how-it-works-section.list[1].text') }}
            </p>
          </li>
          <li>
            <h4
                v-motion-fade-up
                class="how-it-works-section__list-title"
            >
              {{ t('how-it-works-section.list[2].title') }}
            </h4>
            <p
                v-motion-fade-up
                :delay="200"
                class="how-it-works-section__list-text"
            >
              {{ t('how-it-works-section.list[2].text') }}
            </p>
          </li>
          <li>
            <h4
              v-motion-fade-up
              class="how-it-works-section__list-title"
          >
              {{ t('how-it-works-section.list[3].title') }}
            </h4>
            <p
                v-motion-fade-up
                :delay="200"
                class="how-it-works-section__list-text"
            >
              {{ t('how-it-works-section.list[3].text') }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";

const { t } = useI18n()
</script>

<style lang="scss">
.how-it-works-section {
  &__content {
    padding: 80px;
    border-radius: $radius-xl;
    background-color: $c-gray-lightest;
  }

  &__main {
    display: flex;
    gap: 50px;
    margin-top: 80px;
  }

  &__img {
    border-radius: $radius-xl;
    overflow: hidden;
    display: flex;
    width: 476px;
    //height: 676px;
    box-shadow: 20px 20px 40px -2px rgba(27, 27, 27, 0.2), 10px 10px 20px -1.3px rgba(27, 27, 27, 0.08);

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__list {
    width: 20%;
    flex-grow: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    counter-reset: num;
  }

  &__list li {
    position: relative;
    padding: 16px 16px 16px 88px;
    border-radius: $radius-l;

    transition: background-color $time;

    @include hover {
      background-color: white;
    }
  }

  &__list li::before {
    box-sizing: border-box;
    content: counter(num);
    counter-increment: num;
    position: absolute;
    left: 16px;
    top: 13px;
    min-width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: white;

    font-size: 20px;
    line-height: 1;
    font-weight: $w-DMSans-medium;

    transition: $time-modal;
  }

  &__list li {

    @include hover {
      &::before {
        top: 50%;
        transform: translateY(-50%);
        background-color: $c-teal;

        color: white;
      }
    }
  }

  &__list-title {
    margin: 0 0 15px;

    font-size: 24px;
  }

  &__list-text {
    margin: 0;
  }

  &__list-link {
    margin-top: 15px;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    font-weight: $w-DMSans-medium;
    text-decoration: none;
    color: $c-teal;

    & svg {
      width: 20px;
      height: 20px;

      transition: transform $time;
    }

    @include hover {
      & svg {
        transform: translateX(4px);
      }
    }
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
      width: 300px;
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
      flex-direction: column;
    }

    &__img {
      width: 100%;
      height: 470px;
      order: 5;
    }

    &__list {
      width: 100%;
      gap: 12px;
    }

    &__list li {
      padding-left: 78px;
    }

    &__list-title {
      font-size: 20px;
    }

    //&__list li {
    //  padding: 78px 16px 16px 16px;
    //}
    //
    //&__list li::before {
    //  top: 16px;
    //}

    &__list li {
      @include hover {
        &::before {
          top: 16px;
          transform: none;
        }
      }
    }
  }
}
</style>