//적군을 정의
var Enemy=function(stage,wid,hei,x,y,src){
	this.stage = stage;
	this.width = wid;
	this.height = hei;
	this.x =x;
	this.y =y;
	this.img;
	this.src = src;
	this.st;
	this.flag=true; //setTimeout의 실행 여부.

	this.init=function(){
		this.img = document.createElement("img");
		this.img.src=this.src
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

	}
	this.move=function(){
		var me =this;
		if(!this.flag){
			clearTimeout(this.st);
			return;
		}

		st=setTimeout(function(){
			me.move();
		},100);
	}
	this.stop=function(){
		//움직임을 멈출수있는 함수
		clearTimeout(this.st)
	}
}
