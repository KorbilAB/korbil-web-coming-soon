<template>
  <div
      class="mob-menu"
      @click="onMenuClick"
  >
    <div class="mob-menu__content">
      <TheMenu
          vertical
          class="mob-menu__menu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()

function onMenuClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target.closest('a, button')) {
    emit('close')
  }
}
</script>

<style lang="scss">
.mob-menu {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__content {
    padding: 16px $side-padding-md 64px;
    overflow-y: auto;
  }

  @include media-sm {
    &__content {
      padding: 16px $side-padding-sm 64px;
    }
  }

  @include media-xs {
    &__content {
      padding: 16px $side-padding-xs 64px;
    }
  }
}
</style>