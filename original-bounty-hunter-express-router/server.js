var express = require("express");
var app = express();

//------------------------------------------------------
var path = require("path");
app.use(express.static(path.join(__dirname, "public")))

//------or you can write it this way
//var path = require("path");
//app.use(express.static("public"));
//------------------------------------------------------




app.use("/bounty", require("./routes/bounty"));
app.use("/bounty2", require("./routes/bounty2"));


app.listen(8000, function () {
    console.log("App is listening on port 8000");
});
