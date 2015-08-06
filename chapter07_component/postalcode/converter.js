"use strict";

var fs = require("fs");
var parse = require("csv").parse;
var iconv = require("iconv-lite");
var Moji = require("moji");

// CSVファイルパース開始
var csvParser = parse(function (err, data) {
    if (err) {
        return console.log(err);
    }
    var postalCodes = {};
    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var list;
        if (postalCodes.hasOwnProperty(row[2])) {
            list = postalCodes[row[2]];
        } else {
            list = [];
            postalCodes[row[2]] = list;
        }
        var yomi = new Moji(row.slice(3, 6).join(""));
        var kanji = row.slice(6, 9).join("");
        list.push({yomi: yomi.convert("HK", "ZK").toString(), kanji: kanji});
    }
    var src = "module.exports = " + JSON.stringify(postalCodes, null, 4) + ";\n"
    fs.writeFileSync("./ken-all.js", src) ;
});
fs.createReadStream("./x-ken-all.csv").pipe(iconv.decodeStream("Shift_JIS")).pipe(csvParser);
