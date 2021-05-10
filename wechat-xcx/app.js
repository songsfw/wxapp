
//app.js

App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        env: 'gallardo-2gpuc84ufae30995',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})