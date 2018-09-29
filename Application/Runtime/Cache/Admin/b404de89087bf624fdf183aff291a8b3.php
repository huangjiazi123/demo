<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
	<head>
		<title>layui-grid</title>
		<link rel="stylesheet" href="/demo/Public/plugins/layui/css/layui.css" media="all"/>
		<style>
			
		</style>
	</head>
	<body>
		<div style="margin-bottom: 5px;">          

			<!-- 示例-970 -->
			<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-6111334333458862" data-ad-slot="3820120620"></ins>

		</div>

		<div class="layui-btn-group demoTable">
			<button class="layui-btn" data-type="getCheckData">获取选中行数据</button>
			<button class="layui-btn" data-type="getCheckLength">获取选中数目</button>
			<button class="layui-btn" data-type="isAll">验证是否全选</button>
		</div>

		<table class="layui-table" lay-data="{width: 892, height:332, url:'index.php?c=layui&a=getdata', page:true, id:'idTest'}" lay-filter="demo">
			<thead>
				<tr>
					<th lay-data="{type:'checkbox', fixed: 'left'}"></th>
      <th lay-data="{field:'id', width:80, sort: true, fixed: true}">ID</th>
      <th lay-data="{field:'username', width:80}">用户名</th>
      <th lay-data="{field:'sex', width:80, sort: true}">性别</th>
      <th lay-data="{field:'city', width:80}">城市</th>
      <th lay-data="{field:'sign', width:160}">签名</th>
      <th lay-data="{field:'experience', width:80, sort: true}">积分</th>
      
      <th lay-data="{field:'classify', width:80}">职业</th>
      <th lay-data="{field:'wealth', width:135, sort: true}">财富</th>
      <th lay-data="{field:'score', width:80, sort: true, fixed: 'right'}">评分</th>
      <th lay-data="{fixed: 'right', width:178, align:'center', toolbar: '#barDemo'}"></th>
				</tr>
			</thead>
		</table>

		<script type="text/html" id="barDemo">
		  <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a>
		  <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
		  <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
		</script>
	</body>
	<script type="text/javascript" src="/demo/Public/plugins/layui/layui.js"></script>
	<script>
		layui.use('table', function(){
			var table = layui.table;
			//监听表格复选框选择
			table.on('checkbox(demo)', function(obj){
				console.log(obj)
			});
			//监听工具条
			table.on('tool(demo)', function(obj){
				var data = obj.data;
				if(obj.event === 'detail'){
					layer.msg('ID：'+ data.id + ' 的查看操作');
				} else if(obj.event === 'del'){
					layer.confirm('真的删除行么', function(index){
						obj.del();
						layer.close(index);
					});
				} else if(obj.event === 'edit'){
					layer.alert('编辑行：<br>'+ JSON.stringify(data))
				}
			});

			var $ = layui.$, active = {
				getCheckData: function(){ //获取选中数据
					var checkStatus = table.checkStatus('idTest')
					,data = checkStatus.data;
					layer.alert(JSON.stringify(data));
				}
				,getCheckLength: function(){ //获取选中数目
					var checkStatus = table.checkStatus('idTest')
					,data = checkStatus.data;
					layer.msg('选中了：'+ data.length + ' 个');
				}
				,isAll: function(){ //验证是否全选
					var checkStatus = table.checkStatus('idTest');
					layer.msg(checkStatus.isAll ? '全选': '未全选')
				}
			};

			$('.demoTable .layui-btn').on('click', function(){
				var type = $(this).data('type');
				active[type] ? active[type].call(this) : '';
			});
		});
	</script>
</html>