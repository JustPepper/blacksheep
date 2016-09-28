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

	  $('.spec__item').hover(
	  	function() {
	  		$(this).children().addClass('show animated rotateInUpLeft');
	  	},
	  	function() {
	  		$(this).children().removeClass('show');
	  	}
	  )

	});
})();