import {
    createApp
} from 'vue'
import App from './App.vue'
import '@/assets/style/global.scss'
import '@/assets/style/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import store from './store'
import './assets/style/iconfont/iconfont.css'
import * as echarts from 'echarts';
import ECharts from 'vue-echarts'

import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";

import {
    setupI18n
} from '@/i18n/setup18n';



const app = createApp(App)


app.use(router)
app.use(ElementPlus)
app.use(ElementPlusIconsVue)
app.use(echarts)
app.component('v-chart', ECharts)
app.use(store)

setupI18n(app);
app.use(VCalendar, {})
app.mount('#app')