var app = angular.module("serverTodoApp");

app.controller("homeCtrl", ["$scope", "httpService", function($scope, httpService){
    
    $scope.bounties = [];
    
    httpService.getBounties().then(function(response){
        $scope.bounties = response;
    })
    
    $scope.addNewItem = function(newItem){
        
        httpService.postBounties(newItem).then(function(data){
            $scope.bounties.push(data);
        })
        
    }
    
    
    $scope.remove = function(index, id){
        httpService.deleteBounty(id).then(function(response){
            $scope.bounties.splice(index, 1);
        })
    }
    
    
    $scope.save = function(newItem){
        httpService.editOldItem(newItem);
    }
    
}])