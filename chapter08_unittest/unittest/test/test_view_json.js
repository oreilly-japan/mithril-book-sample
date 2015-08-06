var assert = require("power-assert");
var Todo = require("../client_source/todo_model");
var MyTodoApp = require("../client_source/app");

describe("MyTodoApp.view via JSON", function () {
    it ("has no items", function () {
        var controller = new MyTodoApp.controller();
        var view = MyTodoApp.view(controller);

        assert(view.tag === "table");
        assert(view.children[0].tag === "tbody");
        assert(view.children[0].children.length === 0);
    });

    it ("has three items", function () {
        var controller = new MyTodoApp.controller();
        controller.vm.list(["task1", "task2", "task3"].map(function (label) {
            return new Todo({description: label});
        }));
        var view = MyTodoApp.view(controller);

        assert(view.tag === "table");
        assert(view.children[0].tag === "tbody");
        assert(view.children[0].children.length === 3);
    });
}); 
