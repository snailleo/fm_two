var myScroll,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

//执行加载请求	
function pullUpAction () {
	setTimeout(function () {	
		var el, li, i;
		el = document.querySelector('.sport_cell');
		pullUpEl.className = 'pullup';
		
		for (i=0; i<3; i++) {
			li = document.createElement('li');
			li.innerText = '行数' + (++generatedCount);
			li.style.height = "50px";
			el.appendChild(li);
		}
		
		pullUpEl.querySelector('.la_more').innerHTML = '上拉加载更多...';
		myScroll.refresh();		
	}, 1000);	
}

function loaded() {
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;	
	
	myScroll = new iScroll('sport_wrap', {
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
				pullUpAction();
			}
		}
	});
	
}



document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);