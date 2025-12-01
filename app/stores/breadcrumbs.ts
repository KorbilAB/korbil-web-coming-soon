import type { RouteLocationRaw } from '#vue-router'

export type TBreadCrumb = {
  title: string
  to?: RouteLocationRaw | null
}

export const useBreadcrumbsStore = defineStore('breadcrumbs', () => {
  const items = ref<TBreadCrumb[]>([])

  return { items }
})
