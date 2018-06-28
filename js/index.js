//ES5
function Slider(id){
	this.ele = this.$id(id);
	this.ullis = this.$get(this.$get(this.ele,'ul')[0],'li');
	this.num = this.ullis.length;
	this.ollis = this.createEle();
	this.indexA = 0;
	this.div = this.$id('msg');
	this.slide();
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
Slider.prototype = {
	$id : function(id){
		return document.getElementById(id);
	},
	$get : function(obj,tagName){
		if(typeof obj == 'object'){
			return obj.getElementsByTagName(tagName);
		}else if(typeof obj == 'string' && this.$id(obj)){
			return this.$id(obj).getElementsByTagName(tagName);
		}
	},
	$create : function(tagName){
		return document.createElement(tagName);
	},
	createEle : function(){
		var ol = this.$create('ol');
		var arr = [];
		for(var i = 0;i < this.num;i ++){
			var li = this.$create('li');
			arr.push(li);
			ol.appendChild(li);
		}
		this.ele.appendChild(ol);
		
		
		var leftSpan = this.$create('span');
		leftSpan.id = 'ltBtn';
		leftSpan.innerHTML = '&lt;';
		this.ele.appendChild(leftSpan);
		
		var rightSpan = this.$create('span');
		rightSpan.id = 'rtBtn';
		rightSpan.innerHTML = '&gt;';
		this.ele.appendChild(rightSpan);
		
		
		var div = this.$create('div');
		div.id = 'msg';
		this.ele.appendChild(div);
		
		
		return arr;
	},
	slide : function(){
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = 'none';
			this.ollis[i].style.background = 'red';
		}
		this.ullis[this.indexA].style.display = 'block';
		this.ollis[this.indexA].style.background = 'blue';
		
	},
	addEvent : function(){
		this.ltBtn = this.$id('ltBtn');
		this.rtBtn = this.$id('rtBtn');
		var that = this;
		this.ltBtn.onclick = function(){
			that.indexA --;
			if(that.indexA == -1){
				that.indexA = that.num - 1;
			}
			that.slide();
		}
		this.rtBtn.onclick = function(){
			that.indexA ++;
			if(that.indexA == that.num){
				that.indexA = 0;
			}
			that.slide();
		}
		
		for(var i= 0;i < this.num; i ++){
			this.ollis[i].index = i;
			
			this.ollis[i].onmouseover = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			if(that.indexA == that.num){
				that.indexA = 0;
			}
			that.slide();
		},3000)
		this.ele.onmouseover = function(){
			clearInterval(that.timer);
		}
		this.ele.onmouseout = function(){
			that.autoPlay();
		}
	}
}
