var times = (function(){
	var endTime, timeSeconds ,days ,hours ,minutes ,seconds;
	var dom = document.getElementById("endTime");
	
	function _init(e){
		endTime = new Date(e);
		setInterval(function(){
			update();
			changDom();	
		},1000);
	}
	function getTimeLast(){
		var curTime = new Date();
		var ret = endTime.getTime() - curTime.getTime();
		ret = Math.round(ret/1000);
		
		return ret >= 0 ? ret : 0; 	
	}
	
	function update(){
		timeSeconds = getTimeLast();
		days = parseInt(timeSeconds/86400) < 10 ? "0"+parseInt(timeSeconds / 86400) : parseInt(timeSeconds / 86400);
		hours = parseInt((timeSeconds - days*86400)/3600) < 10? "0"+parseInt((timeSeconds - days*86400)/3600):parseInt((timeSeconds - days*86400)/3600);
		minutes = parseInt((timeSeconds -days*86400- hours*3600)/60)<10?"0"+parseInt((timeSeconds -days*86400- hours*3600)/60):parseInt((timeSeconds -days*86400- hours*3600)/60);
		seconds = timeSeconds % 60 <10 ?"0"+timeSeconds % 60:timeSeconds % 60;
	}
	
	function changDom(){
		var htm = "<em>"+days+"</em>天"+
                  "<em>"+hours+"</em>时"+
                  "<em>"+minutes+"</em>分"+
                  "<em>"+seconds+"</em>秒"	;
		dom.innerHTML = htm;
	}
	
	return  {
		init : _init	
	}
})()


