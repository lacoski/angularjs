

weatherApp.service('weatherService',['$resource',function($resource){
    this.GetWeather = function(city, days){
        var weatherAPI =  $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ callback: "JSON_CALLBACK"},{get: {method:"JSONP"}});
    
        var weatherResult = weatherAPI.get({ q: city, cnt: days, lang: 'vi', units:'metric',APPID:'c783e8c77c5c2bb45935081351e69551'});
        
        return weatherResult;
    }
   
}]);