var mainmodeli="<!DOCTYPE html>";
mainmodeli+="\r\n<html>";
mainmodeli+="\r\n<head>";
mainmodeli+="\r\n<title>_memu_信息</title>";
mainmodeli+="\r\n<bnc ctrname=\"gxsub\" id=\"_proid__info\" reg=true plugin=\"mxdisplay\" mod=\"_memu_\"></bnc>";
mainmodeli+="\r\n</head>";
mainmodeli+="\r\n<body class=\"gray-bg\">";
mainmodeli+="\r\n<div class=\"animated fadeInRight\" rowsplit=\"100%\">";
mainmodeli+="\r\n	<div class=\"ibox\">";
mainmodeli+="\r\n		<div class=\"ibox-content form-horizontal\">";
mainmodeli+="\r\n			<div class=\"panel panel-default\">";
mainmodeli+="\r\n				<div class=\"panel-body\">";
mainmodeli+="\r\n					<div class=\"row form-group\">";	
mainmodeli+="\r\n						<div class=\"col-md-6\">";
mainmodeli+="\r\n							<label class=\"col-sm-2 control-label\">备注</label>";
mainmodeli+="\r\n							<div class=\"col-sm-10\">";
mainmodeli+="\r\n								<p class=\"form-control-static\" dataFld=\"remarks\" id=\"remarks\" datatype=\"varchar(2000)\" name=\"remarks\" valuetype=\"innerHTML\" ofdisplay=\"myshow\" onlyshow=\"true\"></p>";
mainmodeli+="\r\n							</div>";
mainmodeli+="\r\n						</div>";
mainmodeli+="\r\n					</div>";	
mainmodeli+="\r\n				</div>";
mainmodeli+="\r\n			</div>";
mainmodeli+="\r\n		</div>";
mainmodeli+="\r\n	</div>";			
mainmodeli+="\r\n</div>";	
mainmodeli+="\r\n<bnc ctrname=\"mxdisplay\" id=\"myshow\"";
mainmodeli+="\r\nfirstsql=\"code:select id,remarks from _tbname_ as _alia_ where id=[@id@]\" firstparam=\"id=_id_\" tbname=\"_tbname_\" buttadd=\"\" buttedit=\"\" buttdel=\"\" buttsave=\"\" buttcancel=\"\" fieldset=\"document\" log=\"true\" logextra=\"\" transaction=\"main\"></bnc>";
mainmodeli+="\r\n<script>";
mainmodeli+="\r\nvar ID=0;";
mainmodeli+="\r\nfunction show(id){//初始化";
mainmodeli+="\r\n	ID=id;";
mainmodeli+="\r\n	myshow.display(id).then(function(ret){});";
mainmodeli+="\r\n}";
mainmodeli+="\r\n</script>";
mainmodeli+="\r\n</body>";
mainmodeli+="\r\n</html>";
function createinfo(){
	var oldvalue=["_proid_","_right_","_memu_","_tbname_","_alia_"];
	var inputarr=$("input");
	for (var i=0;i<inputarr.length;i++){
		oldvalue[i]="/"+oldvalue[i]+"/g";
		mainmodeli=mainmodeli.replace(eval(oldvalue[i]),inputarr[i].value);
	}
	
	$("#newtext").val(mainmodeli);
}