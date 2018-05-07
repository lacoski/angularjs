var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.name = "Main";
}]);

myApp.controller('secondController', ['$scope', '$filter', function($scope, $filter) {
    $scope.name = "Second";
}]);