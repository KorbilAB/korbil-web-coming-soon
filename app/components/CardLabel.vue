<template>
  <div class="card-label">
    <IconSalary/>
    10%
  </div>
</template>

<script setup lang="ts">

import IconSalary from '~/components/icons/IconSalary.vue'
</script>

<style lang="scss">
.card-label {
  position: absolute;
  top: 16px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 58px;
  background-color: $c-orange;
  border-radius: 4px 4px 0 4px;
  padding: 5px 4px;

  font-weight: $w-DMSans-semi-bold;
  font-size: 14px;
  line-height: 16px;
  color: white;

  & svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 0;
    width: 0;
    height: 0;
    border-top: 8px solid #9F4200;
    border-right: 6px solid transparent;
  }
}
</style>