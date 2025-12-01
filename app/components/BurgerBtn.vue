<template>
  <button
      :class="{
        _open: modelValue
      }"
      class="burger-btn"
  >
    Menu
  </button>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: boolean
}>()
</script>

<style lang="scss">
.burger-btn {
  @include reset-button;
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;

  font-size: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 14px;
    left: 10px;
    display: block;
    width: 20px;
    height: 2px;
    background-color: $c-gray-black;

    transition: $time-modal;
  }

  &::after {
    top: 24px;
  }

  &._open::before {
    top: 19px;
    transform: rotate(45deg);
  }

  &._open::after {
    top: 19px;
    transform: rotate(-45deg);
  }
}
</style>