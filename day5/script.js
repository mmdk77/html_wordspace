<script>
	var isPlaying = false;
	var count = 1;

	function play(){
		//문서내의 music이라는 요소 재생.
		if(!isPlaying){  //(isPlaying == ture)
			document.getElementById("music").play();
			document.getElementById("mName").innerText=count+".mp3"
			document.getElementById("btnPlay").value ="||";
		}else{
			document.getElementById("music").load();
			document.getElementById("btnPlay").value ="▶";
		}
		isPlaying = !isPlaying; //isPlaying = false;
	}
	function stop(){
		//다시 음악을 준비.
		document.getElementById("music").load();
	}
	function next(){
		count++;
		document.getElementById("dest").src="../audio/"+count+".mp3";
		document.getElementById("music").load();
		document.getElementById("music").play();
	}
	function ago(){
		count--;
		document.getElementById("dest").src="../audio/"+count+".mp3";
		document.getElementById("music").load();
		document.getElementById("music").play();
	}
</script>