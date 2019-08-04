(function(global) {
    function guessGame(gameType, isPlaying, name) {
        return new init(gameType, isPlaying, name);
    }

    function init(gameType, isPlaying, name) {
        // this.className = className;
        this.name = name;
        this.gameType = gameType;
        this.isPlaying = isPlaying;
        this.render();
    }
    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return JSON.parse(xmlHttp.responseText);
    }
    init.prototype = {
        render: function() {
            var gameDiv = document.createElement("div");
            gameDiv.classList.add("game_container");
            var data = httpGet('https://serene-wave-90244.herokuapp.com/data?type=' + this.gameType);
            var self = this;
            if (this.isPlaying) {
                var select = document.createElement("select");
                data.forEach(function (element) {
                    var option = document.createElement("option");
                    option.textContent = element.name;
                    option.value = element.name;
                    select.appendChild(option);
                });
                gameDiv.appendChild(select);
                var btnSend = document.createElement("button");
                btnSend.textContent = 'Send';
                gameDiv.appendChild(select);
                gameDiv.appendChild(btnSend);
            } else {
                // var data = httpGet('https://serene-wave-90244.herokuapp.com/data?type=' + this.gameType);
                var filteredData = data.filter(function (obj) {
                    return obj.name === self.name;
                });
                filteredData.forEach(function (element) {
                    var img = document.createElement("img");
                    img.src = element.url;
                    gameDiv.appendChild(img);
                });
            }
            this.content = gameDiv;
        }
    };
    guessGame.prototype = init;
    global.guessGame = guessGame;
})(window);
