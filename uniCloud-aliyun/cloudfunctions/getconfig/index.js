/**
 * 获取config
 */
'use strict';
const db = uniCloud.database()
const pub = require('uni-pub')
exports.main = async (event, context) => {
	// console.log(pub)
	// console.log(pub.toCodes("ddzdddddddddddssssxz我先去sdf"))
	// console.log(pub.fromCodes("02S02S03E02S02S02S02S02S02S02S02S02S02S02S03703703703703C03EJDDG20GJF03702S02U"))
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('config')
	const res = await collection.where({type:1}).get()//获取公告信息
	//返回数据给客户端
	return res
};
