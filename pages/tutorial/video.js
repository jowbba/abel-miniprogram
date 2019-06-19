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
    // 读取参数，及手机屏幕尺寸
    this.setData(options)
    let res = wx.getSystemInfoSync()
    let { windowWidth, windowHeight } = res
    wx.setNavigationBarTitle({ title: this.data.title })
    // 根据长宽比/屏幕尺寸 决定播放器尺寸
    if (this.data.width == 4) 
      this.setData({
        videoWidth: windowWidth,
        videoHeight: windowWidth*3/4 
      })
    else 
      this.setData({
        videoWidth: 9/16*windowHeight,
        videoHeight: windowHeight
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data)
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