<template>
  <section
      v-motion-fade-up
      id="wait-list"
      class="join-wait-list-section  g-container"
  >
    <div class="join-wait-list-section__content g-container-inner">
      <SectionHeader
          :subtitle="t('join-wait-list-section.subtitle')"
          :title="t('join-wait-list-section.title')"
          class="join-wait-list-section__header"
      />

      <JoinWaitListForm class="join-wait-list-section__form"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "~/components/SectionHeader.vue";
import JoinWaitListForm from "~/components/JoinWaitListForm.vue";

const { t } = useI18n()
</script>

<style lang="scss">
.join-wait-list-section {
  &__content {
    padding: 80px;
    border-radius: $radius-xl;
    background-color: $c-teal;
  }

  &__header {
    width: 600px;
    max-width: 100%;
    margin: 0 auto 24px;

    color: white;

    & .section-header__title {
      font-size: 56px;
      line-height: 64px;
      color: inherit;
    }
  }

  &__form {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    padding: 24px 24px 40px;
    border-radius: $radius-l;
    background-color: white;
  }

  @include media-lg {
    &__content {
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  @include media-sm {

    &__content {
      padding: 40px 24px 24px;
    }

    &__header {
      & .section-header__title {
        font-size: 40px;
        line-height: 46px;
      }
    }

    &__form {
      padding: 24px 16px;
    }
  }
}
</style>