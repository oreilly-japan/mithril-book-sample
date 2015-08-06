"use strict";

var m = require("mithril");

var NavBar = {
    view: function (ctrl, args) {
        var activeUrl = m.route();
        return m(".container", [
            m(".navbar-header", [
                m("button.navbar-toggle.collapsed[aria-controls='navbar']" +
                    "[aria-expanded='false'][data-target='#navbar']" +
                    "[data-toggle='collapse'][type='button']", [
                    m("span.sr-only", "Toggle navigation"),
                    m("span.icon-bar"),
                    m("span.icon-bar"),
                    m("span.icon-bar")
                ]),
                m("a.navbar-brand", {href: "#", config: m.route}, args.title)
            ]),
            m(".navbar-collapse.collapse[id='navbar']", [
                m("ul.nav.navbar-nav", [
                    m("li", {class: args.root === activeUrl ? "active" : ""}, [
                        m("a", {href: args.root, config: m.route}, args.pages[args.root])
                    ]),
                    m("li.dropdown", [
                        m("a.dropdown-toggle[aria-expanded='false']" +
                            "[data-toggle='dropdown'][href='#'][role='button']",
                            {class: args.root !== activeUrl ? "active" : ""},
                            [args.title + " ", m("span.caret")]),
                        m("ul.dropdown-menu[role='menu']",
                            Object.keys(args.pages).map(function (key) {
                                if (key === args.root) {
                                    return "";
                                }
                                return m("li", [m("a", {href: key, config: m.route},
                                    [key === activeUrl
                                        ? m("span.glyphicon.glyphicon-triangle-right")
                                        : "",
                                    args.pages[key]])]);
                            })
                        )
                    ])
                ])
            ])
        ]);
    }
};

module.exports = NavBar;
