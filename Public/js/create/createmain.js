var mainmodel="<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>\r\n</title>\r\n<bnc ctrname=\"gxsub\" id=_proid_ reg=true plugin=\"mxdetail,mxgrid,mxdetail_dock\" mod=\"_memu_\"></bnc>\r\n</head>";
mainmodel+="\r\n<body class=\"gray-bg\">";
mainmodel+="\r\n<bnc ctrname=\"mxdetail\" id=\"myadd\" link=\"_proid__edit.ben?isnew=1\" width=\"800\" height=\"300\" isload=\"false\" onload=\"showadd\" title=\"【新建_memu_】\" showpagetitle=\"true\" isdrag=\"true\" isbgdiv=\"false\" close=\"true\" afterclose=\"showtoolbar\" full=\"false\"></bnc>";
mainmodel+="\r\n<bnc ctrname=\"mxdetail\" id=\"myquery\" link=\"_proid__query.ben\" width=\"800\" height=\"500\" isload=\"false\" onload=\"\" title=\"【查询_memu_信息】\" showpagetitle=\"true\" isdrag=\"true\" isbgdiv=\"false\" close=\"true\" afterclose=\"closequery\" full=\"false\"></bnc>";
mainmodel+="\r\n<bnc id=\"mytoolbar\" ctrname=\"mxtoolbar\" items=\"[{text:'查询',right:'_right__query',class:'btn-outline btn-default',img:'fa-search',click:'showquery()',title:'打开查询面板提供搜索选项'},{text:'新建',right:'_right__add',class:'btn-outline btn-default',img:'fa-plus',click:'add()',title:'新建_memu_'},{text:'提交',right:'_right__submit',class:'btn-outline btn-default',click:'opr(3)',img:'fa-check',textclass:'bold',title:'提交_memu_'},{text:'删除',right:'_right__del',class:'btn-outline btn-default',click:'opr(5)',img:'fa-trash',textclass:'bold',title:'删除新记录_memu_'},{text:'禁用',right:'_right__disable',class:'btn-outline btn-default',click:'opr(4)',img:'fa-lock',title:'禁用使用中_memu_'},{text:'导出',right:'_right__export',class:'btn-outline btn-default',img:'fa-external-link-square',click:'outdata()',title:'导出数据至excel'}]\" type=\"btn-group\" target=\"\" autoinit=\"true\"></bnc>";
mainmodel+="\r\n<div class=\"animated fadeInRight\" rowsplit=\"100%\">";
mainmodel+="\r\n	<div class=\"ibox float-e-margins\">";
mainmodel+="\r\n		<div class=\"ibox-content form-horizontal\">";	
mainmodel+="\r\n<bnc id=\"mygrid\" ctrname=\"mxgrid\"";
mainmodel+="\r\ntitle=\"[{title:'checkbox',width:30,align:'center',name:'id1',isedit:'false'},";
mainmodel+="\r\n{title:'操作',width:30,name:'id2',formatfun:'opFomatter'},";
mainmodel+="\r\n{title:'状态',width:50,align:'center',name:'states1',sort:'states1'},";
mainmodel+="\r\n{title:'备注',width:300,name:'remarks1',sort:'remarks1'},";
mainmodel+="\r\n{title:'创建人',width:80,name:'createbyid1',sort:'createbyid1'},";
mainmodel+="\r\n{title:'创建时间',name:'createtime1',sort:'createtime1'},";
mainmodel+="\r\n{title:'状态隐藏列',name:'states2',sort:'states2',hidden:'true'}]\"";
mainmodel+="\r\nfirstsql=\"code:select _alia_.id as id,_alia_.id as id1,_alia_.id as id2,";
mainmodel+="\r\n		  (select CONCAT('<font color=',colors,'>',cname) from a_state where pid=1 and curvalue=_alia_.states) as states1,";
mainmodel+="\r\n		  _alia_.remarks as remarks1,";
mainmodel+="\r\n		  (select cname from a_user where id=_alia_.createbyid) as createbyid1,";
mainmodel+="\r\n		  _alia_.createtime as createtime1,_alia_.states as states2";
mainmodel+="\r\n		  from _tbname_ as _alia_";
mainmodel+="\r\n		  where [@search@] and concat_ws('',) like binary '%[@title@]%' [@orderby@]\"";
mainmodel+="\r\nfirstparam=\"search=1,=,1|title=\" asid=\" _alia_.id\" orderby=\"_alia_.id desc\" showno=\"true\" sizeofpage=\"40\" width=\"100%\" height=\"100%\" editevent=\"click\" ondblclick=\"edit\" tbname=\"_tbname_\" settingwidth=\"400\" settingheight=\"400\" toolbar=\"mytoolbar\" responsive=\"true\" pagetype=\"server\" afterinit=\"\" searchtext=\"\" onsearch=\"mysearch\"></bnc>";
mainmodel+="\r\n			</div>";
mainmodel+="\r\n		</div>";
mainmodel+="\r\n			<bnc ctrname=\"mxdetail_dock\" id=\"mypage\" link=\"_proid__page.ben?isnew=2\" width=\"100%\" height=\"500\" isload=\"false\" onload=\"showedit\" title=\"编辑信息\" showpagetitle=\"false\" isdrag=\"false\" isbgdiv=\"false\" close=\"false\" full=\"true\"></bnc>";
mainmodel+="\r\n</div>";	
mainmodel+="\r\n<script>";
mainmodel+="\r\nvar ID=0,selID=0,opstr=\"\",opstrname=\"\",flag=0,currow=0;";
mainmodel+="\r\nfunction add(){//新建信息";
mainmodel+="\r\n	mytoolbar.hide();";
mainmodel+="\r\n	ID=0;";
mainmodel+="\r\n	closewindow();";
mainmodel+="\r\n	myadd.show();";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction showadd(){";
mainmodel+="\r\n	gxsub.sendmsg(\"show,0,0\",\"_proid__edit1\");";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction opFomatter(value, row, index){";
mainmodel+="\r\n	if(row.states2==20){";
mainmodel+="\r\n		return \"<a class='btn btn-default btn-outline btn-sm' onclick='edit(\"+value+\")'><i class=\\\"fa fa-eye\\\"></i></a>\";";
mainmodel+="\r\n	}";
mainmodel+="\r\n	return \"<a class='btn btn-default btn-outline btn-sm' onclick='edit(\"+value+\")'><i class=\\\"fa fa-edit\\\"></i></a>\";";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction edit(id){";
mainmodel+="\r\n	currow=mygrid.getRow(id);";
mainmodel+="\r\n	ID=id;";
mainmodel+="\r\n	myadd.close();";
mainmodel+="\r\n	myquery.close();";
mainmodel+="\r\n	gxsub.closetargetdetail();";
mainmodel+="\r\n	mypage.show();";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction showedit(){";
mainmodel+="\r\n	var param=[flag,currow];";
mainmodel+="\r\n	gxsub.sendmsg(\"show\",\"_proid__page\",param);";
mainmodel+="\r\n	flag=0;";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction showquery(){//显示查询";
mainmodel+="\r\n	myadd.close();";
mainmodel+="\r\n	mypage.close();";
mainmodel+="\r\n	gxsub.closetargetdetail();";
mainmodel+="\r\n	myquery.show();";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction querygrid(str){//查询";
mainmodel+="\r\n	mygrid.firstparam=\"search=\"+str+\"|title=\";";
mainmodel+="\r\n	refreshall();";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction closequery(){";
mainmodel+="\r\n	myquery.close();";
mainmodel+="\r\n}"
mainmodel+="\r\nfunction mysearch(value){//查询信息";
mainmodel+="\r\n	mygrid.firstparam=\"search=1,=,1|&base64param=\"+gxsub.base64_encode(\"title=\"+value);";
mainmodel+="\r\n	mygrid.refresh();";
mainmodel+="\r\n}";	
mainmodel+="\r\n///////////////////////////////////////////////////////";
mainmodel+="\r\nfunction opr(value){//操作、value为操作类型";
mainmodel+="\r\n	closewindow();";
mainmodel+="\r\n	var list=mygrid.getcheckedlist();";
mainmodel+="\r\n	switch (value){";
mainmodel+="\r\n		case 3:opstr=\"submit\";opstrname=\"提交\";break;";
mainmodel+="\r\n		case 4:opstr=\"forbit\";opstrname=\"禁用\";break;";
mainmodel+="\r\n		case 5:opstr=\"del\";opstrname=\"删除\";break;";
mainmodel+="\r\n		default:break;";
mainmodel+="\r\n	}";
mainmodel+="\r\n	if(list==0){";
mainmodel+="\r\n		gxsub.msgbox({title:\"系统提示\",text:\"请选择要\"+opstrname+\"的记录！\",type:\"warning\"});";
mainmodel+="\r\n		return;";
mainmodel+="\r\n	}";
mainmodel+="\r\n	selID=gxsub.base64_encode(\"\"+list);";
mainmodel+="\r\n	gxsub.msgbox({title:\"系统提示\",text:\"此操作将进行\"+opstrname+\"操作，确定要继续吗？\",type:\"warning\",showCancelButton: true,cancelButtonText:\"让我再考虑一下\",closeOnConfirm:false,closeOnCancel:true,showLoaderOnConfirm:true},callbackfun);";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction callbackfun(cfm){";
mainmodel+="\r\n	if(cfm){";
mainmodel+="\r\n		gxsub.bgsenda(\"_proid__opr.ben\",\"op=\"+opstr+\"&jobid=\" + selID + \"&u=\" + gxsub.top.userid, function(str){";
mainmodel+="\r\n			if(str<0){";
mainmodel+="\r\n				gxsub.msgbox({title:\"错误\",text:\"系统错误\",type:\"error\"});";
mainmodel+="\r\n				return;";
mainmodel+="\r\n			}";
mainmodel+="\r\n			if(str.flag==0){";
mainmodel+="\r\n				gxsub.msgbox({title:opstrname+\"失败\",text:str.msg,type:\"error\"});";
mainmodel+="\r\n				return;";
mainmodel+="\r\n			}";
mainmodel+="\r\n			if(str.msg==\"\"){";
mainmodel+="\r\n				gxsub.msgbox_close();";
mainmodel+="\r\n				gxsub.toast({title:opstrname+\"成功!\",type:\"success\"});";
mainmodel+="\r\n			}else{";
mainmodel+="\r\n				gxsub.msgbox({title:opstrname+\"成功\",text:str.msg,type:\"warning\",html:true});";
mainmodel+="\r\n			}";
mainmodel+="\r\n			refreshall();";
mainmodel+="\r\n			flag=1;";			
mainmodel+="\r\n		},\"json\");";
mainmodel+="\r\n	}";
mainmodel+="\r\n}";
mainmodel+="\r\n///////////////////////////////////////////////////////	";
mainmodel+="\r\nfunction refreshall(){//刷新指定ID行记录";
mainmodel+="\r\n	mygrid.refresh();";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction refresh(id){//刷新指定ID行记录";
mainmodel+="\r\n	mygrid.refresh(id);";
mainmodel+="\r\n}";
mainmodel+="\r\nfunction closewindow(){//关闭详细信息";
mainmodel+="\r\n	mypage.close();";
mainmodel+="\r\n	myadd.close();";
mainmodel+="\r\n	myquery.close();";
mainmodel+="\r\n	gxsub.closetargetdetail();";
mainmodel+="\r\n}";	
mainmodel+="\r\nfunction showtoolbar(){";
mainmodel+="\r\n	mytoolbar.show();";			
mainmodel+="\r\n}";
mainmodel+="\r\nfunction outdata(){";
mainmodel+="\r\n	mygrid.outprint();";
mainmodel+="\r\n}";
mainmodel+="\r\n</script>";
mainmodel+="\r\n</body>";
mainmodel+="\r\n</html>";
function createmain(){
	var oldvalue=["_proid_","_right_","_memu_","_tbname_","_alia_"];
	var inputarr=$("input");
	for (var i=0;i<inputarr.length;i++){
		oldvalue[i]="/"+oldvalue[i]+"/g";
		mainmodel=mainmodel.replace(eval(oldvalue[i]),inputarr[i].value);
	}
	
	$("#newtext").val(mainmodel);
}