<template>
	<view class="content">
		<view class="backs">
			<view class="userinfo">
				<view class="userinfo-avatar">
			    	<open-data type="userAvatarUrl"></open-data>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list2:[
					{icon:'icon-QQ',text:'QQ',color:'blue'},
					{icon:'icon-weibo',text:'微博',iconSize:40,color:'red',dot:true},
					{icon:'icon-pengyouquan',text:'朋友圈',color:'green',fontColor:'green'},
					{icon:'icon-aliwangwang',text:'阿里旺旺',color:'blue-grey'},
				]
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		
	}

	
</style>
