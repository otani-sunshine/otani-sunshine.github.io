function Carousel(container,op){
	this.initFlag = 1;
	this.count =0;
	var ctrl = this;
	this.container = container;
	this.op = op;
	this.wrapper = document.querySelector(this.container+' .banner-wrapper');
	this.items = document.querySelectorAll(this.container+' .banner-item');
	this.itemLen = this.items.length;
	this.pagination = document.querySelector(this.container+' .pagination');
	this.timer = null;
	this.init(document);
}

Carousel.prototype.screenWidth= document.body.clientWidth;

Carousel.prototype.init = function(doc){
	if(this.initFlag){
		this.initFlag = null;
	}else{
		console.log('尝试初始化两次以上！');
		return;
	}
	var ctrl = this;
	var screenWidth = this.screenWidth,
		items =  this.items,
		itemLen = this.itemLen,
		wrapper =  this.wrapper,
		op =this.op,
		timer = this.timer;
		wrapper.style.width =  screenWidth*(itemLen+1)+'px';
		wrapper.style.transition = 'left '+op.speed+'ms';
	for(var i = 0; i<itemLen; i++){
		items[i].style.width = screenWidth+'px';
		this.pagination.appendChild(doc.createElement('span'));//小圆点
	}
	
	doc.querySelector(this.container+' .pagination span').className = 'active';//第一个小圆点设为激活状态（初始化状态）
	//console.log(items[0].cloneNode(true));
	wrapper.appendChild(items[0].cloneNode(true));//追加第一张的克隆节点（故一共四张）
	timer = setTimeout(function(){
		ctrl.move(op.interval,op.speed);//回调函数传参数，（回调函数是作为参数传递的，是不执行的） setTimeout(move,0)
	},0);//自己动
	
	var btns = this.pagination.querySelectorAll('span'), //小圆点点击时的效果
			btnLen =btns.length;
	for(var i = 0; i<btnLen; i++){
		btns[i].index = i;
		btns[i].onclick = function(){
			clearTimeout(ctrl.timer);//清除定时器
			ctrl.wrapper.style.left = '-'+ctrl.screenWidth*this.index+'px';
			for(var j=0; j<btnLen; j++){
				btns[j].removeAttribute('class');//取消所有小圆点的样式
			}
			this.className = 'active';//当前小圆点为激活状态
			ctrl.count = this.index;//继续动
			ctrl.timer = setTimeout(function(){
				ctrl.move(op.interval,op.speed);
			},op.speed);
		}
	}
}

Carousel.prototype.move = function(interval,speed){
	var ctrl = this,
		btns = ctrl.pagination.querySelectorAll('span'),
		btnLen = btns.length;
	if(this.count>this.itemLen-1){//最后的武士
		ctrl.wrapper.style.left = '-'+ctrl.count*ctrl.screenWidth+'px';//第一句
		for(var i = 0; i<btnLen; i++){
			btns[i].removeAttribute('class');
		}
		btns[0].className='active';
		setTimeout(function(){
			ctrl.wrapper.style.transition = 'left 0s';//第二句
			ctrl.count = 0;
			clearTimeout(ctrl.timer);
			ctrl.timer = setTimeout(function(){
				ctrl.move(interval,speed);
			},0);
		},speed-20);//第一句，此处定时器等待过渡时间
		return; 
	}
	this.wrapper.style.left = '-'+this.count*this.screenWidth+'px';//第三句
	
	if(ctrl.count==0){
		setTimeout(function(){
			ctrl.wrapper.style.transition = 'left '+speed+'ms';//第四句
		},20)//由于第三句执行时间较长，所以第三句还没执行完，就执行了第四句。所以此处用定时器等待第三句执行完再执行第四句
	}
	btns.forEach(function(e,i){
		e.removeAttribute('class');
	});
	btns[ctrl.count++].className='active';//先用后自增
	//this.count++;
	this.timer = setTimeout(function(){
		ctrl.move(interval,speed);
	},interval);//递归调用
}