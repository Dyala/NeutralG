'use strict';

module.exports = /*@ngInject*/
    function directiveFive($rootScope) {
        return {
        	templateUrl: 'common/directives/directiveFive.html',
            link: function (scope, element) {
            	//globalFunction();
            }
        };
    };
