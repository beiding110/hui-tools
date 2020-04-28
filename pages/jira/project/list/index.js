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
    list.forEach(item => {
      item.todo = db.getDB('t_sprint', {
        dobj: 0,
        procode: item.rowguid
      }).length;
      item.doing = db.getDB('t_sprint', {
        dobj: 1,
        procode: item.rowguid
      }).length;
      item.done = db.getDB('t_sprint', {
        dobj: 2,
        procode: item.rowguid
      }).length;
      item.icontext = item.proname ? item.proname.slice(0,1) : 'null';
      item.iconcolor = item.rowguid.slice(0,6);
    })
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

    var sprintsInPro = this.getSprintInPro(rowguid);

    if (sprintsInPro.length) {
      wx.showModal({
        title: '同时删除项目内的问题？',
        content: '选择“是”，将会同时删除该项目内包含的全部问题',
        cancelText: '否',
        confirmText: '是',
        success: ({ confirm, cancel }) => {
          if (confirm) {
            this.delSprintInPro(sprintsInPro);
            this.delProject(rowguid);
          } else {
            this.delProject(rowguid);
          };
        }
      });
    } else {
      this.delProject(rowguid);
    };
  },
  delProject(rowguid) {
    db.deleteDB('t_project', rowguid);
    this.getList();
  },
  delSprintInPro(sprints) {
    sprints.forEach(item => {
      db.deleteDB('t_sprint', item.rowguid);
    });
  },
  getSprintInPro(rowguid) {
    return db.getDB('t_sprint', {
      procode: rowguid
    });
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