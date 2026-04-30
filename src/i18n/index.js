import zhCN from './zh-CN'
import enUS from './en-US'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
}

class I18n {
  constructor() {
    this.locale = localStorage.getItem('locale') || 'zh-CN'
    this.messages = messages
  }

  t(path) {
    const keys = path.split('.')
    let value = this.messages[this.locale]

    for (const key of keys) {
      if (value && value[key]) {
        value = value[key]
      } else {
        return path
      }
    }

    return value
  }

  setLocale(locale) {
    if (this.messages[locale]) {
      this.locale = locale
      localStorage.setItem('locale', locale)
      document.documentElement.lang = locale
    }
  }

  getLocale() {
    return this.locale
  }

  getAvailableLocales() {
    return Object.keys(this.messages)
  }
}

export const i18n = new I18n()
export default i18n
