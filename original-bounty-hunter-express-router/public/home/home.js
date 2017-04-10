var app = angular.module("serverTodoApp");

app.controller("homeCtrl", ["$scope", "httpService", function($scope, httpService){
    
    $scope.bounties = [];
    
    httpService.getBounties().then(function(response){
        $scope.bounties = response;
    })
    
}])