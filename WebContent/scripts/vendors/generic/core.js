(function($) {
	//close dropdown & panels
	$(document).click(function(e) {
		var q = $(e.target).closest('aside,.menu-icon').length
		if (!q) {
			$('aside,.menu-icon').removeClass('active');
		}
	});
	//aside setting menu
	$(".menu-icon").click(function(e) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active') == true) {
			$('aside').addClass('active');
			$('.pull-right .swipe li').parent().parent('.pull-right').removeClass('active');
			$('.pull-right .swipe li').parent().parent('.pull-right').siblings('.pull-left').removeClass('active');
		} else {
			$('aside,.menu-icon').removeClass('active');
		}
	});
	$(document).click(function(e) {
		var a1 = $(e.target).closest('.swipe li.More,.more_folder').length
		if (!a1) {
			$('.swipe li.More,.more_folder').removeClass('active');
		}
	});
	$(".dropdown").click(function(e) {
		$('aside,.menu-icon,.more_folder').removeClass('active');
		$('.pull-right .swipe li').parent().parent('.pull-right').removeClass('active');
		$('.pull-right .swipe li').parent().parent('.pull-right').siblings('.pull-left').removeClass('active');
	});
	$('.close-dialog,.close-dialog-btn').click(function() {
		$('.modal').modal('hide');
	});
	$('.swipe-option').click(function(event) {
		$(this).parents('.pull-right').addClass('active');
		$(this).parents('.pull-right').siblings('.pull-left').addClass('active');
		$(this).parent('.pull-right').parent('li').siblings('li').find('.pull-right').removeClass('active');
		$(this).parent('.pull-right').parent('li').siblings('li').find('.pull-left').removeClass('active');
	});
	$('ul li.More').click(function(e) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active') == true) {
			$('.more_folder').addClass('active');
			$('.pull-right .swipe li').parent().parent('.pull-right').removeClass('active');
			$('.pull-right .swipe li').parent().parent('.pull-right').siblings('.pull-left').removeClass('active');
		} else {
			$('.more_folder,ul li.More').removeClass('active');
		}
	});
})(jQuery);