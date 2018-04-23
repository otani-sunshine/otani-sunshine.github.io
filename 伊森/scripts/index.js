(function(doc){
	var screenWidth = doc.body.clientWidth,//获取用户屏幕宽度
		items = doc.querySelectorAll('.banner-item'),
		itemLen = items.length,
		wrapper = doc.querySelector('.banner-wrapper');
		wrapper.style.width = screenWidth*itemLen+'px';
		var pagination = doc.querySelector('.pagination');
		for(var i = 0; i<itemLen; i++){
			items[i].style.width = screenWidth+'px';
			pagination.appendChild(doc.createElement('span'));
		}
		doc.querySelector('.pagination span').className = 'active';
		var count = 0;
		function move(){
			if(count>itemLen-1){
				count = 0;
			}
			wrapper.style.left = '-'+count*screenWidth+'px';
			count++;
			timer = setTimeout(move,2000);
		}
		var timer = setTimeout(move,0);
		
		var btns = doc.querySelectorAll('.pagination span'),
			btnLen =btns.length;
		for(var i = 0; i<btnLen; i++){
			btns[i].index = i;
			btns[i].onclick = function(){
				clearTimeout(timer);
				wrapper.style.left = '-'+screenWidth*this.index+'px';
				for(var j=0; j<btnLen; j++){
					btns[j].className = null;
				}
				this.className = 'active';
			}
		}
	console.log(itemLen);
})(document);
