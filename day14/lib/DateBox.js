var DateBox = function(stage,wid,hei,txt){
	this.stage=stage;
	this.div;
	this.width=wid;
	this.height=hei;
	this.text=txt;
	
	this.init=function(){
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid #ccffff";
		this.div.style.float="left";

		this.div.innerText=this.text;

		this.stage.appendChild(this.div);
				
	}

}