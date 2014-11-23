'use strict';

angular.module('ironHackerApp')
    .controller('LoginCtrl', function ($scope, $window) {
        $scope.userName = "";
        $scope.password = "";

        $scope.login = function(){
            if($scope.userName === "") {
                alert('Please Enter User Name');
            } else if($scope.password === "") {
                alert("Please Enter Password");
            } else {
                localStorage["userName"] = $scope.userName;
                $window.location.href = '/#/market';
            }
        };
    });
