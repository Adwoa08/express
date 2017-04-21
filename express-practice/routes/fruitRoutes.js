// fruitRoutes.js

var express = require("express");  
var fruitRouter = express.Router();

fruitRouter.route("/")  
    .get(function (req, res) {
        res.send("GET on /fruit endpoint");
    })
    .post(function (req, res) {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")  
    .get(function (req, res) {
        res.send("GET on /fruit/" + req.params.fruitId + " endpoint");
    })
    .put(function (req, res) {
        res.send("PUT on /fruit/" + req.params.fruitId + " endpoint");
    })
    .delete(function (req, res) {
        res.send("DELETE on /fruit/" + req.params.fruitId + " endpoint");
    });

// export the entire router so we can require() it in server.js
module.exports = fruitRouter; 