<template>
  <nav
      :class="{
         '_vertical': vertical,
      }"
      class="the-menu"
  >
    <NuxtLinkLocale
        to="/#hero"
        class="the-menu__link"
    >
      {{ t('theMenu.hero') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
        to="/#how-it-works"
        class="the-menu__link"
    >
      {{ t('theMenu.how-it-works') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
        to="/#early-access-benefits"
        class="the-menu__link"
    >
      {{ t('theMenu.early-access-benefits') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
        to="/#frequently-asked-questions"
        class="the-menu__link"
    >
      {{ t('theMenu.frequently-asked-questions') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
        to="/blogs"
        class="the-menu__link"
    >
      {{ t('theMenu.blogs') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
        to="/careers"
        class="the-menu__link"
    >
      {{ t('theMenu.careers') }}
    </NuxtLinkLocale>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  vertical?: boolean
}>()

const { t } = useI18n()
</script>

<style lang="scss">
.the-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  font-weight: $w-DMSans-semi-bold;
  color: $c-gray;


  &__link {
    text-decoration: none;
  }

  // _vertical

  &._vertical {
    flex-direction: column;
  }
}
</style>