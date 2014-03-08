var http = require("http");
var express = require("express");

var port = 80;
var server = express();

server.use("/css", express.static(__dirname + "/css"));
server.use("/js", express.static(__dirname + "/script"));
server.use("/media", express.static(__dirname + "/media"));

server.get("/", function (request, response) {
	response.sendfile(__dirname + "/html/index.html");
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
console.log("listening on port " + port);