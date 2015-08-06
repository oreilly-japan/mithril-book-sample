"use strict";

var m = require("mithril");

var panelModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Panels")
            ]),
            m(".row", [
                m(".col-sm-4", [
                    m(".panel.panel-default", [
                        m(".panel-heading", [
                            m("h3.panel-title", "Panel title")
                        ]),
                        m(".panel-body", "\n              Panel content\n            ")
                    ]),
                    m(".panel.panel-primary", [
                        m(".panel-heading", [
                            m("h3.panel-title", "Panel title")
                        ]),
                        m(".panel-body", "\n              Panel content\n            ")
                    ])
                ]),
                m(".col-sm-4", [
                    m(".panel.panel-success", [
                        m(".panel-heading", [
                            m("h3.panel-title", "Panel title")
                        ]),
                        m(".panel-body", "\n              Panel content\n            ")
                    ]),
                    m(".panel.panel-info", [
                        m(".panel-heading", [
                            m("h3.panel-title", "Panel title")
                        ]),
                        m(".panel-body", "\n              Panel content\n            ")
                    ])
                ]),
                m(".col-sm-4", [
                    m(".panel.panel-warning", [
                        m(".panel-heading", [
                            m("h3.panel-title", "Panel title")
                        ]),
                        m(".panel-body", "\n              Panel content\n            ")
                    ]),
                    m(".panel.panel-danger", [
                        m(".panel-heading", [
                            m("h3.panel-title", "Panel title")
                        ]),
                        m(".panel-body", "\n              Panel content\n            ")
                    ])
                ])
            ])
        ]);
    }
};

module.exports = panelModule;
