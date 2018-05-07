var myApp = angular.module('myApp',[])

myApp.controller('mainController', function($scope,$log,$filter){   
    $log.error("Lỗi!");
    $log.info("Wait?");
    $log.log("Thông báo bình thường!");
    $log.warn("Cảnh báo !");
    
    $scope.name = "Thanh";
    $scope.nameUpcase = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.nameUpcase);
});
