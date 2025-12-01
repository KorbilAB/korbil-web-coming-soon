<template>
  <article class="course-preview">
    <div class="course-preview__main">
      <h3 class="course-preview__title">
        The risk education part 2 ‘Slippery’ in English
      </h3>
      <ul class="course-preview__details">
        <li class="course-preview__detail">
          <IconLesson18 class="course-preview__detail-icon"/>
          {{ t('course-preview.language') }}
          <span class="course-preview__detail-chips">
            English
          </span>
          <span class="course-preview__detail-chips">
            Swedish
          </span>
        </li>
        <li class="course-preview__detail">
          <IconCalendar18 class="course-preview__detail-icon"/>
          {{ t('course-preview.date') }}
          18 September 2025
        </li>
        <li class="course-preview__detail">
          <IconTime
              style="height: 16px"
              class="course-preview__detail-icon"
          />
          {{ t('course-preview.time') }}
          17:00 - 20:10
        </li>
        <li class="course-preview__detail">
          <IconMapPoint
              style="height: 16px"
              class="course-preview__detail-icon"
          />
          {{ t('course-preview.location') }}
          Show the map link with icon
        </li>
      </ul>
    </div>

    <div class="course-preview__reserve-wrapper">
      <div class="course-preview__price">
        259
        <span class="course-preview__price-currency">{{ t('course-preview.currency') }}</span>
      </div>

      <button
          type="button"
          class="course-preview__btn"
          @click.prevent="$emit('open')"
      >
        {{ t('course-preview.btn') }}
      </button>
    </div>

    <div class="course-preview__school-wrapper">
      <SchoolPreview class="course-preview__school"/>
    </div>
  </article>
</template>

<script setup lang="ts">
import IconLesson18 from '~/components/icons/IconLesson18.vue'
import IconCalendar18 from '~/components/icons/IconCalendar18.vue'
import IconTime from '~/components/icons/IconTime.vue'
import IconMapPoint from '~/components/icons/IconMapPoint.vue'

defineEmits<{
  (e: 'open'): void
}>()

const { t } = useI18n()
</script>

<style lang="scss">
.course-preview {
  display: flex;
  flex-wrap: wrap;

  &__main {
    width: 50%;
    flex-grow: 1;
  }

  &__title {
    margin: 0 0 8px;

    font-size: 20px;
  }

  &__details {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__detail {
    display: flex;
    align-items: center;
    gap: 8px;

    color: $c-gray-black;
  }

  &__detail-icon {
    width: 18px;
    height: 18px;
    margin-right: 2px;

    color: #626F86;
  }

  &__detail-chips {
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid #D4D4D4;

    font-size: 14px;
    line-height: 16px;
    font-weight: $w-DMSans-semi-bold;
    color: #717171;
  }

  &__reserve-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__price {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    text-align: right;
    color: #626F86;
  }

  &__price-currency {
    font-size: 12px;
    text-transform: uppercase;
  }

  &__btn {
    @include reset-button;
    cursor: pointer;
    min-width: 172px;
    padding: 9px 16px;
    background: #E9FDF3;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: $radius;
    border: 1px solid #B5DFC9;

    font-size: 14px;
    line-height: 16px;
    font-weight: $w-DMSans-semi-bold;
    color: #00545D;

    transition: $time;

    @include hover {
      background-color: #bcf8d9;
    }
  }

  &__school-wrapper {
    width: 100%;
    border-top: 2px solid #E0F0F1;
    margin-top: 16px;
    padding-top: 16px;
  }

  @include media-sm {
    &__main {
      margin-bottom: 16px;
    }

    &__reserve-wrapper {
      width: 100%;
    }

    &__price {
      margin-bottom: 16px;

      text-align: left;
    }
  }
}
</style>