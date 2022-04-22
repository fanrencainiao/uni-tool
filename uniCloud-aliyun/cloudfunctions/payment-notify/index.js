'use strict';
const createConfig = require('uni-config-center')
const uniPay = require('uni-pay')
const db = uniCloud.database()
exports.main = async (event, context) => {
	const uniPayConfig = createConfig({
		pluginId: 'uni-pay'
	})
	const {
		wxConfigMp
		// aliConfigSandbox
	} = uniPayConfig.requireFile('config.js')
	let uniPayInstance
	let provider
	console.log('222222')
	// switch (event.path.split('/').pop()) {
	switch ("weixin") {
		case 'weixin':
			provider = 'weixin'
			uniPayInstance = uniPay.initWeixin(wxConfigMp)
			break;
		default:
			console.log('---------参数错误-------')
			return {
				code: -1,
					msg: '参数错误'
			}
	}

	let verifyResult = await uniPayInstance.verifyPaymentNotify(event)
	if (!verifyResult) {
		console.log('---------!verifyResult-------')
		return {}
	}
	let {
		outTradeNo,
		totalFee,
		transactionId,
		resultCode
	} = verifyResult
	console.log("111111")
	console.log(outTradeNo)
	const orderList = await db.collection('order').where({
		outTradeNo:outTradeNo
	}).get()
	console.log(orderList)
	if (orderList.data.length < 0) {
		console.log('---------orderList.data.length < 0-------')
		return {}
	}
	const orderDetail = orderList.data[0]
	console.log(orderDetail)
	if (totalFee === orderDetail.money && (resultCode === 'SUCCESS' || resultCode === 'FINISHED')) {
		console.log('---------updatedb-------')
		await db.collection('order').where({
			outTradeNo:outTradeNo
		}).update({
			state: 1,
			transactionId
		})
	}
	console.log("verifyResult: " + JSON.stringify(verifyResult));
	// 注意如果处理成功需要严格按照下面的格式进行返回，否则厂商会持续通知
	if (provider === 'weixin') {
		// 微信处理成功之后 
		return {
			mpserverlessComposedResponse: true,
			statusCode: 200,
			headers: {
				'content-type': 'text/xml;charset=utf-8'
			},
			body: `<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>`
		}
	}
	// 支付宝处理成功后  
	return {
		mpserverlessComposedResponse: true,
		statusCode: 200,
		headers: {
			'content-type': 'text/plain'
		},
		body: "success"
	}
};
