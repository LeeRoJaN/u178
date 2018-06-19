//index.js
//获取应用实例
const app = getApp()

Page({
    /**
   * 页面的初始数据
   */
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
        time:"2018-05-21",
        title: '标题党已',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: '阿萨德发射点发蜡炬森'
      },
      {
        time: "2018-05-22",
        title: '标题党而',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: '阿萨德发射点发蜡炬森'
      },
      {
        time: "2018-05-23",
        title: '标题党三',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        text: '阿萨德发射点发蜡炬森'
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   /**
   * 生命周期函数--监听页面加载
   */
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
  /**
   * 上一个bannber
   */
  //
  bannerPre:function(e){
    let { bannerCurr, bannerIsChanging } = this.data;

    if (!bannerIsChanging) {
      let that = this;
      let curr = bannerCurr - 1;
      if(curr < 0 ){
        curr = 2;
      }
      that.setData({
        bannerCurr: curr
      })
    }
  },
  /**
   * 下一个bannber
   */
   //
  bannerNext: function (e) {
    let { bannerCurr, bannerIsChanging } = this.data;
    console.log(bannerCurr);
    if (!bannerIsChanging){
      let that = this;
      let curr = bannerCurr + 1;
      if(curr > 2){
        curr = 0;
      }
      that.setData({
        bannerCurr: curr
      })
    }
  },
  /**
   * banner状态
   */
  //
  isChanging:function(e){
    let { bannerIsChanging } = this.data;
    let that = this;
    that.setData({
      bannerIsChanging: true
    })
  },
  /**
   * banner状态更新
   */
  //
  isChanged:function(e){
    let { bannerCurr, bannerIsChanging} = this.data;
    let that = this;
    console.log(e.detail);
    that.setData({
      bannerIsChanging:false,
      bannerCurr : e.detail.current
    })
  },
  /**
   * 时间节点切换
   */
  // 
  changeTimeList:function(e){
    // console.log(e.target.dataset.index);
    // let { timeCurr } = this.data;
    let ind = e.target.dataset.index;
    if (ind != this.timeCurr){
      this.setData({
        timeCurr: ind
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  timeChanging:function(e){

  },
  timeChanged:function(e){
    let { timeCurr } = this.data;
    
    let ind = e.detail.current;
    let that = this;

    that.setData({
      timeCurr: ind
    })
  },
  /**
   * 获取用户信息
   */
  // 
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changePage:function(e){
    let ind = e.target.dataset.index;
    console.log(ind);
    let u;
    if(ind == 0){
      u = '/pages/index/index';
    }else if(ind == 1){
      u = '/pages/other/index';
    }
    wx.navigateTo({
      url: u
    })
  },
  onGotUserInfo:function(e){
    console.log(e.detail.userInfo);
    console.log(app.globalData.userInfo);
    if (app.globalData.userInfo == null) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    wx.navigateTo({
      url: '/pages/my/index'
    })
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
    wx.stopPullDownRefresh()//停止当前页面下拉刷新
  },
})
