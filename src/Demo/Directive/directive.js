var myApp = angular.module('myApp',['ngMessages','ngResource'])

myApp.controller('mainController', ['$scope','$filter',function($scope,$filter){   
    $scope.name = '';
    
    $scope.lowercaseName = function(){
        return $filter('lowercase')($scope.name);
    }
}]);
