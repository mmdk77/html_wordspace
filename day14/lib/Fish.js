var Fish = function(stage,wid,hei,x,y){
	this.stage=stage;
	this.div;
	this.width=wid;
	this.height=hei;
	this.x=x;
	this;y=y;
	this.targetX=0;
	this.targetY=0;
	this.a=0.9;
	this.velX =0;	//물체 속도 결정 변수 
	this.velY =0;


	this.init=function(){
		this.div=document.createElement("div");
		this.div.innerText="♤";
		this.div.style.fontSize=this.width+"px";
		this.div.style.fontWeight="bold";
		
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.stage.appendChild(this.div);

		this.move();

	}
	this.move=function(){
		var me = this;
		var posX=parseInt(this.div.style.left);//현재 본인의 X
		var posY=parseInt(this.div.style.top);//현재 본인의 Y

		this.div.style.left = this.targetX-this.a*(this.targetX-posX)+"px";
		this.div.style.top = this.targetY-this.a*(this.targetY-posY)+"px";

		setTimeout(function(){
			me.move();
		},10);
	
	}
}