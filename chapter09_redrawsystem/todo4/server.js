var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser"); 

var app = express();
app.use(express.static("client"));
app.use(bodyParser.json());

var ect = require('ect');
app.engine('ect', ect({ watch: true, root: __dirname + '/views', ext: '.ect' }).render);
app.set('view engine', 'ect');

function readTodo() {
    try {
        return JSON.parse(fs.readFileSync('todo.json', 'utf8'));
    } catch(e) {
        return [];
    }
}

app.get('/', function (req, res) {
    var context = {
        data: JSON.stringify(readTodo())
    }
    res.render("index", context)
});

app.post('/tasks', function (req, res) {
    console.log("post tasks");
    fs.writeFileSync('todo.json', JSON.stringify(req.body));
    res.status(200).end();
});

console.log("start listening at 8000");
app.listen(8000);
