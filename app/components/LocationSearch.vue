<template>
  <form
      ref="targetRef"
      :class="{
        _focused: focused
      }"
      class="location-search"
      @submit.prevent="onSearch"
  >
    <label
        class="location-search__input-wrapper"
        @click="focused = true"
    >
      <IconMapPoint class="location-search__icon"/>
      <input
          :value="focused ? search : selectedLocation"
          type="text"
          :placeholder="t('location-search.placeholder')"
          class="location-search__input"
          @input="search = $event.target?.value"
      >
    </label>

    <BaseBtn
        type="submit"
        :icon-prepend="IconSearch"
        class="location-search__btn"
    />

    <div
        v-if="focused"
        class="location-search__dropdown"
    >
      <div
          v-for="location in computedLocations"
          :key="location"
          class="location-search__item"
          @click.prevent="onSelect(location)"
      >
        {{ location }}
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import IconMapPoint from '~/components/icons/IconMapPoint.vue'
import IconSearch from '~/components/icons/IconSearch.vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

const locations = [
  'Stockholm',
  'Göteborg',
  'Malmö',
  'Uppsala',
  'Västerås',
]

const { t } = useI18n()

const targetRef = useTemplateRef<HTMLElement>('targetRef')

const focused = ref(false)
const search = ref('')
const selectedLocation = ref<string | null>(null)

const computedLocations = computed(() => {
  if (!search.value) {
    return locations
  }

  const query = search.value.toLowerCase()

  return locations.filter(l => l.toLowerCase().includes(query))
})

onClickOutside(targetRef, () => {
  close()
})

function close() {
  focused.value = false
  search.value = ''
}

function onSelect(location: string) {
  selectedLocation.value = location

  close()
}

function onSearch() {
  emit('search', selectedLocation.value || '')
}
</script>

<style lang="scss">
.location-search {
  position: relative;
  z-index: 41;
  border-radius: $radius;
  display: flex;
  align-items: center;
  gap: 24px;
  padding-right: 16px;
  box-shadow: inset 0 0 0 1px $c-gray-lighter;

  transition: $time;

  &._focused {
    box-shadow: inset 0 0 0 1px $c-teal;
  }

  &__input-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 50%;
    flex-grow: 1;
    padding: 20px 16px;
  }

  &__icon {
    width: 24px;
    height: 24px;

    color: $c-gray-black;
  }

  &__input {
    width: 50%;
    flex-grow: 1;
    border: 0;
    border-radius: 0;

    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      color: $c-gray-light;
    }
  }

  &__btn {
    padding-left: 12px;
    padding-right: 12px;
    min-width: 48px;
  }

  &__dropdown {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: white;
    margin-top: 1px;
    border: 1px solid $c-gray-lighter;
    padding: 16px 0;
    border-radius: $radius;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px rgba($c-gray-black, 0.2);
  }

  &__item {
    padding: 8px 16px;
    cursor: pointer;

    transition: $time;

    @include hover {
      color: $c-teal;
    }
  }
}
</style>