'use strict';

angular.module('USC_Buy_Sell_App')
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
