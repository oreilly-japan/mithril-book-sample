var assert = require("power-assert");
var mq = require("mithril-query");
var Todo = require("../client_source/todo_model");
var MyTodoApp = require("../client_source/app");
var m = require("mithril");

describe("MyTodoApp.view via mithril-query", function () {
    var controller;
    beforeEach(function () {
        controller = {
            vm: {
                list: m.prop([])
            }
        };
    });

    it("has no items", function () {
        var view = mq(MyTodoApp.view(controller));
        assert(view.has("table > tbody"));
        assert(view.find("tr").length === 0);
    });

    it("has three items", function () {
        controller.vm.list(["task1", "task2", "task3"].map(function (label) {
            return new Todo({description: label});
        }));
        var view = mq(MyTodoApp.view(controller));
        assert(view.has("table"));
        assert(view.find("tr").length === 3);
        assert(view.contains("task1"));
    });
});
