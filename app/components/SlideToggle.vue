<template>
  <transition
    :duration="duration"
    name="test"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
  >
    <component
      :is="is"
      v-if="open"
      name="slide-toggle"
      class="slide-toggle"
    >
      <slot />
    </component>
  </transition>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  open?: boolean
  is?: string | Component
  duration?: number
}>(), {
  open: false,
  is: 'div',
  duration: 300,
})

function onBeforeEnter(el: Element) {
  const htmlEl = el as HTMLElement;

  htmlEl.style.height = '0px'
  htmlEl.style.transition = `${props.duration}ms`
  htmlEl.style.overflow = 'hidden'

  setTimeout(() => {
    htmlEl.style.height = `${el.scrollHeight}px`
  })
}

function onAfterEnter(el: Element) {
  const htmlEl = el as HTMLElement;

  htmlEl.style.height = ''
  htmlEl.style.transition = ''
  htmlEl.style.overflow = ''
}

function onBeforeLeave(el: Element) {
  const htmlEl = el as HTMLElement;

  htmlEl.style.height = `${htmlEl.offsetHeight}px`
  htmlEl.style.transition = `${props.duration}ms`
  htmlEl.style.overflow = 'hidden'

  setTimeout(() => {
    htmlEl.style.height = `0px`
  })
}

function onAfterLeave(el: Element) {
  const htmlEl = el as HTMLElement;

  htmlEl.style.height = ''
  htmlEl.style.transition = ''
  htmlEl.style.overflow = ''
}
</script>

<style lang="scss">

</style>
