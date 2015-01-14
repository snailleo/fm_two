var audio = document.getElementById("myMusic"),
p = $(".Process").offset(),
ps = p.left,
pl = $(".Process").width();
var CurrentProces = null;
$(document).ready(function () { 

	$("#MainControl").on("click",function(){
		var flag = $(this).hasClass("MainControl");
		if(flag){
			$(this).removeClass("MainControl").addClass("StopControl");
			if (audio.src == "") {
				var Defaultsong = $(".Single .SongName").eq(0).attr("KV");
				var songName = $(".Single .SongName").eq(0).attr("SN");
				$(".SongName").text(songName);
				audio.src = Defaultsong;
			}
			audio.play();
			TimeSpan();	
		}else{
			$(this).removeClass("StopControl").addClass("MainControl");
        	audio.pause();
		}
	})
	alert(audio.autoplay)
    $(".ProcessControl").click(function (e) {

        CurrentProces = e.clientX - ps;
        DurationProcessRange(CurrentProces / pl);
        $(".ProcessYet").css("width", CurrentProces);
    });
	var _btn = document.getElementById("dotBtn");
	var moveX = null;
	_btn.addEventListener("touchmove",function(event){
		event.preventDefault();
		var touch = event.touches[0];
    	moveX = touch.pageX;
		CurrentProces = (moveX - ps)>180?180:(moveX - ps);
        $(".ProcessYet").css("width", CurrentProces);
		 
	}, false);
	
	_btn.addEventListener("touchend",function(event){
		event.preventDefault();
		//var touch = event.touches[0],
    	//endX = touch.pageX;
		console.log(moveX);
		CurrentProces = (moveX - ps)>180?180:(moveX - ps);
        DurationProcessRange(CurrentProces / pl);
        $(".ProcessYet").css("width", CurrentProces);
		 
	}, false);


    //显示音乐列表事件
    $(".ShowMusicList").toggle(function () {
        $(".MusicList").show();

        var MusicBoxRight = $(".MusicBox").offset().left + $(".MusicBox").width();
        var MusicBoxBottom = $(".MusicBox").offset().top + $(".MusicBox").height();
        $(".MusicList").css("left", MusicBoxRight - $(".MusicList").width());
        $(".MusicList").css("top", MusicBoxBottom + 15);
    }, function () {
        $(".MusicList").hide();
    });


    //监听媒体结束
    /*audio.addEventListener('ended', function () {
        Pause();
    }, false);*/


});

function DurationProcessRange(rangeVal) {
    
    audio.currentTime = rangeVal * audio.duration;
	if($("#MainControl").hasClass("StopControl")){
    	audio.play();
	}
}

//播放事件
function Play(obj) {
    var SongUrl = obj.attr("SongUrl");
    console.log(SongUrl);
    audio.src=SongUrl;
	$("#MainControl").removeClass("MainControl").addClass("StopControl");
    audio.play();
    TimeSpan();
}

function Pause() {
    
    $("#PauseTime").val(audio.currentTime);
    audio.pause();
}

function Continue() {
    audio.startTime = $("PauseTime").val();
    audio.play();
}

function TimeSpan() {
    
    var ProcessYet = 0;
	
    setInterval(function () {
        var ProcessYet = (audio.currentTime / audio.duration) * 180;
        $(".ProcessYet").css("width", ProcessYet);
        var currentTime = timeDispose(audio.currentTime);
		var timeAll = timeDispose(TimeAll());
		$(".curTime").html(currentTime);
		$(".tolTime").html(timeAll);
    }, 500);
	
}

function timeDispose(number) {
		var minute = parseInt(number / 60);
		var second = parseInt(number % 60);
		minute = minute >= 10 ? minute : "0" + minute;
		second = second >= 10 ? second : "0" + second;
		if(minute == "0NaN"){return "00:00"}
		else{
		return minute + ":" + second;
		}
}

function TimeAll() {
    return audio.duration;
}