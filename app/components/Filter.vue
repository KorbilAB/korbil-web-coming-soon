<template>
  <div class="filter">
    <BaseTabs
        :model-value="courseType"
        :tabs="courseTypes"
        class="filter__tabs"
        @update:model-value="onTypeChange"
    />

    <FilterSelect
        :model-value="courseLanguage"
        :options="courseLanguages"
        :label="t('filter.selects.languages')"
        id="filter-language"
        class="filter__select"
        @update:model-value="setGroupSingleItem('language', $event?.key)"
    />

    <FilterSelect
        :model-value="courseLocation"
        :options="courseLocations"
        :label="t('filter.selects.city')"
        id="filter-location"
        class="filter__select"
        @update:model-value="setGroupSingleItem('location', $event?.key)"
    />

    <FilterDate
        :model-value="courseDate"
        :label="t('filter.selects.date')"
        id="filter-date"
        class="filter__select"
        @update:model-value="setGroupSingleItem('date', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { TFilterOption } from '~~/data/filters/types/filter-option'
import { courseTypes } from '~~/data/filters/course-types'
import { useMainFilters } from '~/composables/useFilter'
import { courseLanguages } from '~~/data/filters/course-languages'
import { courseLocations } from '~~/data/filters/course-locations'

const props = defineProps<{
  currentTypeKey?: 'school' | 'risk-course'
}>()

const { t } = useI18n()
const localeRoute = useLocaleRoute()

const courseType = computed<TFilterOption | null>(() => courseTypes.find(t => t.key === props.currentTypeKey) || null)
const courseLanguage = computed<TFilterOption | null>(() => getSelectedFilter('language', courseTypes))
const courseLocation = computed<TFilterOption | null>(() => getSelectedFilter('location', courseTypes))
const courseDate = computed<string | null>(() => getGroupSingleItem('date'))

const { filters, getGroupSingleItem, setGroupSingleItem } = useMainFilters()

function getSelectedFilter(key: string, list: TFilterOption[]): TFilterOption | null {
  const filterValue = getGroupSingleItem(key)

  if (!filterValue) {
    return null
  }
  return list.find(t => t.key === filterValue) || null
}

function onTypeChange(e: TFilterOption) {
  const route = localeRoute({
    path: `/search/${e.key}`,
  })

  navigateTo(route)
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px 12px;

  &__tabs {
    align-self: flex-end;
    margin-right: auto;
    width: 290px;
  }

  &__select {
    width: 180px;
  }

  @include media-md {
    flex-wrap: wrap;

    &__tabs {
      width: 100%;
    }

    &__select {
      flex-grow: 1;
    }
  }

  @include media-sm {
    &__select {
      width: 100%;
    }
  }
}
</style>