var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;//x축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.velY=2;//y축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.gravity=0.1; // 중력을 표현하는 변수!!
	
	this.speedCnt=0;
	this.falling=true;   //떨어지고 있는지 변수
	this.jumping=true; //뛰고있는지 변수
	this.running=false;//키보드 누를때만 true

	this.st;

	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.div.style.overflow="hidden";	
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		
		//숨겨진 이미지의 좌표 처리..
		this.img.style.position="relative";
		//this.img.style.top=-65+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//이미지를 div에 탑재
		this.div.appendChild(this.img);

		//div를 stage 에 탑재 
		this.stage.appendChild(this.div);

		this.move();
	}

	this.action=function(path){
		/*this.img.src.=path;
		this.speedCnt=0;
		this.actionCnt=0;
       */
		if(this.running){
			this.speedCnt++;
			if(this.speedCnt%35==0){
				actionCnt++;
				if(actionCnt>actionArray.length-1){
					actionCnt=1;
				}
			}
			this.img.src=actionArray[actionCnt];
		}else{
			this.img.src=actionArray[0];
		}	
	}

	this.move=function(){
		var me=this;
		
		//중력 데이터를 velY 에 누적해보자!!
		this.velY+=this.gravity;

		if(this.velY>0){
			this.jumping=false;
			this.falling=true; //주인공이 떨어지고있으므로 전환
		}
	
		for(var i=0;i<blockArray.length;i++){
			var result = hitTest(this.div, blockArray[i].img);
			if(result && this.falling){
				this.velY=0;
				this.falling=false;
			}
		}	
		this.y+=this.velY;
		this.x+=this.velX;

		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";
		this.action();

		this.st= setTimeout(function(){
			me.move();
		}, 8);		
		
	}

}