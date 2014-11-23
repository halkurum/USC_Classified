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
        $scope.userName = localStorage["userName"];

    $scope.logout = function() {
        localStorage["userName"] = "";
        $window.location.href = "/#";
    }
});
