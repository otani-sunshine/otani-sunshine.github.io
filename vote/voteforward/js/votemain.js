//详情页面
var gamTip = $('.gamjue_tip'),
	gamLen = gamTip.length;

var gamWidth = 100/gamLen;
	gamTip.css({
		width: gamWidth+'%'
	});



var recordTip = $('.record_header>li'),
	lemWrap = $('.lemoon_wrap'),
	uaChange = $('.ualy_change>a');

	lemWrap.each(function() {
		   $(this).hide();
	});
	lemWrap.eq(0).show();


	recordTip.each(function() {
		$(this).click(function() {
           var reIndex = $(this).index();
           $(this).addClass('record_header_active').siblings().removeClass('record_header_active');
           lemWrap.each(function() {
           	   $(this).hide();
           });
           lemWrap.eq(reIndex).show();
           if (reIndex == 0) {
           		uaChange.text('送礼物');
           }else if (reIndex == 1) {
           		uaChange.text('排行榜');
           }
		});
	});


//排名
var rankTip = $('.rank_tip'),
	rankLen = rankTip.length,
	rankLeft = $('.rank_left'),
	rankRight = $('.rank_right');


var rankShow = '<div class="rank_show"><img src="images/banner1.png"></div>';
var rankDetail = '<div class="rank_detail"><p>001 绝地逢生</p><ul class="rank_concrete"><li class="concrete_left">第<span>1</span>名</li><li class="concrete_right"><span>27800</span>票</li></ul></div>';

rankTip.each(function() {
	var rankIndex = $(this).index(),
	    rankCount = rankIndex+1;
	if(rankCount%2==0){
		rankTip.eq(rankIndex).children('.rank_left').html(rankDetail);
		rankTip.eq(rankIndex).children('.rank_right').html(rankShow);
	}else{
		rankTip.eq(rankIndex).children('.rank_left').html(rankShow);
		rankTip.eq(rankIndex).children('.rank_right').html(rankDetail);
	}
});


//底部导航栏
var botTip = $('.footer_container li a');

botTip.each(function(){
	$(this).click(function() {
		//console.log(botName);
		botTip.each(function(){
			var aotName = $(this).data("name");
			$(this).removeClass(aotName+'_active').addClass(aotName+'_normal');
		})
		var botName = $(this).data("name");
		$(this).removeClass(botName+'_normal').addClass(botName+'_active');
	});
	
})

//礼物选择
var giftTip = $('.gift_tip');

giftTip.each(function(){
	$(this).click(function(){
		$(this).toggleClass('gift_tip_select');
	});
})

var nInput = $('.numbox-input'),
	nMinus = $('.numbox-btn-minus'),
	nPlus = $('.numbox-btn-plus'),
	num  = 0;

nInput.val(0);
nPlus.click(function(){
	nInput.val(num+1);
	console.log(num+1);
	num++;
})
nMinus.click(function(){
	nInput.val(num);
	console.log(num);
	num--;
	if(num < 0){
        num = 0;
        return;
    } 
})	

