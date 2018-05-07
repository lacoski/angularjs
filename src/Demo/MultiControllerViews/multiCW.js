var myApp = angular.module('myApp', ['ngMessages', 'ngResource'])
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.name = 'mainController';
}]);
myApp.controller('secondController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.name = 'secondController';
}]);