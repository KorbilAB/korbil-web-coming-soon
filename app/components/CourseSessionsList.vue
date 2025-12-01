<template>
  <div class="course-sessions-list">
    <div class="course-sessions-list__header">
      <div class="course-sessions-list__title">
        Riskettan (Risk 1 & Risk 2)
      </div>

      <div class="course-sessions-list__description">
        This course covers the risks of impaired driving, fatigue, hazardous behaviors (Risk 1), and practical driving
        safety exercises (Risk 2).
      </div>
    </div>

    <BaseTabs
        v-model="language"
        :tabs="languages"
        class="course-sessions-list__tabs"
    />

    <DateSelect class="course-sessions-list__date-select"/>

    <div class="course-sessions-list__sessions-title">
      {{ t('course-sessions-list.list-title') }}
    </div>

    <div class="course-sessions-list__sessions">
      <CourseSessionPreview @select="$emit('select', {})"/>
      <CourseSessionPreview @select="$emit('select', {})"/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'select', value: any): void
}>()

const { t } = useI18n()

const languages = [{
  key: '',
  title: 'All Languages',
}, {
  key: 'sv',
  title: 'Swedish',
}, {
  key: 'en',
  title: 'English',
}]

const language = ref(languages[0])
</script>

<style lang="scss">
.course-sessions-list {

  &__header {
    margin-bottom: 16px;
    padding: 0 52px 16px;
    border-bottom: 1px solid $c-gray-lighter;
  }

  &__title {
    margin: 0 0 4px;

    font-family: $ff-DMSans;
    font-weight: $w-DMSans-semi-bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: $c-gray-black;
  }

  &__description {
    margin: 0;

    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: $c-gray-black;
  }

  &__tabs {
    margin-bottom: 16px;
  }

  &__tabs .base-tabs__tab {
    flex-basis: 20%;
  }

  &__date-select {
    margin-bottom: 40px;
  }

  &__sessions-title {
    margin: 0 0 16px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 14px;
    color: #172B4D;
  }

  &__sessions {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @include media-sm {
    &__header {
      padding: 0 42px 16px;
    }
  }
}
</style>