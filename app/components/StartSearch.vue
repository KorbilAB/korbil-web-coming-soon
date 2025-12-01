<template>
  <div class="start-search">
    <BaseTabs
        v-model="currentTab"
        :tabs="tabs"
        class="start-search__tabs"
    />

    <LocationSearch
        class="start-search__search"
        @search="onSearch"
    />

    <p class="start-search__note">
      {{ t('start-search.note') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { TTab } from '~/components/BaseTabs.vue'

const { t } = useI18n()
const localeRoute = useLocaleRoute()

const tabs: TTab[] = [{
  key: 'school',
  title: 'School'
}, {
  key: 'risk-course',
  title: 'Risk Course'
}]

const currentTab = ref<TTab>(tabs[0] as TTab)

function onSearch(location: string) {
  const route = localeRoute({
    path: `/search/${currentTab.value.key}`,
    query: {
      filters: `location:${location || ''}`,
    }
  })

  navigateTo(route)
}
</script>

<style lang="scss">
.start-search {
  padding: 24px;
  border-radius: $radius-l;
  background-color: white;

  &__tabs {
    margin-bottom: 16px;
  }

  &__search {
    margin-bottom: 8px;
  }

  &__note {
    margin: 0;

    font-size: 14px;
  }
}
</style>