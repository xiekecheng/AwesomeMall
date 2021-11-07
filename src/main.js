import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import App from './App.vue';
import 'normalize.css';
import router from './router';
const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount('#app');
