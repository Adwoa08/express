var app = angular.module("serverTodoApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "home/home.html",
        controller: "homeCtrl"
    })
    .when("/about-us", {
        templateUrl: "about-us/about.html",
        controller: "aboutCtrl"
    })
    .otherwise({
        rediretTo: "/home"
    })
    
    
    
})