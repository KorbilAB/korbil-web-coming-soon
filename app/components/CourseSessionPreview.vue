<template>
  <div class="course-session-preview">
    <div class="course-session-preview__main">
      <div class="course-session-preview__title">
        14:00 - 15:00 - 23rd, December
      </div>

      <InstructorPreview class="course-session-preview__instructor"/>

      <div class="course-session-preview__language">
        {{ t('course-session-preview.conducted', { value: 'Swedish' }) }}
      </div>
    </div>

    <div class="course-session-preview__side">
      <div
          v-html="t('course-session-preview.available', { value: '2' }, 2)"
          class="course-session-preview__available"
      />

      <BaseBtn
          color="light-green"
          outlined
          shadow
          size="small"
          @click.prevent="$emit('select')"
      >
        {{ t('course-session-preview.btn') }}
      </BaseBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

defineEmits<{
  (e: 'select'): void
}>()
</script>

<style lang="scss">
.course-session-preview {
  display: flex;
  gap: 16px;
  padding: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02), 0px 2px 6px rgba(0, 0, 0, 0.02), 0px 0px 1px rgba(0, 0, 0, 0.02);
  border: 1px solid $c-gray-lighter;
  border-radius: $radius;

  &__main {
    width: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__title {
    margin-bottom: 8px;

    color: $c-gray-black;
  }

  &__instructor {
    margin-bottom: 16px;
  }

  &__language {
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #D4D4D4;

    font-size: 14px;
    line-height: 16px;
    font-weight: $w-DMSans-semi-bold;
    color: #717171;
  }

  &__side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  &__available {
    font-size: 12px;
    line-height: 16px;
    font-weight: $w-DMSans-semi-bold;
    text-align: right;
    white-space: pre-wrap;
    color: $c-orange;
  }

  @include media-sm {
    flex-direction: column;

    &__main {
      width: 100%;
    }

    &__available {
      text-align: left;
    }
  }
}
</style>