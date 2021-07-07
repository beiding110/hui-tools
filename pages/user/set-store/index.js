// pages/user/set-store/index.js
const ajax = require('../../../utils/ajax');
const app = getApp();

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

  importHandler(str) {
    var json;
    try{
      json = JSON.parse(str);
    }catch(e) {
      wx.showModal({
        title: '错误',
        content: '请检查数据格式'
      });
    };

    Object.keys(json).forEach(table => {
      wx.setStorageSync(table, json[table]);
    });
    wx.showToast({
      title: '导入数据完成',
    });
  },

  saveHandler() {
    this.importHandler(this.data.data);

    wx.navigateBack();
  },

  downloadHandler() {
    ajax.get('/data/download', {
      openid: app.globalData.openid,
    }, (data, res) => {
      this.importHandler(data);
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