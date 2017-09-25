var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view-engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.listen("3001", function(){
  console.log("App on port 3001...");
});