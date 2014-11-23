'use strict';

/**
 * @ngdoc function
 * @name ironHackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ironHackerApp
 */
angular.module('ironHackerApp')
    .controller('MarketCtrl', function ($scope, $http, $window) {
    $scope.action = "Buy";
   
    $scope.furnitureJson = {};
    $scope.bikeJson = {};
    $scope.clothesJson = {};
    $scope.electronicsJson = {};

    $scope.setAction = function setAction(actionVal) {
    	$scope.action = actionVal;
    }
    $http.get('/json/market.json').success(function(response) {
        $scope.furnitureJson = response.furniture;
        $scope.bikeJson = response.bike;
        $scope.clothesJson = response.clothes;
        $scope.electronicsJson = response.electronics;
        $scope.itemsToShow = $scope.clothesJson;
    });

	$scope.setSelectedItem = function setSelectedItem(item) {
		if(item === "Clothes") {
			$scope.itemsToShow = $scope.clothesJson;
		} else if(item === "Furniture") {
			$scope.itemsToShow = $scope.furnitureJson;
		} else if(item === "Bikes") {
			$scope.itemsToShow = $scope.bikeJson;
		} else {
			$scope.itemsToShow = $scope.electronicsJson;
		}
	}

    $scope.logout = function() {
        //loginPage=true;
        $window.location.href = "/#";
    }

        /*$scope.$watch('startTime', function(newval, oldval){
            $scope.startTime = $filter('date')($scope.startTime,'yyyy-MM-dd HH:mm');
            var valid = validateDates();
            $scope.alert = valid!="" ? {type: 'danger', msg: valid } : {};
        });*/
    });
