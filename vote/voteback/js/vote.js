var pick = $('.gift_vote input'),
    giftList = $('.gift_send');
    giftList.hide();

  
    pick.click(function() {
    	if($(this).attr("checked")){
    		giftList.show();
    	}else{
    		giftList.hide();
    	}
    });
 

 //赠送票数类型

 var seleType = $('.popup_select>select option:selected'),
     popMain = $('.select_main');
 $('.popup_select').change(function(event) {
 	 if(seleType.val() == '送免费投票'){
	 	console.log('1');
	 	popMain.eq(1).show();
	 	popMain.eq(0).hide();
	 }else if(seleType.val() == '送礼物投票'){
	 	console.log('2');
	 	popMain.eq(0).show();
	 	popMain.eq(1).hide();
	 }
 });

