$(document).ready(function() {
	$('.mobile-nav').click(function () {
		$('nav').toggleClass('active'); 
	});

	if ( $(window).width() < 1024 ) {
			$('.news-slider').slick({
			  	dots:true
			  });
		} else {
			$('.news-slider').slick('unslick');
	}
});

$(window).resize( function () {
		if ( $(window).width() < 1024 ) {
			$('.news-slider').slick({
			  	dots:true
			  });
		} else {
			$('.news-slider').slick('unslick');
		}
	});