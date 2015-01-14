$(function(){
	new FastClick(document.body);	
	var clo = document.getElementById("close");
	clo.onclick = function(){
		document.getElementById("audio_top").style.display = "none";
		myscroll.refresh();	
	}
	var _pop = document.querySelector(".pop_content");
	if(document.querySelector(".main_bo a")){
	document.querySelector(".main_bo a").onclick = function(){
		var _htm = document.createElement("div");
		_htm.className = "masker";
		document.body.appendChild(_htm);
		_pop.style.display = "block";
	};
	}
	$("body").on("click",".masker",function(){
		_pop.style.display = "none";
		var _mask = document.querySelector(".masker");
		document.body.removeChild(_mask);
	});
	var _lh = '<div id="detail">'+
					'<div class="pop_top">'+
						'<p class="bold_font">下载应用</p>'+
						'<p class="small_hui">您还没有下载应用，点击确定下载</p>'+
					'</div>'+
					'<div class="pop_foot">'+
						'<a href="javascript:;" class="pop_cancle">取消</a>'+
						'<a href="javascript:;" class="pop_yes">确认</a>'+
					'</div>'+
				'</div>';
	$('body').append(_lh);
	$(".free_load").click(function(){
			popWin("detail")	
	})
})

