const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const createGuid = () => {
  var guid = "";
  for (var i = 1; i <= 32; i++) {
    var n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
      guid += "-";
  }
  return guid;
}

const getType = obj => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

const toSearch = (obj, flag) => {
    var res = '?'
    if (typeof obj == 'object' && Array.isArray(obj)) {
      obj.forEach(function(item, index) {
        res += ('[' + index + ']=' + owner.toSearch(item, true) + '&');
      });
    } else if (typeof obj == 'object') {
      Object.keys(obj).forEach(function(key) {
        if (typeof obj[key] == 'object' && Array.isArray(obj[key])) {
          obj[key].forEach(function(item, index) {
            res += (key + '[' + index + ']=' + owner.toSearch(item, true) + '&')
          });
        } else if (typeof obj[key] == 'object' && obj[key] != null) {
          res += (owner.toSearch(obj[key], true) + '&');
        } else {
          var item = /[\u3220-\uFA29]/.test(obj[key]) ? escape(obj[key]) : obj[key];
          res += (key + '=' + (item || '') + '&');
        }

      });
    } else {
      return obj;
    }
    return !!flag ? res.slice(1, -1) : res.slice(0, -1);
  }

  module.exports = {
    formatTime,
    createGuid,
    toSearch,
    getType
  }