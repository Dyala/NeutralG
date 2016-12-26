'use strict';

module.exports = /*@ngInject*/
function homeController($scope,$state) {
	$scope.name = {
		value: 'expressly'
	};
	$scope.goToService = function(view){
		$state.go('services', {id: view});
	};
	$(document).ready(function(){
		$('.timer').countTo();
		$('.counter-item').appear(function() {
			$('.timer').countTo();
		},{
			accY: -100
		}); 
	});
};

