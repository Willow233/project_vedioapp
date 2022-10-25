import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import '@/mock/index'
// 在ts模式下 安装了mock 还要安装对应的语法包 npm i --save-dev @types/mockjs

import { Tab, Tabs } from 'vant'

const app = createApp(App)

app.use(router)
// app.use(router)这个必须在mount('#app')前面，不然会导致可能无法渲染
app.mount('#app')
app.use(Tab)
app.use(Tabs)
