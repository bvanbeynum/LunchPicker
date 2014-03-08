var http = require("http");
var express = require("express");

var port = 5501;
var app = express();

app.use("/css", express.static(__dirname + "/CSS"));
app.use("/js", express.static(__dirname + "/Script"));
app.use("/image", express.static(__dirname + "/Images"));

app.get("/", function (request, response) {
	response.sendfile(__dirname + "/Html/index.htm");
});

app.listen(port);
console.log("listening on port " + port);