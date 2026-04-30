import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/styles/main.css'

const app = createApp(App)

// 全局属性：在模板中使用 $t('key')
app.config.globalProperties.$t = (key) => i18n.t(key)

app.use(router)
app.mount('#app')
