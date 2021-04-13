module.exports = function (passport, controller, LocalStrategy) {


    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });
    passport.deserializeUser(function (id, done) {
        controller.User.findLoginById(id, done);
    });


    passport.use(new LocalStrategy(
        function (username, password, done) {

            controller.User.getUsers(function (users) {

                console.log(users);

            });

            controller.User.findUser(username, function (user) {
                if (user) {
                    console.log("im a user");
                    console.log(user.password);
                    console.log(password);
                    if (user.password === password) {
                        console.log("password is correct");
                        return done(null, user);
                    }
                }
                return done(null, false, {
                    message: 'Login Failed!'
                });
            });
        }
    ));

};