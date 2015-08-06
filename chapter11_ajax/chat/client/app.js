// socket.io通信周りを見るクラス
function ChatSocket(ctrl) {
    if (ChatSocket.instance) {
        ChatSocket.instance.controller = ctrl;
        return ChatSocket.instance;
    }
    ChatSocket.instance = this;
    this.controller = ctrl;
    this.socket = io();
    this.messages = m.prop([]);
    var self = this;
    this.socket.on("login result", function (isSuccess) {
        login = isSuccess;
        self.controller.loginResult(isSuccess);
    });
    this.socket.on("receive chat", function (message) {
        m.startComputation();
        message.key = self.messages().length;
        self.messages().splice(0, 0, message);
        m.endComputation();
    });
}

ChatSocket.prototype.login = function(name) {
    this.socket.emit("login", name);
};

ChatSocket.prototype.send = function(message) {
    this.socket.emit("send chat", message);
};

// ログイン済みかのフラグ
var login = false;

// ログインページ
var LoginPage = {
    controller: function () {
        var self = this;
        this.name = m.prop("");
        this.error = m.prop("");
        this.login = function () {
            var socket = new ChatSocket(self);
            socket.login(self.name());
        };
        this.loginResult = function (isSuccess) {
            if (isSuccess) {
                m.route("/");
            } else {
                m.startComputation();
                this.error(this.name() + "はすでに使われています");
                this.name("");
                m.endComputation();
            }
        };
        this.onKeyPress = function (e) {
            if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
                self.name(e.target.value);
                self.login();
            } else {
                m.redraw.strategy("none");
            }
        };
    },
    view: function(ctrl) {
        return m("div", [
            m("label", {for: name}, "ユーザ名:"),
            m("input#name[type=text]", {
                onchange: m.withAttr("value", ctrl.name),
                onkeypress: ctrl.onKeyPress
            }),
            m("button", {onclick: ctrl.login}, "ログイン"),
            m(".error", ctrl.error())
        ]);
    }
};

// チャットページ
var ChatPage = {
    controller: function () {
        if (!login) {
            return m.route("/login");
        }
        var self = this;
        this.message = m.prop("");
        this.socket = new ChatSocket(this);
        this.send = function () {
            self.socket.send(self.message());
            self.message("");
        };
        this.onKeyPress = function (e) {
            if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
                self.message(e.target.value);
                self.send();
            } else {
                m.redraw.strategy("none");
            }
        };
    },
    view: function(ctrl) {
        return m("div", [
            m("input[type=text]", {
                onchange: m.withAttr("value", ctrl.message),
                onkeypress: ctrl.onKeyPress,
                value: ctrl.message()
            }),
            m("button", {onclick: ctrl.send}, "送信"),
            m("div", ctrl.socket.messages().map(function (message) {
                return m("div", {key: message.key}, [
                    m("b", message.user + ": "),
                    message.text
                ]);
            }))
        ]);
    }
};

m.route(document.getElementById("root"), "/login", {
    "/login": LoginPage,
    "/": ChatPage
});

