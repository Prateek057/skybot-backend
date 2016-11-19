module.exports = matchresultsRoutes;

function matchresultsRoutes() {

    var matchresultsController = require('./matchresultsController');
    var router = require('express').Router();
    var unless = require('express-unless');


    //var mw = passport.authenticate('jwt', {session: false});
    //mw.unless = unless;

    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    //router.post('/unregister', passport.authenticate('jwt', {session: false}), userController.unregister);

    router.route("/query")
        .get(matchresultsController.resolveQuery);

    return router;
}