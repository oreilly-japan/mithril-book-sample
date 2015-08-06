"use strict";

var m = require("mithril");

// モデルクラスTodo: 2つプロパティがある
function Todo(data) {
    this.description = m.prop(data.description || "");
    this.done = m.prop(false);
}

// サーバからタスクリストを読み込む
Todo.list = function () {
    return m.request({method: "GET", url: "/tasks", type: Todo, initialValue: []});
};

// サーバに現在のタスクを送信
Todo.save = function (todoList) {
    var data = todoList.filter(function (todo) {
        return !todo.done();
    });
    return m.request({method: "POST", url: "/tasks", data: data});
};

module.exports = Todo;
