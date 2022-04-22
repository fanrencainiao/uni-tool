<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// #ifdef APP-NVUE || APP-PLUS-NVUE
		//at.alicdn.com/t/font_2660213_naog46qr7c.ttf?t=1636788566991
		var domModule = weex.requireModule('dom');
		//../../tm-vuetify/scss/iconfonts/iconfont.ttf\
		domModule.addRule('fontFace', {
			fontFamily: 'iconfontTM', //注意这里必须是驼峰命名，跟上面的css样式对照
			src: "url(\'https://at.alicdn.com/t/font_2660213_naog46qr7c.ttf?t=1636788566991\')"
		});
		// #endif
	},
	onShow: function() {
		console.log('App Show');
		// #ifdef MP
		const updateManager = uni.getUpdateManager();
		updateManager.onCheckForUpdate(function(res) {});
		updateManager.onUpdateReady(function(res) {
			uni.showModal({
				title: '更新提示',
				content: '新版本已经准备好，确认重启应用？',
				showCancel: false,
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});
		});
		updateManager.onUpdateFailed(function(res) {
			// 新的版本下载失败
			uni.showModal({
				title: '更新提示',
				content: '新版本更新失败,确认重试',
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});
		});

		// #endif
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>
<style>
/*每个页面公共css */
@import './tm-vuetify/mian.min.css';
@import './tm-vuetify/scss/theme.css';

@font-face {
	font-family: 'myicon'; /* Project id 2948283 */
	src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAXQAAsAAAAADEgAAAWCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDOAqLXIllATYCJAMYCw4ABCAFhE8HTxuACiMRtntQQpH91QFvKH30d2AQLmoMihKDOaHMZrQqnnG92d0NlvE5F+EQ7vPeBwG9V311d9LZ8YLZg5GDODMHGX/kI+P3btZW40comlvslubKnQ/wA32S/riay72ZqJx9FA5JGURJFtgm9gHbKiC2IXCy93/zz92YlGjCvQQS6fRfAzZYOg+A/38/V+dYGoTIuQ1tjRS/2J3528dUo/aFQqSZWMlmKVJKYynPw4Rj4dQpuFd3FgTgpQiVkNVr1m9OsE90SD9sDMR4AWF10adn9ygxVydGgV4QY9FV1zQQCzBBzpR3gPnuy4uvFBMxIDEVYl+Nu9XowoUP+UNmNcFFUM+YiNeKzi0BE1BAgZG5RZ9iuRvKxwKu0QuVNSgHxEgiAbUg7UNm1/U1KfysmEKjn/3LkygMTBAaYfRTc31eaMKHkI6CgA8pUZDwIdWOepnSqB2DmjLTFpgAaMS8rCA1dXVCWAvgBxt8RqNqrgznfscoliPQIxRRnXAxXsV8sxRlrKq0rk80LX0csWmSm6s7v3SVLakkKOYbhBm9QBRk7FzPZF5t2XIVR4bOWGLNj3yDdPGCK75dIQ6/ufExWfpp8BfYmJOtli9wxJkx3mLpCno7NNS3nANx10P3imt5YL1RMUafdO8GeYnmlgS/BOv2EY27veN1lb25Zlrv6Yp10RodpATAmTTDDzuK+Pwf0iC1x+/TfiIJZ9iL/4Q+A6igXMYTqDUFevSBTMezZGjMWSNODSbBhlouDksEVbl3jNqbvsGsRuGUdP0Y4D9J+sDNgmhiIb2S7Pgpqkx5NNMktZkOnsRMm0wynyywx1k7UqfnpWwxMZEe2c/nQOAQ+uwswK+FsH+2scwSAwnsJV9vQjjo6/uvfBtSvfoQU+coyrHO8W+03pg51bLVM2onL8xazayXXHtOUjhz57gGVbOEQ50OPcm+0c6ONSM4wyLP8DynqXesm5Wcv+8uMjoZ2UWo7zaTnmZ/Za8+aTv2ydX2q+xX48sEsgUcvdQr/+uDFxnKzCvzt3O8f5dhFHvkg6/9VFo8cMe2h5nDnR+n5CxRI++YlzVOSc8q7okNl62Ur8+LGmXSD9kFZuPEDlMKEhZck6XjVjYETxZ+uy5XR0dLlW9UN7Wu2aSm6yzTNBGcP6yvY0Zzq+3IHI6oPMqpCRfGbXeymHITstsbszMhOlaWyRPsFjYaJ4wUs5g0O1uAAC/w39SoMtaMwEwLa2Zghg6/na3HO0YryYCd4MNvfb5MhD4f0URaU3/L9a9Ws5X2FXi5QeRTRE1gXjQzsPS0R5i84akkz3GyOBO42YnLL0MWkjFoK0qVW8+0srRP0elmUEFeyJAe17JFHhxVxIKXm7tl8/h0uEkNW6RXL30ogiS4W3Az0fjxwr2wv5+FMYDrhnUIobK6/7vjafxJ4E4QqInh41W0ChjI10fiXLzorvaHQxV+M74/Z/bz088/sVbNuSOJq8wed6S9QYHCbe+dAdpAp2G6kAs5zVaK1NwilCcBr8wGF5ESzwssc0LlPBDoGHcBiUUaKDRZlIY2F5j4KIBamktT8JKfiuv7SKAHCmF4gFyMJiDwsxEkQfaCws9ppaG9DibJPAaNn8/gpSW/bc1HruXifTYQDg1VK/U1L1L53bz6lT9o/STMnbO5/zC2p5mUJ1mi+I4Fpu4yNrSFc5Kk4ZluGPvDNDEpwwNql3TOqTJNJXQrSc3z5mwgHBqiWom+5kVa4uaXcHn6B62fhAHbhGX/YeybYRMTOQlZofJuXCq023NdG9oCJ4kk3dTwTNzGguA4vWRCwbMNqF1C1yBPlaSyP1nVmPRrnn/WAMCL2IYWUihhCFNoYaE6i3l9d36cve3rw4Joj6rjBcfQN+DNBgAA')
		format('woff2');
}

/* 下方是自定义图标演示 */
.myicon {
	font-family: 'myicon' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.myicon-camera:before {
	content: '\e60f';
}

.myicon-music:before {
	content: '\e617';
}

.myicon-news:before {
	content: '\e618';
}

.myicon-phone:before {
	content: '\e619';
}

.myicon-video:before {
	content: '\e61f';
}

/* #ifndef APP-NVUE || APP-PLUS-NVUE */
body::-webkit-scrollbar,
div::-webkit-scrollbar,
*::-webkit-scrollbar {
	display: none;
}
body.pages-index-index uni-page-body,
body {
	padding-bottom: 0 !important;
}
/* #endif */
.backs{
			background:linear-gradient(to bottom,rgb(9 141 247),white);
		}
	.contents{
		background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-cfca7383-3c4d-485d-976c-ddb14f0753dd/5c516048-eda4-418c-abf7-8d729ba8c0d3.jpg);
		z-index:-1; 
		width:100%; 
		 height:100%; 
		 position: fixed; 
		 top:0; 
	}
	.userinfo {
		position: relative;
		width: 750rpx;
		height: 320rpx;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.userinfo-avatar{
	  overflow: hidden;
	  display: block;
	  width: 160rpx;
	  height: 160rpx;
	  margin: 20rpx;
	  margin-top: 50rpx;
	  border-radius: 50%;
	  border: 2px solid #fff;
	  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
	}

</style>
