var Maze = function(stage,wid,hei,x,y){

	this.stage=stage;
	this.width=wid;
	this.height=hei;
	this.x=x;
	this.y=y;
	this.div;
	this.flag=false;
	

	this.init=function(){
	
		var me= this;

		this.div = document.createElement("div");
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";
				
		this.div.style.position="absolute";
		this.div.style.left = this.x+"px";
		this.div.style.top = this.y+"px";

		this.div.style.border= "1px solid red";

		this.stage.appendChild(this.div);

		//div의 사각형을 클릭시, div의 배경색 바꿈
		this.div.addEventListener("click",function(){
			
			if(this.flag=!this.flag){
				me.div.style.background="pink";
			}else{
				me.div.style.background="";
			}
		});
	}


}