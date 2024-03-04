Page({
  data: {},
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {
    // 下拉刷新逻辑
    console.log('下拉刷新')
    // 可以在这里编写刷新页面的逻辑，如重新请求数据等
    // 完成后调用 wx.stopPullDownRefresh() 停止刷新
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  goBack: function () {
    wx.switchTab({
      url: '/pages/PersonalPage/PersonalPage',
    })
  }
})