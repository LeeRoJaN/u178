// pages/my/index.js
var app = getApp();//取得全局App({..})实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的信息中心'
    })
      // console.log(app.globalData.userInfo);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    // console.log(app.globalData.userInfo);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  changePage: function (e) {
    let ind = e.target.dataset.index;
    console.log(ind);
    let u;
    if (ind == 0) {
      u = '/pages/index/index';
    } else if (ind == 1) {
      u = '/pages/other/index';
    }
    wx.navigateTo({
      url: u
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.userInfo);
    if (app.globalData.userInfo == null){
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    wx.navigateTo({
      url: '/pages/my/index'
    })
  }
})