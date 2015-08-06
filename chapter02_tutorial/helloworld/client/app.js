var myApplication = {
    controller: function () {},
    view: function (controller) {
        return m("h1", "hello world");
    }
};

m.mount(document.getElementById("root"), myApplication);

