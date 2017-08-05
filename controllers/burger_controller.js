// burger_controller.js

var db = require("../models");

//routes
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.burgertoos.findAll({}).then(function(dbBurger) {
            var burgerObject = {
                burgertoos: dbBurger
            };
            res.render("index", burgerObject);
        });
    });


    app.post("/", function(req, res) {
        if (req.body.yourBurger != "") {
            db.burgertoos.create([
                "burger_name", "devoured"
            ], [
                req.body.yourBurger, false
            ], function() {
                res.redirect("/");
            });
        };
    });

}; // the end