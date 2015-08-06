var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

console.log("start listening at 8000");
app.listen(8000);
