function serializeToFormData(name, files) {
    var form = new FormData();
    for (var i = 0; i < files.length; i++) {
        form.append(name, files[i]);
    }
    return form;
}

var UploaderApp = {
    controller: function() {
        this.onDragOver = function (e) {
             e.preventDefault();
        };
        this.onDrop = function (e) {
            e.stopPropagation();
            e.preventDefault();
            m.request({
                method: "POST",
                url: "/upload",
                data: serializeToFormData("files[]", e.dataTransfer.files),
                serialize: function (data) {
                    return data;
                }
            });
        };
    },
    view: function(ctrl) {
        return m("div", {
                style: {border: "gray solid 1px", padding: "2em"},
                ondragover: ctrl.onDragOver,
                ondrop: ctrl.onDrop
            },
            "アップロードするファイルをドロップ"
        );
    }
}

m.module(document.getElementById("root"), UploaderApp);

