// pages/my/my.js
import { BASE_URL, getDetailApi, getRecommendDataApi, collectApi, likeApi } from '../../utils/api.js';
Component({
    properties: {
        id: Number,
    },
    data: {
        detailData: {},
        recommendData: []
    },
    lifetimes: {
        attached: function () {
            this.getDetailData()
            this.getRecommendData()
        },
        detached: function () {
        },
    },
    methods: {
        // 推荐点击跳转
        handleDetail(e) {
            console.log(e.currentTarget.dataset.index)
            let id = e.currentTarget.dataset.index
            wx.navigateTo({
                url: '/pages/detail/detail?id=' + id
            })
        },
        getDetailData() {
            getDetailApi({ id: this.data.id},
                res => {
                    res.data.data.raw = BASE_URL + res.data.data.raw
                    this.setData({
                        detailData: res.data.data
                    })
                }, err => {

                })
        },
        getRecommendData() {
            getRecommendDataApi({},
                res => {
                    res.data.data.forEach(item => {
                        item.cover = BASE_URL + item.cover;
                    })
                    this.setData({
                        recommendData: res.data.data
                    })
                }, err => {

                })
        },
        onCollectTap(){
            var username = wx.getStorageSync('username');
            username = 'ddd'
            collectApi(
                this.data.detailData.id,
                username,
                res=>{
                    console.log(res.data)
                    if(res.data.code == 0){
                        wx.showToast({
                            title: '收藏成功',
                            icon: 'success',
                            duration: 1500
                        })
                    }
                },err=>{

                })
        },
        onLikeTap(){
            var username = wx.getStorageSync('username');
            username = 'ddd'
            likeApi(
                this.data.detailData.id,
                username,
                res=>{
                    if(res.data.code == 0){
                        wx.showToast({
                            title: '喜欢成功',
                            icon: 'success',
                            duration: 1500
                        })
                    }
                },err=>{

                })
        }
    }
})