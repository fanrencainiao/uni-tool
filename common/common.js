module.exports ={
	
	isNumber : function (checkVal){
		var reg = /^-?[1-9][0-9]?.?[0-9]*$/;
		return reg.test(checkVal);
	},
	 getInfoForIp: function(ip){
		let url = "https://apis.map.qq.com/ws/location/v1/ip?key=";
		let resdata = "";
		if(ip){
			url = url+"&ip="+ip
		}
		return uni.request({
			url: url,
		}).then(result =>{
			let [error,res] = result;
			return res
		})
	},
	 timeutil: function(addDay){
		var time= new Date();//获取服务器当前时间给time变量 例：Fri Aug 20 2021 12:37:42 GMT+0
		time.setDate(time.getDate()+addDay);//获取addDay天后的日期 
		var Mday=new Date(time.getFullYear(),time.getMonth()+1,0).getDate();
		let y = time.getFullYear() //年
		let m = time.getMonth() + 1 //月-整数值0（1月）到11（12月）故需要加1。
		let d = time.getDate() //日
		let h = time.getHours() //时
		let mm = time.getMinutes() //分
		let s = time.getSeconds() //秒
		if(h>23){h=h-24;d=d+1;if(d>Mday){d=1;m=m+1;if(m==13){m=1;y+1}}}
		m = m < 10 ? ('0' + m) : m;d = d < 10 ? ('0' + d) : d;h=h < 10 ? ('0' + h) : h;mm = mm < 10 ? ('0' + mm) : mm;
		return (y+'-'+m+'-'+d+' '+h+':'+mm+':'+s)
	},
	login(){
		let nickname
		let icon
		uni.getUserProfile({
		  desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
		  success: (res) => {
		    console.log(res)
			nickname = res.userInfo.nickName;
			icon = res.userInfo.avatarUrl;
			uni.login({
				success: (loginRes) => {
					debugger
					uniCloud.callFunction({
						name: 'user-center',
						data: {
							action: 'register',
							params: {
								code:loginRes.code,
								nickname:nickname,
								icon:icon
							}
						}
					}).then((resd)=>{
						console.log(resd.result.data)
						let openid = resd.result.data.openid
						uni.setStorageSync('openid',openid)
					}).catch((err) =>{
						console.log(err)
					})
				}
			});
		  },
		    fail: (err) => {
				console.log(err)
		        uni.showToast({title:"微信登录授权失败",icon:"none"});
		    }
		})
	}
	
}