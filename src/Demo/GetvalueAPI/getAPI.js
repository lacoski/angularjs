var myApp = angular.module('myApp', ['ngMessages', 'ngResource'])
myApp.controller('mainController', ['$scope', '$filter','$http', function ($scope, $filter,$http) {
    $scope.name = '';
    $scope.lowercaseName = function () {
        return $filter('lowercase')($scope.name);
    }
    $scope.len = 5;
    $scope.rules = [] ;
    $scope.alertClick = function(){
        console.log($scope.name);
    }
    
    $http.get('')
    .success(function(result){
        $scope.rules = result;
    })
    .error(function(data, status){
        console.log(data);
        console.log(status);
    })
    
}]);