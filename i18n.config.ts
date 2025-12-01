const isProd = true

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  lazy: true,
  fallbackLocale: isProd ? ['en', 'sv'] : undefined,
  warnHtmlMessage: false,
}));