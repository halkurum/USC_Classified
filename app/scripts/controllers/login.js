'use strict';

/**
 * @ngdoc function
 * @name ironHackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ironHackerApp
 */
angular.module('ironHackerApp')
    .controller('LoginCtrl', function ($scope, $window) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.login = function(){
            $window.location.href = "/#/market";
        };
    });
