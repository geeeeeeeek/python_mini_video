const BASE_URL = 'http://124.221.83.178:9002'
  const getDataListApi = (data, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/list', 
        data: data,
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  const getCategoryListApi = (data, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/classification/list', 
        data: data,
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  const getDetailApi = (data, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/detail', 
        data: data,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }
  
  const getRecommendDataApi = (data, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/list?sort=recommend', 
        data: data,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  
  const getMessageDataApi = (data, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/notice/list_api', 
        data: data,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  const collectApi = (thingId,username, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/addCollectUser?thingId='+thingId+'&username='+username, 
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }
  const likeApi = (thingId,username, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/addWishUser?thingId='+thingId+'&username='+username, 
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  const collectDataApi = (username, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/getCollectThingList?username='+username, 
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  
  const likeDataApi = (username, success, fail) => {
    wx.request({
        url: BASE_URL + '/myapp/index/thing/getWishThingList?username='+username, 
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success (res) {
            success(res)
        },
        fail(err){
            fail(err)
        }
      })
  }

  module.exports = {
    BASE_URL,
    getCategoryListApi,
    getDataListApi,
    getDetailApi,
    getRecommendDataApi,
    getMessageDataApi,
    collectApi,
    likeApi,
    collectDataApi,
    likeDataApi
  }
  