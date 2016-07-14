//불꽃 작동
//정의{변수,함수}
//객체지향언어 : 사물= 클래스로 표현, 사물속성=변수, 동작=메소드, 

var Flame=function(area,wid,hei,posX,posY){				
	/* 
	불꽃의 property
	불꽃의 클래스 정의 (사용법)
	 wid = 가로 hei=세로, posX= X좌표, posY=Y좌표사용
	*/
	this.width=wid;
	this.height=hei;
	this.x=posX;
	this.y=posY;
	this.area=area;

	this.img;
	this.arr= new Array();		
	this.cnt=0; //이미지 교체
	
	this.init=function(){
		//객체가 생성시 초기동작 Method
		this.img=document.createElement("img");

		this.arr[0]="../images/flame_shot/flame1.png";
		this.arr[1]="../images/flame_shot/flame2.png";
		this.arr[2]="../images/flame_shot/flame3.png";
		this.arr[3]="../images/flame_shot/flame4.png";

		this.img.src=this.arr[this.cnt];

		//이미지 가로,세로 위치
		this.img.style.left = this.width+"px";
		this.img.style.top = this.height+"px";
	

		this.area.appendChild(this.img); //호출대상에게 상속
		this.move();
	}

	/* 불꽃의 Method*/
	this.move= function(){
		//이미지 교체. src
		this.cnt++;
		var me = this;

		if(this.cnt>=this.arr.length){
			this.cnt=0;
		}
		this.img.src=this.arr[this.cnt];
		setTimeout(function(){
			me.move()},100);			
	}
}//end of class
