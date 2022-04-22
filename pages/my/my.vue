<template>
	<view class="content">
		<view class="backs" v-show="">
			<view class="userinfo">
				<image class="userinfo-avatar" :src="icon" mode=""></image>
			</view>
		</view>	
		
		<view class="">
			<tm-button v-show="show" class="mt-50" @click="getUserProfile"  theme=".bg-gradient-blue-accent" :width="150" :round="24" block>登录</tm-button>
			<tm-sheet :shadow="24" v-show="!show">
				<view class="mx-32 my-24 border-b-1  pb-24 flex-between" >
					<text class="text-size-n ">昵称</text>
					<view>
						<tm-button  icon="" icon-size="45" theme="" size="s">{{nickname}}</tm-button>
						<!-- <text class="text-size-n ">{{nickname}}</text> -->
					</view>
				</view>
				<view class="mx-32 my-12 border-b-1  pb-12 flex-between" @click="totoupiao" >
					<text class="text-size-n ">我的投票-发起</text>
					<tm-button fab icon="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/d0866f72-be39-4398-bcd3-b6b25c847326.png" icon-size="45" show-message-card='true' theme="" size="s">g</tm-button>
				</view>
				<view class="mx-32 my-12 border-b-1  pb-12 flex-between" @click="totoupiaoin" >
					<text class="text-size-n ">我的投票-参与</text>
					<tm-button fab icon="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/d0866f72-be39-4398-bcd3-b6b25c847326.png" icon-size="45" show-message-card='true' theme="" size="s">g</tm-button>
				</view>
				<view class="mx-32 my-12 border-b-1  pb-12 flex-between" >
					<text class="text-size-n ">客服</text>
					<tm-button fab icon="icon-weixin" icon-size="45" show-message-card='true' open-type="contact" session-from="" theme="bg-gradient-indigo-accent" size="s">g</tm-button>
				</view>
				<view class="mx-32 my-12 border-b-1  pb-12 flex-between" >
					<text class="text-size-n ">打赏</text>
					<tm-button fab icon="icon-transanction" @click = "pay" icon-size="45" show-message-card='true' theme="bg-gradient-indigo-accent" size="s">g</tm-button>
				</view>
				<!-- <view class="text-size-s text-weight-b mb-24">我的</view>
				<tm-grouplist  title="" title-theme="blue text">
					<tm-listitem  title="昵称"  right-icon="" :value="nickname" right-icon-color="red"></tm-listitem>
					<tm-listitem  group title="客服" :show-value="true"   right-icon="" value="客服" >
						<template v-slot:group>
							<tm-button fab icon="icon-weixin" icon-size="45" open-type="contact" session-from="" theme="bg-gradient-indigo-accent" size="s">g</tm-button>
						</template>
						
					</tm-listitem>
				</tm-grouplist> -->
			</tm-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				nickname: '',
				icon: '',
				avatar: '',
				openid:'',
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'
			});
			this.autologin()
		},
		methods: {
			toLink(){
				console.log("ss")
			},
			totoupiao(){
				uni.navigateTo({
					url:"../tools/toupiaolist"
				})
			},
			totoupiaoin(){
				uni.navigateTo({
					url:"../tools/toupiaolistin"
				})
			},
			autologin(){
				debugger
				let openid = uni.getStorageSync('openid')
				if(openid){//登录状态
					this.show = false;
					this.nickname = uni.getStorageSync('nickName')
					this.icon =uni.getStorageSync('avatarUrl')
					uniCloud.callFunction({
						name: 'user-center',
						data: {
							action: 'login',
							params: {
								openid:openid
							}
						}
					}).then((resd)=>{
						console.log(resd.result.data)
						this.openid = resd.result.openid
						this.nickname = resd.result.nickName
						this.icon = resd.result.avatarUrl
						uni.getStorageSync('nickName')
						uni.getStorageSync('avatarUrl')
						uni.hideLoading()
					}).catch((err) =>{
						console.log(err)
						uni.hideLoading()
					})
				}else{
					uni.hideLoading()
				}
			},
			getUserProfile(e) {
			    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
			    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
				uni.showLoading({
					title: '加载中'
				});
				  uni.getProvider({
					service: 'oauth',
					success: (res1) => {
						if (~res1.provider.indexOf('weixin')) {
							uni.getUserProfile({
							  desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
							  success: (res) => {
							    console.log(res)
								this.nickname = res.userInfo.nickName;
								this.icon = res.userInfo.avatarUrl;
								this.show = false;
								uni.setStorageSync('nickName',this.nickname)
								uni.setStorageSync('avatarUrl',this.icon)
								uni.login({
									provider: 'weixin',
									success: (loginRes) => {
										uniCloud.callFunction({
											name: 'user-center',
											data: {
												action: 'register',
												params: {
													code:loginRes.code,
													nickname:this.nickname,
													icon:this.icon
												}
											}
										}).then((resd)=>{
											console.log(resd.result.data)
											this.openid = resd.result.data.openid
											uni.setStorageSync('openid',this.openid)
											uni.hideLoading()
										}).catch((err) =>{
											console.log(err)
											uni.hideLoading()
										})
									}
								});
							  },
							    fail: (err) => {
									console.log(err)
							        uni.showToast({title:"微信登录授权失败",icon:"none"});
									uni.hideLoading()
							    }
							})
					
						}
					}
				  });
			  },
			  pay() {
			    // const providerList = ['wxpay', 'alipay']
			    // let selectedProvider = ''
			    // new Promise((resolve, reject) => {
			    //   uni.showActionSheet({
			    //     itemList: providerList,
			    //     success(res) {
			    //       resolve(providerList[res.tapIndex])
			    //     },
			    //     fail() {
			    //       reject(new Error('取消支付'))
			    //     }
			    //   })
			    // })
				
				 uniCloud.callFunction({
			        name: 'pay',
			        data: {
			          openid: this.openid
			        }
			      })
			    .then((res) => {
			      console.log(res);
				  let data = res.result
			     uni.requestPayment({
			        provider: 'wxpay',
			     	timeStamp: data.timeStamp,
			     	nonceStr: data.nonceStr,
			     	package: data.package,
			     	signType: data.signType,
			     	paySign: data.paySign,
			     	success: function (res) {
			     		console.log('success:' + JSON.stringify(res));
			     	},
			     	fail: function (err) {
			     		console.log('fail:' + JSON.stringify(err));
			     	}
			     });
			    }).catch((err) => {
			      uni.showModal({
			        content: err.message || '获取支付二维码失败',
			        showCancel: false
			      })
			    })
			  },
		}
	}
</script>

<style>
	
</style>
