/// <reference path="../typings/mithril/mithril.d.ts" />
// モデルクラスTodo: 2つプロパティがある
var Todo = (function () {
    function Todo(data) {
        this.description = m.prop(data.description);
        this.done = m.prop(false);
    }
    return Todo;
})();
;
// ビュー・モデル
// 作成可能か判定するロジック
var vm;
(function (vm) {
    vm.list;
    vm.description;
    function init() {
        vm.list = m.prop([]);
        vm.description = m.prop("");
    }
    vm.init = init;
    function add() {
        if (vm.description()) {
            vm.list().push(new Todo({ description: vm.description() }));
            vm.description("");
        }
    }
    vm.add = add;
})(vm || (vm = {}));
// コントローラ
function controller() {
    vm.init();
}
// ビュー
function view() {
    return m("div", [
        m("input", { onchange: m.withAttr("value", vm.description), value: vm.description() }),
        m("button", { onclick: vm.add }, "追加"),
        m("table", vm.list().map(function (task) {
            return m("tr", [
                m("td", [
                    m("input[type=checkbox]", { onclick: m.withAttr("checked", task.done), value: task.done() })
                ]),
                m("td", { style: { textDecoration: task.done() ? "line-through" : "none" } }, task.description())
            ]);
        }))
    ]);
}
m.mount(document.getElementById("root"), { controller: controller, view: view });
