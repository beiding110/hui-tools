// pages/jira/project/index.js
const db = require('../../../../utils/data-base.js')
const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData: []
  },
  addHandler() {
    wx.navigateTo({
      url: '../form/index'
    });
  },
  getList() {
    var list = db.getDB('t_project');
    this.setData({
      tableData: list
    });
  },
  editHandler(e) {
    var search = util.toSearch({
      rowguid: e.currentTarget.dataset.rowguid
    });
    wx.navigateTo({
      url: '../form/index' + search
    });
  },
  delHandler(e) {
    var rowguid = e.currentTarget.dataset.rowguid;
    db.deleteDB('t_project', rowguid);
    this.getList();
  },
  gotoSprint(e) {
    var search = util.toSearch({
      procode: e.currentTarget.dataset.rowguid
    });
    wx.navigateTo({
      url: '/pages/jira/sprint/list/index' + search
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
    this.getList();
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