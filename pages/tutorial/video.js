// pages/tutorial/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "",
    name: "",
    width: "",
    height: "",
    videoWidth: "",
    videoHeight: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(options)
    let res = wx.getSystemInfoSync()
    let { windowWidth, windowHeight } = res
    wx.setNavigationBarTitle({
      title: this.data.name,
    })
    if (this.data.width == 4) {
      this.setData({
        videoWidth: windowWidth,
        videoHeight: windowWidth*3/4
      })
    } else {

    }
    console.log(this.data)
    // let {} = 
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

  }
})