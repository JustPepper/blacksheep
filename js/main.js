(function(){
	$(document).ready(function(){

	  $('.carrousel').slick({
	  	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: null,
		prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="#left" /></svg></button>',
		responsive: [
			{
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1
		    	}
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2
		    	}
		    }
		]
	  });

	  $('.featured-slider').slick({
	  	nextArrow: '<button><svg><use xlink:href="#right" /></svg></button>',
	  	prevArrow: null,
	  	draggable: false,
	  	dots: true,
	  	appendArrows: $('.appended-arrow'),
	  	dotsClass: 'featured-dots',
	  	appendDots: $(".appended-dots"),
	  	autoplay: false,
  		autoplaySpeed: 2000
	  });

	  $('.products--carrousel').slick({
	  	nextArrow: '<button class="right"><svg><use xlink:href="#right" /></svg></button>',
	  	prevArrow: '<button class="left"><svg><use xlink:href="#right" /></svg></button>',
	  	slidesToShow: 6,
	  	slidesToScroll: 1,
	  	draggable: false,
	  	responsive: [
			{
		      breakpoint: 480,
		      draggable: true,
		      settings: {
		        slidesToShow: 1
		    	}
		    }
		]
	  });

	  $('.vertical-slider').slick({
	  	vertical: true,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	prevArrow: null,
	  	infinite: true,
	  	verticalSwiping: true,
	  	nextArrow: '<button><svg><use xlink:href="#left" /></svg></button>',
	  	responsive: [
			{
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        vertical: false
		    	}
		    }
		]
	  });

		$('.vertical-slider').on('afterChange', function (event, slick, currentSlide) {
			var attr = $(slick.$slides.get(currentSlide)).children('img').attr('src');
			$('#change-on-slide').attr('src', attr);
			console.log(attr);
		});

	  $('.spec__item').hover(
	  	function() {
	  		$(this).children('.spec__info').addClass('show animated rotateInUpLeft');
	  	},
	  	function() {
	  		$(this).children('.spec__info').removeClass('show');
	  	}
	  )

	  $('.single-product__subtitle').click(function() {
	  	$(this).toggleClass('rotate-icon');
	  	$(this).next().toggle('300');
	  });

	  $('.top-nav__ham').click(function() { 
	  	$('.top-nav__menu').toggleClass('top-nav__menu--open');
	  	$(this).toggleClass('top-nav__ham--open');
	  });

	  $('.img-accordion__item').hover(
	  	function() {
	  		$('.img-accordion__item').removeClass('img-accordion__item--active');
	  		$(this).addClass('img-accordion__item--active'); 
	  	},
	  	function() {
	  		//
	  	}
	  );

	});
})();
