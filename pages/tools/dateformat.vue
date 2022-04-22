<template>
	<view class="contents">
		<view class="" style="margin-top: 100px;">
				<tm-input  placeholder="请输入时间戳" v-model="value"  :border-bottom="false" bg-color="" title="时间戳" border-color="grey-lighten-3"></tm-input>
				<view class="" style="width: 100%;">
					<button type="primary" style="width: 30%;" @click="dateto">转换</button>
				</view>
				<tm-input  :focus-show = "true" v-model="revalue" :border-bottom="false" bg-color="" title="时间" border-color="grey-lighten-3"></tm-input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:"",
				revalue:"",
				dates: "",
				array:[{name:'毫秒'},{name:'秒'}],
				index: 0,
			}
		},
		onLoad() {
			this.value = Math.floor(new Date())+""
			this.dateto()
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			dateto: function(e){
				debugger
				let that = this;
				uni.createSelectorQuery().select('.grey-lighten-5').boundingClientRect(function (data) { 
					  console.log('元素信息0：',data)
						  that.vHeight +=10
					}).exec()
				if(this.value.length!=10&&this.value.length!=13){
					this.$tm.toast("时间戳错误")
					return;
				}
				let data = this.happenTimeFun(this.value);
				console.log(data);
				this.revalue=data;
			},
			happenTimeFun(num){//时间戳数据处理
				if(num.length==10){
					num=num*1000
				}
                let date = new Date(parseInt(num));
                 //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                 let y = date.getFullYear();
                 let MM = date.getMonth() + 1;
                 MM = MM < 10 ? ('0' + MM) : MM;//月补0
                 let d = date.getDate();
                 d = d < 10 ? ('0' + d) : d;//天补0
                 let h = date.getHours();
                 h = h < 10 ? ('0' + h) : h;//小时补0
                 let m = date.getMinutes();
                 m = m < 10 ? ('0' + m) : m;//分钟补0
                 let s = date.getSeconds();
                 s = s < 10 ? ('0' + s) : s;//秒补0
                 // return y + '-' + MM + '-' + d; //年月日
                 return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s; //年月日时分秒
             },
		}
	}
</script>

<style>
	.content {
		
	}
	.tm-input{
		background: none !important;
	}
	
	
</style>
