<template>
	<view class="content">

		<view class="backs">
			<view class="ml-32">
				<tm-icons :size="32" name="icon-position-fill" class="ml-5" color="white"></tm-icons>
				<text style="font-size: 25rpx;color: #FFFFFF;" class="ml-15">{{addr}}</text>
				<text style="font-size: 25rpx;color: #FFFFFF;" class="ml-15">{{weather}}</text>
			</view>
			<view class="ma-32  round-3 overflow">
				<!-- <tm-swiper  :round="6" :ani3d="120"  :autoplay="true" dot-model="rect"  :indicator-dots="true" :list="list"></tm-swiper> -->
				<tm-swiper :round="3" :height="380" :width="680" inline :autoplay="true" dot-model="rect"
					:circular="true" dot-direction="right" :indicator-dots="true" :list="list"></tm-swiper>
			</view>
		</view>


		<tm-alerts icon-color="orange" text color="orange" :shadow="0" :label="message" :round="0"></tm-alerts>
		<tm-sheet>
			<tm-grid @change="change" :grid="4" :height="150" :icon-size="60" color="blue" :list="list2"></tm-grid>
		</tm-sheet>

		<view class="">
			<tm-divider class="" text="我是有底线的" model="dotted" color="grey"></tm-divider>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addr:"重庆市",
				weather: "",
				message: "这是一条公告",
				list: ["../../../static/b1.jpg",
					"../../../static/b2.jpg"
				],
				list2: [{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/fa346799-5dd8-4353-84aa-845fefa87e96.png',
						text: 'IP',
						color: 'blue',
						fontColor: 'blue-grey'
					},
					{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/0ddfa1ce-13d4-41db-9476-8f8c1528390c.png',
						text: '二维码生成',
						fontColor: 'blue-grey'
					},
					{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/1df937ae-753f-4c82-bf40-5fb883c7ddf5.png',
						text: '抽奖游戏',
						color: 'green',
						fontColor: 'blue-grey'
					},
					{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/748d0488-976f-4307-97e1-5d8cadf36610.png',
						text: '时间转换',
						color: 'blue-grey',
						fontColor: 'blue-grey'
					},{
						icon: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/d0866f72-be39-4398-bcd3-b6b25c847326.png',
						text: '发起投票',
						color: 'blue-grey',
						fontColor: 'blue-grey'
					},
				]
			}
		},
		onLoad() {
			this.getconfig()
			this.getlocat()
		},
		methods: {
			change(e) {
				if(e.data.text == "IP"){
					uni.navigateTo({
						url:"../tools/ip"
					})
				}
				if(e.data.text == "二维码生成"){
					uni.navigateTo({
						url:"../tools/qrcode"
					})
				}
				if(e.data.text == "抽奖游戏"){
					uni.navigateTo({
						url:"../tools/choujiang"
					})
				}
				if(e.data.text == "时间转换"){
					uni.navigateTo({
						url:"../tools/dateformat"
					})
				}
				if(e.data.text == "发起投票"){
					uni.navigateTo({
						url:"../tools/toupiao"
					})
				}

				/* uni.navigateTo({
					url:"../tools/tools"
				}) */
				/* uni.switchTab({
					url:"../my/my"
				}) */
				// this.$tm.toast(`点击了：${e.index},数据为：${JSON.stringify(e.data)}`)
			},
			getconfig(){//获取公告信息
				uniCloud.callFunction({
					name:"getconfig",
					data:{type:1}
				}).then((res)=>{
					this.message = res.result.data[0].message
				}).catch((err) =>{
					console.log(err)
				})
			},
			async getlocat(){
				// let res  = await this.common.getInfoForIp()
				// if(res){
				// 	console.log(res)
				// 	this.addr = res.district==""?res.city:res.district
				// 	this.weather = res.weather.temp +" " + res.weather.weather+" " + res.weather.WS+res.weather.WD
				// }
				var that = this;
				// uni.getLocation({
				// 	type:'gcj02',
				// 	success: (res) => {
				// 		console.log(res)
				// 		uni.request({
				// 			header:{
				// 				"Content-Type": "application/text"
				// 			},
				// 			url:'https://apis.map.qq.com/ws/geocoder/v1/?location='+res.latitude+','+res.longitude+'&key=ZDYBZ-XWPRX-IRV4K-ZOXX5-6BFMF-JBBIA&get_poi=1',
				// 			success(re) {
				// 				debugger
				// 				let address= re.data.result.ad_info.district;
				// 				that.addr = address==""?"重庆":address
				// 			 }
				// 		});
				// 	}
				// })
				let res = await this.common.getInfoForIp()
				let address= res.data.result.ad_info.city;
				that.addr = address==""?"重庆":address
			}
		},
		
	}
</script>

<style>
	.content {}
</style>
