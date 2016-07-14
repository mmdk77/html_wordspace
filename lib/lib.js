
//지정한 특정범위의 랜던값 구하기
//ex) 3~5사이의
function getRandomByRange(max, min){
	var rand = Math.floor(Math.random()*(max-min+1)+min);
	return rand;
}

function hitTest(me, target) {
 //두물체간 충돌 여부 판단 
	 me_x= parseInt(me.style.left);			// x축
	 me_y= parseInt(me.style.top);			// t축
	 me_width=parseInt(me.style.width);		//가로크기
	 me_height=parseInt(me.style.height);		//세로크기
	  
	 target_x= parseInt(target.style.left);			//타겟 x축
	 target_y= parseInt(target.style.top);			//타겟 y축
	 target_width=parseInt(target.style.width);		//타겟 가로크기
	 target_height=parseInt(target.style.height);		//타겟 세로크기
	 
	 var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));
	 //나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	 var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  
	 //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	 
	 var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));
	 //나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	 var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));
	 //나의 y폭이 타겟의 세로폭 내에 있는지 판단
	  
	 return (result1 || result2) && (result3 || result4);
}

