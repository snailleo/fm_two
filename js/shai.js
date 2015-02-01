var SH = SH || window;
pullUpEl = document.getElementById('pullUp'),
	pullUpOffset = pullUpEl.offsetHeight,
	generatedCount = 0;

SH.vbe = {
	item : function(){
		return $(".dai_ul").children('li')
	},
	tops:[],
	_top:null,
	topTitle:null,
	endH:null,
	cH:document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
	cW:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
}

SH.util = {
	myscroll:function(){
		return new iScroll('wrapper1', {
		useTransition: true,
		hScroll:false,
		onScrollMove: function () {
			if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.la_more').innerHTML = '松开加载更多...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.la_more').innerHTML = '上拉加载更多...';
				this.maxScrollY = pullUpOffset;
			} 
			
		},
		onScrollEnd: function () {
			if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.la_more').innerHTML = '加载中...';				
				SH.util.pullUpAction();
			}
			SH.util.scrollDate(this.y);
			SH.vbe.endH = this.y;
		}

		})
	},
	pullUpAction: function() {
		setTimeout(function () {	
			var el, li, i;
			el = document.querySelector('.dai_ul');
			pullUpEl.className = 'pullup';
			pullUpEl.querySelector('.la_more').innerHTML = '上拉加载更多...';

			for (i=0; i<5; i++) {
				li = document.createElement('li');
				li.innerText = '行数' + (++generatedCount);
				//li.style.height = "50px";
				li.dataset.date = "1/"+i;
				li.innerHTML = '<ul class="pic_list clearb">'+
                        '<li><img src="images/123.jpg" alt=""></li>'+
                        '<li><img src="images/123.jpg" alt=""></li>'+
                        '<li><img src="images/123.jpg" alt=""></li>'+
                    '</ul>'
				el.appendChild(li);
			}
			SH.init.scr.refresh();	
			SH.util.liTop();	
		}, 1000);	
	},

	scrollDate:function(k){
		//console.log(SH.vbe.tops.length+'--------')
		for(var j=0;j<SH.vbe.tops.length+1;j++){
			console.log(j)
			if(k>SH.vbe.tops[j]){
				console.log('k='+j+'  SH='+SH.vbe.tops[j]+'  j='+j);
				SH.vbe.topTitle = SH.vbe.item()[j-1].dataset.date;
				SH.util.setTop(SH.vbe.topTitle);
				break;
			}else{
				console.log('k='+j+'  SH='+SH.vbe.tops[j]+'  j='+j);
			}
		}
	},

	liTop:function(){
		SH.vbe.tops.length = 0;
		var item = SH.vbe.item();
		var len = item.length;
		for(var i=0;i<len;i++){
			var _top = -($(item[i]).offset().top-SH.vbe.endH-43);
			SH.vbe.tops.push(_top);
		}
		console.log(SH.vbe.tops)
	},
	setTop:function(s){
		document.getElementById('topTitle').innerHTML = s;
	},

	showPic:function(t){
		var outer = document.createElement('div');
		outer.className = "outer";
		document.body.appendChild(outer);
		//alert(t.index());
		var _img = t.closest("ul").find('img');
		var picUrl = [];
		for(var i=0; i<_img.length; i++){
			picUrl[i] = _img[i].src;
		}
		//var pli = .attr('src');
		console.log(picUrl)
	}
}

SH.init = function(){
	SH.util.myscroll();

	//show :
}
;(function(){
	SH.init();
	SH.util.liTop();
	$(document).on('click','.pic_list li',function(){
		//var index = $(this).index();
		var _this = $(this);
		SH.util.showPic(_this);
	});
	console.log(SH.vbe.cH)
})()