<template>
  <div class="appShareTop clearfix">
    <div>
      <a v-if="isReturn" @click ="returnIt()" class="pull-left">
        <img src="@/assets/images/return@2x.png">
      </a>
    </div>
    <div class="txt-center"><a>{{titleTxt}}</a></div>
    <div>
      <a v-if="isShare" @click ="shareIt()" class="pull-right">
        <img src="@/assets/images/icon_video_share@2x.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  props: ['titleTxt', 'isShare', 'isReturn', 'shareMsg'],
  methods: {
    returnIt () {
      if (this.$route.query.page_type === 'first') {
        window.callNative('closeWebview')
      } else {
        window.history.back()
      }
    },
    shareIt () {
      window.callNative('share', this.shareMsg)
      // window.callNative('share', {
      //   title: '分享join',
      //   desc: '分享内容简介',
      //   img: 'http://h5.motherplanet.cn/image/index/logo.png',
      //   url: window.location.href,
      // });
    }
  }
}
</script>

<style lang="less" scoped>
  .appShareTop{
    width: 100%;
    background: #fff;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    img{
      width: 20px!important;
    }
    a{
      padding: 10px;
      display: inline-block;
      font-size: 1.4rem;
    }
    .txt-center{
      flex: 1;

    }
  }
</style>
