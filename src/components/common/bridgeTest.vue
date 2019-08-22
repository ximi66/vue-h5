<template>
  <div class="wrap">
    <div>事件：<span>{{eName}}</span></div>
    <div>回调：<span>{{eBack}}</span></div>
    <input type="text" placeholder="输入标题" v-model="title">
    <a @click="setTitle">设置标题</a>
    <div>
      <a @click="closeWebview">关闭webview</a>
      <a @click="share">分享</a>
      <a @click="getUserID">获取ID</a>
      <a @click="getToken">获取Token</a>
      <a @click="doLogin">登录</a>
      <a @click="bindPhone">绑定手机号</a>
      <a @click="goto">跳转原生页面Router</a>
      <a @click="openWebview">打开隐藏标题栏的Webview</a>
    </div>
    <div class="err">
      本次修改时间：2019-6-20 21:55
    </div>
  </div>
</template>

<script>
import {registerCallBack, callNative} from '../../utils/bridge'

export default {
  name: 'bridge',
  data () {
    return {
      title: '页面标题啊',
      eName: '',
      eBack: '',
      err: '无'
    }
  },
  mounted () {
    let self = this
    // 注册回调函数
    registerCallBack({
      shareCallback: function (data) {
        self.eBack = '分享回调 ' + JSON.stringify(data)
        // 分享回调
        window.console.log(data)
      },
      getUserIDCallback: function (data) {
        self.eBack = '获取userID回调 ' + JSON.stringify(data)
        // 获取userID回调
        window.console.log(data)
      },
      doLoginCallback: function (data) {
        self.eBack = '登录回调 ' + JSON.stringify(data)
        // 登录回调
        window.console.log(data)
      },
      bindPhoneCallback: function (data) {
        self.eBack = '绑定手机号回调 ' + JSON.stringify(data)
        // 绑定手机号回调
        window.console.log(data)
      },
      setToken (data) {
        self.eBack = 'getToken回调 ' + JSON.stringify(data)
        // getToken回调
        window.console.log(data)
      }
    })
  },
  methods: {
    setTitle () { // 1. 设置标题
      this.eName = '设置标题 ' + this.title
      callNative('setTitle', {'title': this.title})
    },
    closeWebview () { // 2. 关闭webview
      this.eName = '关闭webview'
      callNative('closeWebview')
    },
    share () { // 3. 分享 调用客户端分享
      let data = {
        title: '分享标题aa',
        desc: '分享内容简介bbb',
        img: 'http://h5.motherplanet.cn/image/index/logo.png',
        url: 'http%3A%2F%2Fh5.motherplanet.cn%2F%23%2Findex'
      }
      this.eName = '分享 ' + JSON.stringify(data)
      callNative('share', data)
    },
    getUserID () { // 4. 获取ID
      this.eName = '获取ID'
      callNative('getUserID')
    },
    doLogin () { // 5. 登录
      this.eName = '登录'
      callNative('doLogin')
    },
    bindPhone () { // 6. 绑定手机号
      this.eName = '绑定手机号'
      callNative('bindPhone')
    },
    goto () { // 7. 跳转原生页面Router
      let url = 'mplanet://videoInfo/1337'
      this.eName = '跳转原生页面Router ' + url
      callNative('goto', {url})
    },
    openWebview () { // 8.打开隐藏标题栏的Webview mplanet://webview
      let url = 'mplanet://webview/1/http%3A%2F%2Fbaidu.com'
      this.eName = '打开隐藏标题栏的Webview '
      callNative('goto', {url: url})
    },
    getToken () { // 获取Token
      this.eName = '获取Token'
      callNative('getToken')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    padding: .2rem;
  }

  input {
    margin-top: .1rem;
    border: solid 1px #eee;
    padding: .1rem;
    line-height: 1;
    font-size: .2rem;
    margin-right: .2rem;
  }

  a {
    color: #999;
    display: inline-block;
    border: solid 1px #999;
    padding: .1rem;
    margin-right: .4rem;
    margin-bottom: .4rem;
    border-radius: 4px;
  }

  a:active {
    color: #000;
    border-color: #000;
  }

  div {
    padding-bottom: .4rem;
  }

  span {
    color: #999;
  }

  .err {
    color: red;
  }
</style>
