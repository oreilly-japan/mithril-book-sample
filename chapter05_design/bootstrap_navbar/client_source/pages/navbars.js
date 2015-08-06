"use strict";

var m = require("mithril");

var navbarModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Navbars")
            ]),
            m("nav.navbar.navbar-default", [
                m(".container", [
                    m(".navbar-header", [
                        m("button.navbar-toggle.collapsed[data-target='.navbar-collapse'][data-toggle='collapse'][type='button']", [
                            m("span.sr-only", "Toggle navigation"),
                            m("span.icon-bar"),
                            m("span.icon-bar"),
                            m("span.icon-bar")
                        ]),
                        m("a.navbar-brand[href='#']", "Project name")
                    ]),
                    m(".navbar-collapse.collapse", [
                        m("ul.nav.navbar-nav", [
                            m("li.active", [m("a[href='#']", "Home")]),
                            m("li", [m("a[href='#about']", "About")]),
                            m("li", [m("a[href='#contact']", "Contact")]),
                            m("li.dropdown", [
                                m("a.dropdown-toggle[aria-expanded='false'][data-toggle='dropdown'][href='#'][role='button']", ["Dropdown ", m("span.caret")]),
                                m("ul.dropdown-menu[role='menu']", [
                                    m("li", [m("a[href='#']", "Action")]),
                                    m("li", [m("a[href='#']", "Another action")]),
                                    m("li", [m("a[href='#']", "Something else here")]),
                                    m("li.divider"),
                                    m("li.dropdown-header", "Nav header"),
                                    m("li", [m("a[href='#']", "Separated link")]),
                                    m("li", [m("a[href='#']", "One more separated link")])
                                ])
                            ])
                        ])
                    ])
                ])
            ]),
            m("nav.navbar.navbar-inverse", [
                m(".container", [
                    m(".navbar-header", [
                        m("button.navbar-toggle.collapsed[data-target='.navbar-collapse'][data-toggle='collapse'][type='button']", [
                            m("span.sr-only", "Toggle navigation"),
                            m("span.icon-bar"),
                            m("span.icon-bar"),
                            m("span.icon-bar")
                        ]),
                        m("a.navbar-brand[href='#']", "Project name")
                    ]),
                    m(".navbar-collapse.collapse", [
                        m("ul.nav.navbar-nav", [
                            m("li.active", [m("a[href='#']", "Home")]),
                            m("li", [m("a[href='#about']", "About")]),
                            m("li", [m("a[href='#contact']", "Contact")]),
                            m("li.dropdown", [
                                m("a.dropdown-toggle[aria-expanded='false'][data-toggle='dropdown'][href='#'][role='button']", ["Dropdown ", m("span.caret")]),
                                m("ul.dropdown-menu[role='menu']", [
                                    m("li", [m("a[href='#']", "Action")]),
                                    m("li", [m("a[href='#']", "Another action")]),
                                    m("li", [m("a[href='#']", "Something else here")]),
                                    m("li.divider"),
                                    m("li.dropdown-header", "Nav header"),
                                    m("li", [m("a[href='#']", "Separated link")]),
                                    m("li", [m("a[href='#']", "One more separated link")])
                                ])
                            ])
                        ])
                    ])
                ])
            ])
        ]);
    }
};

module.exports = navbarModule;
