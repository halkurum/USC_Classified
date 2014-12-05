'use strict';

angular.module('USC_Buy_Sell_App')
    .controller('SellCtrl', function ($scope, $window) {
        $scope.userName = localStorage["userName"];
        $scope.logout = function() {
        	localStorage["userName"] = "";
        	$window.location.href = "/#";
    	}
    });