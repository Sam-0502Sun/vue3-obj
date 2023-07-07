import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入全局样式
import '@/assets/styles/common.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
