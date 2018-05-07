var myApp = angular.module('myApp',['ngMessages','ngResource'])

myApp.controller('mainController', ['$scope',function($scope){   
    $scope.name = 'Thành';
}]);
