// pages/user/print/index.js
const db = require('../../../utils/data-base.js')
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableData: [],
    procodeOpts: [],
    dobjOpts: [
      { text: '全部状态', value: '' },
      { text: '待办', value: 0 },
      { text: '处理中', value: 1 },
      { text: '完成', value: 2 }
    ],

    procodeOpt: '',
    dobjOpt: '',
  },
  getList() {
    var proList = this.getProList();
    this.setProOpts(proList);
  },
  getProList() {
    var search_pro = {},
      search_sprint = {};
    this.data.procodeOpt && (search_pro.rowguid = this.data.procodeOpt, search_sprint.procode = this.data.procodeOpt);
    (util.getType(this.data.dobjOpt) === 'number') && (search_sprint.dobj = this.data.dobjOpt);

    var proList = db.getDB('t_sprint', search_sprint).leftJoin('t_project', search_pro, ['procode', 'rowguid'], ['proname']),
      switchObj = {
        '0': item => {
          item.tagText = '待办';
          item.tagType = 'primary';
        },
        '1': item => {
          item.tagText = '处理中';
          item.tagType = 'warning';
        },
        '2': item => {
          item.tagText = '完成';
          item.tagType = 'success';
        }
      }
    proList.forEach(item => {
      switchObj[item.dobj](item);
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
    proListOpts.unshift({
      text: '全部项目',
      value: ''
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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