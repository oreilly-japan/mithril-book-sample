"use strict";

var m = require("mithril");

var NavBar = require("./navbar");

var title = require("./pages/title");
var buttons = require("./pages/buttons");
var tables = require("./pages/tables");
var thumbnails = require("./pages/thumbnails");
var labels = require("./pages/labels");
var badges = require("./pages/badges");
var dropdownMenus = require("./pages/dropdownmenus");
var navs = require("./pages/navs");
var navbars = require("./pages/navbars");
var alerts = require("./pages/alerts");
var progressBars = require("./pages/progressbars");
var listGroups = require("./pages/listgroups");
var panels = require("./pages/panels");
var wells = require("./pages/wells");
var carousel = require("./pages/carousel");

if (typeof document !== "undefined") {
    // NavBarコンポーネントをマウント
    m.mount(document.getElementById("navbar"), m.component(NavBar, {
        title: "サンプル一覧",
        root: "/title",
        pages: {
            "/title": "Bootstrapサンプル",
            "/buttons": "Buttons",
            "/tables": "Tables",
            "/thumbnails": "Thumbnails",
            "/labels": "Labels",
            "/badges": "Badges",
            "/dropdownmenus": "Dropdown menus",
            "/navs": "Navs",
            "/navbars": "Navbars",
            "/alerts": "Alerts",
            "/progressbars": "Progressbars",
            "/listgroups": "Listgroups",
            "/panels": "Panels",
            "/wells": "Wells",
            "/carousel": "Carousel"
        }
    }));
    // ラウターによって切り替わるコンテンツをマウント
    m.route(document.getElementById("root"), "/title", {
        "/title": title,
        "/buttons": buttons,
        "/tables": tables,
        "/thumbnails": thumbnails,
        "/labels": labels,
        "/badges": badges,
        "/dropdownmenus": dropdownMenus,
        "/navs": navs,
        "/navbars": navbars,
        "/alerts": alerts,
        "/progressbars": progressBars,
        "/listgroups": listGroups,
        "/panels": panels,
        "/wells": wells,
        "/carousel": carousel
    }
    );
}
