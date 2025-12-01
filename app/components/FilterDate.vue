<template>
  <div class="filter-date">
    <label
        :for="id"
        class="filter-date__label"
    >
      {{ label }}
    </label>
    <div class="filter-date__input-wrapper">
      <!--      <IconsIconArrowDown class="filter-date__select-arrow"/>-->
      <input
          :id="id"
          :value="modelValue"
          type="date"
          min="2025-10-01"
          max="2026-03-31"
          class="filter-date__input"
          @change="onSelect($event)"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from 'lodash-es'

const props = defineProps<{
  modelValue?: string | null
  label: string
  id?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

const id = props.id || uniqueId()

function onSelect(e: Event) {
  emit('update:modelValue', e.target?.value || null)
}
</script>

<style lang="scss">
.filter-date {
  display: flex;
  flex-direction: column;

  &__label {
    display: block;
    margin: 0 0 6px;

    font-size: 14px;
    line-height: 20px;
  }

  &__input-wrapper {
    position: relative;
  }

  &__input {
    width: 100%;
    border: 0 !important;
    padding: 10px 12px;
    border-radius: $radius;
    background-color: white !important;
    box-shadow: inset 0 0 0 1px #D5D7DA,
    0 1px 2px rgba(10, 13, 18, 0.05);


    font-family: inherit;
    font-weight: inherit;
    font-size: 14px;
    line-height: 20px;
    color: $c-teal;

    transition: $time;

    &:focus {
      box-shadow: 0 0 0 1px $c-teal-semi-light;
    }

    &::placeholder {
      color: $c-teal-light;
    }
  }

  &__select-arrow {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 14px;
    height: 14px;
  }
}
</style>