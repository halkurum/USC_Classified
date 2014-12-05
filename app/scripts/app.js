'use strict';

angular
  .module('USC_Buy_Sell_App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/market', {
        templateUrl: 'views/market.html',
        controller: 'MarketCtrl'
      })
      .when('/deals', {
        templateUrl: 'views/deals.html',
        controller: 'DealsCtrl'
      })
      .when('/tickets', {
        templateUrl: 'views/tickets.html',
        controller: 'TicketsCtrl'
      })
      .when('/sell', {
        templateUrl: 'views/sell.html',
        controller: 'SellCtrl'
      })

      .otherwise({
        redirectTo: '/market'
      });
  });
