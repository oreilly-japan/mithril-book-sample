"use strict";

var m = require("mithril");

var carouselModule = {
    controller: function () {},
    view: function () {
        function enableCrousel(element, isInitialized) {
            if (isInitialized) {
                return;
            }
            $(element).carousel();
        }
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Carousel")
            ]),
            m(".carousel.slide[data-ride='carousel'][id='carousel-example-generic']", {config: enableCrousel}, [
                m("ol.carousel-indicators", [
                    m("li.active[data-slide-to='0'][data-target='#carousel-example-generic']"),
                    m("li[data-slide-to='1'][data-target='#carousel-example-generic']"),
                    m("li[data-slide-to='2'][data-target='#carousel-example-generic']")
                ]),
                m(".carousel-inner[role='listbox']", [
                    m(".item.active", [
                        m("img[alt='First slide'][data-src='holder.js/1140x500/auto/#777:#555/text:First slide']")
                    ]),
                    m(".item", [
                        m("img[alt='Second slide'][data-src='holder.js/1140x500/auto/#666:#444/text:Second slide']")
                    ]),
                    m(".item", [
                        m("img[alt='Third slide'][data-src='holder.js/1140x500/auto/#555:#333/text:Third slide']")
                    ])
                ]),
                m("a.left.carousel-control[data-slide='prev'][href='#carousel-example-generic'][role='button']", [
                    m("span.glyphicon.glyphicon-chevron-left[aria-hidden='true']"),
                    m("span.sr-only", "Previous")
                ]),
                m("a.right.carousel-control[data-slide='next'][href='#carousel-example-generic'][role='button']", [
                    m("span.glyphicon.glyphicon-chevron-right[aria-hidden='true']"),
                    m("span.sr-only", "Next")
                ])
            ])
        ]);
    }
};

module.exports = carouselModule;
