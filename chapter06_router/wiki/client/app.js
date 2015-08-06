/* global m, document, initialView, initialData */
"use strict";

// モデルクラス
var WikiPage = function (data, isInitial) {
    this.source = m.prop(data.source);
    this.pageTitles = m.prop(data.pageTitles);
};

// サーバからページを読み込む
WikiPage.read = function (pageName) {
    return m.request({method: "GET", url: "/api/" + pageName, type: WikiPage});
};

// サーバにページのコンテンツを保存
WikiPage.save = function (pageName, source) {
    m.request({method: "POST", url: "/api/" + pageName, data: {source: source}});
};

// ページ名がページ一覧に含まれるか？
WikiPage.prototype.contains = function (pageName) {
    return this.pageTitles().indexOf(pageName) !== -1;
};

// テキストパース用の正規表現
var LinkPattern = /((?:(?:mailto|http|https|ftp):[\x21-\x7E]*)|(?:[A-Z][a-z]+(?:[A-Z][a-z]+)+))/mg;
var WikiName = /([A-Z][a-z]+(?:[A-Z][a-z]+)+)/;

// トークンの種類
var PlainTextType = 1;
var LinkType = 2;
var WikiNameType = 3;

// Wikiのソースをリンクとその他のテキストに分割する
WikiPage.tokenize = function (sourceText) {
    return sourceText.split(LinkPattern).map(function(fragment){
        if (LinkPattern.test(fragment)) {
            if (WikiName.test(fragment)) {
                return {type: WikiNameType, text: fragment};
            } else {
                return {type: LinkType, text: fragment};
            }
        } else {
            return {type: PlainTextType, text: fragment};
        }
    });
};

// 編集用ビューモデル
var vm = {
    page: null,
    edit: null,
    // 閲覧用の読み込み
    read: function (pageName) {
        vm.page = WikiPage.read(pageName);
    },
    // 編集用の読み込み
    startEdit: function () {
        vm.edit = m.prop(vm.page().source());
    },
    // 保存
    save: function (pageName) {
        WikiPage.save(pageName, vm.edit());
        vm.page().source(vm.edit());
    }
};

// ページ閲覧
var ViewPage = {
    controller: function () {
        var self = this;
        this.pageName = m.route.param("pagename");
        this.edit = function () {
            m.route("/" + self.pageName + "/edit");
        };
        vm.read(this.pageName);
    },
    view: function (ctrl) {
        return m("div", [
            m("h1", this.pageName),
            m("pre", WikiPage.tokenize(vm.page().source()).map(function (token) {
                switch (token.type) {
                case PlainTextType:
                    return token.text;
                case LinkType:
                    return m("a", {href: token.text}, token.text);
                case WikiNameType:
                    if (vm.page().contains(token.text)) {
                        return m("a", {href: "/" + token.text, config: m.route}, token.text);
                    } else {
                        return m("a", {href: "/" + token.text, config: m.route}, token.text + "?");
                    }
                }
            })),
            m("button", {onclick: ctrl.edit}, "編集")
        ]);
    }
};

// ページ編集
var EditPage = {
    controller: function () {
        var self = this;
        this.pageName = m.route.param("pagename");
        this.save = function() {
            vm.save(self.pageName);
            m.route("/" + self.pageName);
        };
        this.discard = function () {
            m.route("/" + self.pageName);
        };
        vm.startEdit();
    },
    view: function (ctrl) {
        return m("div", [
            m("h1", ctrl.pageName),
            m("textarea", {onchange: m.withAttr("value", vm.edit)}, vm.edit()),
            m("br"),
            m("button", {onclick: ctrl.discard}, "破棄"),
            m("button", {onclick: ctrl.save}, "保存")
        ]);
    }
};

m.route.mode = "pathname";
m.route(document.getElementById("root"), "/FrontPage", {
    "/:pagename": ViewPage,
    "/:pagename/edit": EditPage
});
