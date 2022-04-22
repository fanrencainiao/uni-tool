<template>
	<view class="">
		<tm-menubars title="我发起的" color="bg-gradient-primary-lighten" :showback="true"></tm-menubars>
		<tm-fullView>
			<template >
				<view class="grey text " :class="$tm.vx.state().tmVuetify.black ? 'black bk' : ''">
					<!-- <tm-search placeholder="搜索小程序/公众号" @focus="showRightSearch=true" @blur="showRightSearch=false" confirmText="取消" :showRight="showRightSearch"></tm-search> -->
					<view class="shadow-24" >
						<tm-pullBottom  :height="height" :finish="finish" :disabled="disabled" :loading.sync="loading" @refresh="getdata">
							<!-- <view v-if="page > 1" class="flex-center pa-24 mt-24">刷新</view> -->
							<tm-switchList  v-for="(item,index) in datas" @click="todetail(item._id)" @actionsClick="actions($event,item._id)"  color="blue"  :rightLabel="item.createtime" rightIcon="icon-comment-dots" icon="icon-gem" :title="item.title" :label="item.des" :actions="item_1" :on='open'></tm-switchList>
						</tm-pullBottom> 
					</view>
				</view>
			</template>
		</tm-fullView>
	</view>
	
</template>

<script>
	import tmSwitchList from '@/tm-vuetify/components/tm-switchList/tm-switchList.vue';
	import tmMenubars from '@/tm-vuetify/components/tm-menubars/tm-menubars.vue';
	import tmFullView from '@/tm-vuetify/components/tm-fullView/tm-fullView.vue';
	import tmButton from '@/tm-vuetify/components/tm-button/tm-button.vue';
	import tmSearch from '@/tm-vuetify/components/tm-search/tm-search.vue';
	export default {
		components: {
			tmSwitchList,
			tmMenubars,
			tmFullView,tmButton,tmSearch
		},
		data() {
			return {
				finish: false,
				disabled:false,
				height:1200,
				loading:false,
				datas:[
				],
				open:false,
				item_1:[
					{text: "删除",width: 110,color: 'red'},
					// {text: "复制",width: 110,color: 'blue'}
				],
				page:1,
				limit:25,
				nowlimit:0
			};
		},
		 // 页面滚动
		onPageScroll(e) {
			if(e.scrollTop==0){
				this.disabled = true
			}else{
				this.disabled = false
			}
			
		},
		onLoad() {
			this.list()
		},
		onShow(){
			 // 获取屏幕高度
			let self = this;
			uni.getSystemInfo({
				success: function(res) {
					self.emulator_Height = (res.screenHeight * (750 / res.windowWidth)) //将px 转换rpx
					console.log("rpx*********", self.emulator_Height)
					let a = res.windowHeight/(uni.upx2px(100)/100);
					console.log("upx*********", a)
					self.height =a
				}
			});
		},
		methods: {
		
			async list(){
				uni.showLoading({
					title: '加载中'
				});
				await uniCloud.callFunction({
					name:"toupiao",
					data:{action:"list",page:this.page,limit:this.limit,openid:uni.getStorageSync("openid")}
				}).then((res) =>{
					let result = res.result
					if(result.code==1){
						if(this.page ==1){
							this.datas = result.data
						}else{
							this.datas = this.datas.concat(result.data)
						}
						this.nowlimit = result.data.length
						uni.hideLoading();
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
				})
			},
			todetail(id){
				uni.navigateTo({
					url:"toupiaodetail?id="+id
				})
			},
			async del(id){
				uni.showLoading({
					title: '加载中'
				});
				await uniCloud.callFunction({
					name:"toupiao",
					data:{action:"del",_id:id,openid:uni.getStorageSync("openid")}
				}).then((res) =>{
					let result = res.result
					if(result.code==1){
						this.page = 1
						this.list()
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
					uni.hideLoading();
				})
			},
			actions(e,id){
				console.log(e)
				console.log(id)
				if(e.index == 0){
					this.del(id)
				}
			},
			getdata(e) {
				debugger
				if (e == 'pull') {
					this.loading = false;
					this.page = 1;
					this.finish = false;
					console.log(this.page)
					this.list()
				}
				if (e == 'bottom') {
					this.loading = false;
					if(this.nowlimit == this.limit){
						this.page = this.page+1;
						this.list()
					}else{
						this.finish = true;
						uni.showToast({
							icon:'none',
							title: '暂无数据',
							duration: 2000
						});
					}
					console.log(this.page)
				}
				
			}
		},
	};
</script>
