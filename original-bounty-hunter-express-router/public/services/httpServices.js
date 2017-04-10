var app = angular.module("serverTodoApp");

app.service("httpService", function($http){
    this.getBounties = function(){
        return $http.get("/bounty").then(function(response){
            return response.data;
        })
    }
})