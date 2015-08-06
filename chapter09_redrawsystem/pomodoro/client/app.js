function Timer() {
    this.startTime = m.prop(0);
    this.duration = m.prop(0);
    this.text = m.prop("0:00");
    this.running = false;
}

Timer.prototype.start = function () {
    this.startTime(Date.now());
    this.duration(25 * 60 * 1000);
    if (!this.running) {
        requestAnimationFrame(this.update.bind(this));
    }
    this.running = true;
};

Timer.prototype.update = function () {
    var remained = Math.ceil((this.startTime() - Date.now() + this.duration()) * 0.001);
    if (remained > 0) {
        var currentText = this.text();
        var min = Math.floor(remained / 60);
        var sec = remained % 60;
        if (sec < 10) {
            this.text(min + ":0" + sec);
        } else {
            this.text(min + ":" + sec);
        }
        if (currentText !== this.text()) {
            m.redraw();
        }
        requestAnimationFrame(this.update.bind(this));
    } else {
        this.text("0:00");
        this.running = false;
        m.redraw();
    }
};

var PomodoroApp = {
    // コントローラ
    controller: function() {
        var self = this;
        this.timer = new Timer();
        this.start = function() {
            self.timer.start();
        }
    },
    // ビュー
    view: function(ctrl) {
        return m("div", [
            m(".timer", ctrl.timer.text()),
            m("button", {onclick: ctrl.start}, "スタート"),
        ]);
    }
};

m.mount(document.getElementById("root"), PomodoroApp);

