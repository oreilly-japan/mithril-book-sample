"use strict";

var m = require("mithril");

var badgeModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Badges")
            ]),
            m("p", [
                m("a[href='#']", ["Inbox ", m("span.badge", "42")])
            ]),
            m("ul.nav.nav-pills[role='tablist']", [
                m("li.active[role='presentation']", [m("a[href='#']", ["Home ", m("span.badge", "42")])]),
                m("li[role='presentation']", [m("a[href='#']", "Profile")]),
                m("li[role='presentation']", [m("a[href='#']", ["Messages ", m("span.badge", "3")])])
            ])
        ]);
    }
};

module.exports = badgeModule;
