export function useApiLanguage() {
  const { locale } = useI18n();
  const languages = {
    'en': 'en-US',
    'sv': 'sv-SE',
  }

  return computed(() => {
    return languages[locale.value]
  })
}