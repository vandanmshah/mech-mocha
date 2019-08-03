var express = require("express");
var path = require("path");
var app = express();
var userRouters = require('./addons/modules/user/user.router');

app.use(express.static(path.join(__dirname, "addons")));
app.use(express.static(__dirname));

app.listen(8000, "0.0.0.0", function() {
    console.log(
        "Server is listening on localhost:8000, open your browser on http://localhost:8000/ **"
    );
});
// app.use(app.router);
// userRouters.initialize(app);

app.use('/user', userRouters);
app.get('/about', function (req, res) {
    res.send('About, World!');
});
module.exports = app;
