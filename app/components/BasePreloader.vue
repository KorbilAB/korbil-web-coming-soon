<template>
  <div
    ref="rootEl"
    class="base-preloader"
    :class="{
      [`_${size}`]: size,
      _light: light,
      _overlay: overlay,
      _transparent: transparent,
    }"
  >
    <div class="base-preloader__dots">
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  size?: 'small' | 'large'
  light?: boolean
  transparent?: boolean
  overlay?: boolean
}>()

const emit = defineEmits<{
  (e: 'mounted' | 'before-unmount'): void
}>()

const rootEl = ref<HTMLElement | null>(null)

onMounted(() => emit('mounted'))
onBeforeUnmount(() => emit('before-unmount'))

defineExpose({
  rootEl
})
</script>

<style lang="scss">
$base-preloader-animation-duration: 300ms;

.base-preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;

  color: $c-teal-dark;

  // OVERLAY

  &._overlay {
    position: absolute;
    z-index: 61;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(white, 0.4);
  }

  // SMALL

  &._small &__dots {
    gap: 3px;
  }

  &._small &__dots > div {
    width: 6px;
    height: 6px;
  }

  // LARGE

  &._large &__dots {
    gap: 6px;
  }

  &._large &__dots > div {
    width: 12px;
    height: 12px;
  }

  // LIGHT

  &._light {
    color: white;
  }

  // LIGHT

  &._transparent {
    background-color: transparent;
  }

  // DOTS

  &__dots {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  &__dots > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: currentColor;
    animation: basePreloaderDotFlashing;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-duration: $base-preloader-animation-duration;
  }

  &__dots > div:nth-child(1) {
    animation-delay: 0s;
  }

  &__dots > div:nth-child(2) {
    animation-delay: calc($base-preloader-animation-duration / 2);
  }

  &__dots > div:nth-child(3) {
    animation-delay: $base-preloader-animation-duration;
  }

  @keyframes basePreloaderDotFlashing {
    0% {
      opacity: 1;
    }

    50%,
    100% {
      opacity: 0.3;
    }
  }
}
</style>
