"use strict";

var m = require("mithril");

var tableModule = {
    controller: function () {},
    view: function () {
        return m(".container.theme-showcase", [
            m(".page-header", [
                m("h1", "Tables")
            ]),
            m(".row", [
                m(".col-md-6", [
                    m("table.table", [
                        m("thead", [
                            m("tr", [
                                m("th", "#"),
                                m("th", "First Name"),
                                m("th", "Last Name"),
                                m("th", "Username")
                            ])
                        ]),
                        m("tbody", [
                            m("tr", [
                                m("td", "1"),
                                m("td", "Mark"),
                                m("td", "Otto"),
                                m("td", "@mdo")
                            ]),
                            m("tr", [
                                m("td", "2"),
                                m("td", "Jacob"),
                                m("td", "Thornton"),
                                m("td", "@fat")
                            ]),
                            m("tr", [
                                m("td", "3"),
                                m("td", "Larry"),
                                m("td", "the Bird"),
                                m("td", "@twitter")
                            ])
                        ])
                    ])
                ]),
                m(".col-md-6", [
                    m("table.table.table-striped", [
                        m("thead", [
                            m("tr", [
                                m("th", "#"),
                                m("th", "First Name"),
                                m("th", "Last Name"),
                                m("th", "Username")
                            ])
                        ]),
                        m("tbody", [
                            m("tr", [
                                m("td", "1"),
                                m("td", "Mark"),
                                m("td", "Otto"),
                                m("td", "@mdo")
                            ]),
                            m("tr", [
                                m("td", "2"),
                                m("td", "Jacob"),
                                m("td", "Thornton"),
                                m("td", "@fat")
                            ]),
                            m("tr", [
                                m("td", "3"),
                                m("td", "Larry"),
                                m("td", "the Bird"),
                                m("td", "@twitter")
                            ])
                        ])
                    ])
                ])
            ]),
            m(".row", [
                m(".col-md-6", [
                    m("table.table.table-bordered", [
                        m("thead", [
                            m("tr", [
                                m("th", "#"),
                                m("th", "First Name"),
                                m("th", "Last Name"),
                                m("th", "Username")
                            ])
                        ]),
                        m("tbody", [
                            m("tr", [
                                m("td[rowspan='2']", "1"),
                                m("td", "Mark"),
                                m("td", "Otto"),
                                m("td", "@mdo")
                            ]),
                            m("tr", [
                                m("td", "Mark"),
                                m("td", "Otto"),
                                m("td", "@TwBootstrap")
                            ]),
                            m("tr", [
                                m("td", "2"),
                                m("td", "Jacob"),
                                m("td", "Thornton"),
                                m("td", "@fat")
                            ]),
                            m("tr", [
                                m("td", "3"),
                                m("td[colspan='2']", "Larry the Bird"),
                                m("td", "@twitter")
                            ])
                        ])
                    ])
                ]),
                m(".col-md-6", [
                    m("table.table.table-condensed", [
                        m("thead", [
                            m("tr", [
                                m("th", "#"),
                                m("th", "First Name"),
                                m("th", "Last Name"),
                                m("th", "Username")
                            ])
                        ]),
                        m("tbody", [
                            m("tr", [
                                m("td", "1"),
                                m("td", "Mark"),
                                m("td", "Otto"),
                                m("td", "@mdo")
                            ]),
                            m("tr", [
                                m("td", "2"),
                                m("td", "Jacob"),
                                m("td", "Thornton"),
                                m("td", "@fat")
                            ]),
                            m("tr", [
                                m("td", "3"),
                                m("td[colspan='2']", "Larry the Bird"),
                                m("td", "@twitter")
                            ])
                        ])
                    ])
                ])
            ])
        ]);
    }
};

module.exports = tableModule;
