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
			_htm.style.backgroundColor = "rgba(0, 0, 0, 0)";
			_htm.style.display = "block";
			document.body.appendChild(_htm);
			//_htm.style.backgroundColor = "rgba(0, 0, 0, 0.498039)";
			setTimeout(function(){_htm.style.backgroundColor = "rgba(0, 0, 0, .5)";})
			
			_pop.style.display = "block";
		};
	}
	document.getElementsByClassName("pop_view")[0].addEventListener("click",function(){
		document.getElementsByClassName("masker")[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
	},false);
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

