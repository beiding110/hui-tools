// pages/jira/sprint/components/list-sprint/index.js
const db = require('../../../../../utils/data-base.js');
const util = require('../../../../../utils/util.js');

function createProgress(value) {
    return {
        updatetime: new Date().getTime(),
        value 
    };
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Array,
            value: () => [],
        },
        keyOfData: {
            type: String,
            value: 'tableData',
        },
        buttons: {
            type: Array,
            value: () => [],
        },
        dialogBtns: {
            type: Array,
            value: () => [],
        },
        dialogSlider: {
            type: Boolean,
            value: false,
        },
        type: {
            type: String,
            default: '',
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        hsDialogShow: false,

        longTapData: {},
        longTabIndex: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 长按操作
        longTapHandler(e) {
            var dataset = e.currentTarget.dataset;

            this.setData({
                longTapData: dataset.data,
                longTabIndex: dataset.index,
                hsDialogShow: true,
            })
        },
        // 行按钮操作
        btnTapHandler(e) {
            var index = e.detail.index,
                switchObj = [this.editHandler, this.delHandler];

            switchObj[index].call(this, e);
        },
        // 行编辑
        editHandler(e) {
            var dataset = e.currentTarget.dataset;

            var search = util.toSearch({
                procode: dataset.procode,
                rowguid: dataset.rowguid
            });
            wx.navigateTo({
                url: '/pages/jira/sprint/form/index' + search
            });
        },
        // 行删除
        delHandler(e) {
            var rowguid = e.currentTarget.dataset.rowguid;
            db.deleteDB('t_sprint', rowguid);

            this.triggerEvent('reload');
        },
        // 移动
        movetoHandler(e) {
            var data = e.currentTarget.dataset.data,
                type = e.currentTarget.dataset.type;
            var switchObj = {
                todo() {
                    data.progress = createProgress(0);

                    data.dobj = 0;
                },
                doing() {
                    data.dobj = 1;
                },
                done() {
                    data.donetime = util.formatTime(new Date());

                    data.progress = createProgress(100);

                    data.dobj = 2;
                }
            };
            switchObj[type]();
            db.insertDB('t_sprint', data);
            
            this.triggerEvent('reload');
        },
        // 弹窗按钮操作
        hsDialogBtnTap(e) {
            var type = e.detail.item.value;
            this.movetoHandler({
                currentTarget: {
                    dataset: {
                        data: this.data.longTapData,
                        type: type
                    }
                }
            });
            this.setData({
                hsDialogShow: false
            });
        },
        // 进度条拖拽操作
        sliderChangeHandler(e) {
            var data = this.data.longTapData,
                index = this.data.longTabIndex,
                value = e.detail,
                tableData = this.data.data;

            data.progress = createProgress(value);

            tableData.splice(index, 1, data);

            this.triggerEvent('updatedata', {
                key: this.data.keyOfData,
                data: tableData,
            });

            db.insertDB('t_sprint', data);
        },
    }
})