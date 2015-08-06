var express = require("express");
var app = express();

app.use(express.static("client"));

var server = require("http").Server(app);
var io = require("socket.io")(server);
console.log("start listening at 8000");
server.listen(8000);

var users = {};

io.sockets.on("connection", function(socket) {
    socket.on("login", function(userName) {
        if (users[userName]) {
            // ユーザ名が重複していたらログイン失敗
            socket.emit("login result", false);
            return;
        }
        // 重複していなければログイン成功
        users[userName] = true;
        socket.emit("login result", true);
        // 他のユーザに新規ユーザ情報を伝達
        io.emit("receive chat", {user: userName, text: "login"});

        // 切断時の処理
        socket.on("disconnect", function () {
            delete users[userName];
            io.emit("receive chat", {user: userName, text: "logout"});
        });

        // チャットメッセージ受信
        socket.on("send chat", function(msg) {
            io.emit("receive chat", {user: userName, text: msg});
        });
    });
});
