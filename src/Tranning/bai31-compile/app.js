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
        compile: function (elem, attrs) {
            //            hàm này compile chỉ chạy 1 lần sau đó linking sẽ chạy, liệt kể đủ các phần tử
            console.log("Compiling...");
            console.log(elem.html());
            return {
                pre: function (scope, elements, attrs) {
                    // console.log("pre-linking... ");
                    // console.log(scope);
                }
                , post: function (scope, elements, attrs) {
                    //                    Tại đây có thể tạo các xử lý phức tạp khi đã có scope, elements, attrs
                    console.log("post-linking... ");
                    console.log(scope);
                    console.log(elements);
                }
            }
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