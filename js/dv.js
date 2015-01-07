var dv = dv || {};
dv.prototype.init = function(){
	this.audio = new Audio();
	dv.bo.start();
};
dv.bo = {
	start:function(){
		this.audio.src = "http://http.hz.qingting.fm/60260.mp3";
		console.log(this.audio)
	}
}

!function(){
	dv.init();

}()