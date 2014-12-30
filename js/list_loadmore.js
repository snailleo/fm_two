var myScroll,
	pullUpEl, pullUpOffset,
	generatedCount = 0;

//执行加载请求	
function pullUpAction () {
	setTimeout(function () {	
		var el, li, i;
		el = document.querySelector('.dai_ul');
		pullUpEl.className = 'pullup';
		pullUpEl.querySelector('.la_more').innerHTML = '上拉加载更多...';

		for (i=0; i<3; i++) {
			li = document.createElement('li');
			li.innerText = '行数' + (++generatedCount);
			li.style.height = "50px";
			el.appendChild(li);
		}
		
		myScroll.refresh();		
	}, 1000);	
}

function loaded() {
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;	
	
	myScroll = new iScroll('wrapper1', {
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
	
	setTimeout(function () { document.getElementById('wrapper1').style.left = '0'; }, 800);
	
	var scroll1, scroll2, scroll3 ,scroll4, scroll5, scroll6;
	scroll1 = new iScroll('oneLevel',{hScroll:false,bounce : false,checkDOMChanges:true});
	scroll2 = new iScroll('twoLevel',{hScroll:false,bounce : false,checkDOMChanges:true});
	scroll3 = new iScroll('threeLevel',{hScroll:false,bounce : false,checkDOMChanges:true});
	scroll4 = new iScroll('fourLevel',{hScroll:false,bounce : false,checkDOMChanges:true});
	scroll5 = new iScroll('fiveLevel',{hScroll:false,bounce : false,checkDOMChanges:true});
	scroll6 = new iScroll('sixLevel',{hScroll:false,bounce : false,checkDOMChanges:true});
}



document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);