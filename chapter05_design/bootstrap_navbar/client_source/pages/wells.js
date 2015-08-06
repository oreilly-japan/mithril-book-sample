"use strict";

var m = require("mithril");

var wellModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Wells")
            ]),
            m(".well", [
                m("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.")
            ])
        ]);
    }
};

module.exports = wellModule;
