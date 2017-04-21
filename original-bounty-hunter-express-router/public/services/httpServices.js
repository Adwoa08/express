var app = angular.module("serverTodoApp");

app.service("httpService", function($http){
    this.getBounties = function(){
        return $http.get("/bounty").then(function(response){
            return response.data;
        })
    }
    
    
    this.postBounties = function(newItem){
        return $http.post("/bounty", newItem).then(function(response){
            return response.data;
        })
    }
    
    
    this.deleteBounty = function(id){
        return $http.delete("/bounty/:id" + id).then(function(response){
            return "Your item has successfully been deleted";
        })
    }
    
    
    this.editOldItem = function(editedItem){
        return $http.put("/bounty", editedItem).then(function(response){
            console.log(response.data);
            return response.data;
        })
    }
    
    
})