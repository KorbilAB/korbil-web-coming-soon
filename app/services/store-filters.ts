type TFilters = Record<string, string | null>

export function setStorageFilters(storageKey: string, data: TFilters) {
  if (!data) {
    removeStorageFilters(storageKey)
    return
  }

  const existingFilters = getStorageFilters(storageKey) || {}
  const mergedFilters = { ...existingFilters, ...data }

  window.localStorage.setItem(storageKey, JSON.stringify(mergedFilters))
}

export function getStorageFilters(storageKey: string): TFilters | null {
  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    return null
  }
}

export function removeStorageFilters(storageKey: string) {
  window.localStorage.removeItem(storageKey)
}
