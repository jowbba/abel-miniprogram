// pages/tutorial/tutorial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'pc',
    baseUrl: 'https://www.wisnuc.com',
    pc: {},
    app: {},
    errMessage: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: `${this.data.baseUrl}/pc/pc.json`,
      success: (res) => {
        res.data.list.forEach(item => item.open = true)
        this.setData({pc: res.data})
        console.log(this.data.pc)
      }
    })
  },

  navTo: function(event) {
    let { name, url } = event.currentTarget.dataset.detail
    let { width, height} = event.currentTarget.dataset.size
    url = `${this.data.baseUrl}${url}`
    wx.navigateTo({
      url: `/pages/tutorial/video?url=${url}&name=${name}&width=${width}&height=${height}`,
    })
  },

  toggleType: function(event) {
    let { type } = event.currentTarget.dataset
    this.setData({type})
    console.log(this.data)
  }
})