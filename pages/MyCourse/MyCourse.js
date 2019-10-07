Page({

  /**
   * 页面的初始数据
   */
  data: {
    RSList: [
      {
        text1: "奥特曼打怪兽",
        text2: 0,
        pro: 30,
        tocatch:"",
      },
      {
        text1: "怪兽打奥特曼",
        text2: 1,
        pro: 10,
        tocatch:"",
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getRSList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success 
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            RSList: res.data.data.RSList
          })
        }

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onLoad: function (options) {
    this.getRSList();
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