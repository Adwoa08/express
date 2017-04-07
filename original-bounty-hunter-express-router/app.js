var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
app.use(bodyParser.json());

//Route for bounty
var bounties = [];

app.get("/bounty", function(req, res){
    res.send(bounties);
})

app.get("/bounty/:bountyId", function(req, res){
    res.send(req.params.bountyId);
})


app.post("/bounty", function(){
    var newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    res.send(newBounty);
})


app.delete("/bounty/:id", function(req, res){
    var bountyName = req.params.name;
    for(var i = 0; i < bounties.length; i++){
        if(bountyName.id === bounties[i]._id){
            bounties.splice(i, 1);
        }
    }
})

//Route for bounty2







app.listen(8000, function(){
    console.log("App is listening on port 8000");
});