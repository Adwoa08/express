var express = require("express");
var bounty2Router = express.Router();

var bodyParser = require("body-parser");
var uuid = require("uuid");

bounty2Router.use(bodyParser.json());


var bounties2 = [];

bounty2Router.route("/")
    .get(function (req, res) {
        res.send(bounties2);
    }).post(function (req, res) {
        var newbounty2 = req.body;
        newbounty2.uuid("uuid/v4");
        bounties2.push(newbounty2);
        res.send(bounties2);
    });

bounty2Router.route("/:bountyId")
    .get(function (req, res) {
        res.send(req.params.bountyId);
    })
    .delete(function (req, res) {
        var itemToDelete = req.params.bountyId;
        for (var i = 0; i < bounties2.length; i++) {
            if (itemToDelete === bounties2[i]._id) {
                bounties2[i].splice(i, 1);
            }
        }
        res.send(bounties);
    })
    .put(function (req, res) {
        var updatedBounty2 = req.body;
        for (var i = 0; i < bounties2; i++) {
            if (req.params.bountyId === bounties[i]._id) {
                for (var key in updatedBounty2[key]) {
                    if (updatedBounty2[key] != bounties2[i][key]) {
                        bounties[i][key] = updatedBounty2[key];
                    }
                }
            }
        }
        res.send(bounties);
    });



module.exports = bounty2Router;