'use strict';

module.exports = /*@ngInject*/
    function directiveTwo($rootScope) {
        return {
        	templateUrl: 'common/directives/directiveTwo.html',
            link: function (scope, element) {
            	//servicesInit();
            }
        };
    };
