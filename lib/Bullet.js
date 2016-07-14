/*-------------------------------------------------------
   아래의 코드는 지금 당장 사용할 총알 자체가 아닌, 
   장차 총알을 생성해낼 틀이다!!

   객체 메뉴얼 = 객체 사용법 
   s: 이 총알이 어떤 div에 붙을지를 결정하세요
   posY : 이 총알이 어느 y 좌표에서부터 날아갈지 결정하세요
-------------------------------------------------------*/
var Bullet=function(stage,x,y){
	//객체의 특징에 대한 값을 담고 있다고, 속성이라 한다.
	//property 라 표기한다
	this.stage=stage;
	this.span;
	this.x=x;
	this.y=y;     
	this.st;//나의 셋타임아웃을 가리키기 위한 변수!!
	this.velX=10; //몇 픽셀씩 움직일지!!

	//this.me;
	//객체안에 들어있는 함수는 method 메서드라 한다!!
	//method(방법) :  객체의 동작 방식을 결정하는 로직이 
	//                        들어있기 때문에..
	this.init=function(){
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.stage.appendChild(this.span);	

		this.move();
	}
	
	this.move=function(){		
		var me=this;
		this.x+=this.velX;

		this.span.style.left=this.x+"px";

		//stage를 벗어나면, 총알의 setTimeout 멈춰야 한다!!
		
		console.log(parseInt(this.stage.style.width));

		this.st=setTimeout(function(){
			me.move();
		},10);
	
		//부딪힐 경우
		for(i=0;i<enemyArray.length;i++){
			if(enemyArray[i]!=undefined){ //배열에 존재할경우, undefined가 아닌경우
				var result=hitTest(this.span, enemyArray[i].img);
				if(result){
					//총알없애고 
					this.stage.removeChild(this.span);
					clearTimeout(this.st);
				
					//적군없애고
					this.stage.removeChild(enemyArray[i].img);
					clearTimeout(enemyArray[i].st);
					delete enemyArray[i]; //배열에서 제거(남은 데이터 X : undefined)
				}
				return;
			}
		}
		//부딪히지 않을결우
		if(parseInt(this.span.style.left) > parseInt(this.stage.style.width)){
			console.log("저 자살할께요!!");
			clearTimeout(this.st);
			this.stage.removeChild(this.span);
			return;
		}

	}//move()
}//var bullet

/* 객체 매뉴얼화 (모듈화)
	s: 상속변수
	posY: top의 값을 결정*/