export function useCustomSeo() {
  const { defaultLocale, baseUrl } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const i18nHead = useLocaleHead()

  useHead(() => {
    const canonicalPath = switchLocalePath(defaultLocale)
    const links = [...(i18nHead.value.link || [])]

    const canonicalIndex = links.findIndex(link => link.rel === 'canonical')
    if (canonicalIndex !== -1) {
      const url = new URL(canonicalPath, baseUrl.value)
      links[canonicalIndex] = {
        rel: 'canonical',
        href: url.href
      }

      console.log(links[canonicalIndex])
    }

    return {
      htmlAttrs: {
        lang: i18nHead.value.htmlAttrs!.lang
      },
      link: links,
    }
  })
}