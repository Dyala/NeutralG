'use strict';

module.exports = /*@ngInject*/
function headerDirective($rootScope) {
	return {
		templateUrl: 'common/directives/headerDirective.html',
		link: function (scope, element) {

			var headerEle = function () {
				var $headerHeight = $('header').height();
				$('.hidden-header').css({ 'height' : $headerHeight  + "px" });
			};

			headerEle();

			$(".nav > li:has(ul)").addClass("drop");
			$(".nav > li.drop > ul").addClass("dropdown");
			$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

			$('.show-search').click(function() {
				$('.search-form').fadeIn(300);
				$('.search-form input').focus();
			});
			$('.search-form input').blur(function() {
				$('.search-form').fadeOut(300);
			});

			var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( 'header' );

			function init() {
				window.addEventListener( 'scroll', function() {
					if( !didScroll ) {
						didScroll = true;
						setTimeout( scrollPage, 250 );
					}
				}, false );
			}

			function scrollPage() {
				var sy = scrollY();
				if ( sy >= changeHeaderOn ) {
					$('.top-bar').slideUp(300);
					$("header").addClass("fixed-header");
					$('.navbar-brand').css({ 'padding-top' : 19 + "px", 'padding-bottom' : 19 + "px" });

					if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" });
					}else{
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 20 + "px", 'padding-bottom' : 20 + "px" });
						$('.search-side').css({ 'margin-top' : -7 + "px" });
					}

				}
				else {
					$('.top-bar').slideDown(300);
					$("header").removeClass("fixed-header");
					$('.navbar-brand').css({ 'padding-top' : 27 + "px", 'padding-bottom' : 27 + "px" });

					if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" });
					}else{
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 28 + "px", 'padding-bottom' : 28 + "px" });
						$('.search-side').css({ 'margin-top' : 0  + "px" });
					}

				}
				didScroll = false;
			}

			function scrollY() {
				return window.pageYOffset || docElem.scrollTop;
			}

			init();

		}
	};
};
