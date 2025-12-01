<template>
  <div
      :class="{
        '_salary': salary,
      }"
      class="school-group-lesson-preview"
  >
    <CardLabel
        v-if="salary"
        value="10%"
        class="school-group-lesson-preview__label"
    />

    <div class="school-group-lesson-preview__title">
      Fast Track to Freedom
    </div>
    <div class="school-group-lesson-preview__languages">
      <div class="school-group-lesson-preview__language">
        En
      </div>
      <div class="school-group-lesson-preview__language">
        Sw
      </div>
    </div>

    <div class="school-group-lesson-preview__footer">
      <div class="school-group-lesson-preview__price-wrapper">
        <div class="school-group-lesson-preview__price">
          259
          <sub>{{ t('school-group-lesson-preview.currency') }}</sub>
        </div>
        •
        <div class="school-group-lesson-preview__prev-price">300</div>
      </div>

      <BaseBtn
          outlined
          shadow
          color="light-green"
          size="small"
          class="school-group-lesson-preview__btn"
      >
        {{ t('school-group-lesson-preview.btn') }}
      </BaseBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  salary?: number | string
}>()

const { t } = useI18n()
</script>

<style lang="scss">
.school-group-lesson-preview {
  position: relative;
  padding: 16px;
  border-radius: $radius;
  background-color: white;

  &._salary {
    box-shadow: inset 0 0 0 2px $c-orange;
  }

  &__title {
    margin: 0 0 16px;

    font-weight: $w-DMSans-semi-bold;
    color: $c-gray-black;
  }

  &._salary  &__title {
    padding-right: 60px;
  }

  &__languages {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding-right: 140px;
  }

  &__language {
    padding: 2px 4px;
    border: 1px solid $c-gray-lighter;
    border-radius: 4px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 14px;
    line-height: 16px;
    color: #717171;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 16px;
  }

  &__price-wrapper {
    width: 50%;
    flex-grow: 1;
    display: flex;
    align-items: baseline;
    gap: 6px;

    color: #8590A2;
  }

  &__prev-price {
    font-size: 12px;
    line-height: 14px;
    color: $c-orange;
    text-decoration: line-through;
  }

  &__price {
    font-weight: $w-DMSans-semi-bold;
    font-size: 18px;
    color: #626F86;

    & sub {
      bottom: 0;

      font-size: 12px;
      font-weight: $w-DMSans-regular;
    }
  }

  &__btn {
    margin-top: -12px;
  }
}
</style>