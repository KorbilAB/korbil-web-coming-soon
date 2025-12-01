<template>
  <div class="section-header">
    <div
        v-if="subtitle"
        v-motion-fade-up
        class="section-header__subtitle"
    >
      {{ subtitle }}
    </div>
    <h2
        v-motion-fade-up
        :delay="200"
        class="section-header__title">
      {{ title }}
    </h2>
    <p
        v-if="description"
        v-motion-fade-up
        :delay="300"
        class="section-header__description"
        v-html="description"
    />
  </div>
</template>

<script setup lang="ts">
 defineProps<{
   title?: string
   subtitle?: string
   description?: string
 }>()
</script>

<style lang="scss">
.section-header {
  display: flex;
  flex-direction: column;
  text-align: center;

  &__subtitle {
    align-self: center;
    margin: 0 0 16px;
    padding: 3px 10px;
    border-radius: 12px;
    background-color: $c-gray-lightest;

    font-family: $ff-DMSans;
    font-weight: $w-DMSans-semi-bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
    color: $c-teal;
  }

  &__title {
    margin: 0 0 8px;

    font-size: 36px;
  }

  &__description {
    width: 760px;
    max-width: 100%;
    margin: 0 auto;

    white-space: pre-line;
  }
}
</style>