import { i18n } from '@/i18n-config'

export function getLocalizedPath(path: string, locale: string) {
  return `/${locale}${path}`
}

export function isValidLocale(locale: string): locale is typeof i18n.locales[number] {
  return i18n.locales.includes(locale as any)
}

export function getDefaultLocale() {
  return i18n.defaultLocale
}