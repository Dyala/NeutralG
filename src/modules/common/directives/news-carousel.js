'use strict';

module.exports = /*@ngInject*/
function projectCarousel($rootScope) {
	return {
		templateUrl: 'common/directives/news-carousel.html',
		link: function (scope, element) {

			var itemsNum = 1;

			var deskitemsNum = 1;
			var desksmallitemsNum = 1;
			var tabletitemsNum = 1;

			if( itemsNum == 1) {
				deskitemsNum = 1;
				desksmallitemsNum = 1;
				tabletitemsNum = 1;
			} 
			else if (itemsNum >= 2 && itemsNum < 4) {
				deskitemsNum = itemsNum;
				desksmallitemsNum = itemsNum - 1;
				tabletitemsNum = itemsNum - 1;
			} 
			else if (itemsNum >= 4 && itemsNum < 8) {
				deskitemsNum = itemsNum -1;
				desksmallitemsNum = itemsNum - 2;
				tabletitemsNum = itemsNum - 3;
			} 
			else {
				deskitemsNum = itemsNum -3;
				desksmallitemsNum = itemsNum - 6;
				tabletitemsNum = itemsNum - 8;
			}
			$(element).children().first().owlCarousel({
				slideSpeed : 300,
				stopOnHover: true,
				autoPlay: false,
				navigation : true,
				pagination: false,
				lazyLoad : true,
				items : itemsNum,
				itemsDesktop : [1000,deskitemsNum],
				itemsDesktopSmall : [900,desksmallitemsNum],
				itemsTablet: [600,tabletitemsNum],
				itemsMobile : false,
				transitionStyle : "goDown",
			});

			$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
			$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

			$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
			$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
		}
	};
};



