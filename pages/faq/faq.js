// pages/faq/faq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    index: 0,
    windowHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'faq'
    })
    
    let res = wx.getSystemInfoSync()
    let { windowHeight } = res

    wx.request({
      url: 'https://www.wisnuc.com/faq.json',
      success: res => {
        let { data } = res.data
        this.setData({list:data, windowHeight})
      }
    })
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

  select: function(event) {
    let { index } = this.data
    let { idx } = event.currentTarget.dataset
    if (idx == index) idx = -1
    this.setData({index: idx})
  }
})