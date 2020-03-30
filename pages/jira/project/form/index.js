const db = require('../../../../utils/data-base.js')

Page({
  data: {
    form: {
      rowguid: '',
      proname: '',
    },
  },
  onLoad: function (opt) {
    var rowguid = opt.rowguid;
    if (rowguid) {
      var [detail] = db.getDB('t_project', rowguid);
      this.setData({
        form: detail
      });
    };
  },
  vmodel(event) {
    var obj = {};
    obj[event.target.dataset.model] = event.detail;
    this.setData(obj);
  },
  saveHandler() {
    db.insertDB('t_project', this.data.form);
    wx.navigateBack()
  }
})
