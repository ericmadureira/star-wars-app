/////////////////			SETUP			////////////////////////////

// APP 
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//////////////////			ROUTES			/////////////////////////

// LANDING PAGE AND SEARCH FORM
app.get("/", function(req, res){
	res.render("index");
});

// DISPLAYS SEARCH RESULTS
app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "https://swapi.co/api/people/?search="+query;
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results",
			{
				data: data,
				query: query
			});
		}
	});
});

// CHARACTER PROFILE
app.get("/profile/:char", function(req, res){
  var name = req.params.char;
  var url = "https://swapi.co/api/people/?search="+name;
  var people_all = "https://swapi.co/api/people/";
  request(people_all, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("profile", {data: data});
    }
  });
});

// ABOUT THE AUTHOR
app.get("/about", function(req, res){
	res.render("about");
});

// CATCHES ROUTE EXCEPTIONS
app.get("*", function(req, res){
	res.render("page_not_found");
});

// SERVER
var port = 3001
app.listen(port, function(){
  console.log("App on port 3001...");
});
/////////////////////////////////////////////////////////////