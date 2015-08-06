var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser"); 

var app = express();
app.use(express.static("client"));
app.use(bodyParser.json());

app.get('/tasks', function (req, res) {
    console.log("get tasks");
    try {
        res.send(JSON.parse(fs.readFileSync('todo.json', 'utf8')));
    } catch(e) {
        res.send([]);
    }
});

app.post('/tasks', function (req, res) {
    console.log("post tasks");
    fs.writeFileSync('todo.json', JSON.stringify(req.body));
    res.status(200).end();
});

console.log("start listening at 8000");
app.listen(8000);
