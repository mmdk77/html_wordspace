var Ddong=function(stage,img,wid,hei,x,y){
	this.stage=stage;
	//this.div;
	this.img=img;
	this.width=wid;
	this.height=hei;
	this.x=x;
	this.y=y;


	this.init=function(){
	
		/*this.div = document.createElement("div");
		this.div.width=screen.width;
		this.div.height=800+"px";
		this.div.style.left = x+"px";
		this.div.style.top = y+"px";
		*/

		this.img = document.createElement("img");
		this.img.src=  ;//똥이미지경로.
		
		this.div.appendChild(this.img);
		this.stage.appendChild(this.div);

		this.move();
	}

	this.move=function(){
	
		var ddong = this;
		
		setTimeout(function(){
			ddong.move();
		},500);
	}

}