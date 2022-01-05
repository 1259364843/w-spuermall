// app.js
App({
  // 生命周期函数
  onLaunch() {
    console.log('小程序初始化完成');
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  // 界面显示出来
  onShow: function (options) {
    console.log('界面显示出来',options);
  },
  // 界面隐藏时
  onHide: function () {
    console.log('界面隐藏');
  },
  // 发生错误时
  onError: function (err) {
    
  },
  globalData: {
    userInfo: null
  }  
})
