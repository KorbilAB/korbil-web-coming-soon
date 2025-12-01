<template>
  <div
      :class="{
        '_salary': salary,
      }"
      class="school-package-preview"
  >
    <CardLabel
        v-if="salary"
        value="10%"
        class="school-package-preview__label"
    />

    <div class="school-package-preview__title">
      Fast Track to Freedom
    </div>
    <div class="school-package-preview__description">
      {{ t('school-package-preview.lessons', { value: 3 }, 3) }}
      •
      {{ t('school-package-preview.hours', { value: 10 }, 10) }}
    </div>

    <div class="school-package-preview__footer">
      <div class="school-package-preview__price-wrapper">
        <div class="school-package-preview__prev-price">2100000</div>
        <div class="school-package-preview__price">
          1890000
          <sub>{{ t('school-package-preview.currency') }}</sub>
        </div>
      </div>

      <BaseBtn
          outlined
          shadow
          color="light-green"
          size="small"
          class="school-package-preview__btn"
      >
        {{ t('school-package-preview.btn') }}
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
.school-package-preview {
  position: relative;
  padding: 16px;
  border-radius: $radius;
  background-color: white;

  &._salary {
    box-shadow: inset 0 0 0 2px $c-orange;
  }

  &__title {
    margin: 0 0 4px;

    font-weight: $w-DMSans-semi-bold;
    color: $c-gray-black;
  }

  &._salary &__title {
    padding-right: 60px;
  }

  &__description {
    font-size: 14px;
    line-height: 20px;
    color: #626F86;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 24px;
  }

  &__price-wrapper {
    width: 50%;
    flex-grow: 1;
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
}
</style>