var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

console.log("passport")

passport.use(
    new LocalStrategy (

        // User.authenticate()
        {
            usernameField: "username"
        },
        function(username, password, done) {
            var dbUser = db.User;

            dbUser.findOne({ username: username } ).then(function(dbUser) {
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect username"
                    });
                }

                else if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password"
                    });
                }

                else {
                    console.log("here I am");
                    return done(null, dbUser, {
                        message: "Log-in Successful"
                    });
                }
            });
        }
    )
);

passport.serializeUser(function(user, cb) {
    console.log(user);
    cb(null,user);
});

passport.deserializeUser(function(obj,cb) {
    cb(null, obj);
});

module.exports = passport;