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
myApp.directive('searchResult', function () {
    return {
        restrict: 'AEC'
        , templateUrl: 'directives/searchResult.html'
        , replace: true
    }
});
myApp.directive('searchResultDs', function () {
    return {
        restrict: 'AEC'
        , templateUrl: 'directives/searchResultScopeIsolate.html'
        , replace: true
        , scope: {
            //            dạng cô lập, binding 1 chiều
            personName: '@'
            , personAddress: '@'
        }
    }
});
myApp.directive('searchResultBindingTwoWay', function () {
    return {
        restrict: 'AEC'
        , templateUrl: 'directives/searchResultBindingTwoWay.html'
        , replace: true
        , scope: {
            //            dạng cô lập, binding 2 chiều
            personObject: '='
        , }
    }
});
myApp.directive('searchResultCharacterAnd', function () {
    return {
        restrict: 'AEC'
        , templateUrl: 'directives/searchResultCharacterAnd.html'
        , replace: true
        , scope: {
            //            dạng cô lập, truyền model và hàm từ scope vào!
            personObject: '='
            , formattedAddressFunction: '&'
        }
    }
});
myApp.directive('oldSearchResult', function () {
    return {
        restrict: 'AEC'
        , template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Bá thành</h4> <p class="list-group-item-text">Long Biên, Hà Nội</p></a>'
        , replace: true
    }
});
myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.person = {
        name: 'Nguyễn Bá Thành'
        , address: 'Long Biên, Hà Nội'
    }
    $scope.person2 = {
        name: 'Thành Nguyễn'
        , address: '67 '
        , city: 'Long Biên'
        , country: 'Hà Nội'
    }
    $scope.formattedAddress = function (person2) {
        return person2.address + ' , ' + person2.city + ' , ' + person2.country;
    }
    $scope.people = [{
            name: 'Thành Nguyễn'
            , address: '67 '
            , city: 'Long Biên'
            , country: 'Hà Nội'
    }
        , {
            name: 'Bá Hải'
            , address: '68 '
            , city: 'Long Biên'
            , country: 'Hà Nội'
    }
        , {
            name: 'Thành Nam'
            , address: '69 '
            , city: 'Bắc Giang'
            , country: 'Hà Nội'
    }


    ]
}]);
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {}]);