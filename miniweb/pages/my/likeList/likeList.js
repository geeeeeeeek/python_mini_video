// pages/my/likeList/likeList.js
import { BASE_URL, likeDataApi } from '../../../utils/api.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    this.getLikeData()
  },

  getLikeData() {
    let username = wx.getStorageSync('username')
    likeDataApi(username, res => {
        
        res.data.data.forEach(item => {
            item.cover = BASE_URL + item.cover;
        })
        this.setData({
            listData: res.data.data
        })
    }, err => {

    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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