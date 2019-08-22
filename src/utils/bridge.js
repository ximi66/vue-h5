const registerHandler = (bridge, eventNameList) => {
  let key
  for (key in eventNameList) {
    (function (key) {
      bridge.registerHandler(key, function (data, responseCallback) {
        eventNameList[key](data)
        responseCallback(data)
      })
    })(key)
  }
}

const registerIos = (eventNameList) => { // 注册 IOS Bridge
  // IOS 注册事件监听
  function setupWebViewJavascriptBridge (callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }

  // IOS 注册分享回调
  setupWebViewJavascriptBridge(function (bridge) {
    registerHandler(bridge, eventNameList)
  })
}

const registerAndroid = (eventNameList) => {
  // 安卓 注册事件监听
  function connectWebViewJavascriptBridge (callback) {
    if (window.WebViewJavascriptBridge) {
      callback(window.WebViewJavascriptBridge)
    } else {
      document.addEventListener(
        'WebViewJavascriptBridgeReady'
        , function () {
          callback(window.WebViewJavascriptBridge)
        },
        false
      )
    }
  }

  // 安卓 注册回调函数，第一次连接时调用 初始化函数
  connectWebViewJavascriptBridge(function (bridge) {
    bridge.init(function (message, responseCallback) {
      var responseData = '默认接收收到来自Java的数据，回传数据给你'
      responseCallback(responseData)
    })

    registerHandler(bridge, eventNameList)
  })
}

export const callNative = (eventName, params) => {
  params ? window.WebViewJavascriptBridge.callHandler(eventName, params) : window.WebViewJavascriptBridge.callHandler(eventName)
}

export const registerCallBack = (eventNameList) => {
  registerIos(eventNameList)
  registerAndroid(eventNameList)
}

window.callNative = callNative
window.registerCallBack = registerCallBack
