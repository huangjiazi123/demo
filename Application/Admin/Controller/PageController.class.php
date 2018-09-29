<?php
namespace Admin\Controller;
use Think\Controller;
class PageController extends Controller {
    public function index(){
    	$title="分页控件";
    	$this->assign('title',$title);
        $this->display();
    }
}