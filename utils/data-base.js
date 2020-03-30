const util = require('./util.js')

const setDB = (table, list) => {
  var jsonStr = JSON.stringify(list);
  try {
    wx.setStorageSync(table, jsonStr);
  } catch (e) {
    console.error(e);
    return false;
  };
  return true;
}

const getDB = (table, where) => {
  try {
    var value = wx.getStorageSync(table),
      res = [];
    if (value) {
      var json = JSON.parse(value),
        listNotDel = [];

      json.forEach(item => {
        if(item.scbj !== 1) {
          listNotDel.push(item);
        };
      });

      if (where) {
        var switchObj = {
          string() {
            var rowguid = where
            listNotDel.forEach(item => {
              if (item.rowguid === rowguid) {
                res.push(item);
              }
            });
            return res;
          },
          object() {
            listNotDel.forEach(item => {
              if (Object.keys(where).every(key => {
                return item[key] === where[key]
              })) {
                res.push(item);
              };
            });
            return res;
          }
        };

        return switchObj[util.getType(where)]();
      } else {
        res = listNotDel;
      };

      return res;
    };
    return res;
  } catch (e) {
    // Do something when catch error
    console.error(e);
  }
}

const insertDB = (table, form) => {
  var list = getDB(table);
  if (form.rowguid) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].rowguid === form.rowguid) {
        list.splice(i, 1, form);
        break;
      }
    };
  } else {
    form.rowguid = util.createGuid();
    form.addtime = util.formatTime(new Date());
    list.push(form);
  };
  
  return setDB(table, list);
}

const deleteDB = (table, rowguid) => {
  var list = getDB(table);
  if (rowguid) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].rowguid === rowguid) {
        list[i].scbj = 1;
        break;
      }
    };
  } else {
    console.error('未填写删除rowguid');
  }

  setDB(table, list);
}

module.exports = {
  getDB,
  insertDB,
  deleteDB
};