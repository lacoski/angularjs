var myApp = angular.module('myApp', ['ngRoute'])
myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html'
        , controller: 'mainController'
    }).when('/second', {
        templateUrl: 'pages/second.html'
        , controller: 'secondController'
    }).when('/second/:num', {
        templateUrl: 'pages/second.html'
        , controller: 'secondController'
    });
});

myApp.directive('searchResult',function(){
    return{
        restrict: 'AEC',
        templateUrl : 'directives/searchResult.html',
        replace: true
    }
});
myApp.directive('oldSearchResult',function(){
    return{
        restrict: 'AEC',
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Bá thành</h4> <p class="list-group-item-text">Long Biên, Hà Nội</p></a>',
        replace: true
    }
});


myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    
    
}]);
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    
    
}]);