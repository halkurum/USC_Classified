'use strict';

/**
 * @ngdoc function
 * @name ironHackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ironHackerApp
 */
angular.module('ironHackerApp')
  .controller('MainCtrl', function ($scope, $location) {

        $scope.login = true;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

  })
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/main-header.html'
    };
  });
