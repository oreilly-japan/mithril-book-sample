var assert = require('power-assert');
var jsdom = require('jsdom');
var render = require('mithril-node-render');

var Todo = require('../client_source/todo_model');
var MyTodoApp = require('../client_source/app');

jsdom.env('<html>', function (errors, window) {
    describe("MyTodoApp.view via DOM", function () {
        var $;
        beforeEach(function () {
            $ = require('jquery')(window);
        });
        it ("has no items", function () {
            var controller = new MyTodoApp.controller();
            var view = render(MyTodoApp.view(controller));
            
            assert($('#items tr', view).length === 0);
        });

        it ("has three items", function () {
            var controller = new MyTodoApp.controller();
            controller.vm.list(["task1", "task2", "task3"].map(function (label) {
                return new Todo({description: label});
            }));
            var view = render(MyTodoApp.view(controller));

            assert($('#items tr', view).length === 3);
        });
    }); 
});
