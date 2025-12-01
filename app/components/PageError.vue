<template>
  <section class="page-error">
    <div class="page-error__code">
      {{ code }}
    </div>
    <div class="page-error__title">
      {{ title }}
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  code: string | number
  title: string
}>()
</script>

<style lang="scss">
.page-error {
  display: flex;
  flex-direction: column;
  gap: 32px;

  text-align: center;

  &__code {
    font-family: $ff-Poppins;
    font-weight: $w-Poppins-bold;
    font-size: 32px;
    line-height: 1.33;
    color: $c-gray-black;
  }

  &__title {
    font-family: $ff-Poppins;
    font-weight: $w-Poppins-bold;
    font-size: 56px;
    line-height: 1.33;
    color: $c-gray-black;
  }
}
</style>