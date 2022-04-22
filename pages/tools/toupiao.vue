<template>
	<view class="">
		<view class="mt-11">
			<view class="pb-50 text grey " :class="tmVuetify.black ? 'black bk' : ''">
					<!-- <tm-menubars title="投票" color="bg-gradient-blue-accent" :showback="true"></tm-menubars> -->
					<tm-form ref="formData">
						<tm-sheet :shadow="24" :padding="[12,24]" :margin="[24,24]">
							<view class="py-12 px-24 mx-12 round-3 border-b-1 grey text" :class="tmVuetify.black ? 'bk' : ''">
								<text class="text-size-n text-weight-b ">投票</text><text class="text-grey text-size-xs  px-10">(好的标题容易让人搜索到哦)</text>
							</view>
							<tm-input name="title"  title="投票主题" v-model="reqData.title"></tm-input>
							<tm-input name="des"  title="摘要" v-model="reqData.des"></tm-input>
							<tm-input name="selone"  title="选项一" v-model="reqData.selone"></tm-input>
							<tm-input name="seltwo"  title="选项二" v-model="reqData.seltwo"></tm-input>
							<tm-pickersDate @confirm="chuchangchange"  :end="enddefult" >
								<tm-input name="endtime"  title="截至时间" placeholder="请选择截至时间" disabled :value="reqData.endtime" right-icon="icon-angle-right"></tm-input>
							</tm-pickersDate>
							<tm-input name="content" :vertical="true"  :height="150" input-type="textarea" bg-color="grey-lighten-5" :maxlength="200"  title="描述" placeholder="请输入,不超过200字符"  v-model="reqData.descript" ></tm-input>
							<view class="mx-32 my-24 border-b-1  pb-24 flex-between" :class="tmVuetify.black ? 'bk' : ''">
								<text class="text-size-n ">匿名投票</text>
								<view>
									<tm-switch name="state" v-model="reqData.state"></tm-switch>
								</view>
							</view>
							<view class="px-24">
								<tm-button @click="putData" block theme="pink">提交</tm-button>
							</view>
						</tm-sheet>
					</tm-form>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reqData:{
					title:"",
					des:"",
					selone:"赞同",
					seltwo:"不赞同",
					endtime:"",
					content:"",
					state:false
				},
				enddefult:"",
				startdefult:""
			}
		},
		onLoad() {
			if(!uni.getStorageSync("openid")){
				
			}
			this.enddefult=this.common.timeutil(365)
			debugger
		},
		methods: {
			async putData(e){
				uni.showLoading({
					title: '加载中'
				});
				let d = await this.$refs.formData.getFormData();
				let openid = uni.getStorageSync("openid")
				if(!openid){
					await this.common.login()
				}else{
					d.openid = openid
					d.action = 'add'
					if(!d.title||!d.des||!d.selone||!d.seltwo||!d.endtime||!d.content){
						uni.showModal({
							content:"请完善数据",
							showCancel:false
						})
						return 
					}
					await uniCloud.callFunction({
						name:"toupiao",
						data:d
					}).then((res)=>{
						debugger
						if(res.result.code == 1){
							uni.showModal({
								content:"成功",
								showCancel:false,
								success: (resd) => {
									uni.redirectTo({
										url:"./toupiaolist"
									})
								}
							})
						}else if(res.result.code == -2){
							uni.showModal({
								content:"登录失效",
								showCancel:false
							})
						}else{
							uni.showModal({
								content:"未知错误",
								showCancel:false
							})
						}
					})
				}
				uni.hideLoading()
			},
			chuchangchange(e){
				this.$set(this.reqData,'endtime',e.year+"-"+(e.month<10?'0'+e.month:e.month)+"-"+(e.day<10?'0'+e.day:e.day))
			}
		}
	}
</script>

<style>
	.content {
		
	}
	
</style>
