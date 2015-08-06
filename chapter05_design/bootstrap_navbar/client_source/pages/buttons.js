"use strict";

var m = require("mithril");

var buttonModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Buttons")
            ]),
            m("p", [
                m("button.btn.btn-lg.btn-default[type='button']", "Default"),
                m("button.btn.btn-lg.btn-primary[type='button']", "Primary"),
                m("button.btn.btn-lg.btn-success[type='button']", "Success"),
                m("button.btn.btn-lg.btn-info[type='button']", "Info"),
                m("button.btn.btn-lg.btn-warning[type='button']", "Warning"),
                m("button.btn.btn-lg.btn-danger[type='button']", "Danger"),
                m("button.btn.btn-lg.btn-link[type='button']", "Link")
            ]),
            m("p", [
                m("button.btn.btn-default[type='button']", "Default"),
                m("button.btn.btn-primary[type='button']", "Primary"),
                m("button.btn.btn-success[type='button']", "Success"),
                m("button.btn.btn-info[type='button']", "Info"),
                m("button.btn.btn-warning[type='button']", "Warning"),
                m("button.btn.btn-danger[type='button']", "Danger"),
                m("button.btn.btn-link[type='button']", "Link")
            ]),
            m("p", [
                m("button.btn.btn-sm.btn-default[type='button']", "Default"),
                m("button.btn.btn-sm.btn-primary[type='button']", "Primary"),
                m("button.btn.btn-sm.btn-success[type='button']", "Success"),
                m("button.btn.btn-sm.btn-info[type='button']", "Info"),
                m("button.btn.btn-sm.btn-warning[type='button']", "Warning"),
                m("button.btn.btn-sm.btn-danger[type='button']", "Danger"),
                m("button.btn.btn-sm.btn-link[type='button']", "Link")
            ]),
            m("p", [
                m("button.btn.btn-xs.btn-default[type='button']", "Default"),
                m("button.btn.btn-xs.btn-primary[type='button']", "Primary"),
                m("button.btn.btn-xs.btn-success[type='button']", "Success"),
                m("button.btn.btn-xs.btn-info[type='button']", "Info"),
                m("button.btn.btn-xs.btn-warning[type='button']", "Warning"),
                m("button.btn.btn-xs.btn-danger[type='button']", "Danger"),
                m("button.btn.btn-xs.btn-link[type='button']", "Link")
            ])
        ]);
    }
};

module.exports = buttonModule;
