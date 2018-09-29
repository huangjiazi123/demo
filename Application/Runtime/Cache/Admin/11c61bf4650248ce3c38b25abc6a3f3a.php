<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>canvas背景动画 - H5游戏 | jQuery特效|H5网站特效| H5游戏</title>
<meta name="keywords" content="canvas动画, 手机微信网站特效, css3动画, html5特效, 网页特效" />
<meta name="description" content="网页特效库-专注于HTML5、CSS3、js、jQuery、手机移动端等网页特效的手机与分享。所有的资源都免费提供广大童鞋下载学习和使用。" />
  
  
      <style>
    
		  canvas{
			  position:absolute;
			  top:0;
			  left:0;
			  background-color:black;
		  }
    </style>

  

</head>

<body>
  <canvas id=c></canvas>
  
<script>
var w = c.width = window.innerWidth,
h = c.height = window.innerHeight,
ctx = c.getContext('2d'),

count = (w*h/3000)|0,
speed = 4,
range = 100,
lineAlpha = .05,

particles = [],
huePart = 360/count;

for(var i = 0; i < count; ++i)
	particles.push(new Particle((huePart*i)|0));

function Particle(hue){
	this.x = Math.random()*w;
	this.y = Math.random()*h;
	this.vx = (Math.random()-.5)*speed;
	this.vy = (Math.random()-.5)*speed;

	this.hue = hue;
}
Particle.prototype.update = function(){
	this.x += this.vx;
	this.y += this.vy;

	if(this.x < 0 || this.x > w) this.vx *= -1;
	if(this.y < 0 || this.y > h) this.vy *= -1;
}

function checkDist(a, b, dist){
	var x = a.x - b.x,
		y = a.y - b.y;

	return x*x + y*y <= dist*dist;
}

function anim(){
	window.requestAnimationFrame(anim);

	ctx.fillStyle = 'rgba(0, 0, 0, .05)';
	ctx.fillRect(0, 0, w, h);

	for(var i = 0; i < particles.length; ++i){
		var p1 = particles[i];
		p1.update();

		for(var j = i+1; j < particles.length; ++j){
			var p2 = particles[j];
			if(checkDist(p1, p2, range)){
				ctx.strokeStyle = 'hsla(hue, 80%, 40%, alp)'
					.replace('hue', ((p1.hue  + p2.hue + 3)/2) % 360)
					.replace('alp', lineAlpha);
				ctx.beginPath();
				ctx.moveTo(p1.x, p1.y);
				ctx.lineTo(p2.x, p2.y);
				ctx.stroke();
			}
		}
	}
}

anim();
</script>

</body>
</html>