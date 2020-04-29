// pages/user/print/index.js
const db = require('../../../utils/data-base.js');
const util = require('../../../utils/util.js');
const config = require('../../../config/jira.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData: [],
    procodeOpts: [],
    dobjOpts: [],

    procodeSel: {},
    dobjSel: {},

    dobjSwitchObj: {}
  },
  getList() {
    var proList = this.getProList();
    this.setProOpts(proList);
  },
  cancSearchObj(dataName, type) {
    if (Object.keys(this.data[dataName]).some(key => {
      var codeValue = this.data[dataName][key];
      return codeValue;
    })) {
      var arr = [];
      Object.keys(this.data[dataName]).forEach(key => {
        var codeValue = this.data[dataName][key];

        if (type === 'number') {
          key = Number(key)
        } else {
          key = key + ''
        };

        codeValue && arr.push(key);
      });
      return arr;
    };
    return false;
  },
  getProList() {
    var search_pro = {},
      search_sprint = {};

    var procodeArr = this.cancSearchObj('procodeSel');
    if (procodeArr) {
      search_pro.rowguid = procodeArr;
      search_sprint.procode = procodeArr;
    };
    
    var dobjArr = this.cancSearchObj('dobjSel', 'number');
    if (dobjArr) {
      search_sprint.dobj = dobjArr;
    };

    var proList = db.getDB('t_sprint', search_sprint).leftJoin('t_project', search_pro, ['procode', 'rowguid'], ['proname']);
    proList.forEach(item => {
      this.data.dobjSwitchObj[item.dobj](item);
    });
    this.setData({
      tableData: proList
    });
  },
  setProOpts() {
    var proListOpts = db.getDB('t_project').map(item => {
      return {
        text: item.proname,
        value: item.rowguid
      };
    });
    this.setData({
      procodeOpts: proListOpts
    });
  },
  changeHandler: function(e) {
    var key = e.target.dataset.model,
      value = e.detail,
      setObj = {};
    setObj[key] = value;
    this.setData(setObj);
    this.getProList();
  },
  proOptSwitchChange(e) {
    var target = e.target.dataset.model,
      value = e.target.dataset.value,
      model = this.data[target];
    model[value] = e.detail;
    var setObj = {};
    setObj[target] = model;
    this.setData(setObj);
    this.getProList();
  },
  initConfigOptions() {
    var cols = config.cols,
      dobjSwitchObj = {},
      dobjOpts = [];

    cols.forEach(item => {
      dobjSwitchObj[item.dobj] = (function() {
        return function(row) {
          row.tagText = item.text;
          row.tagType = item.tag;
        };
      } ());
      var obj = {
        text: item.text,
        value: item.dobj
      };
      dobjOpts.push(obj);
    });
    this.setData({
      dobjOpts,
      dobjSwitchObj
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initConfigOptions();
    this.getList();
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