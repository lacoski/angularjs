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
        , templateUrl: 'directives/searchResultCharacterAnd.html'
        , replace: true
        , scope: {
            //            dạng cô lập, truyền model và hàm từ scope vào!
            personObject: '='
            , formattedAddressFunction: '&'
        },
        transclude: true
    }
});
myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
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