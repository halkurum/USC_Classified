'use strict';

/**
 * @ngdoc function
 * @name ironHackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ironHackerApp
 */
angular.module('ironHackerApp')
    .controller('DealsCtrl', function ($scope, $window) {
        $scope.userName = localStorage["userName"];
        $scope.logout = function() {
        	localStorage["userName"] = "";
        	$window.location.href = "/#";
    	}
    });
