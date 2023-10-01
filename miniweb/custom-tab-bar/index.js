Component({
    data: {
      value: '/pages/index/index',
      list: [
        { value: '/pages/index/index', label: '首页', icon: 'home' },
        { value: '/pages/message/message', label: '消息', icon: 'chat' },
        { value: '/pages/my/my', label: '我的', icon: 'user' },
      ],
    },
  
    methods: {
        onChange(e) {
            wx.switchTab({
              url: e.detail.value
            });
          },
    },
  });
  