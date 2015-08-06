"use strict";

var m = require("mithril");

var dropdownMenuModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Dropdown menus")
            ]),
            m(".dropdown.theme-dropdown.clearfix", [
                m("a.sr-only.dropdown-toggle[aria-expanded='false'][data-toggle='dropdown'][href='#'][id='dropdownMenu1'][role='button']", ["Dropdown ", m("span.caret")]),
                m("ul.dropdown-menu[aria-labelledby='dropdownMenu1'][role='menu']", [
                    m("li.active[role='presentation']", [m("a[href='#'][role='menuitem'][tabindex='-1']", "Action")]),
                    m("li[role='presentation']", [m("a[href='#'][role='menuitem'][tabindex='-1']", "Another action")]),
                    m("li[role='presentation']", [m("a[href='#'][role='menuitem'][tabindex='-1']", "Something else here")]),
                    m("li.divider[role='presentation']"),
                    m("li[role='presentation']", [m("a[href='#'][role='menuitem'][tabindex='-1']", "Separated link")])
                ])
            ])
        ]);
    }
};

module.exports = dropdownMenuModule;
