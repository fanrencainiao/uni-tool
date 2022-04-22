'use strict';
// 插件市场导入
const createConfig = require('uni-config-center')
const unipay = require('uni-pay')
const fs  = require('fs');  
const path = require('path');
const db = uniCloud.database()
const timeutil = function(){
	var time= new Date();//获取服务器当前时间给time变量 例：Fri Aug 20 2021 12:37:42 GMT+0
	var Mday=new Date(time.getFullYear(),time.getMonth()+1,0).getDate();
	let y = time.getFullYear() //年
	let m = time.getMonth() + 1 //月-整数值0（1月）到11（12月）故需要加1。
	let d = time.getDate() //日
	let h = time.getHours() //时
	let mm = time.getMinutes() //分
	let s = time.getSeconds() //秒
	if(h>23){h=h-24;d=d+1;if(d>Mday){d=1;m=m+1;if(m==13){m=1;y+1}}}
	m = m < 10 ? ('0' + m) : m;d = d < 10 ? ('0' + d) : d;h=h < 10 ? ('0' + h) : h;mm = mm < 10 ? ('0' + mm) : mm;
	return (y+'-'+m+'-'+d+' '+h+':'+mm+':'+s)
}
exports.main = async (event, context) => {
	const collection = db.collection('user')
	const orderCollection = db.collection('order')
	const configCollection = db.collection('config')
	const uniPayConfig = createConfig({
	  pluginId: 'uni-pay'
	})
	//event为客户端上传的参数
	console.log('event : ', event)
	const resUser = await collection.where({openid:event.openid}).get()//获取用户信息
	const resConfig = await configCollection.get()//获取配置信息
	console.log('resConfig : ', resConfig)
	const openid = resUser.data[0].openid
	const money = resConfig.data[0].money
	console.log('money : ', money)
	const {
		wxConfigMp,
		// aliConfigSandbox
	} = uniPayConfig.requireFile('config.js')
	const unipayIns = unipay.initWeixin(wxConfigMp)
	let orderInfo;
	try {
		// 获取支付信息
		console.log(openid)
		var outTradeNo = new Date().getTime()+"000";
		let ress = orderCollection.add({openid:openid,outTradeNo:outTradeNo,state:0,time:timeutil(),money:money})
		console.log(ress.id)
		orderInfo = await unipayIns.getOrderInfo({
			openid:openid, // App端支付时不需要openid，传入个undefined也没有影响
			outTradeNo: outTradeNo,
			totalFee: money,
			body: "打赏",
			notifyUrl:"https://cfca7383-3c4d-485d-976c-ddb14f0753dd.bspapp.com/payment-notify/weixin",
			tradeType:"JSAPI"
	  // attach: "%7B%22type%22%3A%22goods%22%7D"
		}).then(res =>{
			return res;
		})
	} catch (e) {
		console.log(e)
		return {
			code: -3,
			msg: '获取支付信息失败，请稍后再试'
		}
	}
	//返回数据给客户端
	return orderInfo
};
