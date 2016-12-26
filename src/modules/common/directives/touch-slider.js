'use strict';

module.exports = /*@ngInject*/
    function dubaiGov($rootScope) {
        return {
        	templateUrl: 'common/directives/touch-slider.html',
            link: function (scope, element) {
				$(element).children().first().owlCarousel(
				{
					navigation : true,
					pagination: true,
					slideSpeed : 400,
					paginationSpeed : 400,
					lazyLoad : true,
					singleItem: true,
					autoHeight : true,
					autoPlay: true,
					stopOnHover: true,
					transitionStyle : "fade",
					afterInit : true,
					//startDragging : pauseOnDragging
				});

				$('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
				$('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
            }
        };
    };


			
