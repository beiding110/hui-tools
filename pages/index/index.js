const configJs = require('../../config/index.js');
const app = getApp();
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

var configMap = {};
configJs.forEach(item => {
  return configMap[item.name] = item.base;
});

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    columns: [
      {
        values: configJs.map(item => item.name)
      }, {
        values: configJs[0].base.map(item => item.name)
      }
    ],

    form: {
      type: '',
      number: 0
    },

    popupShow: false,
    popupCloseOnClickOverlay: true,

    pickerInnerValue: '',
    usingStandard: configJs[0].base[0].standard,

    result: 0
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onChange(event) {
    const {picker, value, index} = event.detail;
    const newColList = configMap[value[0]].map(item => item.name);
    picker.setColumnValues(1, newColList);
  },
  typeClickHandler() {
    this.setData({
      popupShow: true
    })
  },
  vmodel(event) {
    var obj = {};
    obj[event.target.dataset.model] = event.detail;
    this.setData(obj);
  },
  onCancel() {
    this.setData({
      popupShow: false
    })
  },
  onConfirm(event) {
    const { value, index } = event.detail;
    var usingStandard = [];

    configJs.forEach(item => {
      if(item.name === value[0]) {
        item.base.forEach(subItem => {
          if(subItem.name === value[1]) {
            usingStandard = subItem.standard
          };
        });
      };
    });

    this.setData({
      popupShow: false,
      'form.type': value.join('-'),
      usingStandard: usingStandard
    });
  },
  calcNum() {
    if(!this.data.form.type) {
      Dialog.alert({
        title: '提示',
        message: '请选择计算类型'
      });
      return;
    }

    var cash = Number(this.data.form.number),
      res = 0;

    this.data.usingStandard.forEach(item => {
      if (cash < item.from) {
        res += 0;
      } else if (cash > item.from && cash <= item.to) {
        res += ((cash - item.from) * (item.rate * 100000) / 100000);
      } else if (cash > item.to) {
        res += ((item.to - item.from) * (item.rate * 100000) / 100000);
      };
    });

    this.setData({
      result: res
    });
  }
})
