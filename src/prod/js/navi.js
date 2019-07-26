if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
$(function() {
    var topBtn = $('#navi');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

$(function(){
	hTop = $('#navi').offset().top;
	});
$(window).scroll(function () {
	if($(window).scrollTop() > hTop - 0) {
		$('#navi').css('position', 'fixed');
		$('#navi').css('top', '0px');
	}else{
}
});

}	




$(function () {
 var headerHight = 100; //ヘッダの高さ
 $('a[href^=#]').click(function(){
     var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
     $("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
});



$(function() {
	var flag = false;
	var pagetop = $('.pagetop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			if (flag == false) {
				flag = true;
				pagetop.stop().animate({
					'bottom': '0px',
					'right': '20px'
				}, 200);
			}
		} else {
			if (flag) {
				flag = false;
				pagetop.stop().animate({
					'bottom': '-100px',
					'right': '20px'
				}, 200);
			}
		}
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
});




$(function() {
	var flag2 = false;
	var pagetop2 = $('.pagetop2');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			if (flag2 == false) {
				flag2 = true;
				pagetop2.stop().animate({
					'right': '-5%'
				}, 200);
			}
		} else {
			if (flag2) {
				flag2 = false;
				pagetop2.stop().animate({
					'right': '-100px'
				}, 200);
			}
		}
	});
	pagetop2.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
});
