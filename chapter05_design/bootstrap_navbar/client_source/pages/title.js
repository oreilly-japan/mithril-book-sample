"use strict";

var m = require("mithril");

var titleModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".jumbotron", [
                m("h1", "Theme example"),
                m("p", "This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.")
            ])
        ]);
    }
};

module.exports = titleModule;
