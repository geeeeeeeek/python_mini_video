// pages/my/my.js
import { BASE_URL, getCategoryListApi, getDataListApi } from '../../utils/api.js';
Component({
    properties: {
        // currentCategoryId: Number,
    },
    data: {
        stickyProps: {
            zIndex: 2,
        },
        keyword: '',
        currentCategoryId: -1,
        categoryData: [],
        listData: []
    },
    lifetimes: {
        attached: function () {
            this.getCategoryData()
            this.getDataList()
        },
        detached: function () {
        },
    },
    methods: {
        getCategoryData() {
            getCategoryListApi({},
                res => {
                    res.data.data.splice(0, 0, { id: -1, title: '全部' })
                    this.setData({
                        categoryData: res.data.data
                    })
                }, err => {
                    console.log("err...." + err.errMsg)
                })
        },
        getDataList() {
            let that = this;
            getDataListApi({
                c: this.data.currentCategoryId
            },
                res => {
                    console.log("res====" + res.data)
                    res.data.data.forEach(item => {
                        item.cover = BASE_URL + item.cover;
                    })
                    that.setData({
                        listData: res.data.data
                    })
                }, err => {
                    console.log("err...." + err.errMsg)
                })
        },
        handleDetail(e) {
            console.log(e.currentTarget.dataset.index)
            let id = e.currentTarget.dataset.index
            wx.navigateTo({
                url: '/pages/detail/detail?id=' + id
            })
        },

        // 类别tabs
        onTabsChange(event) {
        },

        onTabsClick(event) {
            let id = event.detail.value
            this.setData({
                currentCategoryId: id
            })
            this.getDataList()
        },

        onStickyScroll(event) {
            console.log(event.detail);
        },
    },
});

