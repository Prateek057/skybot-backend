module.exports = matchresultsRoutes;
//var app = express();

function matchresultsRoutes() {

    var matchresultsController = require('./matchresultsController');
    var router = require('express').Router();
    var unless = require('express-unless');


    //var mw = passport.authenticate('jwt', {session: false});
    //mw.unless = unless;

    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    //router.post('/unregister', passport.authenticate('jwt', {session: false}), userController.unregister);


    /*app.post('/query', function(req, res) {
        console.log(req.body);
        //color = req.body.color;
        // ...
    });*/

    /*router.route("/query")
        .post(matchresultsController.resolveQuery);*/

    return router;
}