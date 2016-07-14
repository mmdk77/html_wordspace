var Block =function(stage,wid,hei,x,y,src){

	this.stage = stage;
	this.img;
	this.width = wid;
	this.height = hei;
	this.x = x;
	this.y = y;
	this.src = src;

	this.init=function(){

		this.img = document.createElement("img");
		this.img.src=this.src;

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);

	}

	this.move=function(){
		var me = this;
	
		setTimeout(function(){
			me.move();
		},10);

		
	}
}