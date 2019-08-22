// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/utils/bridge.js' //  桥协议
import axios from '@/axios/axiosConfig'

//  vux
import { ToastPlugin } from 'vux'

import { defaultInfo } from './utils/defaultInfo' //  终端
import {APP_ANDROID_DOWNLOAD, APP_IOS_DOWNLOAD} from './utils/config'

// 样式
import '@/style/base.css'
import '@/style/public.css'
Vue.use(ToastPlugin)

window.isApp = defaultInfo.platform === 'mplanet'
window.device = defaultInfo.device
window.toDownload = function () {
  window.location.href = window.device === 'ios' ? APP_IOS_DOWNLOAD : APP_ANDROID_DOWNLOAD
}

Vue.config.productionTip = false

Vue.prototype.$axios = axios

if (process.env.NODE_ENV !== 'dev') {
  axios.defaults.baseURL = process.env.API
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
