// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: getApp().globalData.baseUrl,
    url: "",
    title: "",
    data: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({title: this.data.title})
    wx.request({
      url: this.data.url,
      success: res => {
        res.data.data.forEach(item => {
          if (item.type == 'image') item.url = `${this.data.baseUrl}${item.url}`
        })
        this.setData({data: res.data.data})
      }
    })
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

  viewImage: function(event) {
    let { url } = event.currentTarget.dataset
    let arr = []
    this.data.data.forEach(item => {
      if (item.type == 'image') arr.push(item.url)
    })

    wx.previewImage({
      current: url,
      urls: arr
    })
  }
})