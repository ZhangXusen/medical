import { createI18n } from 'vue-i18n'		//引入vue-i18n组件
import messages from './getMessage'
 
  //注册i8n实例并引入语言文件
 const localeData = {
    legacy: false, // composition API
    locale: 'zh-CN',
    messages,
 }
 
 // setup i18n instance with glob
export function setupI18n(app) {
    const i18n = createI18n(localeData);
    app.use(i18n);
}