// components/bottomnav/bt_nav.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    botNavInd:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    // botNavInd:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _changePage: function (e) {
      let ind = e.target.dataset.index;
      console.log(ind);

      // if (this.botNavInd)
      if (ind == 0 && this.botNavInd != 0) {
        wx.reLaunch({
          url: '/pages/index/index'
        })
      } else if (ind == 1 && this.botNavInd != 1){
        wx.navigateTo({
          url: '/pages/other/index'
        })
      }

    },
    _onGotUserInfo: function (e) {
      if (this.botNavInd != 3){
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
      }
    },
  }
})
