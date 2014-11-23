'use strict';

/**
 * @ngdoc function
 * @name ironHackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ironHackerApp
 */
angular.module('ironHackerApp')
    .controller('TicketsCtrl', function ($scope, $window) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.logout = function() {
            //loginPage=true;
            $window.location.href = "/#";
        }
    });
