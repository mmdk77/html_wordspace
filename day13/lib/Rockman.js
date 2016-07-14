var Rockman=function(stage,wid,hei,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=wid;
	this.height=hei;
	this.x=x;
	this.y=y;
	this.src=src;

	this.velX=0;
	this.velY=2;//X와 Y의 방향을 정할 변수

	this.gravity=0.1;//중력
	this.actionCnt=0;
	this.speedCnt=0;

	this.init=function(){
		this.div = document.createElement("div");
		this.img = document.createElement("img");
		this.img.src=this.src;
		
		this.div.overflow="hidden";
		this.div.style.position = "absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";

		//숨겨진이미지의 좌표처리
		this.img.style.position="relative";
		//this.img.style.top=-65+"px";
		this.img.style.width = this.width+"px";
		this.img.style.height = this.height+"px";

		//img를 div에 추가
		this.div.appendChild(this.img);

		//div를 stage에 추가
		this.stage.appendChild(this.div);

		this.move();

	}

	this.action=function(path){
		this.img.src.=path;
		this.speedCnt=0;
		this.actionCnt=0;

		this.speedCnt++;
		if(this.speedCnt%50){
			actionCnt++;
		}	
		if(actionCnt>actionArray.length-1){
				actionCnt=1;
		}

	}
		
	this.move=function(){
		var me = this;
		//중력 적용
		this.velY+=this.gravity;
		this.y+=this.velY;

		this.div.style.top=this.y+"px";

		

		setTimeout(function(){
			me.move;
		},50);
		
		//블럭들과 마주쳤는지 체크
		for(var i=0;i<blockArray.length;i++){
			var result = hitTest(this.div, blockArray[i].img);
			if(result){
				this.div.style.top=this.y-60+"px";
			}
		}
	}
	
}