<template>
  <div class="school-preview">
    <NuxtImg
        src="/images/school.jpg"
        width="88"
        height="88"
        class="school-preview__img"
    />
    <div class="school-preview__main">
      <h4 class="school-preview__title">
        <NuxtLinkLocale to="/search/school/wings-trafikskola">
          Wings Trafikskola
        </NuxtLinkLocale>
      </h4>
      <div class="school-preview__address">
        Bromma, Stockholm
      </div>
      <div class="school-preview__languages">
        <IconLanguage/>
        English | Swedish
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLanguage from '~/components/icons/IconLanguage.vue'

const { t } = useI18n()
</script>

<style lang="scss">
.school-preview {
  display: flex;
  gap: 16px;

  &__img {
    width: 88px;
    height: 88px;
    border-radius: $radius;
    overflow: hidden;
  }

  &__main {
    width: 50%;
    flex-grow: 1;
  }

  &__title {
    margin: 0 0 8px;

    font-size: 16px;
    line-height: 24px;

    & a {
      text-decoration: none;
      color: inherit;

      @include hover {
        color: $c-teal;
      }
    }
  }

  &__address {
    margin-bottom: 8px;

    font-size: 14px;
    line-height: 21px;
    color: $c-gray-black;
  }

  &__languages {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    line-height: 21px;
    color: $c-gray-black;
  }
}
</style>