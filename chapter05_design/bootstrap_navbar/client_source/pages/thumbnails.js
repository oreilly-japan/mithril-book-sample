"use strict";

var m = require("mithril");

var thumbnailModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Thumbnails")
            ]),
            m("img.img-thumbnail[alt='A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera'][data-src='holder.js/200x200']")
        ]);
    }
};

module.exports = thumbnailModule;
