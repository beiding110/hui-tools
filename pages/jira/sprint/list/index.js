// pages/jira/project/index.js
const db = require('../../../../utils/data-base.js')
const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData_todo: [],
    tableData_doing: [],
    tableData_done: [],

    procode: ''
  },
  addHandler() {
    var search = util.toSearch({
      procode: this.data.procode
    });
    wx.navigateTo({
      url: '../form/index' + search
    });
  },
  getList() {
    var list_todo = db.getDB('t_sprint', {
      dobj: 0,
      procode: this.data.procode
    });
    var list_doing = db.getDB('t_sprint', {
      dobj: 1,
      procode: this.data.procode
    });
    var list_done = db.getDB('t_sprint', {
      dobj: 2,
      procode: this.data.procode
    });
    this.setData({
      tableData_todo: list_todo,
      tableData_doing: list_doing,
      tableData_done: list_done
    });
  },
  editHandler(e) {
    var search = util.toSearch({
      procode: this.data.procode,
      rowguid: e.currentTarget.dataset.rowguid
    });
    wx.navigateTo({
      url: '../form/index' + search
    });
  },
  delHandler(e) {
    var rowguid = e.currentTarget.dataset.rowguid;
    db.deleteDB('t_sprint', rowguid);
    this.getList();
  },
  movetoHandler(e) {
    var data = e.currentTarget.dataset.data,
      type = e.currentTarget.dataset.type;
    var switchObj = {
      todo() {
        data.dobj = 0;
      },
      doing() {
        data.dobj = 1;
      },
      done() {
        data.dobj = 2;
      }
    };
    switchObj[type]();
    db.insertDB('t_sprint', data);
    this.getList();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      procode: options.procode
    })
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