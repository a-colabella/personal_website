/*
const http = require('http');
const fs = require('fs');

const imageDir = "./images/";
var my_images = [];

const server = http.createServer((req, res) => {
    if (req.url === "/") {
	fs.readFile("./public/index.html", function (error, pgRes) {
	    if (error) {
		res.writeHead(404);
		res.write("Contents not found!");
	    } else {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(pgRes);
	    }

	    res.end();
	});
    } else {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end();
    }

});

server.listen(3000);
console.log("listening on port 3000");

function readImages() {
    fs.readdir(imageDir, (err, files) => {
	files.forEach(file => {
	    if (!file.includes("_color")) {
		my_images.push(file);
		console.log(file);
	    }
	});
    });
}
*/
var express = require('express');
var app = express();
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));
app.listen(3000);



