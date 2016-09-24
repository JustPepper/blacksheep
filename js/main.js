(function(){
	$(document).ready(function(){
	  $('.carrousel').slick({
	  	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: null,
		prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="#left" /></svg></button>'
	  });
	});
})();