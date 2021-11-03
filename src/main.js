import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from './axios';
import router from '@/router/index';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import App from './App.vue'
import { url } from '@/config'

//导入主题文件
Vue.config.productionTip = false;
window.axios = axios;
Vue.use(window.AVUE, {
  size: 'mini'
});
Vue.prototype.url = url;
Vue.use(ElementUI);
Vue.use(dataV);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
