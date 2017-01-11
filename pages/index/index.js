//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    proposition:{
      restTime:180,
      name:"计算机",
      status:false,
    },
    opposition:{
      restTime:180,
      name:"文新",
      status:false,
    },
    curstep:0,
    step:[
      {
        name:"正方一辩立论",
        propositionTime:180,
        oppositionTime:0,
        dialog:false,
      },{
        name:"反方四辩质询",
        propositionTime:0,
        oppositionTime:90,
        dialog:false,
      },{
        name:"反方一辩立论",
        propositionTime:0,
        oppositionTime:180,
        dialog:false,
      },{
        name:"正方四辩质询",
        propositionTime:0,
        oppositionTime:90,
        dialog:false,
      },{
        name:"正方二辩申论",
        propositionTime:0,
        oppositionTime:120,
        dialog:false,
      },{
        name:"反方二辩申论",
        propositionTime:0,
        oppositionTime:120,
        dialog:false,
      },{
        name:"二辩对话",
        propositionTime:120,
        oppositionTime:120,
        dialog:true,
      },
    ],
    dailog:false,
    interval:0,
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // },
  tick:function(event){
    if(this.interval){
      clearInterval(interval);
    }
    var that=this;
    var desc1=function(){
      that.setData({
        "proposition.restTime":--that.data.proposition.restTime
      })
    }
    var desc2=function(){
      that.setData({
        "opposition.restTime":--that.data.opposition.restTime
      })
    }
    if(event.target.dataset.type=="proposition"){
      this.setData({
        interval:setInterval(desc1,1000),
        "proposition.status":true
      });
    }else{
      this.setData({
        interval:setInterval(desc2,1000),
        "opposition.status":true
      });
    }
    
  },
  stop:function(event){
    clearInterval(this.data.interval);
    if(event.target.dataset.type=="opposition"){
        this.setData({
          "opposition.status":false
        });
    }else{
       this.setData({
          "proposition.status":false
        });
    }
  }
})
