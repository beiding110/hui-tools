// pages/user/get-store/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    currentSize: ''
  },
  getStore() {
    const res = wx.getStorageInfoSync();

    this.setData({
      data: res,
      currentSize: res.currentSize
    });
  },
  copyHandler() {
    const res = this.data.data;
    var data = {};
    res.keys.forEach(key => {
      if (key === 'logs') return;
      data[key] = wx.getStorageSync(key)
    });

    wx.setClipboardData({
      data: JSON.stringify(data)
    })
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
    this.getStore();
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