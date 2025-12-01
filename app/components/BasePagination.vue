<template>
  <ul class="base-pagination">
    <li
        :class="{
          disabled: !prevPageRoute
        }"
        class="base-pagination__item">
      <component
          :is="prevPageRoute ? NuxtLinkLocale : 'div'"
          :to="prevPageRoute"
          aria-label="Previous"
          :class="{
            _disabled: !prevPageRoute
          }"
          class="base-pagination__link"
      >
        <span aria-hidden="true">&laquo;</span>
      </component>
    </li>

    <li

        v-for="n in totalPages"
        :key="n"
        class="base-pagination__item"
    >
      <component
          :is="currentPage === n ? 'div' : NuxtLinkLocale"
          :to="cratePageRoute(n)"
          :class="{
            _current: currentPage === n
          }"
          class="base-pagination__link"
      >
        {{ n }}
      </component>
    </li>

    <li
        :class="{
          disabled: !nextPageRoute
        }"
        class="base-pagination__item">
      <component
          :is="nextPageRoute ? NuxtLinkLocale : 'div'"
          :to="nextPageRoute"
          aria-label="Next"
          :class="{
            _disabled: !nextPageRoute
          }"
          class="base-pagination__link"
      >
        <span aria-hidden="true">&raquo;</span>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { NuxtLinkLocale } from '#components'

const props = withDefaults(defineProps<{
  totalPages: number,
  pageKey?: string
}>(), {
  pageKey: 'page'
})

const route = useRoute()

const currentPage = computed<number>(() => {
  return parseInt(route.query[props.pageKey] as string) || 1
})

const prevPageRoute = computed(() => {
  if (currentPage.value > 1) {
    return cratePageRoute(currentPage.value - 1)
  }

  return null
})

const nextPageRoute = computed(() => {
  if (currentPage.value < props.totalPages) {
    return cratePageRoute(currentPage.value + 1)
  }

  return null
})

function cratePageRoute(n: number) {
  return {
    query: {
      ...route.query,
      [props.pageKey]: n
    }
  }
}
</script>

<style lang="scss">
.base-pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &__item {
    display: flex;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    min-width: 40px;
    border-radius: $radius;
    border: 1px solid $c-gray-lighter;

    text-decoration: none;
    color: inherit;
    text-align: center;

    transition: $time;

    &:is(a) {
      @include hover {
        border-color: $c-teal;

        color: $c-teal;
      }
    }

    &._disabled {
      opacity: 0.3;
    }

    &._current {
      background-color: $c-teal;
      border-color: $c-teal;

      color: white;
    }
  }
}
</style>