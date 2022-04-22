<template>
	<view class="content">
		<view class="mt-11">
			<tm-card :img="datas.icon"
			 :imgRound="24" 
			:actionBorder="false"
			 :title="datas.title+'-'+datas.des" 
			:content="datas.content" 
			:subTitle="'结束时间:'+datas.endtime" 
			:statusText="datas.state?'匿名':'非匿名'" statusColor="blue" >
				<template v-slot:content="{text}">
					
					<!-- 	<tm-more iconColor="white" bgColor="blue" maxHeight="50">
							<view class="text-size-n pa-24"> -->
								<view class="py-24" >{{text.data}}</view>
								<!-- <tm-images src="https://picsum.photos/300"></tm-images> -->
							<!-- </view>
						</tm-more> -->
				</template>
			</tm-card>
			
			
			
			<!-- <tm-grouplist title="投票"  title-theme="blue text" :shadow="24" :round="10" :padding="[42, 42]">
				<tm-listitem :title="datas.title" right-icon=""></tm-listitem>
				<tm-listitem :title="datas.des"  right-icon=""></tm-listitem>
				<tm-listitem :title="datas.content"  right-icon=""></tm-listitem>
				<tm-listitem :title="datas.createtime"  right-icon=""></tm-listitem>
				<tm-listitem :title="datas.endtime" right-icon=""></tm-listitem>
				
			</tm-grouplist> -->
			<view class="" v-show="show">
				<tm-button @click="put(true)" class="willl" fab icon="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/4ecacfde-f2bb-4ad7-8fba-7dfdcf6c5063.png"
				 icon-size="70" theme="" size="l">l</tm-button>
				<tm-button @click="put(false)" class="willr" fab icon="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/05e48f20-24a1-4b38-80fe-48f7a7e6c1ca.png"
				 icon-size="70" theme="" size="l">l</tm-button>
			</view>
			<tm-sheet :shadow="24">
				<view class="flex-center"><tm-segTabs @change="getresult"  :round="24" :margin="[30,10]" :list="select" v-model="active"></tm-segTabs></view>
				<!-- <tm-grouplist title=""   title-theme="blue text" :shadow="24" :round="10" :padding="[42, 42]"> -->
					<view class="" v-if="active==0">
						<view class="" v-if="datas.state">
							<tm-listitem   v-for="(item,index) in datas.tu" :key="index" :title="index" right-icon=""></tm-listitem>
						</view>
						<view class="" v-if="!datas.state">
							<tm-listitem   v-for="(item,index) in datas.tu" :key="index" :title="item.name" right-icon=""></tm-listitem>
						</view>
					</view>
					<view class="" v-if="active==1">
						<view class="" v-if="datas.state">
							<tm-listitem   v-for="(item,index) in datas.tun" :key="index" :title="index" right-icon=""></tm-listitem>
						</view>
						<view class="" v-if="!datas.state">
							<tm-listitem   v-for="(item,index) in datas.tun" :key="index" :title="item.name" right-icon=""></tm-listitem>
						</view>
					</view>
					
				<!-- </tm-grouplist> -->
			</tm-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:0,//默认选择
				select:['赞同', '不赞同'],
				show:true,
				datas:{
					_id:"",
					title:"",
					des:"",
					endtime:"",
					createtime:"",
					content:"",
					state:false,
					icon:"",
					name:"",
					selone:"",
					seltwo:"",
					tu:[],
					tun:[]
				}
			}
		},
		onLoad(option) {
			uni.showLoading({
				title: '加载中'
			});
			if(!option.id){
				uni.showToast({
					title:"异常"
				})
				setTimeout(function(){uni.switchTab({
					url:"../index/index"
				})},1000)
				return;
			}
			let openid = uni.getStorageSync("openid");
			let that = this;
			if(!openid){
				uni.showModal({
					title: '登录',
					content: '是否授权登录',
					success: function (res) {
						if (res.confirm) {
							that.common.login();
						} else if (res.cancel) {
							
						}
					}
				});
			}else{
				uni.hideLoading()
			}
			this.datas._id = option.id
			let time = setInterval(function(){
				console.log(uni.getStorageSync("openid"))
				if(uni.getStorageSync("openid")){
					clearInterval(time); 
					uni.hideLoading()
					that.$nextTick(function(){
						that.get(option.id)
					})
				}
			},1500)
			
		},
		//发送给朋友
		onShareAppMessage(res) {
			return {
				title: '投票-'+this.datas.title,
				type: 0,
				path: '/pages/tools/toupiaodetail?id=' + this.datas._id,
				summary: "",
				// imageUrl: "https://58d.oss-cn-hangzhou.aliyuncs.com/goods/ttg_1596073788000.png"
			}
		},
		//分享到朋友圈
		onShareTimeline(res) {
			return {
				title: '投票-'+this.datas.title,
				type: 0,
				query: 'id=' + this.datas._id,
				summary: "",
				// imageUrl: "https://58d.oss-cn-hangzhou.aliyuncs.com/goods/ttg_1596073788000.png"
			}
		},
		methods: {
			getresult(e){
				console.log(e)
			},
			put(state){
				if(this.datas.endtime<this.common.timeutil(0)){
					uni.showToast({
						title:"时间结束"
					})
					return ;
				}
				uni.showLoading({
					title: '加载中'
				});
				const that =this;
				 uniCloud.callFunction({
					name:"toupiao",
					data:{action:"put",id:that.datas._id,willing:state,openid:uni.getStorageSync("openid")}
				}).then((res) =>{
					let result = res.result
					uni.hideLoading();
					if(result.code==1){
						console.log(result)
						if(state){
							this.datas.tu.push(result.data)
							this.datas.active=0
						}else{
							this.datas.tun.push(result.data)
							this.datas.active=1
						}
						this.show = false;
						uni.showToast({
							title:"成功"
						})
					}else if(result.code == -2){
						uni.showModal({
							content:"登录失效",
							showCancel:false,
							success: (re) => {
								uni.navigateTo({
									url:"../my/my"
								})
							}
						})
					}else{
						uni.showModal({
							content:result.msg,
							showCancel:false
						})
					}
				}).catch((err)=>{
					uni.hideLoading();
				})
			},
			async get(id){
				uni.showLoading({
					title: '加载中'
				});
				await uniCloud.callFunction({
					name:"toupiao",
					data:{action:"get",id:id,openid:uni.getStorageSync("openid")}
				}).then((res) =>{
					let result = res.result
					uni.hideLoading();
					if(result.code==1){
						this.datas = result.data
						debugger
						this.select[0]=(this.datas.selone||'赞')+result.data.tu.length
						this.select[1]=(this.datas.seltwo||'踩')+result.data.tun.length
						console.log(result.data)
						if(JSON.stringify(result.data.tu).indexOf(uni.getStorageSync("openid"))!=-1 || 
						JSON.stringify(result.data.tun).indexOf(uni.getStorageSync("openid"))!=-1){
							this.show = false
						}
					}else if(result.code == -2){
						uni.showModal({
							content:"登录失效",
							showCancel:false,
							success: (re) => {
								uni.navigateTo({
									url:"../my/my"
								})
							}
						})
					}else{
						uni.showModal({
							content:"未知错误",
							showCancel:false
						})
					}
				}).catch((err)=>{
					uni.hideLoading();
				})
			},
			onShareAppMessage (){
				return {
						title: "投票",
						path: "/pages/tools/toupiaodetail?id=" + this.datas._id,  //页面路径及参数
						imageUrl:this.config.BIZ_SHARE_URL + "?temp=" + Date.parse(new Date()),  //图片链接，必须是网络连接，后面拼接时间戳防止本地缓存
					}
			}
		}
	}
</script>

<style>
	.content {
		
	}
	.willl{
		position: relative;
		left: 20%;
	}
	.willr{
		position: absolute;
		right: 20%;
	}
	
</style>
