'use strict';

module.exports = /*@ngInject*/
    function directiveThree($rootScope) {
        return {
        	templateUrl: 'common/directives/directiveThree.html',
            link: function (scope, element) {
            	//servicesInit();
            }
        };
    };
