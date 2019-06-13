// pages/tutorial/tutorial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: 0,
    tabWidth: 0,
    active: false,
    activeStyle: '',
    index: 0,
    baseUrl: 'https://www.wisnuc.com',
    pc: {},
    app: {},
    errMessage: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '使用指南'
    })

    wx.getSystemInfo({
      success: res => {
        let { windowWidth } = res
        let tabWidth = windowWidth / 2
        this.setData({ windowWidth, tabWidth })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取PC
    wx.request({
      url: `${this.data.baseUrl}/pc/pc.json`,
      success: (res) => {
        res.data.list.forEach(item => item.open = true)
        // 获取APP
        wx.request({
          url: `${this.data.baseUrl}/app/app.json`,
          success: (res1) => {
            res1.data.list.forEach(item => item.open = true)
            this.setData({ pc: res.data, app: res1.data })
            console.log(this.data.pc, this.data.app)
          }
        })
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
    console.log(event)
    this.setData({ activeStyle: ''})
    let { windowWidth } = this.data
    let { index } = event.currentTarget.dataset
    let { x, y } = event.detail
    x = x - index * this.data.tabWidth
    y = y
    let activeStyle = ''
    let a = x > this.data.tabWidth / 2?0:this.data.tabWidth
    let b = y > 48 / 2?0:48
    let radius = Math.sqrt(Math.pow(Math.abs(x-a), 2) + Math.pow(y-b, 2))
    console.log(x, y , a, b)
    activeStyle += `transform: scale(0);`
    activeStyle += `width: ${radius*2}px;`
    activeStyle += `height: ${radius*2}px;`
    activeStyle += `left: ${x - radius}px;`
    activeStyle += `top: ${y - radius}px;`;
    activeStyle += `animation: ripple 550ms cubic-bezier(0.4, 0, 0.2, 1)`;
    this.setData({index, activeStyle})
  }
})