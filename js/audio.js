//var audio = document.getElementById("myMusic"),
var audio = new Audio(),
p = $(".ProcessControl").offset(),
pl = $(".Process").width(),
ps = ($("body").innerWidth()-pl)/2,
ProcessYet = 0;
;
var timer = null;
var CurrentProces = null;
$(document).ready(function () { 

	$("#MainControl").on("click",function(){
		var flag = $(this).hasClass("MainControl"); 
		if(flag){
			changeStade("StopControl");
			audio.play();
			//TimeSpan();	
		}else{
			changeStade("MainControl");
        	audio.pause();
		}
	})

    $(".ProcessControl").click(function (e) {
        CurrentProces = e.clientX - ps;
        DurationProcessRange(CurrentProces / pl);
        $(".ProcessYet").css("width", CurrentProces);  
    });
	var _btn = document.getElementById("dotBtn");
	var moveX = null;
	
	_btn.addEventListener("touchstart",function(event){
		changeStade("waiting");
		audio.pause();
	}, false);
	
	_btn.addEventListener("touchmove",function(event){
		event.preventDefault();
    	moveX = event.targetTouches[0].pageX;
		CurrentProces = (moveX - ps)>180?180:(moveX - ps);
        $(".ProcessYet").css("width", CurrentProces);
	}, false);
	
	_btn.addEventListener("touchend",function(event){
		CurrentProces = (moveX - ps)>180?180:(moveX - ps);
        DurationProcessRange(CurrentProces / pl);
        $(".ProcessYet").css("width", CurrentProces);
        //changeStade("StopControl");
    	//audio.play();
		 
	}, false);
	
    //监听媒体结束
    /*audio.addEventListener('ended', function () {
        Pause();
    }, false);*/
});

function DurationProcessRange(rangeVal) {
    audio.currentTime = rangeVal * TimeAll();
	if($("#MainControl").hasClass("StopControl") || $("#MainControl").hasClass("waiting")){
    	audio.play();
    	changeStade("StopControl");
	}
}

//播放事件
function Play(obj) {
    var SongUrl = obj.getAttribute("SongUrl");
    audio.src = SongUrl;
    audio.play();
    //TimeSpan();
}

function Pause() {
    $("#PauseTime").val(audio.currentTime);
    audio.pause();
}

function Continue() {
    audio.startTime = $("PauseTime").val();
    audio.play();
}

/*function TimeSpan() {
    var ProcessYet = 0;
    timer = setInterval(function () {
        var ProcessYet = (audio.currentTime / TimeAll()) * 180;
        $(".ProcessYet").css("width", ProcessYet);
        var currentTime = timeDispose(audio.currentTime);
		var timeAll = timeDispose(TimeAll());
		$(".curTime").html(currentTime);
		$(".tolTime").html(timeAll);
    }, 500);	
}*/

audio.addEventListener("timeupdate",function(){
	var ProcessYet = (audio.currentTime / TimeAll()) * 180;
    $(".ProcessYet").css("width", ProcessYet);
    var currentTime = timeDispose(audio.currentTime);
	var timeAll = timeDispose(TimeAll());
	$(".curTime").html(currentTime);
	$(".tolTime").html(timeAll);
},false);

function timeDispose(number) {
		var minute = parseInt(number / 60);
		var second = parseInt(number % 60);
		minute = minute >= 10 ? minute : "0" + minute;
		second = second >= 10 ? second : "0" + second;
		if(minute == "0NaN"){
			return "__:__";
		}else{
			return minute + ":" + second;
		}
}

function TimeAll() {
    //return audio.duration;
	return $("#MainControl").attr("duration");
}

function changeStade(stade){
	var tag = document.getElementById("MainControl");
	tag.className = stade;
}