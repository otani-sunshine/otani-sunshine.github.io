
//首页跳转js
function getHtml(pageUrl){
	$("#pageIframe").attr('src',pageUrl);
}
function changeTitle(){
	$("#pageIframe").load(function(){
		var cTitle = $(this).attr('src');
		$('#inpageTitle').text(cTitle);
	});
}


//主题左侧导航---手风琴效果
$('.lmain_each > a').click(function() {
	
	var parent = $(this).parent();
	var sub = parent.find('> ul');
	
	$(".lmain_each").children("ul").slideUp(250);
	$(".lmain_each").children(".lmain_each_title").children("div").removeClass("lnav_arri1").addClass("lnav_arri0");
	
	if(sub.is(':visible')) {
		$(this).children("div").removeClass("lnav_arri1").addClass("lnav_arri0");
		sub.slideUp(250);
	} else {
		$(this).children("div").removeClass("lnav_arri0").addClass("lnav_arri1");
		sub.slideDown(150);
	}
})



//---------------------提示框--------------
var marked=function () {
		$('.hbox_bg').each(function () {
			var $this = $(this);
			var a=$('.hbox_bg').index(this);

            $this.css('bottom',a*$(this).height()+15);
			/*if (a>0){
                $this.css('bottom',a*$(this).height()+30);
			}*/
            $(".hbox_bg").removeClass("hbox_bg_no").addClass("hbox_bg_yes");
            $(this).find('.hbox_xx').click(function(){
                $(this).parents('.hbox_bg').css('right','-450px').fadeOut();
            });
                var t1 = setTimeout(function () {
                    $this.css('right','-450px').fadeOut();
                },5000);
                var t2 = function () {
                    setTimeout(function () {
                        $this.css('right','-450px').fadeOut();
                    },1000);
                }
            $(this).mouseenter(function () {
                clearTimeout(t1);
            }).mouseleave(function () {
                t2()
            })
        })
};

//-----------------------板块高度问题-------------
//一板
$(document).ready(function(){
	var wh = $(window).height();
	$(".tone_bg").css("min-height",wh-20);
})
function Bgone() {
	var wh = $(window).height();
	$(".tone_bg").css("min-height",wh-20);
    $(".sixmain").css("min-height",wh-20);
}
//二板
$(document).ready(function(){
	var wh = $(window).height();
    var two = $(".ttwo_bg");
    if(two.length == 2) {
        $(".ttwo_bg").eq(1).css("min-height",wh-$(".ttwo_bg").eq(0).height()-30);
    }
    if(two.length == 3) {
        $(".ttwo_bg").eq(2).css("min-height",wh-$(".ttwo_bg").eq(0).height()-$(".ttwo_bg").eq(1).height()-40);
    }
});
function Bgtwo() {
	var wh = $(window).height();
    var two = $(".ttwo_bg");
    if(two.length == 2) {
        $(".ttwo_bg").eq(1).css("min-height",wh-$(".ttwo_bg").eq(0).height()-30);
    }
    if(two.length == 3) {
        $(".ttwo_bg").eq(2).css("min-height",wh-$(".ttwo_bg").eq(0).height()-$(".ttwo_bg").eq(1).height()-40);
    }
}






//分页---说明--显隐
$(function(){
	$(".oprate_tip").hide();
	$(".fanye_go").hover(function(){
		$(this).find(".oprate_tip").fadeIn(100);
	},function(){
		$(this).find(".oprate_tip").fadeOut(50);
	})
	$(".fanye_xs").hover(function(){
		$(this).find(".oprate_tip").fadeIn(100);
	},function(){
		$(this).find(".oprate_tip").fadeOut(50);
	})
})





//--------------上传图片---------
function upload(here){
    var f = here.files;
    var str = "";
    for (var i=0;i<f.length;i++){
        var reader = new FileReader();
        reader.readAsDataURL(f[i]);
        reader.onload = function(e){
            str += e.target.result;
            $(here).siblings(".puacox_enter_voupic").show().children("img").attr('src',str);
            $(here).siblings(".puacox_enter_voupic").find(".puacox_enter_voupic_btn2").attr('href',str);
        };
    }
}
function toUpload(here){
    $(here).parents(".puacox_enter_voupic").siblings("input[type=file]").click();
}






/*--------------------------------首页-----------------------------------*/

// function navMain() {
//     $('.navc').children('dd').hide();
//     $('.navc').children('dt').click(function(){
//     	if($(this).next('dd').is(':hidden')){
//     		$(this).children('u').addClass('navc_tri');
//     		$(this).next('dd').slideDown(200);
//     	}else {
//     		$(this).children('u').removeClass('navc_tri');
//     		$(this).next('dd').slideUp(100);
//     	}
//     });
//     $('.navc').children('dd').children('a').click(function(){
//     	$('.navc').children('dd').children('a').removeClass('navc_now');
//     	$(this).addClass('navc_now');
//     });
// }

function navMain() {
    var navA = $(".nava");
    var navAo = $(".nava_only");
    var navAm = $(".nava_move");
    var navIn = $(".navb_into");
    var navBg = $(".navb_bg");
    var navB = $(".navb");
    var conT = $(".container");
    var navCdt = $(".navc dt");
    var navCdda = $(".navc dd a");
    navB.hide();
    //点击一级菜单
    navA.click(function(){
        $(".nava_box a").removeClass("nava_now");
        $(this).addClass("nava_now");
        var n = $(".nava_box a").index(this);
        conT.animate({margin: '0 0 0 260px'},300);
        navBg.animate({left:'66px'},300);
        navAm.animate({top:80*n+'px'},100);
        navB.hide();
        navB.eq(n).show();
    })
    navAo.click(function(){
        $(".nava_box a").removeClass("nava_now");
        $(this).addClass("nava_now");
        var n = $(".nava_box a").index(this);
        navAm.animate({top:80*n+'px'},100);
        conT.animate({margin: '0 0 0 66px'},300);
        navBg.animate({left:'-194px'},300);
    })
    //点击二级菜单
    navCdt.click(function(){
        if($(this).next("dd").is(':visible')) {
            $(this).next("dd").slideUp(200);
            $(this).children("u").addClass("navc_tri");
        }else{
            $(this).next("dd").slideDown(200);
            $(this).children("u").removeClass("navc_tri");
        }
    })
    //点击三级菜单
    navCdda.click(function(){
        navCdda.removeClass("navc_now");
        $(this).addClass("navc_now");
    })
    //点击收进按钮
    navIn.click(function(){
        conT.animate({margin: '0 0 0 66px'},300);
        navBg.animate({left:'-194px'},300);
    })
}




/*-------------------------------3报表表格--------------------------------*/
$(function(){
	$(".stable_name span").hide();
	$(".stable_pull_bg").hide();
	$(".stable_pull").hide();
	$(".stable_thead td").hover(function(){
		$(this).find(".stable_pull_bg").show().hover(function(){
			$(this).find(".stable_pull").show();
		},function(){
			$(this).find(".stable_pull").hide();
		});
	},function(){
		$(this).find(".stable_pull_bg").hide();
	})
	$(".stable_name").hover(function(){
		$(this).toggle(function(){
			$(this).find("span").show().removeClass("stable_array0").removeClass("stable_array2").addClass("stable_array1");
		},function(){
			$(this).find("span").show().removeClass("stable_array0").removeClass("stable_array1").addClass("stable_array2");
		},function(){
			$(this).find("span").show().removeClass("stable_array1").removeClass("stable_array2").addClass("stable_array0");
		})
	},function(){
		$(this).find("span").hide()
	})
})




//税费配置------说明--显隐
$(function(){
	$(".fsgfc_ask").hide();
	$(".fsgfc_ask_tri").hide();
	$(".fsgfc_ask_bg").hover(function(){
		$(this).find(".fsgfc_ask").fadeIn(100);
		$(this).find(".fsgfc_ask_tri").fadeIn(100);
	},function(){
		$(this).find(".fsgfc_ask").fadeOut(50);
		$(this).find(".fsgfc_ask_tri").fadeOut(50);
	})
})





/*-------------------------------10税费及分成配置--------------------------------*/

//流拍百分比-----------显隐
$(function(){
	$(".tdde_hint").hover(function(){
		$(this).find(".tdde_hint_base").fadeIn(100);
	},function(){
		$(this).find(".tdde_hint_base").fadeOut(50);
	})
})






/*-------------------------------10手续费配置--------------------------------*/
$(function(){
	$(".comsn_time").hide();
	$(".comsn_time_input").toggle(function(){
		$(this).siblings(".comsn_time").show();
	},function(){
		$(this).siblings(".comsn_time").hide();
	})
})


//分成比例配置-----------tab切换
$(function(){
	$(".divit").hide();
	$(".divit:eq(0)").show();
	$(".divi_tab li").click(function(){
		$(".divi_tab li").removeClass("divi_tab_now");
		$(this).addClass("divi_tab_now");
		var x = $(".divi_tab li").index(this);
		$(".divit").hide();
		$(".divit").eq(x).show();
	})
})






/*---------------------------------------16会员、经济人详情-----------------------------------------*/

//查看详情----显隐
$(function(){
	$(".memal_open_main").hide();
	$(".memal_open").toggle(function(){
		$(this).find(".memal_open_btn").html("收起信息");
		$(this).find("p").removeClass("memal_open_up").addClass("memal_open_down");
		$(".memal_open_main").fadeIn(100);
	},function(){
		$(this).find(".memal_open_btn").html("详细信息");
		$(this).find("p").removeClass("memal_open_down").addClass("memal_open_up");
		$(".memal_open_main").fadeOut(100);
	})
})


//证件图片---显隐
$(function(){
	$(".memar_outall_bg").hide();
	$(".memar_each_base").hover(function(){
		$(this).children(".memar_outall_bg").show();
		$('.memar_imageFullScreen').smartZoom({'containerClass':'zoomableContainer'});  
		$('.zoomInButton,.zoomOutButton').bind("click", zoomButtonClickHandler);
	},function(){
		$(this).children(".memar_outall_bg").hide();
	})
})

function zoomButtonClickHandler(e){
    var scaleToAdd = 0.8;
    if(e.target.className == 'zoomOutButton')
        scaleToAdd = -scaleToAdd;
    $('.memar_imageFullScreen').smartZoom('zoom', scaleToAdd);
}      




//二维码---显隐
$(function(){
	$(".memd_ewm_big").hide();
	$(".memd_ewm_bg").hover(function(){
		$(".memd_ewm_big").show();
	},function(){
		$(".memd_ewm_big").hide();
	})
})


//产品黑盒------左边树--排序
$(function(){
	$(".pbbl_sup_tri").toggle(function(){
		$(this).find("span").removeClass("pbbl_sup_tri_up").addClass("pbbl_sup_tri_down");
	},function(){
		$(this).find("span").removeClass("pbbl_sup_tri_down").addClass("pbbl_sup_tri_up");
	})
})








/*-----------------------------------------17停牌设置---------------------------------------------*/
//选择交易品种---显隐
$(function(){
    $(".delis_choo").hide();
    $(".delis_choose_btn").click(function(){
        if ($(".delis_choo").is(":visible")){
            $(".delis_choo").fadeOut(100);
        }else {
            $(".delis_choo").fadeIn(100);
        }
    })
    $(".delis_choo_sup_btn2").click(function(){
        if ($(".delis_choo").is(":visible")){
            $(".delis_choo").fadeOut(100);
        }
    })
})








/*-----------------------------------------22报表展现---------------------------------------------*/

//表头--排序
$(function(){
	$(".reptable_thead_xu").hide();
	$(".reptable_th th").hover(function(){
		$(this).find(".reptable_thead_xu").show();
		var a = $(this).find(".reptable_thead_xu a");
		var b = $(this).find(".reptable_thead_xs");
		a.click(function(){
			$(this).addClass("reptable_thead_xu_now");
			$(this).siblings().hide();
		})
		b.toggle(function(){
			$(this).parent().find(".reptable_thead_xu1").show();
			$(this).parent().find(".reptable_thead_xu1").addClass("reptable_thead_xu_now");
			$(this).parent().find(".reptable_thead_xu2").hide();
			$(this).parent().find(".reptable_thead_xu2").removeClass("reptable_thead_xu_now");
		},function(){
			$(this).parent().find(".reptable_thead_xu2").show();
			$(this).parent().find(".reptable_thead_xu2").addClass("reptable_thead_xu_now");
			$(this).parent().find(".reptable_thead_xu1").hide();
			$(this).parent().find(".reptable_thead_xu1").removeClass("reptable_thead_xu_now");
		})
	},function(){
		$(this).find(".reptable_thead_xu").hide();
		var a = $(this).find(".reptable_thead_xu a");
		a.removeClass("reptable_thead_xu_now");
		a.siblings().show();
	})
})

//报表表格长度
$(function(){
	if( $(".reptable").width() <= $(".reptable_bg").width() ){
		$(".reptable").css("width","100%");
	}else{
		$(".reptable").css("width","auto");
	}
})



/*------------------------------------------23出金系列--------------------------------------------*/
//-----出金配置--显隐
$(function(){
	$(".withdraw_ask").hide();
	$(".withdraw_ask_bg").hover(function(){
		$(this).find(".withdraw_ask").fadeIn(100);
	},function(){
		$(this).find(".withdraw_ask").fadeOut(50);
	})
})





/*-------------------------------------------24清结算----------------------------------------------*/
//tab切换
$(function(){
	$(".acce").hide();
	$(".acce:eq(0)").show();
	$(".acc_tab li").click(function(){
		$(".acc_tab li").removeClass("acc_tab_now");
		$(this).addClass("acc_tab_now");
		var x = $(".acc_tab li").index(this);
		$(".acce").hide();
		$(".acce").eq(x).show();
	})
})




/*--------------------------------------------25会员管理-------------------------------------------*/
//会员信息维护-----高级查询
$(function(){
	$("#mcrch_high").hide();
	$(".mcrch_btn_high").click(function(){
		$(this).parent(".mcrch_btn").fadeOut(150);
		$("#mcrch_high").slideDown(200);
	})
	$(".mcrch_btn_low").click(function(){
		$(this).parents("#mcrch_high").slideUp(100);
		$(this).parents("#mcrch_high").siblings(".mcrch").find(".mcrch_btn").fadeIn(150);
	})
})











/*--------------------------------------------26账户管理------------------------------------------------*/

//品种募集资金使用计划------说明--显隐
$(function(){
	$(".bcfc_ask").hide();
	$(".bcfc_ask_tri").hide();
	$(".bcfc_ask_bg").hover(function(){
		$(".bcfc_ask").fadeIn(100);
		$(".bcfc_ask_tri").fadeIn(100);
	},function(){
		$(".bcfc_ask").fadeOut(50);
		$(".bcfc_ask_tri").fadeOut(50);
	})
})

//品种募集资金详情------历史--显隐
$(function(){
	$(".bcdb_main_his").hide();
	$(".bcdb_main_his_tri").hide();
	$(".bcdb_main_his_bg").hover(function(){
		$(".bcdb_main_his").fadeIn(100);
		$(".bcdb_main_his_tri").fadeIn(100);
	},function(){
		$(".bcdb_main_his").fadeOut(50);
		$(".bcdb_main_his_tri").fadeOut(50);
	})
})








/*-------------------------------------------30活动管理-----------------------------------------------*/

//----------taba切换
$(function(){
	$(".taba_bg").hide();
	$(".taba_bg:eq(0)").show();
	$(".taba li").click(function(){
		$(".taba li").removeClass("taba_now");
		$(this).addClass("taba_now");
		var n = $(".taba li").index(this);
		$(".taba_bg").hide();
		$(".taba_bg").eq(n).show();
	})
})



//活动列表---新增类型--下拉输入框
$(function(){
	$(".asel").hover(function(){
		$(this).children(".asel_inp").click(function(){
			$(this).css("border-color","#467CD4");
			$(this).next(".asel_base").show();
		});
	},function(){
		$(this).children(".asel_inp").css("border-color","#CCCCCC");
		$(this).children(".asel_base").hide();
		$(this).find(".asel_imp_inp").attr("value","");
	})
	$(".asel_choose").click(function(){
		var text = $(this).text();
		$(this).parent(".asel_base").siblings(".asel_inp").html(text);
	})
	$(".asel_imp_inp").bind('input propertychange', function(){
		var $this = $(this);
		var btn = $(this).siblings(".asel_imp_btn");
		btn.css("background-color","#467CD4");
		btn.click(function(){
			if ($this != null){
				var newText = $this.val();
				$(this).parents(".asel_base").siblings(".asel_inp").html(newText);
			}
		})
	});
})



//积分获取-新增活动-----设置多级推广积分---开关
$(function(){
	$(".aadd_switch1").click(function(){
		var swit = $(this);
		var box = swit.parent(".aadd_title").next(".aadd_switch_box");
		if (box.is(':hidden')){
			swit.removeClass("aadd_switch1").addClass("aadd_switch2");
			swit.children("div").removeClass("aadd_switch_in1").addClass("aadd_switch_in2");
			box.fadeIn(200);
		}
		else {
			swit.removeClass("aadd_switch2").addClass("aadd_switch1");
			swit.children("div").removeClass("aadd_switch_in2").addClass("aadd_switch_in1");
			box.fadeOut(100);
		}
	})
})

//-------------输入提醒--显隐
//赠送积分方式
$(function(){
	$(".aadda_hint_bg").hide();
	
	 var inp1 = $(".aadda_way").find("div").children("input");
	 inp1.focus(function(){
	 	$(this).parent("div").children(".aadda_hint_bg").fadeIn(100);
	 })
	 inp1.blur(function(){
	 	$(this).parent("div").children(".aadda_hint_bg").fadeOut(50);
	 })
})
//会员生日当天获取
$(function(){
 	var inp2 = $(".aadda_birth").children("input");
	inp2.focus(function(){
		$(this).parent("div").children(".aadda_hint_bg").fadeIn(100);
	})
	inp2.blur(function(){
		$(this).parent("div").children(".aadda_hint_bg").fadeOut(50);
	})
 })
	 



//积分获取-新增活动-----设置多级推广积分---全选
 $(function() {
    $(".aadda_level_all").click(function() {
    	var big = $(this).parents(".aadda_level");
    	big.find("input").attr("checked",this.checked);
    });
});



//转盘抽奖-新增活动-----input-file
$(function(){
	var file = $(".aadda_file").children("input");
	var name = $(".aadda_file").children("div");
	file.change(function(){
		var fileName = $(this).val();
		name.html(fileName);
	})
})


//微信海报-新增活动----选择模板
$(function(){
	$(".aadd_temp_yes").hide();
	$(".aadd_temp").toggle(function(){
		$(this).find(".aadd_temp_yes").fadeIn(150);
		$(this).find(".aadd_temp_sub").addClass("aadd_temp_sub_now");
	},function(){
		$(this).find(".aadd_temp_yes").fadeOut(150);
		$(this).find(".aadd_temp_sub").removeClass("aadd_temp_sub_now");
	})
})



/*-------------------------------------------31消息管理-----------------------------------------------*/
//模板管理------模板
$(function(){
	$(".anotemp").hover(function(){
		$(this).find(".anotemp_yes").fadeIn(150);
		$(this).find(".anotemp_name").fadeOut(150);
		$(this).find(".anotemp_btn").fadeIn(150);
	},function(){
		$(this).find(".anotemp_yes").fadeOut(150);
		$(this).find(".anotemp_name").fadeIn(150);
		$(this).find(".anotemp_btn").fadeOut(150);
	})
})




/*-------------------------------------------32数据分析-----------------------------------------------*/
//编辑资料----编辑
$(function(){
	$(".adanm_edit").children(".adanm").children(".adanm_inp").hide();
	$(".adanm_edit").siblings(".adanm_btn").hide();
	$(".aadd_title_edit").click(function(){
		$(this).hide();
		var box = $(this).parent(".aadd_title").next(".adan_bg").find(".adanm_bg");
		box.addClass("adanm_bg_bor");
		box.children(".adanm_btn").show();
		var eachLi = box.find(".adanm");
		eachLi.each(function(){
			var word = $(this).children(".adanm_word").text();
			$(this).children(".adanm_word").hide();
			$(this).children(".adanm_inp").attr("placeholder",word).show();
		})
	});
	$(".adanm_btn2").click(function(){
		$(this).parent(".adanm_btn").hide();
		$(this).parents(".adan_bg").prev(".aadd_title").children(".aadd_title_edit").show();
		$(this).parents(".adanm_bg").removeClass("adanm_bg_bor");
		$(this).parents(".adanm_bg").find(".adanm_inp").hide();
		$(this).parents(".adanm_bg").find(".adanm_word").show();
	});
	$(".adanm_btn1").click(function(){
		$(this).parent(".adanm_btn").hide();
		$(this).parents(".adan_bg").prev(".aadd_title").children(".aadd_title_edit").show();
		$(this).parents(".adanm_bg").removeClass("adanm_bg_bor");
		var everyLi = $(this).parents(".adanm_bg").find(".adanm");
		var eachInp = $(this).parents(".adanm_bg").find(".adanm_inp");
		everyLi.each(function(){
			$(this).children(".adanm_inp").hide();
			$(this).children(".adanm_word").show();
		})
//		eachInp.each(function(){
//          $.data(this, 'originVal', $(this).val());
//          $(this).on('keyup paste', function() {
//              var originVal = $(this, 'originVal');
//              var currentVal = $(this).val();
//
//              if (originVal !== currentVal) {
//                  $.data(this, 'originVal', $(this).val());
//                  $(this).siblings(".adanm_word").html(currentVal);
//                  callback(currentVal);
//              }
//          });
//		})
	});
})













/*----------------------------------------------------5-新后台----------------------------------------------------------*/
/*--------------------------------------51-品种管理--------------------------------------*/
//----------------tab切换-------------------
function puTab() {
    $(".puastep_tab_bg").each(function() {
        var $This = $(this);
        var each = $This.children(".puastep_tab").children("a");
        var nowE = $This.children(".puastep_tab").children(".puastep_tab_now");
        var sli = $This.children(".puastep_tab").children("u");
        var box = $This.children(".puastep_box");

        //----tab切换
        box.hide();
        box.eq(0).show();
        sli.css("width",nowE.innerWidth());
        each.click(function(){
            var $this = $(this);
            each.removeClass("puastep_tab_now");
            $this.addClass("puastep_tab_now");
            var n = each.index(this);
            box.hide();
            box.eq(n).show();
            var x = 0,y = 0;
            for (var i=0 ; i < n ; i++) {
                var x = each.eq(i).innerWidth();;
                y += x;
            }
            sli.animate({
                width:$this.innerWidth(),
                left: y,
            },200);
            Bgone();
            Bgtwo();
        })
    })
    console.log('yes');
}

//----------------tab切换-(多)-----------------
function puTabMore() {
    $(".putab_bg").each(function() {
        var $This = $(this);
        var tambg = $This.find(".putabmore");
        var each = $This.find(".putabmore").children("a");
        var nowE = $This.find(".putabmore").children(".putab_now");
        var sli = $This.find(".putabmore").children("u");
        var box = $This.find(".putab_box");

        //----设置tab父级宽度
        tambg.wrap("<div class='putab_fa'></div>");
        var c = 0,d = 0;
        for (var b=0 ; b < each.length ; b++){
			var c = each.eq(b).innerWidth();
            d = d + c;
		}
        tambg.css("width",d+c);

        //------超出移动
		var len = (Math.ceil(tambg.width()/tambg.parent(".putab_fa").width()))*2;
		var myb = 0;
		if(len>1/2){
            tambg.parent(".putab_fa").css("width","94%");
            tambg.parent(".putab_fa").after("<div class='tab_click'><div class='tab_left'></div><div class='tab_right'></div></div>")
			$This.find(".tab_right").click(function(){
                myb++;
                if(myb == len-1){
                	myb = len-2;
                	$('head').append('<style>.tab_right::after{border-left: 8px solid #999}</style>')
                }else if (myb <= len-1){
                    $('head').append('<style>.tab_left::after{border-right: 8px solid #467CD4}</style>')
				}
                Tony(myb);
			})
			$This.find(".tab_left").click(function(){
                myb--;
                if(myb == -1){
                	myb = 0;
                    $('head').append('<style>.tab_left::after{border-right: 8px solid #999}</style>')
                }else if (myb >-1 ){
                    $('head').append('<style>.tab_right::after{border-left: 8px solid #467CD4}</style>')
				}
                Tony(myb);
			})
		}
        function Tony(myb){
            var new_width = -myb * (tambg.parent(".putab_fa").width() / 2);
            tambg.stop(true,false).animate({'left' : new_width},300);
        };

        //----tab切换
        box.hide();
        box.eq(0).show();
        sli.css("width",nowE.innerWidth());
        each.click(function(){
            var $this = $(this);
            each.removeClass("putab_now");
            $this.addClass("putab_now");
            var n = each.index(this);
            box.hide();
            box.eq(n).show();
            var x = 0,y = 0;
            for (var i=0 ; i < n ; i++) {
                var x = each.eq(i).innerWidth();
                y += x;
            }
            sli.animate({
                width:$this.innerWidth(),
                left: y,
            },200);
            Bgone();
            Bgtwo();
        });

        //------清结算日期
        tambg.find(".liquidate_date").remove().appendTo(tambg.parent(".putab_fa"));
    })
}






//---------------发售列表--环形进度条-----
function puboxH(){
    var i = 4;//当前步骤
    var all = 10;//总步骤
    var n = i*(1.5/all)+0.75;
    var c = document.getElementById("puboxHuan");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#e9e9e9";
    ctx.beginPath();
    ctx.arc(120,120,90,Math.PI*0.85,Math.PI*2.15,false);
    ctx.lineWidth=15;
    ctx.lineCap='round';
    ctx.stroke();
    ctx.strokeStyle = "#86a6db";
    ctx.beginPath();
    ctx.arc(120,120,90,Math.PI*0.85,Math.PI*n,false);
    ctx.lineWidth=15;
    ctx.lineCap='round';
    ctx.stroke();
}

//---------------发售列表--进度条浮层位置---
function puboxTwig(){
    $(".pubox_twig_exp").css("left",$('.pubox_twig').children('p').width()+2);
}




//---------------品种详情--环形进度条-----
function mysCav(){
    var i = 10;//当前步骤
    var all = 11;//总步骤
    var n = i*(1.5/all)+0.75;
    var c = document.getElementById("mysCavs");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#e5e5e5";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*2.25,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
    ctx.strokeStyle = "#467cd4";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*n,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
}



//---------------发售审核--radio选中出现输入框-----
function pubcoxAudit() {
    $(".pubcox_audit_each").children("textarea").hide();
    if($(".pubcox_audit_each:last").children("input:radio").is(':checked')){
        $(".pubcox_audit_each").children("textarea").show();
    }else{
        $(".pubcox_audit_each").children("textarea").hide();
    }
}



//---------------品种发售详情--进度条-----
//function pubdetaDot(){
//    $(".pubdeta_sub_dot").each(function(){
//        var $this = $(this);
//        var Li = $this.children("li");
//        /*每个li定位*/
//        for (var i = 0;i < Li.length; i++){
//            var n = i*(100/(Li.length-1));
//            Li.eq(i).css("left",n+'%');
//        }
//        /*当前选中位之前所有点亮*/
//        var x = Li.index($this.children(".pubdeta_sub_dotnow"));
//        x = x + 1;
//        $this.children("li:lt("+x+")").addClass("pubdeta_sub_dotover");
//    })
//}


//---------------配售模板设置--板块切换-----
function puaStep() {
    $(".puastep_box").eq(0).show().siblings(".puastep_box").hide();
    var now = 0;
    var End = $(".puastep_box").length;
    $("#puastepNext").click(function(){
        now += 1;
        if(now > End-1){
            now = End-1;
        }
        $(".puastep_box").eq(now).show().siblings(".puastep_box").hide();
        $(".puastep_tab a").removeClass("puastep_tab_now");
        $(".puastep_tab ").children("a").eq(now).addClass("puastep_tab_now").siblings(".puastep_tab").removeClass("puastep_tab_now");
    });
    $("#puastepPre").click(function(){
        now -= 1;
        if(now < 0){
            now = 0;
        }
        $(".puastep_box").eq(now).show().siblings(".puastep_box").hide();
        $(".puastep_tab a").removeClass("puastep_tab_now");
        $(".puastep_tab ").children("a").eq(now).addClass("puastep_tab_now").siblings(".puastep_tab").removeClass("puastep_tab_now");
    });
}



//---------变更记录---手风琴---------
function puaud() {
    $(".puaud_sub").hide();
    $(".puaud_supb").click(function(){
        if($(this).parents(".puaud_sup").next(".puaud_sub").is(':hidden')){
            $(this).children("u").addClass("puaud_sup4_on");
            $(this).parents(".puaud_sup").next(".puaud_sub").slideDown(200);
            $(this).parents(".puaud").siblings(".puaud").find(".puaud_sup4_on").removeClass("puaud_sup4_on");
            $(this).parents(".puaud").siblings(".puaud").children(".puaud_sub").slideUp(200);
        }else {
            $(this).children("u").removeClass("puaud_sup4_on");
            $(this).parents(".puaud_sup").next(".puaud_sub").slideUp(200);
        }
    })
}



//---------------配售模板设置--高级筛选-----
function puaMose() {
    $(".puamose_bg").hide();
    $(".puamose_ope_up").hide();
    $(".puamose_ope_down").click(function(){
        $(this).hide();
        $(this).siblings(".puamose_ope_up").show();
        $(this).parent(".puamose_ope").prev(".puamose_bg").slideDown(200);
        $(this).parent(".puamose_ope").siblings(".twomain1").children(".twomain1_btn").hide();
    });
    $(".puamose_ope_up").click(function(){
        $(this).hide();
        $(this).siblings(".puamose_ope_down").show();
        $(this).parent(".puamose_ope").prev(".puamose_bg").slideUp(200);
        $(this).parent(".puamose_ope").siblings(".twomain1").children(".twomain1_btn").show();
    });
}



//---------------批次详情----手风琴
function pualot26Each() {
    $(".dialo26_each:eq(0)").children("dt").find("u").addClass("dialo26_each_cli");
    $(".dialo26_each:eq(0)").children("dd").show();
}



//--------------审核工单----驳回原因框--收缩
function pubnarOne() {
	$(".pubnar_base").each(function(){
		var One = $(this).children(".pubnar_one");
		One.find(".pubnar_two_each_area").hide();
		One.children("input").click(function(){
            $(this).next("p").next(".pubnar_two_each_area").show();
            $(this).parents(".pubnar_one").siblings(".pubnar_one").children(".pubnar_two_each_area").hide();
		})
	})
}




//--------------协议转让权限模板----单选-出现
function pubXyzr(){
    $("#pubxyzrb2").hide();
    $("#pubxyzrb1").hide();
    $(".pubcox_enter_radshowfa").click(function () {
        $(".pubcox_enter_radshowchil").css('display','block')
    })
	$("#pubxyzrBg").children(".pubcox_enter_column").children("li").children("input:radio").click(function(){
        if($("#pubxyzra1").children("input:radio").is(":checked")){
            $("#pubxyzrb1").show();
            $(".pubcox_enter_radshowchil").css('display','none')
        }else {
            $("#pubxyzrb1").hide();
        }
        if($("#pubxyzra2").children("input:radio").is(":checked")){
            $("#pubxyzrb2").show();
            $(".pubcox_enter_radshowchil").css('display','none')
        }else {
            $("#pubxyzrb2").hide();
        }
	})
}







/*--------------------------------------52-会员管理--------------------------------------*/
//优惠手续费
function favorable() {
	$('.tabshow').click(function () {
		$(this).parent().siblings('.tabright').css('right','0')
    })
	$('.favorable_close').click(function () {
		$(this).parents('.tabright').css('right','-615px')
    })
}

//----------------账户信息-----饼状图
function drawPubncoTotal() {
    var color = ["#6290da","#9fbae8","#dbe5f6"];
    var data = [55,25,20];
    var canvas = document.getElementById("pubncoTotal");
    var ctx = canvas.getContext("2d");
    var startPoint= 1.5 * Math.PI;
    for(var i=0;i<data.length;i++){
        ctx.fillStyle = color[i];
        ctx.strokeStyle = color[i];
        ctx.beginPath();
        ctx.arc(80,80,70,startPoint,startPoint-Math.PI*2*(data[i]/100),true);
        ctx.lineWidth=20;
        ctx.stroke();
        startPoint -= Math.PI*2*(data[i]/100);
    }
}


//---------------------查经纪会员关系图
//伸缩
$(function(){
	$(".mspb_cion").toggle(function(){
		$(this).attr("src","../images/msp_icon4.png")
		$(this).parent(".mspb").siblings(".mspa").slideUp(100);
	},function(){
		$(this).attr("src","../images/msp_icon3.png")
		$(this).parent(".mspb").siblings(".mspa").slideDown(100);
	})
})

//每块前面线超出问题
function mspaNoline() {
    $(".mspb").each(function(){
        $(this).parent(".mspa").children(".mspa").last().addClass("mspa_noline");
    })
    $(".mspc").parent(".mspa").children(".mspa").last().addClass("mspa_noline");
}

//后面浮层
$(function(){
	var fc = "<ul class='mspb_message'><li>发展会员：<span>40人</span></li><li>累计佣金：<span>1,000,000.00元</span></li></ul>";
	$(".mspb a").hover(function(){
		$(this).parent(".mspb").append(fc);
	},function(){
		$(".mspb_message").remove();
	})
})

//----------发展会员详情----模块收缩
function myDmd() {
    $(".mydmda_tri").click(function(){
        var mdb = $(this).parent(".mydmda").next(".mydmdb");
        if(mdb.is(':hidden')){
            $(this).find(".mydmda_tri_add2").remove()
            mdb.slideDown(200);
        }else{
            $(this).find('.mydmda_tri_add').append('<div class="mydmda_tri_add2"></div>')
            mdb.slideUp(200);
        }
    })
}

//------------------会员管理----审核-----
function pubnAu() {
    var Out = $(".pubnau_out");
    var In = $(".pubnau_in");
    var contain = $(".pubnau_container");
    var conWidth = $(".pubnau_container").innerWidth();
    contain.css("right",-conWidth-10);
    Out.click(function(){
        $(this).next(contain).animate({right:0},300);
    });
    In.click(function(){
        $(this).parents(contain).animate({right:-conWidth-10},300);
    });
}


//-------------会员详情前台跳转页------申购详情----环形进度条
function mytCav(){
    var i = 2;//当前步骤
    var all = 7;//总步骤
    var n = i*(1.5/all)+0.75;
    var c = document.getElementById("mytCavs");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#e5e5e5";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*2.25,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
    ctx.strokeStyle = "#467cd4";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*n,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
}
function mytCav1(){
    var i = 5;//当前步骤
    var all = 7;//总步骤
    var n = i*(1.5/all)+0.75;
    var c = document.getElementById("mytCavs1");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#e5e5e5";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*2.25,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
    ctx.strokeStyle = "#467cd4";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*n,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
}
function mytCav2(){
    var i = 7;//当前步骤
    var all = 7;//总步骤
    var n = i*(1.5/all)+0.75;
    var c = document.getElementById("mytCavs2");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#e5e5e5";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*2.25,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
    ctx.strokeStyle = "#467cd4";
    ctx.beginPath();
    ctx.arc(50,50,45,Math.PI*0.75,Math.PI*n,false);
    ctx.lineWidth=5;
    ctx.lineCap='round';
    ctx.stroke();
}


//----------委托发售方开户----三证合一
function pubEsth() {
	$(".pubesth_bg").each(function(){
        $(this).find(".pubesth").hide();
        $(this).find(".pubesth").eq(0).show();
        $(this).find(".pubesth_rad").children("input").click(function(){
            var n = $(this).parents(".pubcox_enter").children(".pubesth_rad").index($(this).parent('.pubesth_rad'));
            console.log(n);
            $(this).parents(".pubcox_enter").next(".pubesth_base").children(".pubesth").hide();
            $(this).parents(".pubcox_enter").next(".pubesth_base").children(".pubesth").eq(n).show();
        })
	})
}



//-----------------品种发售详情-----
function bcfCd(){
	$(".bcfcd_bg").hide();
	$(".bcfc_ope_on").toggle(function(){
		$(this).removeClass("bcfc_ope_on1").addClass("bcfc_ope_on2");
		$(this).parents("tr").next("tr").next(".bcfcd_bg").fadeIn(200);
	},function(){
		$(this).removeClass("bcfc_ope_on2").addClass("bcfc_ope_on1");
		$(this).parents("tr").next("tr").next(".bcfcd_bg").fadeOut(100);
	})
}






/*--------------------------------------3-请结算--------------------------------------*/



//-----------------------请结算概况----------------板块---------
function pucasBg(){
    var wh = $(window).height();
    $(".pucasa_bg").css("min-height",wh-20);
    $(".pucasb_base").css("min-height",wh-20);
    if($(".pucasa_bg").height() > $(".pucasb_base").height()){
        $(".pucasb_base").css("height",$(".pucasa_bg").height())
    }else {
        $(".pucasa_bg").css("height",$(".pucasb_base").height()+40)
    };
    $('.pucasa_on').click(function () {
		$(this).addClass('pucasa_onHover')
    })
}


//-----------------------对账差异调整记录--伸缩----------------
function pucY(){
	$(".pucy_base").parent(".twomain2_table1").hide();
	$(".pucy_btn").toggle(function(){
		$(this).parents(".twomain2_table1").next(".twomain2_table1").fadeIn(200);
	},function(){
        $(this).parents(".twomain2_table1").next(".twomain2_table1").fadeOut(100);
    })
}








/*--------------------------------------4-运营管理--------------------------------------*/
//-------------文章分组----------各个块的宽高比控制---展示作用-*!必须---------
function pubarshBlock(){
    $(".pubarsh_block1").css("height",$('.pubarsh_block1').width()*28/80);
    $(".pubarsh_block2").css("height",$('.pubarsh_block2').width()*97/80);
    $(".pubarsh_block3").css("height",$('.pubarsh_block3').width()*28/30);
}
//-----------分组管理------------------------------
function omit() {
	$('.article_omit').hover(function () {
		$(this).attr('title',$(this).text())
    })
}
function omit2() {
    $('.article_omit2').css({
        maxWidth:'234px',
        overflow: 'hidden',
        textOverflow:'ellipsis',
        whiteSpace: 'nowrap'
    }).each(function () {
        const a=$(this).text().length;
        const b=$(this).text().substr(a-2,a);
        if (a>20){
            $(this).parent().append('<span class="margin-0 surplus">'+b+'</span>')
        }
    }).parent().hover(function () {
		$(this).attr('title',$(this).find('.article_omit2').text()+$(this).find('.surplus').text())
    })
}



/*--------------------------------------6-系统管理--------------------------------------*/
//--------------通用信息设置--切换--
function pufrsAB(){
	$(".pufrsb").children("div").eq(0).show().siblings("div").hide();
	$(".pufrsae_main").children("li").children("div").click(function(){
		var n = this.id.substring(6);
		$('#pufrsb'+n).show().siblings("div").hide();
	})
}






/*--------------------------------------6-任务管理--------------------------------------*/
function pufrezt(){
	$(".twomain2_table").each(function(){
        $(".pufrezt_tr").hide();
        $(".pufrezt_link").toggle(function(){
			$(this).removeClass("pufrezt_link_up").addClass("pufrezt_link_down");
            $(this).parents(".twomain2_table1").next(".pufrezt_tr").show();
		},function(){
            $(this).removeClass("pufrezt_link_down").addClass("pufrezt_link_up");
            $(this).parents(".twomain2_table1").next(".pufrezt_tr").hide();
		})
	})

}
function color() {
	$('.parameter_time_border').mouseover(function () {
        $(this).css('background','#fafafa')
		$(this).next('.parameter_time_height').css('background','#fafafa')
    }).mouseout(function () {
        $(this).css('background','#ffffff')
        $(this).next('.parameter_time_height').css('background','#ffffff')
    });
	$('.parameter_time_height').mouseover(function () {
        $(this).css('background','#fafafa')
        $(this).prev('.parameter_time_border').css('background','#fafafa')
    }).mouseout(function () {
        $(this).css('background','#ffffff')
        $(this).prev('.parameter_time_border').css('background','#ffffff')
    });
}
function showtime() {
	$('.parameter_img').click(function () {
		if ($(this).siblings('.calend_time').css('display')=='none'){
            $('.calend_time').css('display','none')
            $(this).siblings('.calend_time').css('display','block');
		}else if ($(this).siblings('.calend_time').css('display')=='block'){
            $(this).siblings('.calend_time').css('display','none');
		}
    })
	$('.parameter_time_all').click(function () {
        if ($(this).siblings('.parameter_time_show').css('display')=='none'){
            $('.parameter_time_all').css('transform','rotateZ(-90deg)')
            $('.parameter_time_show').css('display','none');
            $(this).css('transform','rotateZ(0deg)')
            $(this).siblings('.parameter_time_show').css('display','block');
        }else if ($(this).siblings('.parameter_time_show').css('display')=='block'){
            $(this).css('transform','rotateZ(-90deg)')
            $(this).siblings('.parameter_time_show').css('display','none');
        }
    })
	$('.popup_clickf1').click(function () {
		$('.popup_click1').css('display','block')
		$('.popup_click2').css('display','none')
		$('.popup_show').css('display','none')
    })
    $('.popup_clickf2').click(function () {
        $('.popup_click1').css('display','none')
        $('.popup_click2').css('display','block')
        $('.popup_show').css('display','block')
    })
}
function timecontrol() {
	$('.acaled_table_in').click(function () {
		if ($(this).hasClass('acaled_table_holiday')){
            $(this).removeClass('acaled_table_holiday')
		}else {
            $(this).addClass('acaled_table_holiday')
		}
    })
}

//----任务流程详情
$('.putab_input').click(function () {
    $(".putab_select").css({
        transition:'all .2s linear',
        transform:'rotate(0deg)'
    })
    var n=$('.putab_input').index(this);
    console.log(n)
    $('.putab_section').css({
        top:n*60+32
    })
    if ($('.putab_section').css('display')=='block'){
        $('.putab_section').css('display','none');
        $(this).siblings(".putab_select").css({
            transition:'all .2s linear',
            transform:'rotate(0deg)'
        })
    }else {
        $('.putab_section').css('display','block');
        $(this).siblings(".putab_select").css({
            transition:'all .2s linear',
            transform:'rotate(180deg)'
        });
    }})
$(".putab_select").click(function () {
        $(".putab_select").css({
            transition:'all .2s linear',
            transform:'rotate(0deg)'
        })
        var n=$('.putab_select').index(this);
        $('.putab_section').css({
            top:n*60+32
        })
        if ($('.putab_section').css('display')=='block'){
            $('.putab_section').css('display','none');
            $(this).css({
                transition:'all .2s linear',
                transform:'rotate(0deg)'
            })
        }else {
            $('.putab_section').css('display','block');
            $(this).css({
                transition:'all .2s linear',
                transform:'rotate(180deg)'
            });
        }
    }
)


/*-------------------------日志管理-------------------------------*/

 function log() {
	$('.log_behavior_li').click(function () {
        $('.log_behavior_li').removeClass('log_bgcolor_click');
        $(this).addClass('log_bgcolor_font')
		$(this).addClass('log_bgcolor_click')
		//---------sex---------------------------
		if ($(this).siblings('.log_behavior_sex').css('display')=='none'){
            $(this).siblings('.log_behavior_sex').slideDown(200)
		}else {
            $(this).siblings('.log_behavior_sex').slideUp(200)
		}
        $('.log_behavior_show').not($(this).siblings('.log_behavior_show')).fadeOut(200)
		//--------tier--------------------------
        if ($(this).siblings('.log_behavior_tier').css('display')=='none'){
            $(this).siblings('.log_behavior_tier').slideDown(200)
        }else {
            $(this).siblings('.log_behavior_tier').slideUp(200)
        }
        $('.log_behavior_tier').not($(this).siblings('.log_behavior_show')).fadeOut(200)
    	//-----------twoipt--------------------------
        if ($(this).siblings('.log_behavior_twoipt').css('display')=='none'){
            $(this).siblings('.log_behavior_twoipt').slideDown(200)
        }else {
            $(this).siblings('.log_behavior_twoipt').slideUp(200)
        }
        $('.log_behavior_twoipt').not($(this).siblings('.log_behavior_show')).fadeOut(200)
	})
	 $('.log_behavior_show_sex').click(function () {
         $(this).parent('.log_behavior_sex').find('a').remove();
         $(this).append('<a class="log_behavior_right"></a>')
		 $(this).parent('.log_behavior_sex').slideUp(100)
         /*if ($(this).find('a').hasClass('log_behavior_right')){
             $(this).find('a').remove()
		 }else {
             $(this).append('<a class="log_behavior_right"></a>')
		 }*/
     })
	 //---------------点击改变背景色----------------
	 $('.log_tier').click(function () {
         $('.log_tier').siblings('.log_tier_child').stop(false,true).fadeOut(1000)/*css('display','none')*/;
         $('.log_tier').removeClass('bg-f3f4f6').addClass('bg-ffffff').find('p').removeClass('font-467cd4').addClass('font-666666').find('a').removeClass('font-467cd4').addClass('font-666666')
		 $(this).removeClass('bg-ffffff').addClass('bg-f3f4f6').find('p').removeClass('font-666666').addClass('font-467cd4').find('a').removeClass('font-666666').addClass('font-467cd4')
		 $(this).siblings('.log_tier_child').stop(false,true).fadeIn(300)
     })
	 $('.log_tier_child>ul>li').click(function () {
         $('.log_tier_child>ul>li').removeClass('bg-f3f4f6').addClass('bg-ffffff')
         $(this).removeClass('bg-ffffff').addClass('bg-f3f4f6')
		 $(this).parents('.log_tier_child').stop(false,true).fadeOut(300)
     })
	 //-------------------点击切换------------------
	 $('.log_behavior_t1').click(function () {
	 	 $(this).parent().find('.log_behavior_t2').removeClass('log_behavior_title_now')
         $(this).parent().find('.log_behavior_t3').removeClass('log_behavior_title_now')
		 $(this).parents('.log_behavior_left').find('.log_behavior_total').css('display','none')
         $(this).parents('.log_behavior_left').find('.log_behavior_total1').css('display','block')
		 $(this).addClass('log_behavior_title_now')
     })
     $('.log_behavior_t2').click(function () {
         $(this).parent().find('.log_behavior_t1').removeClass('log_behavior_title_now')
         $(this).parent().find('.log_behavior_t3').removeClass('log_behavior_title_now')
         $(this).parents('.log_behavior_left').find('.log_behavior_total').css('display','none')
         $(this).parents('.log_behavior_left').find('.log_behavior_total2').css('display','block')
         $(this).addClass('log_behavior_title_now')
     })
     $('.log_behavior_t3').click(function () {
         $(this).parent().find('.log_behavior_t1').removeClass('log_behavior_title_now')
         $(this).parent().find('.log_behavior_t2').removeClass('log_behavior_title_now')
         $(this).parents('.log_behavior_left').find('.log_behavior_total').css('display','none')
         $(this).parents('.log_behavior_left').find('.log_behavior_total3').css('display','block')
         $(this).addClass('log_behavior_title_now')
     })
	 //------------------动态控制高度----------------------
}








/*--------------------------------投诉表格--------------------------------------*/
//--------表格列数统计--
(function(){
    $('.deal_table_side').each(function(){
        var n = $(this).prev('tr').children('td').length;
        $(this).children('td').attr('colspan',n);
    });
})();













/*---------------------------------------40-弹窗--------------------------------------------*/



//----6--自定义条件---添加删除行
$(function (){
    $(".dialo6_append").click(function(){
        $(".dialo6_each:last").clone(true).appendTo(".dialo6");
    })
    $(".dialo6_del").click(function(){
        if($(".dialo6_del").length > 1){
            $(this).parent(".dialo6_each").remove();
        }
    })
})




//----dialo26-修改机构信息--手风琴
function dialo26Each() {
//    $(".dialo26_each dd").hide();
    $(".dialo26_each dt").click(function(){
        if($(this).next("dd").is(':hidden')){
            $(this).children("u").addClass("dialo26_each_cli");
            $(this).next("dd").slideDown(200);
        }else {
            $(this).children("u").removeClass("dialo26_each_cli");
            $(this).next("dd").slideUp(200);
        }
    })
}



/*-------------------------------信息中心----------------------------------------*/
function message() {
	$('.message_send_data li span').hover(function () {
        $('.message_send_data li span').removeClass('font-467cd4').removeClass('font-bold')
		$(this).addClass('font-467cd4').addClass('font-bold')
    })
	$('.message_send_pub1fa').hover(function () {
		$('.message_send_publish_fa').css('height','180px');
        $('.message_send_send').css('height','460px')
		$('.message_send_pub1').css('display','block')
        $('.message_send_pub2').css('display','none')
        $('.message_send_pub3').css('display','none')
    })
    $('.message_send_pub2fa').hover(function () {
        $('.message_send_publish_fa').css('height','180px');
        $('.message_send_send').css('height','460px')
        $('.message_send_pub1').css('display','none')
        $('.message_send_pub2').css('display','block')
        $('.message_send_pub3').css('display','none')
    })
    $('.message_send_pub3fa').hover(function () {
        $('.message_send_publish_fa').css('height','180px');
        $('.message_send_send').css('height','460px')
        $('.message_send_pub1').css('display','none')
        $('.message_send_pub2').css('display','none')
        $('.message_send_pub3').css('display','block')
    })
    $('.message_send_pubnone').hover(function () {
        $('.message_send_publish_fa').css('height','27px');
        $('.message_send_send').css('height','320px')
        $('.message_send_pub1').css('display','none')
        $('.message_send_pub2').css('display','none')
        $('.message_send_pub3').css('display','none')
    })
	$('.message_send_box_fa1').click(function () {
		$('.message_send_box_1').css('display','block')
		$('.message_send_box_2').css('display','none')
		$('.message_send_box_3').css('display','none')
		$('.message_send_box_4').css('display','none')
    })
    $('.message_send_box_fa2').click(function () {
        $('.message_send_box_1').css('display','none')
        $('.message_send_box_2').css('display','block')
        $('.message_send_box_3').css('display','none')
        $('.message_send_box_4').css('display','none')
    })
    $('.message_send_box_fa3').click(function () {
        $('.message_send_box_1').css('display','none')
        $('.message_send_box_2').css('display','none')
        $('.message_send_box_3').css('display','block')
        $('.message_send_box_4').css('display','none')
    })
    $('.message_send_box_fa4').click(function () {
        $('.message_send_box_1').css('display','none')
        $('.message_send_box_2').css('display','none')
        $('.message_send_box_3').css('display','none')
        $('.message_send_box_4').css('display','block')
    })
    //多选-->人工消息发送
    $('.message_select p').click(function () {
        if ($(this).find('a').hasClass('log_behavior_right')){
            $(this).find('a').remove()
        }else {
            $(this).append('<a class="log_behavior_right"></a>')
        }
    })
	$('.message_selectfa').click(function () {
		if ($(this).siblings('.message_select').css('display')=='none'){
            $(this).siblings('.message_select').slideDown(200)
		}else {
            $(this).siblings('.message_select').slideUp(200)
		}

    })
	$('.message_select_sure').click(function () {
        if ($(this).parents('.message_select').css('display')=='none'){
            $(this).parents('.message_select').slideDown(200)
        }else {
            $(this).parents('.message_select').slideUp(200)
        }
    })
	$('.message_send_input input').click(function () {
		if ($(this).parents('.message_send_publish_m1').find('.message_select_rili').css('display')=='none'){
            $(this).parents('.message_send_publish_m1').find('.message_select_rili').slideDown(200)
		}else {
            $(this).parents('.message_send_publish_m1').find('.message_select_rili').slideUp(200)
		}
    })
}
function tips() {
    $('.tips').hover(function () {
    	$(this).find('.tips_close').css('width','20px')
		$(this).find('img').stop(false,true).fadeIn(200).css('marginLeft','3px')
    },function () {
        $(this).find('.tips_close').css('width','10px')
        $(this).find('img').stop(false,true).fadeOut(150).css('marginLeft','-3px')
    })
}
function messagediag() {
	$('.message_send_module').click(function () {
        $('.message_send_module').css('background','#eeeeee').find('p').css('color','#666666');
        $('.message_send_module').find('div').css('backgroundPosition','center 0')
		$(this).css({
			background:'#467cd4'
		}).find('p').css({
			color:'#ffffff'
		})
		$(this).find('div').css({
            backgroundPosition:'center -38px'
        })
    })
	$('.message_dialog_more').click(function () {
		if ($('.message_dialog_addipt').css('display')=='none'){
            $('.message_dialog_addipt').css('display','block')
		}else {
            $('.message_dialog_addipt').css('display','none')
		}
    })
}


//---------------出入金详情
 function tabborder() {
	 $('.log_behavior_titlecheck p').click(function () {
         $('.log_behavior_titlecheck p').removeClass('log_behavior_titlecheck_bor')
		 $(this).addClass('log_behavior_titlecheck_bor')
     })
 }


//--------------52-配售进度详情
function indextab() {
    $('.process_bg_tab li').click(function () {
        $('.process_bg_tab li').removeClass('process_bg_tab_active');
        $(this).addClass('process_bg_tab_active');
        var $index = $(this).index();
        console.log($index);
        $('.buysub').hide().eq($index).show()
    })
}

//---------------文本过多显示
function overdrive() {
	$('.overdrive').each(function () {
        var text = $(this).text();
        $(this).hover(function () {
            $(this).find('.overdrive_store').show().append(text)
        },function () {
            $(this).find('.overdrive_store').hide().empty()
        })
    })
}



/*-----------------------------综合查询------------------------------*/
function form() {
    $('.form_tab span').each(function () {
		$(this).click(function () {
            $('.form_tab span').removeClass('form_change')
			$(this).addClass('form_change')
        })
    })
	$('.form_sec2').find('li').each(function () {
		$(this).click(function () {
            $('.form_sec2 ul li').removeClass('form_change');
			$(this).addClass('form_change')
        })
    })
	$('.form_click').click(function () {
		if ($(this).parent().siblings('.twomain2_table').css('display')=='none'){
            $(this).text('收起').siblings('span').css('transform','rotateZ(0deg)')
            $(this).parent().siblings('.twomain2_table').show()
		}else {
            $(this).text('展开').siblings('span').css('transform','rotateZ(180deg)')
            $(this).parent().siblings('.twomain2_table').hide()
		}
    })
}
//图表
function layout() {
    var chart = document.getElementById('form_layout')
    var echart = echarts.init(chart);

    var option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['持仓人数']
        },
        grid: {
        	show: true,
            left: '0%',
            right: '5%',
            bottom: '3%',
            containLabel: true,

        },
        /*toolbox: {
            feature: {
                saveAsImage: {}
            }
        },*/
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['07-10','07-11','07-12','07-13','07-14','07-15','07-16']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'持仓人数',
                type:'line',
                stack: '持仓人数',
                itemStyle : {
                    normal : {
                        color:'#467cd4',
                        lineStyle:{
                            color:'#467cd4'
                        }
                    }
                },
                data:[2200, 1320, 6010, 3140, 4300, 2300, 5100]
            }
        ]
    };
    echart.setOption(option);
}













