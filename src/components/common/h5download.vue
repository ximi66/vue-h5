<template>
  <div class="h5download" v-if="isApp">
    <div class="dlTip">
      <div class="iconTip">
        <img src="http://h5.activity.motherplanet.cn/img/logo.jpg" alt="icon">
        <div class="iconDes">
          <div class="title">母星系</div>
          <div>创造不可思议</div>
        </div>
      </div>
      <div class="txtTip">
        <span class="btnsty" @click="openDownload()">立即下载</span>
      </div>
    </div>
    <div class="openApp" @click="openDownload()">App打开</div>
  </div>
</template>

<script>

export default {
  name: 'h5download',
  data () {
    return {
      isApp: window.isApp
    }
  },
  methods: {
    openDownload () { // 打开下载页面
      if (!window.isApp) {
        window.toDownload()
        return
      }
    }
  }
}
</script>

<style scoped lang="less">
  .h5download{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1001;
    .dlTip {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      box-sizing: border-box;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0.4rem;
      background-color: #E9ECF0;

      .iconTip {
        display: flex;
        align-items: center;

        img {
          width: 36px;
        }

        .iconDes {
          padding-left: .4rem;
        }
      }

      .btnsty {
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        color: #FFF;
        background: #EFB400;
        border-radius: 2px;
        display: inline-block;
      }

    }
    .openApp{
      position: fixed;
      bottom: 50px;
      left: 50%;
      width: 90px;
      height: 32px;
      line-height: 32px;
      margin-left: -45px;
      font-size: 1rem;
      color: #FFF;
      text-align: center;
      background: #F2B300;
      border-radius: 50px;
      z-index: 999;
    }
  }

</style>
