'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const pub = require('uni-pub')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('toupiao')
	if(!event.openid){
		return pub.nologin()
	}
	const userdb = db.collection("user");
	const tudb = db.collection("toupiaouser");
	const user = await userdb.where({'openid':event.openid}).get();
	if(user.data.length<=0){
		return pub.nologin()
	}
	if(event.action=='add'){
		let res = await collection.add({'icon':user.data[0].avatarUrl,'openid':event.openid,'title':event.title,'des':event.des,'selone':event.selone,'seltwo':event.seltwo,'endtime':event.endtime,'content':event.content,'state':event.state,createtime:pub.getNowTime()})
		console.log(res)
		//返回数据给客户端
		return pub.success(user.data[0]._id)
	}else if(event.action=='get'){
		let res = await collection.where({'_id':event.id}).get()
		let tures = await tudb.where({'tid':event.id,'willing':true}).get()
		let tures1 = await tudb.where({'tid':event.id,'willing':false}).get()
		let ts = res.data[0];//详情
		ts.tu=tures.data;//投票列表赞同
		ts.tun=tures1.data;//投票列表不赞同
		return pub.success(ts)
	}else if(event.action=='list'){
		let res = await collection.aggregate().match({
			openid:event.openid
		}).sort({createtime:-1}).skip((event.page-1)*event.limit).limit(event.limit).end();
		console.log(res)
		return pub.success(res.data)
	}else if(event.action=='listin'){//我参与的
		let resinfo=[]
		let res = await tudb.aggregate().match({
			openid:event.openid
		}).sort({createtime:-1}).skip((event.page-1)*event.limit).limit(event.limit).end();
		for (var i = 0; i < res.data.length; i++) {
			let resin = await collection.where({'_id':res.data[i].tid}).get()
			resinfo.push(resin.data[0])
		}
		return pub.success(resinfo)
	}else if(event.action=='del'){
		await collection.doc(event._id).remove()
		return pub.success()
	}else if(event.action == 'put'){
		return tudb.where({tid:event.id,openid:event.openid}).get().then(async (res) =>{
			if(res.data.length==0){
				
				let pdata = {tid:event.id,createtime:pub.getNowTime(),openid:event.openid,icon:user.data[0].avatarUrl,name:user.data[0].nickName,willing:event.willing};
				let tures = await tudb.add(pdata)
				console.log(111)
				console.log(tures)
				return pub.success(pdata)
			}else{
				return pub.fail(-1,"不可重复投递")
			}
		}).catch(err =>{console.log(err)})
	}
	
};
