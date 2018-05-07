var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.username = ''
    
    $scope.lowercaseUsername = function(){
        return $filter('lowercase')($scope.username);
    }

    $scope.len5 = 5;
    
    $scope.rules = [
        {ruleName: 'Tài khoản a'},
        {ruleName: 'Tài khoản b'},
        {ruleName: 'Tài khoản c'},
    ]

}]);