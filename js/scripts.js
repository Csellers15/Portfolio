
(function ($) {

    "use strict";
	
	// ACCORDIAN
	panelAccordian();

	$(window).on('load', function(){
		
		if(isExists('.portfolioContainer')){
			var $container = $('.portfolioContainer');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		}
	
	});
	
	$('a[href="#"]').on('click', function(event){
		return;
	});
	
	
	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}
	
	
})(jQuery);

function panelAccordian(){
	
	var panelTitle = $('.panel-title');
	panelTitle.on('click', function(){
		$('.panel-title').removeClass('active');
		$(this).toggleClass('active');
		
	});
	
}


function isExists(elem){
	if ($(elem).length > 0) { 
		return true;
	}
	return false;
}
