<template>
  <div class="demo" style="padding-top: 40px">
    <h5download />
    <headerBar titleTxt="活动" isShare=true isReturn=true :shareMsg="shareMsg" />
  </div>
</template>

<script>
import headerBar from './common/headerBar'
import h5download from './common/h5download'
import {wxShare} from '../utils/wechatShare'

export default {
  name: 'demo',
  components: {
    headerBar,
    h5download
  },
  data () {
    return {
      shareMsg: {

      }
    }
  },
  methods: {

  },
  created () {
    let wxData = {
      title: '分享标题1',
      desc: '这是介绍啊',
      link: location.href,
      imgUrl: 'http://h5.activity.motherplanet.cn/img/logo.jpg' // 分享图标
    }
    wxShare(wxData)
  }
}
</script>

<style scoped lang="less">

</style>
