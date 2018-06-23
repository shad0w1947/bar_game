var canvas;
var canvasContext;
var ballX=400;
var ballY=250;
var speedX=3;
var speedY=2;
var	barY=250;
const BAR_HEIGHT=100;
var score=0;

function readmouse(evt) {
var rect=canvas.getBoundingClientRect();
var root=document.documentElement;
var mouseX=evt.clientX-rect.left-root.scrollLeft;
var mouseY=evt.clientY-rect.top-root.scrollTop;
return{
	Y:mouseY,
	X:mouseX
};	
}

window.onload = function() {
	
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	setInterval(function() {
		ballmotion();
		drawEverything();
		},10);
		
		canvas.addEventListener('mousemove',
		function(evt){
			var mousePos =readmouse(evt);
			barY=mousePos.Y-BAR_HEIGHT/2;
		});
}	
function alarm() {
	alert("your score is "+ score);
}

function resetBall() {
	ballX=canvas.width/2;
	ballY=canvas.height/2;
	
}
	
function ballmotion() {
	ballY+=speedY;
	ballX+=speedX ; 
	if(ballX<0) {
		if(ballY>barY&&ballY<barY+BAR_HEIGHT) {
			
			speedX=-speedX;
			score++;
			
		}
		else {
			resetBall();
			alarm();
			score=0;
			
	    }
}
	if(ballX>canvas.width)
		speedX=-speedX;
	if(ballY==canvas.height||ballY==0)
		speedY=-speedY;

	
	
	}


function drawEverything(){
	//background of game
	colorRect(0,0,canvas.width,canvas.height,'black');
	

	//right bar
	colorRect(0,barY,10,BAR_HEIGHT,'white');
	//left bar
	colorRect(790,ballY-BAR_HEIGHT/2,10,BAR_HEIGHT,'white');
	canvasContext.fillText(score,100,100);
	//playing ball
	colorCircle(ballX,ballY,10,'red');
	
	
	
	}

	function colorCircle(centreX,centreY,radius,color){
	canvasContext.fillStyle=color;
	canvasContext.beginPath();
	canvasContext.arc(centreX,centreY,radius,0,Math.PI*2,true);
	canvasContext.fill();
	}
	
function colorRect(topX,topY,width,height,color){
	canvasContext.fillStyle = color;
	canvasContext.fillRect(topX,topY,width,height);
}