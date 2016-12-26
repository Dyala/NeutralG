'use strict';

module.exports = /*@ngInject*/
function projectCarousel($rootScope) {
	return {
		templateUrl: 'common/directives/testimonials-carousel.html',
		link: function (scope, element) {

			$(element).children().first().owlCarousel({
				navigation : true,
				pagination: false,
				slideSpeed : 400,
				stopOnHover: true,
				autoPlay: 3000,
				items : 1,
				itemsDesktopSmall : [900,3],
				itemsTablet: [600,2],
				itemsMobile : [479, 1]
			});

			$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
			$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
		}
	};
};



