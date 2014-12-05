'use strict';

angular.module('USC_Buy_Sell_App')
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
