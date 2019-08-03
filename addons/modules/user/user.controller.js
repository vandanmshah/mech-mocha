var User = require("./user.model");
exports.user_info = function(req, res) {
    User.findOne({
        // email: new RegExp(req.body.email, "i")
    }).exec(function(err, user) {
        console.log(user);
        res.json({ 'Data': user });
    });
};
exports.register = function(req, res) {
    console.log(req);
    // var user = new User({
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     email: req.body.email,
    //     password: req.body.password,
    //     // created_on: req.body.created_on
    // });

    // user.save(function(err) {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.json({
    //         message:
    //             "User with the email " + req.body.email + " has been created"
    //     });
    // });
};
