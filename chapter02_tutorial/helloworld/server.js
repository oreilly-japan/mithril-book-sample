var express = require("express");
var app = express();

app.use(express.static("client"));

console.log("start listening at 8000");
app.listen(8000);
