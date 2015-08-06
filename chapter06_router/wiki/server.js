"use strict";

var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(/\/[A-Z][a-z]+([A-Z][a-z]+)+/, express.static("client/index.html"));
app.use(express.static("client"));
app.use(bodyParser.json());

// AJAXアクセスのページ取得用のAPI
app.get("/api/:pagename", function (req, res) {
    console.log("get /api/" + req.params.pagename);
    var source = "";
    var pageTitles = [];
    try {
        var sources = JSON.parse(fs.readFileSync("wiki.json", "utf8"));
        if (sources.hasOwnProperty(req.params.pagename)) {
            source = sources[req.params.pagename];
        }
        for (var key in sources) {
            if (sources.hasOwnProperty(key)) {
                pageTitles.push(key);
            }
        }
    } catch(e) {
        // pass
    }
    res.send({
        source: source,
        pageTitles: pageTitles});
});

// AJAXアクセスのページ保存用のAPI
app.post("/api/:pagename", function (req, res) {
    console.log("post /api/" + req.params.pagename);
    var source;
    try {
        source = JSON.parse(fs.readFileSync("wiki.json", "utf8"));
    } catch(e) {
        source = {};
    }
    source[req.params.pagename] = req.body.source;
    fs.writeFileSync("wiki.json", JSON.stringify(source));
    res.status(200).end();
});

console.log("start listening at 8000");
app.listen(8000);
