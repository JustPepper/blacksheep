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
	  });

		$('.vertical-slider').on('afterChange', function (event, slick, currentSlide) {
			var attr = $(slick.$slides.get(currentSlide)).children('img').attr('src');
			$('#change-on-slide').attr('src', attr);
			console.log(attr);
		});

	  $('.spec__item').hover(
	  	function() {
	  		$(this).children().addClass('show animated rotateInUpLeft');
	  	},
	  	function() {
	  		$(this).children().removeClass('show');
	  	}
	  )

	  $('.single-product__subtitle').click(function() {
	  	$(this).next().toggle('300');
	  });

	});
})();