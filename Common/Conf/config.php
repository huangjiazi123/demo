<?php
return array(
	//'配置项'=>'配置值'
	'DB_TYPE'               =>  'mysql',     // 数据库类型
	'DB_HOST'               =>  'localhost', // 服务器地址
	'DB_NAME'               =>  'demo',          // 数据库名
	'DB_USER'               =>  'root',      // 用户名
	'DB_PWD'                =>  '',          // 密码
	'DB_PORT'               =>  '3306',        // 端口
	'DB_PREFIX'             =>  '',    // 数据库表前缀
	'DEFAULT_MODULE'     => 'admin', //默认模块
    'URL_MODEL'          => '2', //URL模式
    'SESSION_AUTO_START' => true, //是否开启session
    'TMPL_PARSE_STRING' => array(
        '__STYLE__' => __ROOT__.'/Public/css',//默认CSS路径
     ),
    'THINK_EMAIL' => array(  
	    'SMTP_HOST'   => 'smtp.qq.com', //SMTP服务器  
	    'SMTP_PORT'   => '465', //SMTP服务器端口  
	    'SMTP_USER'   => '475709754@qq.com', //SMTP服务器用户名  
	    'SMTP_PASS'   => 'woshi2b', //SMTP服务器密码  
	    'FROM_EMAIL'  => '475709754@qq.com', //发件人EMAIL  
	    'FROM_NAME'   => 'XHR', //发件人名称  
	    //'REPLY_EMAIL' => '', //回复EMAIL（留空则为发件人EMAIL）  
	    //'REPLY_NAME'  => '', //回复名称（留空则为发件人名称）  
	 )
);