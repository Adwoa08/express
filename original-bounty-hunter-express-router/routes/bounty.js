var express = require("express");
var bountyRouter = express.Router();


var bodyParser = require("body-parser");
var uuid = require("uuid");
bountyRouter.use(bodyParser.json());



var bounties = [
    {
        fName: "Jason",
        lName: "Lee",
        cost: "100",
        _id: "12345"
    },
    {
        fName: "Terry",
        lName: "Ntow",
        cost: "100",
        _id: "67890"
    }
];



bountyRouter.route("/")
    .get(function (req, res) {
        res.send(bounties);
    })
    .post(function (req, res) {
        var newBounty = req.body;
        newBounty._id = uuid.v4();
        bounties.push(newBounty);
        res.send(newBounty);
    })

bountyRouter.route("/:id")
    .get(function (req, res) {
        res.send(req.params.id);
    })
    .delete(function (req, res) {
        var bountyName = req.params.id;
        for (var i = 0; i < bounties.length; i++) {
            if (bountyName === bounties[i]._id) {
                bounties.splice(i, 1);
            }
        }
        res.send(bounties);
    })
    .put(function (req, res) {
        var newBounty = req.body;
        for (var i = 0; i < bounties.length; i++) {
            if (req.params.id === bounties[i]._id) {
                for (var key in newBounty) {
                    console.log(newBounty[key], bounties[i][key]);
                    if (newBounty[key] != bounties[i][key]) {
                        bounties[i][key] = newBounty[key];
                    }
                }
            }
            res.send(bounties);
        }
    })

module.exports = bountyRouter;
