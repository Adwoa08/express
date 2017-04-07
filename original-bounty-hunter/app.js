var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
app.use(bodyParser.json());

var bounties = [];


//Get request on bounties
app.get('/bounty', function(req, res){
    res.send(bounties);
});



//Post request on bounties
app.post("/bounty", function(req, res){
    var newBounty = req.body;
    newBounty._id = uuid();
    bounties.push(newBounty);
    // Add an ID to the bounty, then push
//    bounties.push(req.body);
    res.send(newBounty);
});


//delete me
app.delete("/bounty/:name", function(req, res){
    var bountyName = req.params.name;
    for(var i = 0; i < bounties.length; i++){
        if(bountyName === bounties[i].name){
            bounties.splice(i, 1);
        }
    }
    res.send(bounties);
})


//put 
app.put("/bounty/:id", function(req, res){
    var updatedBounty = req.body;
    for(var i = 0; i < bounties.length; i++) {
        if(req.params.id === bounties[i]._id){
            for(var key in updatedBounty){
                bounties[i][key] = updatedBounty[key] || bounties[i][key];
            }
        }
        return res.send(bounties[i]);
    }
})


//my port set up
var port = 8000;
app.listen(port, function(){
    console.log("my app is listening on port 8000");
});