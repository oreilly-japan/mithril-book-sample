"use strict";

var m = require("mithril");

var navsModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Navs")
            ]),
            m("ul.nav.nav-tabs[role='tablist']", [
                m("li.active[role='presentation']", [m("a[href='#']", "Home")]),
                m("li[role='presentation']", [m("a[href='#']", "Profile")]),
                m("li[role='presentation']", [m("a[href='#']", "Messages")])
            ]),
            m("ul.nav.nav-pills[role='tablist']", [
                m("li.active[role='presentation']", [m("a[href='#']", "Home")]),
                m("li[role='presentation']", [m("a[href='#']", "Profile")]),
                m("li[role='presentation']", [m("a[href='#']", "Messages")])
            ])
        ]);
    }
};

module.exports = navsModule;
