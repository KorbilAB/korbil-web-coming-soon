import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/sv'

export function useDayjs() {
  const { locale } = useI18n()

  dayjs.locale(locale.value)

  watch(locale, () => {
    dayjs.locale(locale.value)
  })

  return dayjs
}