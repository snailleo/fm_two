//by20140920

function popWin(obj){
	var _z=9999999;	
	var _obj= $("#"+obj);
	var _clsbtn = _obj.find(".pop_cancle");
	var left=($(window).width()/2-135)+'px';
	var top =($(window).height()/2-90)+'px';
	_obj.css({	"left":left,"top":top,"display":"block","z-index":_z-(-1)});		

	_clsbtn.on("click",function(){
		$(this).parents("#detail").hide().siblings("#maskLayer").remove();
	});
			
	$('<div id="maskLayer"></div>').appendTo("body").css({
		"background":"#000","opacity":".4","top":0,"left":0,"position":"absolute","zIndex":_z
	});
	
	reModel();

	$(window).bind("resize",function(){reModel();});

	function reModel(){
		
		height = $(window).height(),
		width = $(window).width();
		$("#maskLayer").css({
			"height": height,"width": width
		});
	};
}
