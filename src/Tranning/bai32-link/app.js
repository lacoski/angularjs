var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }).when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    }).when('/second/:num', {
        templateUrl: 'pages/second.html'
        , controller: 'secondController'
    });;
})

myApp.directive('searchResult', function () {
    return {
        restrict: 'AEC',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            personObject: '=',
            formatAddress: '=',
        },
        link: function (scope, elements, attrs) {
            //                    Tại đây có thể tạo các xử lý phức tạp khi đã có scope, elements, attrs
            console.log("linking... ");
            console.log(scope);
            console.log(elements);
        }
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
    }]

    $scope.formattedAddress = function (person2) {
        return person2.address + ' , ' + person2.city + ' , ' + person2.country;
    }
}]);
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

}]);