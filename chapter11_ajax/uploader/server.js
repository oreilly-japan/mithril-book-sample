var express = require("express");
var bodyParser = require("body-parser"); 
var multipart = require("connect-multiparty");

var app = express();
app.use(express.static("client"));
app.use(bodyParser.json());

var multipartMiddleware = multipart();

app.post("/upload", multipartMiddleware, function (req, res) {
    console.log("upload files");
    console.log(JSON.stringify(req.files, null, 4)); 
    res.send({status: "ok"});
});

console.log("start listening at 8000");
app.listen(8000);
