var audio = new Audio();

$(function(){
    new FastClick(document.body);	
	var clo = document.getElementById("close");
	clo.onclick = function(){
		document.getElementById("audio_top").style.display = "none";	
	}
		
	audio.src="http://http.hz.qingting.fm/60260.mp3";

	audio.addEventListener('waiting',
	function() {
		console.log('waiting');$(".jiage").html("waiting");
		//writeToLogger('waiting');
		//playing = false;
		//changeStat('load');
	},false);
	audio.addEventListener('playing',
	function() {
		console.log('play');$(".jiage").html("playing");
		//writeToLogger('waiting');
		//playing = false;
		//changeStat('load');
	},false);

	audio.addEventListener('play',
	function() {
		console.log('play');$(".jiage").html("play");
	},false);

	audio.addEventListener('error',
	function() {
		console.log('play');$(".jiage").html("error");
	},false);

	audio.addEventListener('onloadeddata',
	function() {
		console.log('play');$(".jiage").html("onloadeddata");
	},false);

	var speed = 20;
	var direction="left";
	var tab = document.getElementById("txtBox");
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txtCopy");
	function marquee(){
		switch(direction){
			case "left":
				if(txt2.offsetWidth - tab.scrollLeft <= 0){
					tab.scrollLeft -= txt1.offsetWidth;
				}
				else{
					tab.scrollLeft++;
				}
			break;
			case "right":
				if(tab.scrollLeft <= 0){
					tab.scrollLeft += txt2.offsetWidth;
				}
				else{
					tab.scrollLeft--;
				}
			break;
		}
	}
	if (txt1.offsetWidth > tab.offsetWidth) {
		txt2.innerHTML = txt1.innerHTML;
		var timer = setInterval(marquee,speed);
		tab.onmouseoutnmouseover = function(){clearInterval(timer);};
		tab.onmouseout = function(){timer = setInterval(marquee,speed);}; 
	}
	
	
	$("#play").on("click",function(){
		var flag = $(this).hasClass("stop");
		if(flag){
			$(this).removeClass("stop").addClass("play");
			if (audio.src == "") {
				//audio.src = Defaultsong
			}
			audio.load();
			audio.play();	
		}else{
			$(this).removeClass("play").addClass("stop");
        	audio.pause();
		}
	})
	
});