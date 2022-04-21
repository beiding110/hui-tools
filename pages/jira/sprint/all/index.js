// pages/jira/project/index.js
const db = require('../../../../utils/data-base.js')
const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],

    tableData_todo: [],
    tableData_doing: [],
    tableData_done: [],

    slideButtons_todo: [{
      text: '编辑',
      extClass: 'sprint-button',
    },{
      type: 'warn',
      text: '删除',
      extClass: 'sprint-button',
    }],
    slideButtons_doing: [{
      text: '编辑',
      extClass: 'sprint-button',
    }],
    slideButtons_done: [{
      type: 'warn',
      text: '删除',
      extClass: 'sprint-button',
    }],

    dialogButtons_todo: [{
      className: 'warning',
      text: '处理中',
      value: 'doing'
    }, {
      className: 'success',
      text: '完成',
      value: 'done'
    }],
    dialogButtons_doing: [{
      className: 'info',
      text: '待办',
      value: 'todo'
    }, {
      className: 'success',
      text: '完成',
      value: 'done'
    }],
    dialogButtons_done: [{
      className: 'info',
      text: '待办',
      value: 'todo'
    }, {
      className: 'warning',
      text: '处理中',
      value: 'doing'
    }],
  },
  getList() {
    var proList = db.getDB('t_project'),
      proRowguidMap = {};
    proList.forEach(item => {
      proRowguidMap[item.rowguid] = item.proname;
    });

    var list_todo = db.getDB('t_sprint', {
      dobj: 0
    }).leftJoin('t_project', {}, ['procode', 'rowguid'], ['proname']);
    var list_doing = db.getDB('t_sprint', {
      dobj: 1
    }).leftJoin('t_project', {}, ['procode', 'rowguid'], ['proname']);
    var list_done = db.getDB('t_sprint', {
      dobj: 2
    }).leftJoin('t_project', {}, ['procode', 'rowguid'], ['proname']);

    this.setData({
      tableData_todo: list_todo,
      tableData_doing: list_doing,
      tableData_done: list_done,
      tabs: [
        {
          title: `待办(${list_todo.length})`
        }, {
          title: `处理中(${list_doing.length})`
        }, {
          title: `完成(${list_done.length})`
        }
      ]
    });
  },
  // 组件内列表数据更新
  updateTableData(e) {
    var detail = e.detail,
      data = detail.data,
      key = detail.key;

    this.setData({
      [key]: data,
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