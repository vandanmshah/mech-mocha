window.addEventListener("load", function() {
    var flag = false;
    var interval = setInterval(function() {
        if (!flag) {
            var data = http(
                "https://serene-wave-90244.herokuapp.com/players?email=" +
                    localStorage.getItem("email"),
                "GET",
                null
            );
            if (data[0].status === "2") {
                // if (
                //     confirm(
                //         "You have invitation to play game. Do you want to play?"
                //     )
                // ) {
                localStorage.setItem("channelId", data[0].connectionId);
                localStorage.setItem("gameType", "fruits");
                localStorage.setItem("isPlaying", 0);
                window.location.href = 'https://serene-wave-90244.herokuapp.com/mech-mocha/addons/modules/join_chat/join_chat.html';
                // window.location.replace(
                //     "file:///home/axisrooms/Documents/HT/mech-mocha/addons/modules/join_chat/join_chat.html"
                // );
            }
        }
    }, 1000);
    $(".play_btn").click(function($ev) {
        flag = true;
        var data = http(
            "https://serene-wave-90244.herokuapp.com/players?status=1",
            "GET",
            null
        );
        var opponent = data.filter(function(elem) {
            return localStorage.getItem("email") !== elem.email;
        })[0];
        var myData = data.filter(function(elem) {
            return localStorage.getItem("email") === elem.email;
        })[0];
        var d1 = http(
            "https://serene-wave-90244.herokuapp.com/game/start",
            "POST",
            "connectionId=" + myData["_id"] + "-" + opponent["_id"]
        );
        localStorage.setItem("channelId", myData["_id"] + opponent["_id"]);
        localStorage.setItem("isPlaying", 1);
        localStorage.setItem("gameType", $ev.target.dataset.id);
    });
});
function http(theUrl, method, params) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(method, theUrl, false);
    xmlHttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );
    xmlHttp.send(params);
    return JSON.parse(xmlHttp.responseText);
}
