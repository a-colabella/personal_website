var express = require('express');
var fs = require('fs');
var app = express();

var imageDir = "./images/";
var my_images = { images: [] };

function readImages() {
    fs.readdir(imageDir, (err, files) => {
	files.forEach(file => {
	    if (!file.includes("_color")) {
		my_images.images.push(file);
	    }
	});

	writeImages();
    });
}

function writeImages() {
    var json = JSON.stringify(my_images);
    fs.writeFile("public/images.json", json, "utf8");
}

readImages();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.listen(3000);



