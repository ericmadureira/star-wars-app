var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index", {bork: "maximum borkdrive"});
});

app.get("*", function(req, res){
	res.render("page_not_found");
});

app.listen("3001", function(){
  console.log("App on port 3001...");
});