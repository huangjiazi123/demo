<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	$title="后台管理";
    	$userarr=M("user")->select();
    	$this->assign('title',$title);
    	$this->assign('username',$userarr[0]['cname']);
        $this->display();
    }
}