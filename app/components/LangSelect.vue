<template>
  <div
      ref="targetRef"
      class="lang-select"
  >
    <button
        type="button"
        class="lang-select__trigger"
        @click.prevent.stop="isOpen = !isOpen"
    >
      <IconsIconLocale class="lang-select__trigger-icon"/>
      <span class="lang-select__trigger-content">
         {{ t(`langSelect.options.${currentLocale}`) }}
      </span>
      <IconsIconArrowDown class="lang-select__trigger-arrow"/>
    </button>
    <transition name="dropdown">
      <div
          v-if="isOpen"
          class="lang-select__dropdown"
      >
        <template
            v-for="(locale) in localesKeys"
            :key="locale"
        >
          <NuxtLink
              :to="switchLocalePath(locale)"
              :class=" {_active: locale === currentLocale}"
              class="lang-select__item"
              @click="isOpen = false"
          >
            {{ t(`langSelect.options.${locale}`) }}
          </NuxtLink>
        </template>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSwitchLocalePath } from '#i18n'
import { onClickOutside } from '@vueuse/core'

const { t, locale: currentLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

type ULocale = 'en' | 'sv'

const localesKeys: ULocale[] = ['en', 'sv']

const targetRef = useTemplateRef<HTMLElement>('targetRef')
const isOpen = ref(false)

onClickOutside(targetRef, () => {
  isOpen.value = false
})
</script>

<style lang="scss">
.lang-select {
  position: relative;
  z-index: 41;
  min-width: 120px;

  &__trigger {
    @include reset-button;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    padding: 8px 0;

    text-align: left;

    transition: $time;

    @include hover {
      color: $c-teal;
    }
  }

  &__trigger-icon {
    width: 20px;
    height: 20px;
  }

  &__trigger-content {
    flex-grow: 1;
  }

  &__trigger-arrow {
    width: 14px;
    height: 14px;
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    box-shadow: 0 0 8px rgba($c-teal-dark, 0.1);
    display: flex;
    flex-direction: column;
    border-radius: $radius;
    padding: 4px 0;
    background-color: white;
  }

  &__item {
    padding: 4px 12px;

    text-decoration: none;
  }
}
</style>
