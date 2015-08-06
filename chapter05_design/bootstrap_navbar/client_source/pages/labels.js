"use strict";

var m = require("mithril");

var labelModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Labels")
            ]),
            m("h1", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ]),
            m("h2", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ]),
            m("h3", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ]),
            m("h4", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ]),
            m("h5", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ]),
            m("h6", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ]),
            m("p", [
                m("span.label.label-default", "Default"),
                m("span.label.label-primary", "Primary"),
                m("span.label.label-success", "Success"),
                m("span.label.label-info", "Info"),
                m("span.label.label-warning", "Warning"),
                m("span.label.label-danger", "Danger")
            ])
        ]);
    }
};

module.exports = labelModule;
