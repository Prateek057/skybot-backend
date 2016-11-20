var Config = require('./config/config.js');

/**
 * db connect
 */

var mongoose = require('mongoose');
mongoose.connect([Config.db.host, '/', Config.db.name].join(''),{
    //eventually it's a good idea to make this secure
    user: Config.db.user,
    pass: Config.db.pass
});

/**
 * create application
 */

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

/**
 * app setup
 */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


/**
 * routing
 */

var matchResultsController = require("./matchresults/matchresultsController");

app.post('/query', function(req,res) {

    var request = req.body;

    var parameters = request.result.parameters;

    var quantifier = parameters.quantifier.toLowerCase();

    var playerNames = ['Phillip Lahm','Thomas Müller','Robert Lewandowski', 'David Alaba', 'Thiago Alcántara',
        'Arjen Robben', 'Douglas Costa', 'Arturo Vidal', 'Xabi Alonso'];

    var result = [];

    if(quantifier.indexOf('which')>-1){
        var num = getRandomInt(0,8);
        var param = getRandomInt(0,2);
        console.log(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
        result.push(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
        result.push(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
        result.push(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
        //result = playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num;
    }else{
        var num;
        if((parameters.quantifier.indexOf('goal')>-1)||(parameters.quantifier.indexOf('assist'))>-1){
            num = getRandomInt(0,3);
        } else {
            num = getRandomInt(0,7);
        }
        console.log(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
        result.push(parameters.player_name + " has " + num + " number of " +parameters.player_actions +" so far.");
        result.push(parameters.player_name + " has " + num + " number of " +parameters.player_actions +" so far.");
        result.push(parameters.player_name + " has " + num + " number of " +parameters.player_actions +" so far.");
        //result = parameters.player_name + " has " + num + " number of " +parameters.player_actions +" so far.";

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    res.statusCode= 200;


    var response = {
        "speech": result,
        "displayText": result,
        "source": "SkyCheck"
    };

    res.json(response);
});

//app.use('/api', matchresultsRoutes());

module.exports = app;
