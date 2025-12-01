<template>
  <div class="base-chip">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.base-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  padding: 3px 8px;
  background-color: $c-gray-lightest;

  font-size: 14px;
  line-height: 18px;
  color: $c-teal;

  & svg {
    margin: -4px 0;
  }
}
</style>