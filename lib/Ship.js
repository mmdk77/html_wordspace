var Ship =function(area,wid,hei,x,y){
				
	this.width = wid;		//우주선 이미지 크기
	this.height = hei; 			
	this.x= x;				//우주선 위치
	this.y= y;		
	this.img;					//우주선 이미지
	this.area=area;		//appendChild 상속?
	

	this.init=function(){
		this.img=document.createElement("img");

		this.img.src="../images/spaceship/spaceship.jpg";
		
		this.img.style.width = this.width+"px";
		this.img.style.height = this.height+"px";
		this.img.style.position = "absolute";
		this.img.style.left = this.x +"px";
		this.img.style.top = this.y +"px";

		this.area.appendChild(this.img);
		this.move();
		
	}

	//방향이동
	this.go=function(){
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}

	this.move=function(){

	}

}