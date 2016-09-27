$(function(){

	// ABRE MENU
	$('.MenuTrigger').on('click', function(e){
		e.preventDefault();

		$('body').addClass('is-navOpen')
	});

	//FECHA MENU
	$('.Menu-close').on('click', function(e){
		e.preventDefault();

		$('body').removeClass('is-navOpen')
	});



	/* SLIDER */
	$('.js-slider').on('init', function(slick){
  	$('.slick-dots').wrap('<div class="SlickDots-wrapper"><div class="container"></div></div>');	
	});

	$('.js-slider').each(function( index ) {
		$(this).slick({
			dots: true,
			arrows: hasArrow(this),
			mobileFirst: true,
			responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        arrows: true
	      }
	    }
	  ]
		});
	});

	/*$('.js-slider').slick({
		dots: true,
		arrows: hasArrow(this),
		mobileFirst: true,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true
      }
    }
  ]
	});*/
});

function hasArrow(slider){
	var bool = false;
	if($(slider).hasClass('js-sliderArrow')){
		bool = true;
	} else {
		bool = false;
	}

	return bool;
}