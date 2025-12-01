<template>
  <div class="gide-page g-container">
    <div class="g-container-inner">
      <hr>
      <BaseBtn>
        Button
      </BaseBtn>
      <BaseBtn disabled>
        Disabled
      </BaseBtn>
      <BaseBtn outlined>
        outlined
      </BaseBtn>
      <BaseBtn color="light-teal">
        light-blue
      </BaseBtn>
      <BaseBtn disabled color="light-teal">
        light-blue
      </BaseBtn>
      <BaseBtn disabled outlined>
        light-blue
      </BaseBtn>
      <BaseBtn rounded>
        light-blue
      </BaseBtn>

      <hr>

      <BaseBtn
          shadow
          outlined
          size="small"
          :icon-prepend="IconChat"
      >
        Reserve a spot
      </BaseBtn>
      <BaseBtn
          shadow
          color="light-green"
          size="small"
          :icon-prepend="IconChat"
      >
        Reserve a spot
      </BaseBtn>
      <BaseBtn
          shadow
          outlined
          color="light-green"
          size="small"
          :icon-prepend="IconChat"
      >
        Reserve a spot
      </BaseBtn>
      <BaseBtn
          shadow
          outlined
          color="light-green"
          size="small"
          disabled
          :icon-prepend="IconChat"
      >
        Reserve a spot
      </BaseBtn>
    </div>
  </div>
</template>

<script setup lang="ts">

import IconChat from '~/components/icons/IconChat.vue'
</script>

<style lang="scss">

</style>