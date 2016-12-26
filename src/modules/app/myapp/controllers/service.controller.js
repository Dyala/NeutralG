'use strict';

module.exports = /*@ngInject*/
    function serviceController($scope, view) {
        $scope.currentView = view;
   
    };


// angular.module('expressly',[])
// 	.controller('serviceController',function($scope) {
// 		$scope.currentView = 'ViewOne';
// 	});