<?php
namespace Admin\Controller;
use Think\Controller;
class CurlController extends Controller {
    public function index(){
        $ediurl=$_SERVER['SERVER_NAME'].__ROOT__."/home.php/index/testcurl";
        $param="u=".urlencode("huangjiazi");
        $param=iconv("UTF-8//ignore", "GBK//IGNORE", $param);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $ediurl);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $param);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);         
              
        $resdata = curl_exec($ch); 
        $resdata=iconv("GBK//ignore", "UTF-8//IGNORE", $resdata);
        curl_close($ch);
        
        $this->assign("res",$resdata);
        $this->display();
    }
    public function sendmail(){
        $to = "jz.huang@link-basic.com";
        $subject = 'ThinkPHP && PHPMailer 邮件发送';
        $body = '<h1>phpmail演示</h1>ThinkPHP && PHPMailer 邮件发送' ;
        $mail = new \Org\Util\PHPMailer(true);
        $re = to_send_mail($mail,$to,$subject,$body);
        var_dump($re);
       /*$to = "jz.huang@link-basic.com";
        $subject = "Test mail";
        $message = "Hello! This is a simple email message.";
        $from = "475709754@qq.com";
        $headers = "From: $from";
        echo mail($to,$subject,$message,$headers);*/
    }
}