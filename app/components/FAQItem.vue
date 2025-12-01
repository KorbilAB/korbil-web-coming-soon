<template>
  <article
      :class="{
        _open: isOpen,
      }"
      class="faq-item"
  >
    <div
        v-motion="anim"
        :delay="200"
        class="faq-item__header"
        @click.prevent="isOpen = !isOpen"
    >
      <h4
          v-html="title"
          class="faq-item__title"
      />
      <button
          type="button"
          class="faq-item__header-toggle"
      >
        <IconsIconArrowDown/>
      </button>
    </div>
    <SlideToggle
        :open="isOpen"
    >
      <div class="faq-item__content">
        <p
            class="faq-item__text"
            v-html="text"
        />
      </div>
    </SlideToggle>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()

const isOpen = ref(false)

const anim = {
  initial: {
    y: 30,
    scale: 0.9,
    opacity: 0,
  },
  visibleOnce: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 300,
      delay: 100,
    }
  }
}
</script>

<style lang="scss">
.faq-item {

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
    cursor: pointer;
    user-select: none;
  }

  &__title {
    margin: 0;

    font-family: $ff-DMSans;
    font-weight: $w-DMSans-regular;
  }

  &__header-toggle {
    @include reset-button;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: $c-teal;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;

    & svg {
      width: 12px;
      height: 12px;

      transition: $time-modal;
    }
  }

  &._open &__header-toggle svg {
    transform: rotate(180deg);
  }

  &__content {
    padding-bottom: 18px;
  }

  &__text {
    margin: 0;

    font-weight: $w-DMSans-medium;
  }
}
</style>