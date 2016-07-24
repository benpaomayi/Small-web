// JavaScript Document
window.onload=function(){ var canvaswidth=800;
var canvasheight=500;
var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
canvas.width=canvaswidth;
canvas.height=canvasheight;


var image=new Image();
var radius=50;
var clippingRegion={x:400,y:300,r:radius};
image.src="tupian.jpg";
image.onload=function(){
	initcanvas();
	}


function initcanvas(){
	clippingRegion={x:Math.random()*(canvas.width-2*radius)+radius,
	                y:Math.random()*(canvas.height-2*radius)+radius,r:radius};
	draw(image,clippingRegion);
	
	}


function setclippingRegion(clippingRegion){
	context.beginPath();
	context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
	context.clip();
	//context.closePath();
	}


function draw(image,clippingRegion){
	context.clearRect(0,0,canvas.width,canvas.height);
	
	context.save();  //这里需要先复位剪辑区域
	setclippingRegion(clippingRegion);  //开始剪辑
    context.drawImage(image,0,0,canvas.width,canvas.height);	
	context.restore();  //
	}


 //document.getElementById("show-button").onClick=show();
document.getElementById("show-button").onclick=function(){show();};
document.getElementById("rest-button").onclick=function(){rest();};

function show(){
  var timer=setInterval(function(){
		clippingRegion.r+=30;
	  console.log("animation");
	  if(clippingRegion.r>800){
		  clearInterval(timer);
		  }
	draw(image,clippingRegion);
		},50);
	
	
	
	
	}

function rest(){
	initcanvas();
	}


	
};
 