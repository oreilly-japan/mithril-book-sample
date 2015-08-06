/* global m, document */
"use strict";

// アドレス検索
var AddressFinder = {
    // 初期化
    init: function () {
        PubSub.subscribe("address.find", AddressFinder.find);
    },
    // 閲覧用の読み込み
    find: function (msg, postalCode) {
        m.request({
            method: "GET", url: "/api/getaddress",
            data: {postalcode: postalCode}})
        .then(function (data) {
            if (data) {
                PubSub.publishSync("address.receive", data);
            }
        });
    }
};
AddressFinder.init();

// アドレスフォームのサブコンポーネント
var AddressForm = {
    controller: function (args) {
        var self = this;
        this.gotAddress = function (msg, address) {
            args.yomi(address[0].yomi);
            args.address(address[0].kanji);
        };
        // 購読開始
        this.token = PubSub.subscribe("address.receive", this.gotAddress);
        // イベントハンドラ
        this.find = function () {
            PubSub.publish("address.find", args.postalCode());
        };
        this.onunload = function () {
            // コンポーネントが削除されたら購読解除
            PubSub.unsubscribe(self.token);
        };
    },
    view: function (ctrl, args) {
        return m("form", [
            m("div", ["郵便: ",
                m("input", {maxlength: 7, onchange: m.withAttr("value", args.postalCode)}, args.postalCode()),
                m("button[type=button]", {onclick: ctrl.find}, "住所検索")
            ]),
            m("div", ["読み: ",
                m("input", {onchange: m.withAttr("value", args.yomi), value: args.yomi()})
            ]),
            m("div", ["住所: ",
                m("input", {onchange: m.withAttr("value", args.address), value: args.address()})
            ])
        ]);
    }
};

var AddressPage = {
    controller: function () {
        this.postalCode = m.prop("");
        this.yomi = m.prop("");
        this.address = m.prop("");
        this.submit = function () {
            // 確認
        };
    },
    view: function (ctrl) {
        return [
            m("h3", "住所入力"),
            m.component(AddressForm, ctrl),
            m("button[type=button]", {onclick: ctrl.submit}, "確認")
        ];
    }
};

m.mount(document.getElementById("root"), AddressPage);
