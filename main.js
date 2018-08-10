$(document).ready(function () {

    function time() {
        var now = new Date();
        var hour = timeFormat(now.getHours());
        var min = timeFormat(now.getMinutes());
        var sec = timeFormat(now.getSeconds());
        var ampm = "";
        if (hour > 12) {
            ampm = "下午"
            hour = hour - 12;            
        } else {
            ampm = "上午"
        };

        $(".time").html(ampm+" "+hour + ":" + min + ":" + sec);

        requestAnimationFrame(time);
    }

    function timeFormat(i) {
        if (i < 10) {
            i = "0" + i;
        };
        return i;
    };

    time();
});