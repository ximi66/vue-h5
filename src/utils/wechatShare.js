// 微信分享JDK
import axios from 'axios'
export function wxShare(data) {
  axios({
    method: "get",
    url: "/activity/api.getJsSdkConfig",  //微信分享接口
  }).then(res => {
    if (res.data) {
      let jssdk = res.data.data;
      // 配置功能
      wx.config({
        debug: true,
        appId: jssdk.appId,
        timestamp: parseInt(jssdk.timestamp),
        nonceStr: jssdk.nonceStr,
        signature: jssdk.signature,
        jsApiList: [
          "onMenuShareTimeline",//分享给好友
          "onMenuShareAppMessage"//分享到朋友圈
        ]
      });
    }
    wx.ready(function () {
      wx.onMenuShareTimeline({  //分享朋友圈
        title: data.title, // 分享标题
        desc: data.desc,
        link: data.link, // 分享链接
        imgUrl: data.imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({  //分享给朋友
        title: data.title, // 分享标题
        desc: data.desc,
        link: data.link, // 分享链接
        imgUrl: data.imgUrl // 分享图标
      });
    });
  })
}
