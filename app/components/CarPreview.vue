<template>
  <div class="car-preview">
    <NuxtImg
        src="/images/temp/car.jpg"
        height="169"
        class="car-preview__img"
    />

    <div class="car-preview__main">
      <div class="car-preview__title">
        Toyota Yaris Hybrid
      </div>
      <div class="car-preview__characteristic">
        Toyota 2008 Made
      </div>
      <div class="car-preview__characteristic">
        Manual Transmission
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.car-preview {
  overflow: hidden;
  border-radius: $radius-l;
  box-shadow: inset  0 0 0 1px $c-gray-lighter;

  &__img {
    display: flex;
    width: 100%;
    object-fit: cover;
  }

  &__main {
    padding: 16px;
  }

  &__title {
    margin: 0 0 16px;

    font-weight: $w-DMSans-semi-bold;
    font-size: 18px;
  }

  &__characteristic {
    font-size: 14px;
    color: #626F86;

    & + & {
      margin-top: 8px;
    }
  }
}
</style>