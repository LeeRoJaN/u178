//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    timeCurr:0,//日期当前展示的下标
    bannerCurr: 0,//banner位当前展示的下标
    bannerIsChanging:false,
    bannerIsChanged:true,
    // imgUrls: [
    //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    // ]
    topBanner:[
      {
        title:'标题党一',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text:'累进税率较低'
      },
      {
        title: '标题党二',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: 'lasljalsdjlfkaasdfasdff'
      },
      {
        title: '标题党三',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: '阿萨德发射点发蜡炬森'
      }
      ],
      timeList:[
        {
          t:"2018-05-21",
        },
        {
          t: "2018-05-22",
        },
        {
          t: "2018-05-23",
        }
      ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bannerPre:function(e){

  },
  bannerNext: function (e) {
    console.log('next');
    let { bannerCurr } = this.data;
    console.log(this.data);
    this.setData({
      bannerCurr
    })
  },
  isChanging:function(e){
    // console.log(e.detail.current);
    this.setData({
      bannerIsChanged: false,
      bannerIsChanging: true
    })
  },
  isChanged:function(e){
    console.log(e.detail.current);
    this.setData({
      bannerIsChanged: true,
      bannerIsChanging: false,
    })
  },
  // 时间节点切换
  changeTimeList:function(e){
    // console.log(e.target.dataset.index);
    var ind = e.target.dataset.index;
    if (ind != this.timeCurr){
      this.setData({
        timeCurr: ind
      })
    }
  },
  // 获取用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
