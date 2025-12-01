<template>
  <div class="review-card">
    <div class="review-card__header">
      <div class="review-card__header-main">
        <div class="review-card__name">
          Gustav Lindberg
        </div>

        <div class="review-card__description">
          <IconStar class="review-card__star-icon"/>
          5.0
          • 2022 August 11
        </div>
      </div>
      <IconArrowDown class="review-card__arrow"/>
    </div>

    <h4 class="review-card__title">
      Excellent Driving School with Supportive Instructors!
    </h4>

    <p class="review-card__review">
      {{ sliceText(text, 110) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import IconArrowDown from '~/components/icons/IconArrowDown.vue'
import IconStar from '~/components/icons/IconStar.vue'

const text = `I had a fantastic experience with My Driving Academy! The instructors were patient, knowledgeable, and made me
            feel comfortable behind the wheel from day one.Their step - by - step guidance helped me build confidence, and I
            passed my driving test on the first try!I highly recommend this school to anyone looking for professional and
            supportive driving lessons.`

function sliceText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + ' ...'
}
</script>

<style lang="scss">
.review-card {
  padding: 16px;
  border-radius: $radius-l;
  border: 1px solid $c-gray-lighter;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02), 0px 2px 6px rgba(0, 0, 0, 0.02), 0px 0px 1px rgba(0, 0, 0, 0.02);

  &__header {
    display: flex;
    align-items: flex-start;
  }

  &__header-main {
    width: 50%;
    flex-grow: 1;
    margin-bottom: 24px;
  }

  &__name {
    margin: 0 0 8px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 16px;
    color: $c-gray-black;
  }

  &__description {
    display: flex;
    align-items: center;
    gap: 4xp;

    font-size: 14px;
    line-height: 18px;
    color: #717171;
  }

  &__star-icon {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-right: 4px;
    margin-left: -2px;

    color: #FFD93B;
  }

  &__arrow {
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
  }

  &__title {
    margin: 0 0 16px;

    font-size: 16px;
    font-family: $ff-DMSans;
    font-weight: $w-DMSans-semi-bold;
    color: $c-gray-black;
  }

  &__review {

  }
}
</style>