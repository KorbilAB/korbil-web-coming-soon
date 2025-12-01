<template>
  <div class="bread-crumbs">
    <NuxtLinkLocale
        to="/"
        class="bread-crumbs__item"
    >
      {{ t('bread-crumbs.home') }}
    </NuxtLinkLocale>

    <template
        v-for="(item) in items"
        :key="item.title"
    >
      <IconArrowDown class="bread-crumbs__arrow"/>
      <component
          :is="item.to ? NuxtLinkLocale : 'div'"
          :to="item.to"
          class="bread-crumbs__item"
      >
        {{ item.title }}
      </component>
    </template>
  </div>
</template>

<script setup lang="ts">
import IconArrowDown from '~/components/icons/IconArrowDown.vue'
import { type TBreadCrumb } from '~/stores/breadcrumbs'
import { NuxtLinkLocale } from '#components'

const { t } = useI18n()

defineProps<{
  items: TBreadCrumb[]
}>()
</script>

<style lang="scss">
.bread-crumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  &__item {
    font-size: 14px;
    text-decoration: none;
    color: $c-gray;

    &:last-child {
      font-weight: $w-DMSans-bold;
    }
  }

  &__arrow {
    width: 12px;
    height: 12px;
    transform: rotate(-90deg);
  }
}
</style>