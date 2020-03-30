const db = require('../../../../utils/data-base.js');
const config = require('../../../../config/jira')

Page({
  data: {
    form: {
      rowguid: '',
      title: '',
      detail: '',
      dobj: 0,
      type: config.type[0],
      grade: config.grade[0]
    },

    types: config.type,
    grages: config.grade,

    popupShow: false,
    popupType: '',
    columns: []
  },
  onLoad: function (opt) {
    var rowguid = opt.rowguid,
      procode = opt.procode;
    if(rowguid) {
      var [detail] = db.getDB('t_sprint', rowguid);
      this.setData({
        form: detail
      });
    };
    this.setData({
      'form.procode': procode
    });   
  },
  vmodel(event) {
    var obj = {};
    obj[event.target.dataset.model] = event.detail;
    this.setData(obj);
  },
  saveHandler() {
    db.insertDB('t_sprint', this.data.form);
    wx.navigateBack();
  },

  typeClickHandler(e) {
    var type = e.currentTarget.dataset.type;
    this.setData({
      popupShow: true,
      popupType: type,
      columns: [
        {
          values: config[type].map(item => item.value)
        }
      ]
    })
  },
  onCancel() {
    this.setData({
      popupShow: false
    })
  },
  onConfirm(event) {
    const { value, index } = event.detail;
    var res;

    config[this.data.popupType].forEach(item => {
      if (item.value === value[0]) {
        res = item;
      };
    });

    var formKey = 'form.' + this.data.popupType,
      setDataObj = {
        popupShow: false
      };
    setDataObj[formKey] = res;

    this.setData(setDataObj);
  },
})
