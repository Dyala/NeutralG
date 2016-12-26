'use strict';

module.exports = /*@ngInject*/
function aboutController($scope,$state) {
	$scope.goToService = function(view){
		$state.go('services', {id: view});
	};
	//globalFunction();
};

