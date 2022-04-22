'use strict';
const db = uniCloud.database()
const pub = require("uni-pub")
exports.main = async (event, context) => {
	
	//event为客户端上传的参数
	console.log('event : ' + event)
	//获取表
	
	let params = event.params
	let res = {}
	const appid = '' //appid
	const secret = '' //secret
	const loginUrl = 'https://api.weixin.qq.com/sns/jscode2session'
	const collection = db.collection('user')
	switch (event.action) {
	  case 'login':
	  const resDatas = await collection.where({openid:event.params.openid}).get()//获取用户信息
	  res.openid = resDatas.data[0].openid
	  res.nickName = resDatas.data[0].nickName
	  res.avatarUrl = resDatas.data[0].avatarUrl
	  break;
	  case 'register':
	    res = await uniCloud.httpclient.request(loginUrl, {
			data: {
				appid: appid,
				secret: secret,
				js_code: params.code,
				grant_type: 'authorization_code'
			},
			dataType: 'json'
		})
		console.log(res.data)
		let openid=res.data.openid
		let nickName=params.nickname
		let avatarUrl = params.icon
		const resData = await collection.where({openid:openid}).get()//获取用户信息
		if(resData.data.length>0){//登录
		}else{//注册
			await collection.add({openid:openid,nickName:nickName,avatarUrl:avatarUrl,createtime:pub.getNowTime(),})
		}
	    break;
	  case 'logout':
	    break;
	  default:
	    res = {
	      code: 403,
	      msg: '非法访问'
	    }
	    break;
	}
	console.log(res)
	//返回数据给客户端
	return res
};
