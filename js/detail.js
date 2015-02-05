//var audio = new Audio('media/情歌.mp3');
var audio = document.getElementById("myMusic");
console.log(audio.src)

$(function(){
    new FastClick(document.body);	
	var clo = document.getElementById("close");
	clo.onclick = function(){
		document.getElementById("audio_top").style.display = "none";	
	}
		
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
		tab.onmouseover = function(){clearInterval(timer);};
		tab.onmouseout = function(){timer = setInterval(marquee,speed);}; 
	}
	
	
	$("#play").on("click",function(){
		var flag = $(this).hasClass("stop");
		if(flag){
			$(this).removeClass("stop").addClass("play");
			if (audio.src == "") {
				//audio.src = Defaultsong
			}
			audio.play();	
		}else{
			$(this).removeClass("play").addClass("stop");
        	audio.pause();
		}
	})
	
});