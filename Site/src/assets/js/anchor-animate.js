(function($) {
	
	function rand(min, max) {
		return Math.floor((Math.random() * (max - min + 1)) + min);
	}
	
	var defaults = {
		'time':	500,
		'randMin': 1000,
		'randMax': 1200
	};
	
	$(function() {
		
		var settings = $.extend(defaults, animate); 

		$('.animate').click(function(e) {
			e.preventDefault();

			var obj = $(this);
			var time = settings.time;

			if(obj.hasClass('rand')) {

				time = rand(settings.randMin, settings.randMax);

			} else {

				var result = /time[0-9]+/.exec(obj.attr('class'));
				if(result)
					time = parseInt(new String(result).replace('time', ''));

			}

			$('html, body').animate({
				scrollTop: $(obj.attr('href')).offset().top - 65
			}, time);

		});
	
	});


})(jQuery);