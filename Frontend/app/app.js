'use strict';

// Declare app level module which depends on views, and components
var starbucksApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.cart',
  'myApp.version'
]);

starbucksApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider

      .when('/', {
        templateUrl : 'view1/view1.html',
          controller : 'View1Ctrl'

      }) ;


  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
