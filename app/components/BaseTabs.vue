<template>
  <div class="base-tabs">
    <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="{
          _active: modelValue?.key === tab.key
        }"
        class="base-tabs__tab"
        @click.prevent="$emit('update:modelValue', tab)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
export type TTab = {
  key: string
  title: string
}

defineProps<{
  modelValue?: TTab | null
  tabs: TTab[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: TTab): void
}>()
</script>

<style lang="scss">
.base-tabs {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: $c-teal-lightest;
  border-radius: $radius;
  padding: 4px;

  &__tab {
    @include reset-button;
    cursor: pointer;
    border-radius: $radius;
    min-height: 48px;
    padding: 8px 16px;
    flex: 1 1 50%;

    font-weight: $w-DMSans-semi-bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: $c-teal;

    transition: $time;

    &._active {
      background-color: white;
    }
  }
}
</style>