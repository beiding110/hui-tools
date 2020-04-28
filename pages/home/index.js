// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData: [
      {
        title: '造价',
        child: [
          {
            title: '河北省建设工程造价咨询服务项目收费计算器',
            icon: 'refund-o-o',
            url: '/pages/index/index'
          }
        ]
      }, {
        title: '系统',
        child: [
          {
            title: '导出数据',
            icon: 'description',
            url: '/pages/user/get-store/index'
          }, {
            title: '导入数据',
            icon: 'records',
            url: '/pages/user/set-store/index'
          }, {
            title: '打印',
            icon: 'orders-o',
            url: '/pages/user/print/index'
          }
        ]
      }
    ]
  },

  toDetail(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    });
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