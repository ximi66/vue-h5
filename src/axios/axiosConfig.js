import axios from "axios";
import qs from "qs";
import Vue from "vue"

//原生获取token
let token = null;
registerCallBack({ //原生token回调
  setToken(data) {
    if(data){
      token = JSON.parse(data).token;
    }
  }
});

//发送请求之前
axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = token;  //设置token
  if (config.method === "post" && config.headers["Content-Type"] !== "application/json;charset=UTF-8") {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  // eslint-disable-next-line
  return Promise.reject(error);
});

//响应数据
axios.interceptors.response.use((response) => {
  if (response) {
    if(response.status === 200){
      if(parseInt(response.data.error_code)===20001){//原生 未登录跳转到登录页面
        window.callNative('doLogin');
      }
    }
  }
  return response;
}, (error) => {
  Vue.$vux.toast.show({
    text: '网络开小差...',
    type: "text",
    width:"120px",
    position: "middle"
  })
  // eslint-disable-next-line
  return Promise.reject(error);
});

export default axios;
