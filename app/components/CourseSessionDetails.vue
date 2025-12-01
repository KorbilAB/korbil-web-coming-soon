<template>
  <div class="course-session-details">
    <div class="course-session-details__header">
      <div class="course-session-details__title">
        Riskettan (Risk 1 & Risk 2)
      </div>

      <div class="course-session-details__description">
        This course covers the risks of impaired driving, fatigue, hazardous behaviors (Risk 1), and practical driving
        safety exercises (Risk 2).
      </div>

      <button
          class="course-session-details__back-btn"
          @click.prevent="$emit('back')"
      >
        <IconsIconArrowLongRight/>
      </button>
    </div>

    <div class="course-session-details__details-wrapper">
      <div class="course-session-details__details-title">
        {{ t('course-session-details.details-title') }}
      </div>

      <ul class="course-session-details__list">
        <li class="course-session-details__list-item">
          <IconCalendar class="course-session-details__list-item-icon"/>
          <div class="course-session-details__list-item-main">
            <div class="course-session-details__list-item-title">
              {{ t('course-session-details.date') }}
            </div>
            23rd, December 2025
          </div>
        </li>
        <li class="course-session-details__list-item">
          <IconTimeFilled class="course-session-details__list-item-icon"/>
          <div class="course-session-details__list-item-main">
            <div class="course-session-details__list-item-title">
              {{ t('course-session-details.time') }}
            </div>
            17:00 - 20:10
          </div>
        </li>
        <li class="course-session-details__list-item">
          <IconLanguage class="course-session-details__list-item-icon"/>
          <div class="course-session-details__list-item-main">
            <div class="course-session-details__list-item-title">
              {{ t('course-session-details.conducting-in') }}
            </div>
            English
          </div>
        </li>
        <li class="course-session-details__list-item">
          <IconMapPointFilled class="course-session-details__list-item-icon"/>
          <div class="course-session-details__list-item-main">
            <div class="course-session-details__list-item-title">
              {{ t('course-session-details.location') }}
            </div>
            Kungsgatan 12, 411 19 Göteborg
          </div>
          <a href="#" class="course-session-details__list-item-link">
            <IconMap/>
          </a>
        </li>
      </ul>

      <div class="course-session-details__instructor-title">
        {{ t('course-session-details.instructor-title') }}
      </div>

      <div class="course-session-details__instructor-wrapper">
        <InstructorPreview class="course-session-details__instructor"/>
        <a href="#" class="course-session-details__instructor-chat-link">
          <IconChat/>
        </a>
      </div>
    </div>

    <div class="course-session-details__reviews-title">
      {{ t('course-session-details.reviews-title') }}
    </div>

    <div class="course-session-details__reviews">
      <ReviewCard/>
      <ReviewCard/>
    </div>

    <div class="course-session-details__footer">
      <div class="course-session-details__footer-main">
        <div class="course-session-details__price-title">
          {{ t('course-session-details.price') }}
        </div>
        <div class="course-session-details__price-wrapper">
          <div class="course-session-details__price">
            259
            <sub>{{ t('course-session-details.currency') }}</sub>
          </div>
          •
          <div class="course-session-details__prev-price">300</div>
        </div>
      </div>

      <BaseBtn
          class="course-session-details__btn"
      >
        {{ t('course-session-details.btn') }}
      </BaseBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconLanguage from '~/components/icons/IconLanguage.vue'
import IconTimeFilled from '~/components/icons/IconTimeFilled.vue'
import IconMapPointFilled from '~/components/icons/IconMapPointFilled.vue'
import IconMap from '~/components/icons/IconMap.vue'
import IconChat from '~/components/icons/IconChat.vue'

defineEmits<{
  (e: 'back'): void
}>()

const { t } = useI18n()
</script>

<style lang="scss">
.course-session-details {

  &__header {
    position: relative;
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

  &__back-btn {
    @include reset-button;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    margin-top: -8px;

    transition: color $time;

    & svg {
      transform: rotate(180deg);
    }

    @include hover {
      color: $c-teal;
    }
  }

  &__details-wrapper {
    padding: 16px;
    margin-bottom: 24px;
  }

  &__details-title {
    margin-bottom: 24px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 24px;
    color: $c-gray-black;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    color: #172B4D;
  }

  &__list-item-icon {
    width: 24px;
    height: 24px;
    color: #626F86;
  }

  &__list-item-main {
    width: 50%;
    flex-grow: 1;
  }

  &__list-item-title {
    margin-bottom: 2px;

    font-size: 12px;
    line-height: 16px;

    color: #626F86;
  }


  &__list-item-link,
  &__instructor-chat-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $c-gray-lightest;

    text-decoration: none;
    color: #626F86;

    & svg {
      width: 20px;
      height: 20px;
    }
  }

  &__instructor-title {
    margin-bottom: 8px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 14px;
  }

  &__instructor-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__instructor {
    width: 50%;
    flex-grow: 1;
  }

  &__instructor-chat-link {

  }

  &__reviews-title {
    margin-bottom: 16px;
    font-weight: $w-DMSans-semi-bold;
    font-size: 18px;
    color: $c-gray-black;
  }

  &__reviews {
    display: flex;
    gap: 16px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 24px 24px;
    margin-top: 24px;
    border-top: 1px solid $c-gray-lighter;
    box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.1);
    margin: 66px -24px -24px;
  }

  &__footer-main {
    width: 50%;
    flex-grow: 1;
  }

  &__price-title {
    font-size: 12px;
    line-height: 16px;
    color: #626F86;
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

  @include media-sm {
    &__header {
      padding: 0 42px 16px;
    }

    &__back-btn {
      position: absolute;
      top: -7px;
      transform: none;
      margin-top: 0;
    }

    &__details-wrapper {
      padding: 16px 0;
    }

    &__details-title {
      margin-bottom: 16px;

      font-size: 18px;
    }

    &__reviews {
      flex-direction: column;
    }

    &__footer {
      flex-direction: column;
      align-items: stretch;
      margin-top: 32px;
    }

    &__footer-main {
      width: 100%;
    }
  }
}
</style>