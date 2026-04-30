<template>
  <div class="language-toggle">
    <button
      v-for="locale in availableLocales"
      :key="locale"
      :class="['lang-btn', { active: currentLocale === locale }]"
      @click="switchLanguage(locale)"
    >
      {{ getLanguageLabel(locale) }}
    </button>
  </div>
</template>

<script>
import { i18n } from '../i18n'

export default {
  name: 'LanguageToggle',
  data() {
    return {
      currentLocale: i18n.getLocale(),
      availableLocales: i18n.getAvailableLocales()
    }
  },
  methods: {
    switchLanguage(locale) {
      i18n.setLocale(locale)
      this.currentLocale = locale
      this.$forceUpdate()
    },
    getLanguageLabel(locale) {
      const labels = {
        'zh-CN': '中文',
        'en-US': 'EN'
      }
      return labels[locale] || locale
    }
  },
  mounted() {
    this.currentLocale = i18n.getLocale()
  }
}
</script>

<style scoped>
.language-toggle {
  display: flex;
  gap: 4px;
}

.lang-btn {
  padding: 6px 10px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s;
}

.lang-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.lang-btn:hover:not(.active) {
  background: var(--bg-hover);
}
</style>
