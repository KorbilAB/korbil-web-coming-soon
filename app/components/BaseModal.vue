<template>
  <transition name="base-modal">
    <div
        v-if="isOpen"
        ref="modalEl"
        tabindex="0"
        :class="{
        [`_${width}`]: !!width,
      }"
        class="base-modal"
        @keyup.esc="onClose"
        @click.prevent="onClose"
    >
      <div
          class="base-modal__content-wrapper"
          @click.stop
      >
        <button
            v-if="!hideCloseBtn"
            class="base-modal__close-btn"
            @click.prevent="onClose"
        >
          <IconClose/>
        </button>

        <slot
            name="content"
            v-bind="getSlotProps()"
        >
          <div class="base-modal__content">
            <slot v-bind="getSlotProps()"/>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import IconClose from '~/components/icons/IconClose.vue'
import { nextTick } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  width?: 'middle' | 'wide'
  hideCloseBtn?: boolean
}>(), {
  modelValue: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const isOpen = ref(false)
const modalEl = ref<HTMLElement | null>(null)

watch(() => props.modelValue, () => {
  nextTick(() => {
    isOpen.value = props.modelValue
  })
}, { immediate: true })

watch(isOpen, (open) => {
  if (open) {
    afterOpen()
  } else {
    afterClose()
  }
}, { immediate: true })

onUnmounted(() => {
  afterClose()
})

function getSlotProps() {
  return {
    isOpen: isOpen,
    onOpen,
    onClose,
  }
}

function onOpen() {
  emit('update:modelValue', true)
}

function onClose() {
  emit('update:modelValue', false)
  emit('close')
}

function afterOpen() {
  setTimeout(() => {
    disableScroll({
      paddingElements: [modalEl.value]
    })
  })
}

function afterClose() {
  enableScroll({
    paddingElements: [modalEl.value]
  })
}
</script>

<style lang="scss">
$width: 636px;

.base-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 91;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0 $side-padding-lg;

  transition: opacity $time-modal;

  &__content-wrapper {
    position: relative;
    flex: 0 0 auto;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__content {
    flex: 0 0 auto;
    width: $width;
    max-width: 100%;
    background-color: white;
    border-radius: $radius-l;
    overflow: hidden;
    overflow-y: auto;
    max-height: calc(100dvh - $side-padding-lg * 2);
    padding: 24px;

    @include scrollbar;
  }

  &__close-btn {
    @include reset-button;
    position: absolute;
    z-index: 10;
    top: 38px;
    right: 25px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: $time;

    & svg {
      width: 24px;
      height: 24px;
    }

    @include hover {
      color: $c-error;
    }
  }

  @include media-md {
    padding: 0 $side-padding-md;

    &__content {
      max-height: calc(100dvh - $side-padding-md * 2);
    }
  }

  @include media-sm {
    padding: 0 $side-padding-sm;

    &__content {
      max-height: calc(100dvh - $side-padding-sm * 2);
    }
  }

  @include media-xs {
    padding: 0 $side-padding-xs;

    &__content {
      max-height: calc(100dvh - $side-padding-xs * 2);
    }
  }

  @include media-sm {
    &__content {
      padding: 24px 16px;
    }

    &__close-btn {
      top: 17px;
      right: 17px;
    }
  }
}

.base-modal-enter-active,
.base-modal-leave-active {
  transition: opacity $time-modal ease;
}

.base-modal-enter-from,
.base-modal-leave-to {
  opacity: 0;
}
</style>
