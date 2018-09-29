$().ready(function () {
		toastr.options = {
		  "closeButton": true,//是否显示关闭按钮
		  "debug": false,//是否使用debug模式
		  "progressBar": false, //进度条
		  "onclick": null,
		  "positionClass": "toast-middle-center", //弹出窗的位置
		  "showDuration": "400",//显示的动画时间
		  "hideDuration": "1000",//消失的动画时间
		  "timeOut": "4000",//展现时间
		  "extendedTimeOut": "1000",//加长展示时间
		  "showEasing": "swing",//显示时的动画缓冲方式
		  "hideEasing": "linear",//消失时的动画缓冲方式
		  "showMethod": "fadeIn",//显示时的动画方式
		  "hideMethod": "fadeOut",//消失时的动画方式
		  "target":"body"
		}			
}); 
function validateIdCard(idCard){
	//15位和18位身份证号码的正则表达式
	var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

	//如果通过该验证，说明身份证格式正确，但准确性还需计算
	if(regIdCard.test(idCard)){
		if(idCard.length==18){
			var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
			var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
			var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
			for(var i=0;i<17;i++){
				idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
			}

			var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
			var idCardLast=idCard.substring(17);//得到最后一位身份证号码

			//如果等于2，则说明校验码是10，身份证号码最后一位应该是X
			if(idCardMod==2){
				if(idCardLast=="X"||idCardLast=="x"){
					return true;
				}
			}else{
				//用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
				if(idCardLast==idCardY[idCardMod]){
					return true;
				}
			}
		} 
	}
	return false;
}
var xhtop=new Object();
xhtop.validator=function(value,type){
	var regex={
		"date":{name:"日期",regex:/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/},
		"datetime":{name:"日期+时间",regex:/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):[0-5][0-9](\:[0-5][0-9])?$/},
		"time":{name:"时间",regex:/^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/},
		"letter":{name:"字母",regex:/^[a-zA-Z]+$/},
		"number":{name:"数字",regex:/^[-+]?[\d]*[.]?[\d]*$/},
		"string":{name:"字母+数字",regex:/^[a-zA-Z0-9_]+$/},
		"chinese":{name:"中文",regex:/^[\u0391-\uFFE5]+$/},
		"email":{name:"邮箱",regex:/^([^<]+<)?([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+[>]?$/},
		"tel":{name:"电话",regex:/(^0\d{2}-?\d{8}$)|(^0\d{3}-?\d{8}$)|(^0\d{2}-?\d{7}$)|(^0\d{3}-?\d{7}$)$/},
		"mobile":{name:"手机号",regex:/^1\d{2}-?\d{8}$/},
		"zipcode":{name:"邮编",regex:/^\d{6}$/}
	};

	var dtype=type;
	var minlen=0;
	var maxlen=0;

	if(type.indexOf("(")>0)
	{
		var dt=type.replace(/\s*([\w]*)\s*\(\s*([\d]*)\s*,?\s*([\d ]*\s*)\)\s*/ig,"$1|$2|$3");
		var arr=dt.split("|");
		dtype=arr[0];
		minlen=parseInt(arr[1])||0;
		maxlen=parseInt(arr[2])||0;
		if(value.length<minlen || value.length>maxlen)
		{
			return "长度要求在"+minlen+"到"+maxlen+"之间";
		}
	}
	
	if(type=="idcard")
	{
		if(!validateIdCard(value))
		{
			return "身份证格式验证不通过";
		}
	}
	else if(regex[dtype])
	{
		if(!regex[dtype].regex.test(value))
		{
			return "不符合"+regex[dtype].name+"格式要求";
		}
	}
	
	return true;
}
xhtop.toast=function(str){
	toastr[str.type](str.msg, str.title);
}
xhtop.toast_close=function(){
	toastr.remove();
}

