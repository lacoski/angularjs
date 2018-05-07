var myApp = angular.module('myApp',['ngMessages','ngResource'])

myApp.controller('mainController', ['$scope','$filter',function($scope,$filter){   
    $scope.name = '';
    
    $scope.lowercaseName = function(){
        return $filter('lowercase')($scope.name);
    }
    
    $scope.$watch('name', function(newValue, oldValue){
        console.log('Giá trị name đã thay đổi');
        console.log('Giá trị mới : '+ newValue);
        console.log('Giá trị cũ : ' + oldValue);
    })
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.name = 'Changed';
        })
        
    },3000);
}]);
