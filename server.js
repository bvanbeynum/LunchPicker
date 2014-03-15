// Setup =======================================================================

var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var database = require("./server/config/database");
var mongoose = require("mongoose");

// Config ======================================================================

mongoose.connect(database.url);

// Routes ======================================================================

require("./server/routes/restaurant")(app);

// Test ======================================================================

var Cat = mongoose.model('Cat', { name: String });

app.get("/test", function (req, res) {
	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
		if (err) {
			console.log("error:" + err);
		}

		console.log('meow');
	});
	
	res.send(new Date());
});

// listen (start app with node server.js) ======================================

app.listen(port);
console.log("App listening on port " + port);
