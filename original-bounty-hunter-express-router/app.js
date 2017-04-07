var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
app.use(bodyParser.json());

//Route for bounty
var bounties = [
    {
        fName: 'Terry',
        lName: 'Ntow',
        bountyAmount: 4,
        type: 'Jedi',
        _id: '12345'
    }
];

app.get("/bounty", function(req, res){
    res.send(bounties);
})

app.get("/bounty/:bountyId", function(req, res){
    res.send(req.params.bountyId);
})


app.post("/bounty", function(req, res){
    var newBounty = req.body;
    newBounty._id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);
})


app.delete("/bounty/:_id", function(req, res){
    var bountyName = req.params._id;
    for(var i = 0; i < bounties.length; i++){
        if(bountyName === bounties[i]._id){
            bounties.splice(i, 1);
        }
    }
    res.send(bounties);
})


app.put("/bounty/:id", function(req,res){
    var newBounty = req.body;
    for(var i = 0; i < bounties.length; i++){
        if( req.params.id === bounties[i]._id){
            for (var key in newBounty){
                console.log(newBounty[key], bounties[i][key]);
                 if(newBounty[key] != bounties[i][key]) {
                    bounties[i][key] = newBounty[key];   
                 } 
        }
    }
    res.send(bounties);
}})

//Route for bounty2







app.listen(8000, function(){
    console.log("App is listening on port 8000");
});