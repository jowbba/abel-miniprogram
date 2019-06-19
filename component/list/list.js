// component/list/list.js
Component({
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    propData: Object,
    propNavTo: String
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navTo: function (event) {
      let { title, url } = event.currentTarget.dataset.detail
      let { width, height } = event.currentTarget.dataset.size
      let { propNavTo } = this.data
      url = `${getApp().globalData.baseUrl}${url}`
      console.log(`${propNavTo}?url=${url}&title=${title}&width=${width}&height=${height}`)
      wx.navigateTo({
        url: `${propNavTo}?url=${url}&title=${title}&width=${width}&height=${height}`,
      })
    },
  }
})
