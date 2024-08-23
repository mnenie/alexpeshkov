export default function useLanguage() {
  const cookies = useCookie('locale')
  const { locale, locales, setLocale } = useI18n()

  const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
  })
  const activeLocale = computed(() => {
    const activeLocale = locales.value.find(i => i.code === locale.value)
    return activeLocale?.name || ''
  })

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale)
    cookies.value = newLocale
  }

  watch(locale, (newLocale) => {
    cookies.value = newLocale
  })

  return {
    availableLocales,
    activeLocale,
    changeLocale,
  }
}
