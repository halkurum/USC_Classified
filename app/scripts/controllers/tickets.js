'use strict';

angular.module('USC_Buy_Sell_App')
    .controller('TicketsCtrl', function ($scope, $window) {
        $scope.userName = localStorage["userName"];
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
            localStorage["userName"] = ""; 
            $window.location.href = "/#";
        }
    });
