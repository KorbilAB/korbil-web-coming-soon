import { computed, type WritableComputedRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import type { IFiltersParams } from '@/plugins/api/generalTypes/filters-params.interface'

type TFilters = Record<string, string[]>
type TFiltersStore = WritableComputedRef<TFilters | null>

export interface IComposableFilters {
  filters: WritableComputedRef<TFilters | null>

  getAll: () => TFilters | null
  getGroupItems: (groupName: string) => string[]
  getGroupSingleItem: (groupName: string) => string | null
  setAll: (filters: TFilters | null) => void
  setGroupItems: (groupName: string, items: string[]) => void
  setGroupItem: (groupName: string, item: string) => void
  setGroupSingleItem: (groupName: string, item?: string | null) => void
  clearAll: () => void
  clearGroup: (groupName: string) => void
  // getFiltersForApi: () => IFiltersParams
}

export interface IComposableFiltersOptions {
  store: TFiltersStore
}

export interface FiltersRouteQueryStoreProps {
  filtersQueryKey: string
  filtersSeparator: string
  filterNameSeparator: string
  filterItemsSeparator: string
}

export function useFiltersRouteQueryStore(props?: Partial<FiltersRouteQueryStoreProps>): TFiltersStore {
  const defaultProps: FiltersRouteQueryStoreProps = {
    filtersQueryKey: 'filters',
    filtersSeparator: ';',
    filterNameSeparator: ':',
    filterItemsSeparator: ',',
  }

  const {
    filtersQueryKey,
    filtersSeparator,
    filterNameSeparator,
    filterItemsSeparator,
  } = Object.assign({}, defaultProps, props)

  const route = useRoute()
  const router = useRouter()

  return computed({
    get(): TFilters {
      const routeFiltersQuery = route.query[filtersQueryKey]
      const routeFilters: string = (Array.isArray(routeFiltersQuery) ? routeFiltersQuery[0] : routeFiltersQuery) || ''

      const routeFiltersSplit: string[] = routeFilters.split(filtersSeparator)

      return routeFiltersSplit.reduce((result: TFilters, filterGroup: string) => {
        const [name, items]: string[] = filterGroup.split(filterNameSeparator)
        if (!name || !items) {
          return result
        }

        result[name] = items.split(filterItemsSeparator)

        return result
      }, {})
    },
    set(filters: TFilters | null): void {
      filters = (filters || {}) as TFilters

      const filtersArray: [string, string[]][] = Object.entries(filters)

      const filtersString = filtersArray
          .map(([name, items]: [string, string[]]) => {
            if (!items.length) {
              return null
            }
            return `${name}${filterNameSeparator}${items.join(filterItemsSeparator)}`
          })
          .filter(s => s)
          .join(filtersSeparator)

      router.push({
        query: {
          ...route.query,
          [filtersQueryKey]: filtersString || undefined
        }
      })
    }
  })
}

export function useFilters(options: IComposableFiltersOptions): IComposableFilters {
  const filtersStore = options.store

  function getAll(): TFilters | null {
    return filtersStore.value
  }

  function getGroupItems(groupName: string): string[] {
    return filtersStore.value?.[groupName] || []
  }

  function getGroupSingleItem(groupName: string): string | null {
    const items = getGroupItems(groupName)
    return items?.[0] || null
  }

  function setAll(filters: TFilters | null) {
    filtersStore.value = filters
  }

  function setGroupItems(groupName: string, items?: string[]) {
    const filters: TFilters = filtersStore.value || {}
    if (items?.length) {
      filters[groupName] = items
    } else {
      delete filters[groupName]
    }

    filtersStore.value = filters
  }

  function setGroupItem(groupName: string, item: string) {
    const filters: TFilters = filtersStore.value || {}
    const items: string[] = getGroupItems(groupName)

    if (!items.includes(item)) {
      items.push(item)
    }

    filters[groupName] = items

    filtersStore.value = filters
  }

  function setGroupSingleItem(groupName: string, item?: string | null) {
    const filters: TFilters = filtersStore.value || {}

    if (item) {
      filters[groupName] = [item]
    } else {
      delete filters[groupName]
    }

    filtersStore.value = filters
  }

  function clearAll() {
    filtersStore.value = null
  }

  function clearGroup(groupName: string): void {
    const filters: TFilters = filtersStore.value || {}

    delete filters[groupName]

    filtersStore.value = filters
  }

  // function getFiltersForApi(): IFiltersParams {
  //   const filters: TFilters | null = filtersStore.value
  //
  //   const result: IFiltersParams = {}
  //
  //   if (!filters) {
  //     return result
  //   }
  //
  //   for (const key in filters) {
  //     (filters[key] as string[]).forEach((value, index) => {
  //       result[`filter[${key}][${index}]`] = value
  //     })
  //   }
  //
  //   return result
  // }

  return {
    filters: filtersStore,

    getAll,
    getGroupItems,
    getGroupSingleItem,
    setAll,
    setGroupItems,
    setGroupItem,
    setGroupSingleItem,
    clearAll,
    clearGroup,
    // getFiltersForApi,
  }
}

export function useMainFilters(props?: Partial<FiltersRouteQueryStoreProps>): IComposableFilters {
  return useFilters({
    store: useFiltersRouteQueryStore(props)
  })
}
