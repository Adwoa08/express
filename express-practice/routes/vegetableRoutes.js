// vegetableRoutes.js

var express = require("express");  
var veggieRouter = express.Router();

veggieRouter.route("/")  
    .get(function (req, res) {
        res.send("GET on /vegetable endpoint");
    })
    .post(function (req, res) {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/:vegetableId")  
    .get(function (req, res) {
        res.send("GET on /vegetable/" + req.params.vegetableId + " endpoint");
    })
    .put(function (req, res) {
        res.send("PUT on /vegetable/" + req.params.vegetableId + " endpoint");
    })
    .delete(function (req, res) {
        res.send("DELETE on /vegetable/" + req.params.vegetableId + " endpoint");
    });

module.exports = veggieRouter; 