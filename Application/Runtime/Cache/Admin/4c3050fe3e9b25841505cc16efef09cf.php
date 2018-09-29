<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0">
  <title>CSS3模仿相机快门特效 - H5游戏 | jQuery特效|H5网站特效| H5游戏</title>
<meta name="keywords" content="canvas动画, 手机微信网站特效, css3动画, html5特效, 网页特效" />
<meta name="description" content="网页特效库-专注于HTML5、CSS3、js、jQuery、手机移动端等网页特效的手机与分享。所有的资源都免费提供广大童鞋下载学习和使用。" />
<style>
/*
Variables
*/
:root {
  --line-size: 4px;
}
/*
Base layout
*/
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #000;
}
button {
  position: absolute;
  z-index: 3;
}
/*
Content
*/
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  margin-left: -200px;
  margin-top: -150px;
  text-align: center;
  line-height: 150px;
  font-size: 92px;
  font-weight: bold;
  color: white;
  font-family: arial;
}
/*
Shutter container
*/
.shutter {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  transition: all 2s;
}
@media (orientation: landscape) {
.shutter.open {
  width: 176vw;
  height: 176vw;
  margin-left: -88vw;
  margin-top: -88vw;
  transform: rotate(180deg);
}
}
@media (orientation: portrait) {
.shutter.open {
  width: 176vh;
  height: 176vh;
  margin-left: -88vh;
  margin-top: -88vh;
  transform: rotate(180deg);
}
}
.shutter > div {
  position: absolute;
  width: 100%;
  height: 57.735026918962575%;
  top: 21.132486540518713%;
}
.shutter > div::before,
.shutter > div::after {
  position: absolute;
  content: '';
  height: 1000px;
  width: 2000px;
  background: #343434;
  transform: rotate(30deg) skew(30deg);
}
.shutter > div::before {
  bottom: 0;
  right: 100%;
  border-right: var(--line-size) solid #000;
  transform-origin: 100% 100%;
}
.shutter > div::after {
  top: 0;
  left: 100%;
  border-left: var(--line-size) solid #000;
  transform-origin: 0 0;
}
.shutter > div:nth-child(2) {
  transform: rotate(60deg);
}
.shutter > div:nth-child(3) {
  transform: rotate(120deg);
}
</style>
  
</head>

<body>
 
<div class="content">
  	Content
</div>

<div id="showdiv" class="shutter">
    <div></div>
    <div></div>
    <div></div>
</div>
  
<script>
window.onload=function(){
   document.getElementById("showdiv").classList.toggle('open');
}
</script>

</body>
</html>