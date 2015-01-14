$(function(){
	$("#navlist li").on("click",function(){
		var index = $(this).index(),
		box = $(".sortBox .sort_pos").eq(index);
		var f = $(this).find("em").hasClass("iconTop");
		if(this.id == "x_sx") return;
		if(f){
			box_hide();
			
		}else{
			$(this).find("em").removeClass("iconDown").addClass("iconTop");
	        $(this).find("i").removeClass("hide");
	        $(this).siblings("li").find("em").addClass("iconDown").removeClass("iconTop");
	        $(this).siblings("li").find("i").addClass("hide");
	        box_show(box);
	        mask();
		}
	});

	$(".masker").click(function(){
		box_hide();
	});

	var wrap = $(".wrap_list");
	
	function box_show(ele){
		wrap.slideDown();
		ele.removeClass("hide").siblings(".sort_pos").addClass("hide");
	}

	function box_hide(){
		wrap.hide();
		$("#navlist li").find("em").addClass("iconDown").removeClass("iconTop");
		$("#navlist li").find("i").addClass("hide");
		remask();
	}

	function mask(){
		var _h = $(window).height();
		$(".masker").removeClass("hide");
		//$(".masker").css({height:_h});
		$("body").addClass("filter_b").css({height:_h});
		//$(".masks").addEventListener('touchstart', function (e) { e.preventDefault(); }, false);
		document.body.addEventListener('touchmove', function(event) { 
		event.preventDefault(); 
	}, false);
	}
	
	function remask(){
		$(".masker").addClass("hide");
		//$("body").css({height:"auto"});
	}

	new FastClick(document.body);

	$("body").on("click",function(){
		$("#drop_down").removeClass("active");
	});
	
	
})


;(function(){
	function SX(){
		this.oDiv = document.querySelector(".wrap2");
		this.oWidth = window.innerWidth;
		this.oFa = document.querySelector(".fa");
		this.btn = document.getElementById("x_sx");
		this.oWrap = document.querySelector(".wrapper_list1");
	}

	SX.prototype.init = function(){
		this.setW();
		this.oFa.appendChild(this.oDiv);
		this.bindDom();
	}

	SX.prototype.setW = function(){
		var x = this.oDiv,
		_this = this,w = this.oWidth;
		//x.className = "wrap2";
		x.style.width = w + "px";
		x.style.left = w + "px";
		this.oWrap.style.width = w + "px";
	}

	
	SX.prototype.bindDom = function(){
		var t = this,
		d = t.oDiv,
		scaleW = t.oWidth;
		function k(){
			d.style.left = t.oWidth + "px";
			d.style.height = window.innerHeight + "px";
			//alert(d.style.height)
			t.oWrap.style.webkitTransform = 'translate3d(-'+ t.oWidth +'px, 0, 0)';
			t.oWrap.style.webkitTransition = '-webkit-transform 0.3s ease-out';
			d.style.webkitTransform = 'translate3d(-'+ t.oWidth +'px, 0, 0)';
			d.style.webkitTransition = '-webkit-transform 0.3s ease-out';
		}
		function s(ev){//ev.preventDefault();
			t.startTime = new Date() * 1;
			t.startX = ev.targetTouches[0].pageX;
			t.offsetX = 0;
		}
		function m(ev){
			//ev.preventDefault();
			//alert(123);
			ev.stopPropagation();			
			t.offsetX = ev.touches[0].pageX  - t.startX;
			//if(t.offsetX<0){ev.preventDefault();}
		}
		function e(ev){
			//ev.preventDefault();
			var boundary = t.oWidth/6;
			var endTime = new Date() * 1;
			if(endTime - t.startTime > 300){
				if(t.offsetX >= boundary){
					sport();
				}
			}else{
				//优化
				if(t.offsetX > 150){
					sport();
				}else{
					return;
				}
			}
		}
		
		function sport(){
			//myscroll.refresh();
						//myscroll.scrollTo(0, 0);
			//t.oWrap.scrollTo(0, 0);
			
			t.oWrap.style.webkitTransform = 'translate3d('+ 0 +'px, 0, 0)';
			t.oWrap.style.webkitTransition = '-webkit-transform 0.25s ease-out';
			d.style.webkitTransform = 'translate3d('+ 0 +'px, 0, 0)';
			d.style.webkitTransition = '-webkit-transform 0.25s ease-out';
		}
		t.btn.addEventListener("click",k,false);
		d.addEventListener("touchstart",s,false);
		d.addEventListener("touchmove",m,false);
		d.addEventListener("touchend",e ,false);
	}

	var obj = new SX();
	obj.init();

})()
