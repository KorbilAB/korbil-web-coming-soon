<template>
  <div class="instructor-prev">
    <NuxtImg
        src="/images/temp/avatar.png"
        width="42"
        height="42"
        class="instructor-prev__img"
    />

    <div class="instructor-prev__main">
      <div class="instructor-prev__name">
        John Huffman Einstein
      </div>

      <div class="instructor-prev__description">
        Senior Instructor
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.instructor-prev {
  display: flex;
  align-items: center;
  gap: 8px;

  &__img {
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  &__main {
    width: 50%;
    flex-grow: 1;

    font-size: 14px;
  }

  &__name {
    margin-bottom: 2px;
  }

  &__description {
    color: #626F86;
  }
}
</style>