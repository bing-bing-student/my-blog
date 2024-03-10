import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import ElementPlus from 'element-plus'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/iconfont/iconfont.css'
import 'element-plus/dist/index.css'
import 'swiper/css';

import _axios from './utils/axios'
import store from './vuex/store'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueAwesomeSwiper)
app.use(store)

app.config.globalProperties.$axios = _axios
window.$axios = _axios

app.mount('#app')
