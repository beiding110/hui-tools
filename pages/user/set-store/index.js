// pages/user/set-store/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: ''
  },
  vmodel(event) {
    var obj = {};
    obj[event.target.dataset.model] = event.detail;
    this.setData(obj);
  },
  saveHandler() {
    var json;
    try{
      json = JSON.parse(this.data.data);
    }catch(e) {
      wx.showModal({
        title: '错误',
        content: '请检查数据格式'
      });
    };

    Object.keys(json).forEach(table => {
      wx.setStorageSync(table, json[table]);
    });
    wx.showModal({
      title: '成功',
      content: '导入数据完成'
    });
    wx.navigateBack();
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