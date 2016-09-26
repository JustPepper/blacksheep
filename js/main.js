(function(){
	$(document).ready(function(){

	  $('.carrousel').slick({
	  	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: null,
		prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="#left" /></svg></button>'
	  });

	  $('.featured-slider').slick({
	  	nextArrow: null,
	  	prevArrow: null,
	  	draggable: false,
	  	dots: true,
	  	dotsClass: 'featured-dots',
	  	appendDots: $(".appended-dots")
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