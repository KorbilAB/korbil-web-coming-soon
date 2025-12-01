<template>
  <div class="date-select">
    <div class="date-select__header">
      <button
          type="button"
          class="date-select__direction-btn  _prev"
          @click.prevent="onPrev"
      >
        <IconArrowDown/>
        {{ t('date-select.prev-btn') }}
      </button>

      <div class="date-select__header-range">
        {{ range }}
      </div>

      <button
          type="button"
          class="date-select__direction-btn _next"
          @click.prevent="onNext"
      >
        {{ t('date-select.next-btn') }}
        <IconArrowDown/>
      </button>
    </div>

    <div class="date-select__list">
      <div
          v-for="day in days"
          :key="day.dateISO"
          class="date-select__item"
      >
        <div class="date-select__item-week">
          {{ day.dayOfWeek }}
        </div>
        <div class="date-select__item-day">
          {{ day.dayOfMonth }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowDown from '~/components/icons/IconArrowDown.vue'
import { useDayjs } from '~/composables/useDayjs'

const dayjs = useDayjs()

const { t } = useI18n()

const currentDay = ref(dayjs())

const days = computed(() => {
  return new Array(7).fill(null).map((_, i) => {
    const d = currentDay.value.add(i, 'day')

    return {
      dateISO: d.toISOString(),
      dayOfWeek: d.format('ddd'),
      dayOfMonth: d.format('D'),
    }
  })
})

const range = computed(() => {
  const start = currentDay.value.format('D')
  const end = currentDay.value.add(6, 'day').format('D MMM')

  return `${start} - ${end}`
})

function onPrev() {
  currentDay.value = currentDay.value.subtract(7, 'day')
}

function onNext() {
  currentDay.value = currentDay.value.add(7, 'day')
}
</script>

<style lang="scss">
.date-select {
  &__header {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  &__direction-btn {
    @include reset-button;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: $w-DMSans-semi-bold;
    color: $c-teal;

    & svg {
      width: 16px;
      height: 16px;
      transform: rotate(90deg);
    }

    &._next svg {
      transform: rotate(-90deg);
    }
  }

  &__header-range {
    width: 20%;
    flex-grow: 1;
    padding: 0 8px;

    font-weight: $w-DMSans-semi-bold;
    text-align: center;
    text-transform: uppercase;
    color: #454745;
  }

  &__direction-btn {

  }

  &__list {
    display: flex;
    border: 1px solid $c-gray-lighter;
    border-radius: $radius;
  }

  &__item {
    width: 10%;
    flex-grow: 1;
    padding: 8px;
    border-right: 1px solid $c-gray-lighter;

    text-align: center;

    &:last-child {
      border-right: 0;
    }
  }

  &__item-week {
    margin-bottom: 8px;

    color: #4A5565;
  }

  &__item-day {
    font-size: 20px;
    color: $c-gray-black;
  }

  @include media-sm {
    &__item {
      width: 10%;
      flex-grow: 1;
      padding: 8px;
      border-right: 1px solid $c-gray-lighter;

      text-align: center;

      &:last-child {
        border-right: 0;
      }
    }

    &__item {
      padding: 8px 4px;
    }

    &__item-week {
      margin-bottom: 4px;

      font-size: 14px;
    }

    &__item-day {
      font-size: 16px;
    }
  }
}
</style>