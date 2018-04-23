$(document).ready(function(){

	var currentPage = 0,
		mthirty = {left: -30, opacity: 0},
		thirty = {left: 30,	opacity: 0};

	$('#weather').keydown(function(e){
		if(e.keyCode == 13){
			$('.weaContainer').html('Loading...');
			$('.weaPagination > ul').empty();
			weaSend().done(function(data){
				data = data.result.hourly;
				init(data);
				console.log(data);
			});
		}
	});

	$('#form-wea').on('submit', function(){
		return false;
	});

	function weaSend(){
		return $.get('http://plrabbit.com/Test/details.php', {
			city: $('#weather').val()
		});
	}

	function init(data){
		$('.weaContainer').empty();
		//分页按钮
		for(var i = 0; i < 5; i++){
			var li = $('<li>'),
				span = $('<span>'),
				tips = $('<div>', {
					class: 'tips animated bounceIn'
				});
			if(i == 4){
				tips.html(data[i*5].time+'~'+data[i*5+3].time);
			} else {
				tips.html(data[i*5].time+'~'+data[i*5+4].time);
			}

			span.click(function(){
				var index = $(this).parent().index();
				if(index == currentPage){
					return;
				}
				paging(data, index, this);

			}).mouseenter(function(){
				$(this).next().stop().delay(1000).show(0);
				var index = $(this).parent().index();
			}).mouseleave(function(){
				$(this).next().stop().hide();
			});
			li.append(span, tips);
			li.appendTo('.weaPagination > ul');
		}

		$('.page > li').first().addClass('active');
		exchange(data, 0, $('.page > li').first().children('span'));
		$('.weaContainer').css({
			left: 0,
			opacity: 1
		});
	}

	function paging(data, index, ctrl){
		if(currentPage < index){
			//Next Pages
			animating(thirty, function(){
				exchange(data, index, ctrl, 'next');
			})
		} else {
			//Previous Pages
			animating(mthirty, function(){
				exchange(data, index, ctrl, 'prev');
			})
		}	
	}

	function exchange(data, index, ctrl, direction){
		$(ctrl).parent().addClass('active').siblings().removeAttr('class');
		currentPage = index;
		$('.weaContainer').empty();
		var step;
		if(index == 4){
			step = 4;
		} else {
			step = 5;
		}
		index = index * 5;
		for(var j = index;j<index+step;j++){
			var a = $('<div>',{
				class: 'wea-single'
			});//新建一个div.wea-single
			var icon = $('<div>', {
				class: 'wea-icon'
			}),
				time = $('<h2>', {
					class: 'time'
			}),
				temp = $('<h3>', {
					class: 'temperature'
			});
			if(data[j].weather.indexOf('晴') != -1){
				icon.addClass('sunny');
			}
			if(data[j].weather.indexOf('云') != -1 || data[j].weather.indexOf('阴') != -1){
				icon.addClass('cloudy');
			}
			if(data[j].weather.indexOf('雨') != -1){
				icon.addClass('rainy');
			}
			time.html(data[j].time);
			temp.html(data[j].temp+'°');
			a.append(icon, time, temp);
			a.appendTo('.weaContainer');
		}
		if(direction == 'next'){
			$('.weaContainer').css(mthirty);
		} else {
			$('.weaContainer').css(thirty);
		}
	}

	function animating(rule, fn){
		$('.weaContainer').animate(rule, 
			350, fn).animate({
			left: 0,
			opacity: 1
		}, 350);
	}
});






