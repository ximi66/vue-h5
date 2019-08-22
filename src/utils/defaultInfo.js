let platform = ''
let device = ''

let version = versions()

if (version.weibo) {
  platform = 'weibo'
} else if (version.weixin) {
  platform = 'weixin'
} else if (version.alipay) {
  platform = 'alipay'
} else if (version.qq) {
  platform = 'qq'
} else if (version.mobile) {
  platform = 'mobileBrowser'
} if (version.mplanet) {
  platform = 'mplanet'
} else {
  platform = 'pcBrowser'
}

if (versions().ios) {
  device = 'ios'
}

if (versions().android) {
  device = 'android'
}

// qq 客户端
// https://www.cnblogs.com/xuzhengzong/p/9243127.html
function isQQAPP() {
  const ua = navigator.userAgent
  var isIosQQ =
    /iPad|iPhone|iPod/.test(ua) && !window.MSStream && /\sQQ/i.test(ua)
  var isAndroidQQ =
    /(Android)/i.test(ua) &&
    /MQQBrowser/i.test(ua) &&
    /\sQQ/i.test(ua.split('MQQBrowser'))
  return isIosQQ || isAndroidQQ
}

export function versions() {
  const ua = navigator.userAgent.toLowerCase()

  let a = {
    // 移动终端浏览器版本信息
    ios: /ipad|iphone|ipod/.test(ua) && !window.MSStream, // ios终端

    android: /android/i.test(ua), // android

    winphone: /iemobile/i.test(ua),

    weixin: /micromessenger/i.test(ua), // 微信 客户端

    alipay: /alipayclient/i.test(ua), // 支付宝 客户端

    weibo: /weibo/gi.test(ua), // 微博客户端

    qq: isQQAPP(), // qq 客户端

    mplanet: /mplanet/i.test(ua) // 母星系客户端
  }
  a.mobile = a.ios || a.android || a.winphone
  a.pc = !a.mobile
  return a
}

export const defaultInfo = {
  platform,
  device
}
