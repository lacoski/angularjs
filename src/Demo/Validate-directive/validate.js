var myApp = angular.module('myApp', ['ngMessages', 'ngResource'])
myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.name = '';
    $scope.lowercaseName = function () {
        return $filter('lowercase')($scope.name);
    }
    $scope.len = 5;
    $scope.rules = [ {
        ruleName: 'Tài khoản không tồn tại!'
    }, {
        ruleName: 'Tài khoản không đúng!'
    }, {
        ruleName: 'Tài khoản vi phạm!'
    }] ;
    $scope.alertClick = function(){
        console.log($scope.name);
    }
}]);