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
        }
        , compile: function (elem, attrs) {
            //            hàm này compile chỉ chạy 1 lần sau đó linking sẽ chạy, liệt kể đủ các phần tử
            console.log("Compiling...");
            console.log(elem);
            console.log(attrs);
            console.log(elem.html());
            return {
                pre: function (scope, elements, attrs) {
                    console.log("pre-linking... ");
                    console.log(elements);
                }
                , post: function (scope, elements, attrs) {
                    //                    Tại đây có thể tạo các xử lý phức tạp khi đã có scope, elements, attrs
                    console.log("post-linking... ");
                    console.log(elements);
                }
            }
        }
    }
});
myApp.directive('searchResultWithLinking', function () {
    return {
        restrict: 'AEC'
        , templateUrl: 'directives/searchResultCharacterAnd.html'
        , replace: true
        , scope: {
            //            dạng cô lập, truyền model và hàm từ scope vào!
            personObject: '='
            , formattedAddressFunction: '&'
        }
        , link: function (scope, elements, attrs) {
            //                    Tại đây có thể tạo các xử lý phức tạp khi đã có scope, elements, attrs
            console.log("post-linking... ");
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
    }


    ]
}]);
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {}]);