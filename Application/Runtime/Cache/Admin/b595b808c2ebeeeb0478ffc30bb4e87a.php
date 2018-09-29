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
<!--div class="animated fadeInRight">
<div class="btn btn-primary" onclick="test()"><?php echo ($username); ?></div-!>
</div-->	
<div id="memuleft">
	<ul class="layui-nav layui-nav-tree" lay-filter="">
		<!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
		<li class="layui-nav-item">
			<a href="javascript:;">默认展开</a>
			<dl class="layui-nav-child">
				<dd><a href="javascript:;">选项1</a></dd>
				<dd><a href="javascript:;">选项2</a></dd>
				<dd><a href="">跳转</a></dd>
			</dl>
		</li>
		<li class="layui-nav-item">
			<a href="javascript:;">解决方案</a>
			<dl class="layui-nav-child">
				<dd><a href="">移动模块</a></dd>
				<dd><a href="">后台模版</a></dd>
				<dd><a href="">电商平台</a></dd>
			</dl>
		</li>
		<li class="layui-nav-item"><a href="">产品</a></li>
		<li class="layui-nav-item"><a href="">大数据</a></li>
	</ul>
</div>

<div id="main" class="layui-tab" lay-allowClose="true">
  <ul class="layui-tab-title">
    <li class="layui-this">网站设置</li>
    <li>用户基本管理</li>
    <li>权限分配</li>
    <li>全部历史商品管理文字长一点试试</li>
    <li>订单管理</li>
  </ul>
  <div class="layui-tab-content">
    <div class="layui-tab-item layui-show">1</div>
    <div class="layui-tab-item">2</div>
    <div class="layui-tab-item">3</div>
    <div class="layui-tab-item">4</div>
    <div class="layui-tab-item">5</div>
    <div class="layui-tab-item">6</div>
  </div>
</div>
<script>
layui.use('element', function(){
	var element = layui.element;
	element.init();
});
function test(){
	xhtop.toast_close();
	xhtop.toast({'title':'提示','msg':'测试toast弹出窗口','type':'success'});
}
</script>

	
	</body>
</html>