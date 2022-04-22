<template>
	<view class="contents">
		<view class="" style="margin-top: 130rpx;">
			<tm-choujiangGrid :list="list" :turns="2" :themeList="themeList" @end="endGame"></tm-choujiangGrid>
		</view>
		<view class="mt-30">
			<tm-banners color="bg-gradient-blue-accent" icon-color="white" label="祝大家开开心心,每天抽一抽,开心走一走!" v-model="show"
			position="bottom" :y="top" :round="24"></tm-banners>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top:170,
				show: true,
				list: [
					{ 
						name: '开心', //奖品名称
						gailv: 10, //概率，所有奖品概率+一起要==100
						id: 1, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/d47f34e4-7196-4266-97d9-469a03a64eb7.png' //奖品图片 。
					},
					{
						name: '快乐', //奖品名称
						gailv: 10, //概率，所有奖品概率+一起要==100
						id: 2, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/35a68006-7f39-47ae-a968-f824ef99bc76.jpg' //奖品图片 。
					},
					{
						name: '幸福', //奖品名称
						gailv: 10, //概率，所有奖品概率+一起要==100
						id: 3, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/ffff1a7b-5dc3-46ed-8dbe-3657620766db.png' //奖品图片 。
					},
					{
						name: '大气', //奖品名称
						gailv: 10, //概率，所有奖品概率+一起要==100
						id: 4, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/cc35700a-e55d-41d3-846a-6c83f450a165.png' //奖品图片 。
					},
					{
						name: '事业有成', //奖品名称
						gailv: 10, //概率，所有奖品概率+一起要==100
						id: 5, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/75223eb6-3ae2-4858-8e3e-42fb29238a03.png' //事业有成图片 。
					},
					{
						name: '玉树临风', //奖品名称
						gailv: 20, //概率，所有奖品概率+一起要==100
						id: 6, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/e96b6cfe-c6bf-4ed4-9df4-65fca3e8f6ea.png' //奖品图片 。
					},
					{
						name: '冰雪聪明', //奖品名称
						gailv:10, //概率，所有奖品概率+一起要==100
						id: 7, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/bd88de2d-2105-48f6-8d8e-d92148b05a19.png' //奖品图片 。
					},
					{
						name: '貌美如花', //奖品名称
						gailv: 30, //概率，所有奖品概率+一起要==100
						id: 8, //奖奖品id.
						img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/1d287035-febd-4876-9079-aa5c65de261c.png'
						// img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/6ecae814-708f-434c-aa1a-ba18512ea6fd.jpg' //奖品图片 。
					}
				],themeList:[
					{
						//背景
						bg: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/e995f19b-977c-427b-91eb-866b2b52982b.jpg',
						//中间开始的按钮。
						point: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/2aa3f80b-3d2f-40a6-87c6-a91a14893207.jpg'
					}
				]
				
			}
		},
		onLoad() {
			// this.okSearch();
		},
		methods: {
			endGame(obj,arr){
				this.$tm.toast(obj.data.name);
			}
		}
	}
</script>

<style>
	.content {
		
	}
	
</style>
