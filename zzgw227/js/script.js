

//公司历程3D轮播

var imgs = document.querySelectorAll('.course_show li'),
	btnPre	= document.querySelector('.course_btnpre'),
	btnExt	= document.querySelector('.course_btnext'),
	couDetail = document.querySelectorAll('.course_detail_warp');


var count = imgs.length,
    detaiLen = couDetail.length;
var INow = parseInt(count/2);
//console.log(INow);
Tab(INow);
TextChange();


btnPre.onclick = function(){
	INow--;
	goPre();
	TextChange();
};

btnExt.onclick = function(){
	INow++;
	goNext();
	TextChange();
};


function goNext(){
	if(INow>count-1){
		INow=0;
	}
	Tab(INow);
	setTimeout(function(){
		goNext();
	},700);
}

function goPre(){
	if(INow<0){
		INow= count-1;
	}
	Tab(INow);
	setTimeout(function(){
		goPre();
	},700);
}

//上排图片排列
function Tab(n){
	for (var i = 0; i < 1; i++) {
		var left=n-1-i;
		//0在中间
		if(left<0){
			left=left+count;
		}       			
		imgs[left].style.transform='translateX('+(-260*(i+1))+'px)translateZ(-300px)';
		//2在中间
		var right=n+1+i;
		if(right>count-1){
			right=right-count;
		}
		
		imgs[right].style.transform='translateX('+(260*(i+1))+'px)translateZ(-300px)';
	}
	imgs[INow].style.transform='translateZ(0px)';
}

//下排文本变化
function TextChange(){
	for(var i = 0; i<detaiLen; i++){
		couDetail[i].style.display = 'none';
	}
	couDetail[INow].style.display = 'block';
	// console.log(couDetail[INow]);
}












//首页轮播

function Carousel(container,op){
	this.initFlag = 1;
	this.count =0;
	var ctrl = this;
	this.container = container;
	this.op = op;
	this.wrapper = document.querySelector(this.container+' .banner_wrapper');
	this.items = document.querySelectorAll(this.container+' .banner_item');
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
   //鼠标移入移出状态
	for(var j = 0; j<itemLen; j++){
		items[j].index = j;
		items[j].onmouseover = function(){
			clearTimeout(ctrl.timer);
		}
		items[j].onmouseout = function(){
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

var banner = new Carousel('.banner_bg', {interval:2000,speed:500});


