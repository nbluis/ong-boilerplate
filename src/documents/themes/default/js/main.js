// 21 Dez 2012, 4:42
;(function ($, window, document, undefined) {
	'use strict';
	({
		animateScroll : function () {
			$("#nav").find('.nav-link').on('click', function (event) {

				var $this = $(this),
					$htmlBody = $('html, body'),
					linkTarget = $this.attr('href'),
					offSetTop;

				// If not start with #, stop here!
				if (linkTarget[0] !== '#') {
					return false;
				}

				event.preventDefault();

				// Get distance of top
				offSetTop = $(linkTarget).offset().top;

				// Animate the scroll
				$htmlBody.stop().animate({scrollTop : offSetTop}, function () {
					location.hash = linkTarget;
				});
			});
		},

		init : function () {
			var that = this;

			$(function () {
				that.animateScroll();
			});
		}
	}).init();
}(jQuery, window, document));

$(function() {
	// members
	$('.member-photo').on('click', function() {
		var currentInfo = $(this).parent().find('.member-info');
		$('.member-info:visible').not(currentInfo).hide();
		currentInfo.toggle();
	});
	$('.close').on('click', function() {
		$(this).parent().hide();
	});

	//media
	$('.media-tabs').on('click', 'li', function() {
		$('.media-tabs .active').not(this).removeClass('active');
		$(this).addClass('active');
		$('.media-content:visible').hide();
		$('#' + $(this).attr('data-tab')).show();
	});

	$('.media-tabs li:first').trigger('click');

});