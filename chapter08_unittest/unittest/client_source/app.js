"use strict";

var m = require("mithril");
var Todo = require("./todo_model");

// ビュー・モデル
// 作成可能か判定するロジック
var vm = {
    init: function () {
        vm.list = m.prop([]);
    }
};

// コンポーネント
var MyTodoApp = {
    // コントローラ
    controller: function() {
        vm.init();
        this.vm = vm;
    },
    // ビュー
    view: function(ctrl) {
        return m('table', [
            m('tbody', {id: 'items'}, ctrl.vm.list().map(function (entry) {
                return m('tr', [m('td', entry.description())]);
            }))
        ]);
    }
};

if (typeof document !== "undefined") {
    m.mount(document.getElementById("root"), MyTodoApp);
}

module.exports = MyTodoApp;
