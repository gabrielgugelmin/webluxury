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

	$('.js-slider').slick({
		dots: true,
		arrows: false,
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