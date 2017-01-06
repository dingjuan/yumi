    /**
     * Created by huhaosumail on 16/8/8.
     */
    $(function () {
        $.get("http://yoloboo-product-api-20.daoapp.io/user/getSignature", { url: location.href.split("#")[0] },
            function(data){
                if(200== eval("(" + data + ")").status){
                    var signature=eval("(" + data + ")").rows.signature;
                    var timestamp=eval("(" + data + ")").rows.timestamp;
                    var nonceStr=eval("(" + data + ")").rows.nonceStr;
   
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wxcc378e02c15daf33', // 必填，公众号的唯一标识
                        timestamp: timestamp, // 必填，生成签名的时间戳
                        nonceStr: nonceStr, // 必填，生成签名的随机串
                        signature: signature,// 必填，签名，见附录1
                        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']// 必填，需要使用的JS接口列表
                    });

                    wx.ready(function(){
                      
                            var descContent = 'YOLOBOO-最酷最纯粹的生活。';
                     
                         //分享的抬头跟照片设置
                    
                                    var title= "我们的纪念日";
                                    var  imgUrl="https://image.yoloboo.com/image15555.jpg";
                                 
                                    wx.onMenuShareTimeline({//分享到朋友圈
                                        title:  '我们的纪念日';, // 分享标题
                                        link:location.href.split("#")[0], // 分享链接
                                        imgUrl: 'https://image.yoloboo.com/image15555.jpg', // 分享图标
                                        success: function () {
                                            // 用户确认分享后执行的回调函数
                                            
                                        }
                                    });
                                    wx.onMenuShareAppMessage({//分享给朋友
                                        title:'我们的纪念日', // 分享标题
                                        desc: 'YOLOBOO-最酷最纯粹的生活。', // 分享描述
                                        link:location.href.split("#")[0], // 分享链接
                                        imgUrl: 'https://image.yoloboo.com/image15555.jpg', // 分享图标
                                        type: '', // 分享类型,music、video或link，不填默认为link
                                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                        success: function () {
                                            
                                            // 用户确认分享后执行的回调函数
                                        },
                                        cancel: function () {
                                            // 用户取消分享后执行的回调函数
                                        }
                                    });
                      });          
                  

                }
            });

    });




