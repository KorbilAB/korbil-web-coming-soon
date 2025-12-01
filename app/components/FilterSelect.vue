<template>
  <div class="filter-select">
    <label
        :for="id"
        class="filter-select__label"
    >
      {{ label }}
    </label>
    <div class="filter-select__input-wrapper">
      <IconsIconArrowDown class="filter-select__select-arrow"/>
      <select
          :id="id"
          :value="modelValue?.key"
          class="filter-select__input _select"
          @change="onSelect($event)"
      >
        <option
            selected
            value
        >
          {{ t('filter-select.any') }}
        </option>
        <option
            v-for="option in options"
            :key="option.key"
            :value="option.key"
        >
          {{ option.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from 'lodash-es'
import type { TFilterOption } from '~~/data/filters/types/filter-option'

const props = defineProps<{
  modelValue?: TFilterOption | null
  options: TFilterOption[]
  label: string
  id?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: TFilterOption | null): void
}>()

const id = props.id || uniqueId()

const { t } = useI18n()

function onSelect(e: Event) {
  const key: string = e.target?.value || ''
  const value = props.options.find(option => option.key === key)
  emit('update:modelValue', value || null)
}
</script>

<style lang="scss">
.filter-select {
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

  &__input._select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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