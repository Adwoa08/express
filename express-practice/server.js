var express = require("express");  
var app = express();  
var port = process.env.PORT || 8000;

// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", require("./routes/fruitRoutes"));  
app.use("/vegetable", require("./routes/vegetableRoutes"));

// Run the server
app.listen(port, function () {  
    console.log("Server is listening on port " + port);
});