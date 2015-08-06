"use strict";

var m = require("mithril");

var listGroupModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "List groups")
            ]),
            m(".row", [
                m(".col-sm-4", [
                    m("ul.list-group", [
                        m("li.list-group-item", "Cras justo odio"),
                        m("li.list-group-item", "Dapibus ac facilisis in"),
                        m("li.list-group-item", "Morbi leo risus"),
                        m("li.list-group-item", "Porta ac consectetur ac"),
                        m("li.list-group-item", "Vestibulum at eros")
                    ])
                ]),
                m(".col-sm-4", [
                    m(".list-group", [
                        m("a.list-group-item.active[href='#']", "\n              Cras justo odio\n            "),
                        m("a.list-group-item[href='#']", "Dapibus ac facilisis in"),
                        m("a.list-group-item[href='#']", "Morbi leo risus"),
                        m("a.list-group-item[href='#']", "Porta ac consectetur ac"),
                        m("a.list-group-item[href='#']", "Vestibulum at eros")
                    ])
                ]),
                m(".col-sm-4", [
                    m(".list-group", [
                        m("a.list-group-item.active[href='#']", [
                            m("h4.list-group-item-heading", "List group item heading"),
                            m("p.list-group-item-text", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
                        ]),
                        m("a.list-group-item[href='#']", [
                            m("h4.list-group-item-heading", "List group item heading"),
                            m("p.list-group-item-text", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
                        ]),
                        m("a.list-group-item[href='#']", [
                            m("h4.list-group-item-heading", "List group item heading"),
                            m("p.list-group-item-text", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")
                        ])
                    ])
                ])
            ])
        ]);
    }
};

module.exports = listGroupModule;
