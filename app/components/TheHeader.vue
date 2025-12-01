<template>
  <header
      v-motion-fade-down
      :delay="100"
      :class="{
        '_menu-open': isOpenMobMenu
      }"
      class="the-header  g-container">
    <div class="the-header__content  g-container-inner">
      <TheLogo class="the-header__logo"/>

      <TheMenu
          v-if="!isMDOrSmaller"
          class="the-header__menu"
      />

      <LangSelect class="the-header__lang-select"/>

      <BaseBtn
          v-if="!isMDOrSmaller"
          to="/#wait-list"
          color="light-teal"
          class="the-header__wait-list-btn"
      >
        Join Waitlist
      </BaseBtn>

      <BurgerBtn
          v-if="isMDOrSmaller"
          :model-value="isOpenMobMenu"
          @click.prevent="isOpenMobMenu = !isOpenMobMenu"
      />

      <transition name="dropdown">
        <MobMenu
            v-if="isOpenMobMenu"
            class="the-header__mob-menu"
            @close="isOpenMobMenu = false"
        />
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWindowSize } from "~/composables/useWindowSize";

const isOpenMobMenu = ref(false)
const { isMDOrSmaller } = useWindowSize()
</script>

<style lang="scss">
.the-header {
  position: sticky;
  z-index: 81;
  top: 0;
  width: 100%;
  background-color: white;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: $header-height;
    padding: 16px 0;
  }

  &__menu {
    margin: 0 auto;
  }

  @include media-md {
    &._menu-open {
      z-index: 92;
    }

    &__content {
      padding: 4px 0;
      min-height: $header-height-mob;
    }

    &__logo {
      margin-right: auto;
    }

    &__mob-menu {
      position: fixed;
      z-index: 2;
      top: $header-height-mob;
      left: 0;
      width: 100%;
      height: calc(100dvh - $header-height-mob);
    }
  }
}
</style>