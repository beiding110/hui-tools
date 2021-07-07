const API_HEAD = 'http://192.168.1.66:3000'

function argBuilder(args) {
    if(args.length === 3) {
        return {
            url: args[0],
            data: args[1],
            success: args[2],
        }
    } else {
        return {
            url: args[0],
            data: {},
            success: args[1],
        };
    };
};

function resCheck(res, cb) {
    var switchObj = {
        'v': (res) => {
            cb(res.tdata, res);
        },
        'error': (res) => {
            // console.log(res.msg);
            // cb(res, res);
            wx.showModal({
                title: '错误',
                content: res.msg
            });
        },
        'valerror': (res) => {
            // console.log(res.msg);
            // cb(res, res);

            wx.showModal({
                title: '数据错误',
                content: res.msg
            });
        },
    };

    return switchObj[res.code](res);
};

module.exports = {
    get() {
        var {url, data, success} = argBuilder([...arguments]);

        wx.request({
            method: 'GET',
            url: `${API_HEAD}${url}`,
            data: data,
            success(res) {
                resCheck(res.data, success);
            },
            fail(err) {
                console.log(err);
                wx.showModal({
                    title: '错误',
                    content: res
                });
            },
        });
    },
    post(url, data, cb) {
        var {url, data, success} = argBuilder([...arguments]);

        wx.request({
            method: 'POST',
            url: `${API_HEAD}${url}`,
            data: data,
            success(res) {
                resCheck(res.data, success);
            },
            fail(err) {
                console.log(err);
                wx.showModal({
                    title: '错误',
                    content: res
                });
            },
        });
    },
}