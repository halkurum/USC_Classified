'use strict';

/**
 * @ngdoc overview
 * @name ironHackerApp
 * @description
 * # ironHackerApp
 *
 * Main module of the application.
 */
angular
  .module('ironHackerApp', [
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

      .otherwise({
        redirectTo: '/market'
      });
  });
