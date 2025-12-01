import { type TBreadCrumb, useBreadcrumbsStore } from '~/stores/breadcrumbs'

export function useSetBreadCrumbs(items: TBreadCrumb[]) {
  const breadcrumbsStore = useBreadcrumbsStore()

  breadcrumbsStore.items = items
}