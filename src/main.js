import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import App from './App.vue';
// 全局样式初始化
import 'normalize.css';
// 引入路由
import router from './router';
// 引入Store
import {store} from '@/store';
const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.use(store)
app.mount('#app');
