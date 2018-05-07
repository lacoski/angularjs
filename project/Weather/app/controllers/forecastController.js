weatherApp.controller('forecastController',['$scope', '$resource', '$routeParams' ,'cityService' , 'weatherService',function($scope, $resource, $routeParams , cityService, weatherService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    
//    $scope.weatherAPI =  $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ callback: "JSON_CALLBACK"},{get: {method:"JSONP"}});
    
//    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, lang: 'vi', units:'metric',APPID:'c783e8c77c5c2bb45935081351e69551'})
    $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days);
    
    console.log($scope.weatherResult);
    
    $scope.convertToDate = function(dt){
        return Date(dt*1000);
    }
}]);