'use strict';

module.exports = /*@ngInject*/
function directiveOne($rootScope) {
	return {
		templateUrl: 'common/directives/directiveOne.html',
		link: function (scope, element) {
			//servicesInit();
		}
	};
};
