"use strict";

var m = require("mithril");

var progressBarModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Progress bars")
            ]),
            m(".progress", [
                m(".progress-bar[aria-valuemax='100'][aria-valuemin='0'][aria-valuenow='60'][role='progressbar']", {style: {"width": " 60%"}}, [m("span.sr-only", "60% Complete")])
            ]),
            m(".progress", [
                m(".progress-bar.progress-bar-success[aria-valuemax='100'][aria-valuemin='0'][aria-valuenow='40'][role='progressbar']", {style: {"width": "40%"}}, [m("span.sr-only", "40% Complete (success)")])
            ]),
            m(".progress", [
                m(".progress-bar.progress-bar-info[aria-valuemax='100'][aria-valuemin='0'][aria-valuenow='20'][role='progressbar']", {style: {"width": "20%"}}, [m("span.sr-only", "20% Complete")])
            ]),
            m(".progress", [
                m(".progress-bar.progress-bar-warning[aria-valuemax='100'][aria-valuemin='0'][aria-valuenow='60'][role='progressbar']", {style: {"width": "60%"}}, [m("span.sr-only", "60% Complete (warning)")])
            ]),
            m(".progress", [
                m(".progress-bar.progress-bar-danger[aria-valuemax='100'][aria-valuemin='0'][aria-valuenow='80'][role='progressbar']", {style: {"width": "80%"}}, [m("span.sr-only", "80% Complete (danger)")])
            ]),
            m(".progress", [
                m(".progress-bar.progress-bar-striped[aria-valuemax='100'][aria-valuemin='0'][aria-valuenow='60'][role='progressbar']", {style: {"width": "60%"}}, [m("span.sr-only", "60% Complete")])
            ]),
            m(".progress", [
                m(".progress-bar.progress-bar-success", {style: {"width": "35%"}}, [m("span.sr-only", "35% Complete (success)")]),
                m(".progress-bar.progress-bar-warning", {style: {"width": "20%"}}, [m("span.sr-only", "20% Complete (warning)")]),
                m(".progress-bar.progress-bar-danger", {style: {"width": "10%"}}, [m("span.sr-only", "10% Complete (danger)")])
            ])
        ]);
    }
};

module.exports = progressBarModule;
