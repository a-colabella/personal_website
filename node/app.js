const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
	res.write("../index.html");
	res.end();
    }

});

server.listen(3000);
console.log("listening on port 3000");

const imageDir = "../images/";
const fs = require('fs');
var my_images = [];

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



