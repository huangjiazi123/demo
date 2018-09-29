<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
	<head>
		<title><?php echo ($title); ?></title>
		<script src="//cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
		<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<script src="/demo/Public/js/toastr.min.js"></script>
		<script src="/demo/Public/js/top.js"></script>
		<script src="/demo/Public/js/plugins/layui/layui.js"></script>
		<link rel="stylesheet" type="text/css" href="/demo/Public/css/bootstrap.min.css?v=3.3.6"/>
		<link rel="stylesheet" type="text/css" href="/demo/Public/css/style.css"/>
		<link rel="stylesheet" type="text/css" href="/demo/Public/css/toastr.min.css"/>
		<link rel="stylesheet" type="text/css" href="/demo/Public/js/plugins/layui/css/layui.css"/>
		<style>
			#memuleft,#main{				
				float:left;
				position:relative;
			}
		</style>
	</head>
	<body class="gray-bg">
<div id="pagecontent"></div>

<script>

function xhpage(options){
	var self=this;
	this.$obj=options.$obj;
	this.pagesize=options.pagesize==undefined?"10":options.pagesize;
	this.pagenum=options.pagenum==undefined?"0":options.pagenum;
}
xhpage.prototype.init=function(){
	var self=this;
	//ul
	var ul=document.createElement("ul");
	ul.style="list-style:none;text-align:center";

	//首页
	var li=document.createElement("li");
	li.id=this.$obj.id+"_header";
	li.style="float:left;margin:0 5px;cursor:pointer";
	li.innerHTML="首页";
	ul.appendChild(li);

	//前一页
	var li=document.createElement("li");
	li.id=this.$obj.id+"_pre";
	li.style="float:left;margin:0 5px;line-height:20px";
	li.innerHTML="<";
	ul.appendChild(li);
	//下一页
	var li=document.createElement("li");
	li.id=this.$obj.id+"_next";
	li.style="float:left;margin:0 5px;line-height:20px";
	li.innerHTML=">";
	ul.appendChild(li);

	//尾页
	li=document.createElement("li");
	li.id=this.$obj.id+"_footer";
	li.style="float:left;margin:0 5px;cursor:not-allowed";
	li.innerHTML="尾页";
	ul.appendChild(li)


	if(this.pagenum==0){
		this.$obj.innerHTML="没有数据";

	}
	this.$obj.appendChild(ul);
}
var options={
	"$obj":document.getElementById("pagecontent"),//分页控件div
	"pagesize":"5",//每页的条数
	"pagenum":"100"//一共有多少数据
}
var myxhpage=new xhpage(options);
myxhpage.init();
</script>
	
	</body>
</html>