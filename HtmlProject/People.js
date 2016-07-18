var People=function(){
	this.stage;
	this.img;
	this.width;
	this.height;
	this.x;
	this.y;


	this.init=function(){
		this.img= document.createElement("img");
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		
		this.img= ;//사람이미지 경로.
	
		this.stage.appendChild(this.img);

		this.move();
	}
	
	this.move=function(){
		var people = this;

		setTimeout(function(){
			people.move();
		
		},50);
	
	}
}