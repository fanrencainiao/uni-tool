module.exports = {
	getNowTime:function(){	
		var time= new Date();//获取服务器当前时间给time变量 例：Fri Aug 20 2021 12:37:42 GMT+0
		time.setHours(time.getHours()+8);//加8小时，解决时区问题
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
	},
	success:function(data){
		return{code:1,msg:"成功",data:data}
	},
	error:function(data){
		return{code:-1,msg:"失败",data:data}
	},
	fail:function(code,msg,data){
		return{code:code,msg:msg,data:data}
	},
	nologin:function(){
		return{code:-2,msg:"未登录"}
	},
	toCodes:function(str){
		//定义密钥，36个字母和数字
		var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var l = key.length;  //获取密钥的长度
		var a = key.split("");  //把密钥字符串转换为字符数组
		var s = "", b, b1, b2, b3;  //定义临时变量
		for (var i = 0; i < str.length; i++) {  //遍历字符串
			b = str.charCodeAt(i);  //逐个提取每个字符，并获取Unicode编码值
			b1 = b % l;  //求Unicode编码值得余数
			b = (b - b1) / l;  //求最大倍数
			b2 = b % l;  //求最大倍数的于是
			b = (b - b2) / l;  //求最大倍数
			b3 = b % l;  //求最大倍数的余数
			s += a[b3] + a[b2] + a[b1];  //根据余数值映射到密钥中对应下标位置的字符
		}
		return s;  //返回这些映射的字符
	},
	fromCodes:function(str){
		//定义密钥，36个字母和数字
		var key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var l = key.length;  //获取密钥的长度
		var b, b1, b2, b3, d = 0, s;  //定义临时变量
		s = new Array(Math.floor(str.length / 3));  //计算加密字符串包含的字符数，并定义数组
		b = s.length;  //获取数组的长度
		for (var i = 0; i < b; i++) {  //以数组的长度循环次数，遍历加密字符串
			b1 = key.indexOf(str.charAt(d));  //截取周期内第一个字符串，计算在密钥中的下标值
			d++;
			b2 = key.indexOf(str.charAt(d));  //截取周期内第二个字符串，计算在密钥中的下标值
			d++;
			b3 = key.indexOf(str.charAt(d));  //截取周期内第三个字符串，计算在密钥中的下标值
			d++;
			s[i] = b1 * l * l + b2 * l + b3  //利用下标值，反推被加密字符的Unicode编码值
		}
		b = eval("String.fromCharCode(" + s.join(',') + ")");
		return b;  //返回被解密的字符串
	}
}
