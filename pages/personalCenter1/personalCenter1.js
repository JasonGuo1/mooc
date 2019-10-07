var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    },
    orderItems: [
      {
        typeId: 0,
        name: '最近学习',
        url: 'bill',
        // 备注：icon目录下不必要的图标文件可直接删除以节省空间
        imageurl: '../../images/icon/recently.png',
        tocatch: "toResStudy",
      },
      {
        typeId: 1,
        name: '我的收藏',
        url: 'bill',
        imageurl: '../../images/icon/myCollect.png',
        tocatch:"toMyColloction",
      },
      {
        typeId: 2,
        name: '我的课程',
        url: 'bill',
        imageurl: '../../images/icon/myCourse.png',
        tocatch: "toMyCourse",
      },
      {
        typeId: 3,
        name: '我的好友',
        url: 'bill',
        imageurl: '../../images/icon/friends.png',
        tocatch: "toFriends",
      }
    ],
  },
  /**
   *点击添加地址事件
   */
  add_address_fun: function () {
    wx.navigateTo({
      url: 'add_address/add_address',
    })
  },
  toSetting: function () {
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  toMyOrder: function () {
    wx.navigateTo({
      url: '../MyOrder/MyOrder'
    })
  },
  toMyCourse: function () {
    wx.navigateTo({
      url: '../MyCourse/MyCourse'
    })
  },
  toFriends: function () {
    wx.navigateTo({
      url: '../Friends/Friends'
    })
  },
  toMyColloction: function () {
    wx.navigateTo({
      url: '../MyColloction/MyColloction'
    })
  },
  toShopping: function () {
    wx.navigateTo({
      url: '../Shopping/Shopping'
    })
  },
  toCoupon: function () {
    wx.navigateTo({
      url: '../Coupon/Coupon'
    })
  },
  toSetting: function () {
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  toResStudy: function () {
    wx.navigateTo({
      url: '../ResStudy/ResStudy'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
