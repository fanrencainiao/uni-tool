<template>
	<view class="contents">
		
		<view class="mt-10">
			<tm-input :border-bottom="false"  :vertical="true" title="输入内容"   v-model="iurl" border-color="grey-lighten-1"></tm-input>
			<button type="primary" class="mt-30" style="width: 90%;" @click="showQrcode">生成</button>
		</view>
		<view class="mt-30">
			<view>
				<ayQrcode ref="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" />	
			</view>
		</view>
	</view>
</template>

<script>
	import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"
	export default {
		components: {
		            ayQrcode,
		        },
		data() {
			return {
				 //二维码相关参数
				modal_qr: false,
				url: 'http://www.lslad.com', // 要生成的二维码值
				iurl:''
			}
		},
		onLoad() {
			let that = this;
			that.showQrcode();//一加载生成二维码
		},
		methods: {
			// 展示二维码
			showQrcode() {
				let _this = this;
				uni.showLoading({
					title: '生成中...',
					mask: true
				});
				if(this.iurl){
					_this.url = _this.iurl;
				}
				_this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode()
					uni.hideLoading();
				}, 50)
			},
			
			//传入组件的方法
			hideQrcode() {
				this.modal_qr = false;
			}
		}
	}
</script>

<style>
	.content {
		
	}
	.canvas-qrcode{
		display: inline-block !important;
		float: none !important;
	}
	.tm-input{
		background: none !important;
	}
</style>
