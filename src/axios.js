import { Loading } from 'element-ui';
import axios from 'axios';
axios.defaults.timeout = 10000;
//返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; // 默认的
};
//跨域请求，允许保存cookie
let loadingInstance = '';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    text: '拼命加载中',
    background: 'rgba(0,0,0,0.5)',
    spinner: 'el-icon-loading'
  });
  window.globParams = {};
  var query = window.location.search.substring(1);
  query = query.split("&");
  query.forEach(ele => {
    var pair = ele.split("=");
    window.globParams[pair[0]] = pair[1]
  })
  //获取全局参数
  if (config.method == 'get') {
    var query = window.location.search;
    if (config.url.indexOf('?') == -1) {
      config.url = config.url + query
    } else {
      config.url = config.url + '&' + query.substring(1)
    }
  } else if (config.method == 'post' && typeof (config.data) === 'object') {
    config.data = Object.assign(config.data, window.globParams)
  }

  return config
}, error => {
  return Promise.reject(error)
});
//HTTPrequest拦截
axios.interceptors.response.use(config => {
  loadingInstance.close();
  return config;
}, error => {
  return Promise.reject(new Error(error));
})

export default axios;