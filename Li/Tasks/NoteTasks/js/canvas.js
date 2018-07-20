
(()=>{
	var canvas = document.getElementById('canvas1');
	var table = canvas.getContext('2d');
	table.beginPath();
	var a = table.createLinearGradient(0,0,800,800);
	a.addColorStop(0,"blue");
	a.addColorStop(1,"red");
	table.moveTo(0,0);
	table.lineTo(800,800);
	table.strokeStyle = a;
	table.lineWidth = 20;
	table.lineCap = "round";
	table.stroke();
	table.fillStyle = a;
	table.fillRect(0,0,100,100);
	//var cxt = table.createLinearGradient(x1,y1,x2,y2);//创建渐变域
	//cxt.addColorStop(stop,color);//增设颜色驻点
	//cxt.createRadialGradient(x0,y0,r0,x1,y1,r1);//创建环形渐变域
	//cxt.addColorStop(stop,color);//增设颜色驻点
	//table.createPattern(img,repeat-style);//图片填充
	//其中,repeat-style:no-repeat,repeat-x;repeat-y;repeat;
	//示例: //var bg = new Image();//
			//bg.src = "{{src}}";//甚至，可以用另外的canvas来作背景 
			//比如 var bg = canvas2;
			//bg.onload = function(){
			//	table.fillStyle = table.createPattern(bg,"repeat");
			//	table.fillRect(0,0,800,800);
			//}
			//table.createPattern是一个值得深入探究的函数
	//table.fillRect(0,0,100,100);	//画出一个填充的矩形
	//table.strokeRect(50,50,150,150);	//画出一个填充的矩形框
	//table.clearRect(0,0,100,100);	//清除矩形框内的内容
	//table.transform(a,b,c,d,e,f);//变换矩阵
	//table.setTransform(a,b,c,d,e,f)//重置变换矩阵
	//路径绘制
	/*
	基于状态的绘制
	切换状态用：table.beginPath();					//创建画笔
	table.moveTo(100,100);				//起笔
	table.lineTo(200,200);				//落笔
	table.stroke();						//画出图形边框
	table.fillStyle = 'blue';			//填充格式
	table.fill();						//填充路径范围
	table.closePath();					//封闭图形
	table.lineCap();					//round square butt(default)
	table.lineJoin();					//bavel round miter(default)
	table.miterLimit();					//角的尖锐度
	*/
	/*曲线绘制
	//table.arc(x,y,radius,startAngle,endAngle,anticlockwise);//画一段圆弧 最后一个参数 逆时针
	//table.arcTo(x1,y1,x2,y2);
	//贝塞尔曲线(当前所在位置x0,y0)
	//二次：table.quadraticCurveTo(x1,y1,x2,y2);//http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html
	//三次：table.bezierCurveTo(x1,y1,x2,y2,x3,y3);//http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html

	*/
	//尝试 画一个三角形
	/*
	table.stroke();(strokeStyle,lineWidth)
	table.beginPath();
	table.moveTo(0,0);
	table.lineTo(50,50);
	table.lineTo(200,50);
	table.lineTo(0,0);
	table.fill();
	table.closePath();
	*/
	//弧形绘制
	/*
	
	*/
	/*
	table.translate(x,y);			//移动画布的原点
	table.rotate(x);				//绕原点转动
	table.scale(x,y);				//x,y的放大倍数
	table.save();					//画布状态存栈
	table.restore();				//栈取画布状态
	*/
	//画一个大嘴
	//table.translate(100,100);
	//table.rotate(0.25*Math.PI);
	//table.scale(0.5,0.5);
	var renderLoop = (function (){
		var rad = 0;
		var mouseClose = false;
		return function(){
			mouseClose == false?rad += 0.05*Math.PI:rad -= 0.05*Math.PI;
			if(rad == 0.4*Math.PI||rad == 0)mouseClose = !mouseClose;
			table.clearRect(0,0,200,200);
			table.beginPath();
			table.arc(100,100,100,rad,2*Math.PI - rad,false);
			table.lineTo(100,100);
			table.closePath();
			table.fillStyle = 'black';
			table.fill();
		}
	}());
	setInterval(renderLoop, 50);				
})();
(()=>{
	var canvas = document.getElementById('canvas2');
	var table = canvas.getContext('2d');
	var renderLoop = (function (){
		var rad = 0;
		var mouseClose = false;
		return function(){
			mouseClose == false?rad += 0.05*Math.PI:rad -= 0.05*Math.PI;
			if(rad == 0.3*Math.PI||rad == 0)mouseClose = !mouseClose;
			table.clearRect(0,0,200,200);
			table.beginPath();
			table.arc(100,100,100,rad,2*Math.PI - rad,false);
			table.lineTo(100,100);
			table.closePath();
			table.fillStyle = 'black';
			table.fill();
		}
	}());
	setInterval(renderLoop, 50);					
})();
(()=>{
	var canvas = document.getElementById('canvas3');
	var table = canvas.getContext('2d');
	var renderLoop = (function (){
		var rad = 0;
		var mouseClose = false;
		return function(){
			mouseClose == false?rad += 0.05*Math.PI:rad -= 0.05*Math.PI;
			if(rad == 0.2*Math.PI||rad == 0)mouseClose = !mouseClose;
			table.clearRect(0,0,200,200);
			table.beginPath();
			table.arc(100,100,100,rad,2*Math.PI - rad,false);
			table.lineTo(100,100);
			table.closePath();
			table.fillStyle = 'black';
			table.fill();
		}
	}());
	setInterval(renderLoop, 50);					
})();
/*
 **
	//动画应用
	setInterval(function,milliseconds);		//js内置触发器
	strokeText(text,x,y,maxWidth);			//js内置图形化文字                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	reqAnimFrame 	= 	window.mozRequestAnimationFrame		||
						window.webkitRequestAnimationFrame	||
						window.msRequestAnimationFrame		||
						window.oRequestAnimationFrame;
	reqAnimFrame(renderLoop);				//优化兼容版流畅播放动画
 */
	//多媒体影音播放
/*
	drawImage(image,dx,dy)					//原比例绘制
	drawImage(image,dx,dy,dw,dh)			//按照指定宽高绘制
	drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)//裁剪后绘制
*/

//球球撞墙反弹
(()=>{
	var balltable = document.getElementById('balls');
	var table = balltable.getContext('2d');
	 table.width = balltable.width;
	 table.height = balltable.height;
	var balls = [];
	function createballs(){
			var x = Math.round(Math.random()*200);
			var y = Math.round(Math.random()*200);
			var head = Math.random()*2*Math.PI;
			var v = Math.random()*5+5;
			var xv = Math.cos(head)*v;
			var yv = Math.sin(head)*v;
			var radius = 5;
			balls.push({
				x:x,
				y:y,
				v:v,
				head:head,
				xv:xv,
				yv:yv,
				r:radius
			});
	};
	function drawballs(){
		table.clearRect(0,0,200,200);
		if(balls){
			for(let i = 0 ; i < balls.length ; i ++)
			{
				drawball(balls[i]);
			}
		}
		else{
			return;
		}
	}
	function drawball(ball){
		table.beginPath();
		table.arc(ball.x,ball.y,ball.r,0,Math.PI*2,true);
		table.closePath();
		table.fillStyle = 'blue';
		table.fill();
	}
	function updateballs(){
		if(balls){
			for(let i = 0 ; i < balls.length ; i ++)
			{
				updateball(balls[i]);
			}
		}
		else{
			return;
		}
	
	}
	function updateball(ball){
		if(ball.x-ball.r>0 && ball.y-ball.r>0 && ball.x+ball.r<table.width && ball.y+ball.r<table.height){
			ball.x += ball.xv;
			ball.y += ball.yv;
		}else if(ball.x+ball.r>=table.width||ball.x-ball.r<=0){
			ball.head = Math.PI - ball.head;
			ball.xv = Math.cos(ball.head)*ball.v;
			ball.yv = Math.sin(ball.head)*ball.v;
			ball.x += ball.xv;
			ball.y += ball.yv;
		}else if(ball.y+ball.r>=table.height||ball.y-ball.r<=0){
			ball.head = 2*Math.PI - ball.head;
			ball.xv = Math.cos(ball.head)*ball.v;
			ball.yv = Math.sin(ball.head)*ball.v;
			ball.x += ball.xv;
			ball.y += ball.yv;
		}else{
			console.log('error');
		}

	}
	for(let i = 0 ; i < 100 ; i ++)
	createballs();

	function setballs(){
		drawballs();
		updateballs()
	}
	setInterval(setballs, 100);
})();
(()=>{
	function test(a,...items){
		console.log(...items);
	}
	test(1,2,3,4,5,6);
})

