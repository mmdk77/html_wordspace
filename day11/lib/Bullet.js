/*객체지향 클래스 선언*/
var Bullet=function(stage,posX,posY){
	
	this.stage=stage;
	this.span;
	this.x=posX;
	this.y=posY;		//객체의 특징의 값을 담고 있어 속성(property)라함.
	this.st;				//setTimeout을 가르키는 변수


	this.init=function(){
		//객체(클래스)안의 함수는 method.
		//method : 동장방식을 결정.
		this.span=document.createElement("span");
		this.span.innerText="▶";
		this.span.style.color="red";
		this.span.style.position="relative";
		this.span.style.left=this.x+"px";
		this.span.style.top=posY+"px";		

		stage.appendChild(this.span);

		this.move();
	}

	this.move=function(){
		var me = this;							//넓은범위로 사용을 위해서는 전역변수로 선언후 => this.변수
		this.posX+=10;
		this.span.style.left=posX+"px";
		this.span.style.top=posY+"px";
		
		//범위를 벗어나면 setTimeout은 stop
		console.log(parseInt(this.stage.style.width));
		
		if(parseInt(this.span.style.left)>parseInt(this.stage.style.width)){
			clearTimeout(this.st);
			this.stage.removeChild(this.span);
			return;
		}
		st = setTimeout(function(){
			me.move();
			},10);
	}
}

/* 객체 매뉴얼화 (모듈화)
	s: 상속변수
	posY: top의 값을 결정*/