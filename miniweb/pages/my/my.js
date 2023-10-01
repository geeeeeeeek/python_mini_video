// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  onCollectEntryTap(){
    wx.navigateTo({
        url: '/pages/my/collectList/collectList'
    })
  },
  onLikeEntryTap(){
    wx.navigateTo({
        url: '/pages/my/likeList/likeList'
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },


  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      const page = getCurrentPages().pop();
      this.getTabBar().setData({
        value: '/' + page.route
      })
    }
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})