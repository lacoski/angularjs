var myApp = angular.module('myApp',['ngMessages','ngResource'])

myApp.controller('mainController', ['$scope','$log',function(o,n){   
    //$log.info("Array use");
    n.info("Array use!")
}]);

myApp.controller('demoController', ['$log','$scope',function(o,n){   
    //$log.info("Array use");
    o.info("Array use!")
}]);