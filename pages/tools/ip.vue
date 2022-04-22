<template>
	<view class="contents">
		<view class="mt-11">
			<tm-search v-model="ip" @confirm="okSearch"  bgColor="bg-gradient-blue-accent" color="white" insertColor="blue" :showLeft="false" >
			</tm-search>
			
			<!-- <tm-sheet></tm-sheet> -->
			<tm-grouplist  title="结果" title-theme="blue text">
				<tm-listitem  title="国家"  right-icon="" :value="ipdata.nation" right-icon-color="red"></tm-listitem>
				<tm-listitem  title="省" right-icon="" :value="ipdata.province" right-icon-color="red"></tm-listitem>
				<tm-listitem  title="市" right-icon="" :value="ipdata.city" right-icon-color="red"></tm-listitem>
				<!-- <tm-listitem  title="区/县" right-icon="" :value="ipdata.district" right-icon-color="red"></tm-listitem> -->
				<!-- <tm-listitem  title="温度" right-icon="" :value="ipdata.weather.temp" right-icon-color="red"></tm-listitem> -->
			</tm-grouplist>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ip: "",
				ipdata:{
					nation:"",
					province:"",
					city:"",
					district:"",
					update:"",
					weather:{
						temp:""
					}
				}
			}
		},
		onLoad() {
			this.okSearch();
		},
		methods: {
			async okSearch(ip){
				if(ip){
					uni.showLoading({
						title: '数据加载中...',
						mask: true
					});
				}
				let res =await this.common.getInfoForIp(ip);
				console.log(res)
				debugger
				this.ipdata = res.data.result.ad_info;
				uni.hideLoading();
			}
		}
	}
</script>

<style>
	.content {
		
	}
	
</style>
