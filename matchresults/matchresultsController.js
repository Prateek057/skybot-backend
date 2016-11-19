var MatchResults = require('./matchresultsSchema');

exports.resolveQuery = function(req, res){

    req.data = {
        "id":"9c10023e-c52a-4c98-ad22-2a69018eff0e",
        "timestamp":"2016-11-19T14:14:13.856Z",
        "result":{
            "source":"agent",
            "resolvedQuery":"Which player has the highest number of tackles so far?",
            "action":"",
            "actionIncomplete":false,
            "parameters":{
                "player_actions":"goal assist",
                "player_name":"Philipp Lahm",
                "quantifier":"Which player"
            },
            "contexts":[

            ],
            "metadata":{
                "intentId":"99c06176-bf40-47af-8ebf-bda69fa3368d",
                "webhookUsed":"true",
                "intentName":"How many goals did Müller score?"
            },
            "fulfillment":{
                "speech":"Philipp Lahm did nothing in the game....",
                "messages":[
                    {
                        "type":0,
                        "speech":"Philipp Lahm did  nothing in the game...."
                    }
                ]
            },
            "score":0.76
        },
        "status":{
            "code":200,
            "errorType":"success"
        }
    };

    MatchResults.find(function(err, matchResults) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        console.log(req);

        var request = req.data;

        var parameters = request.result.parameters;

        var quantifier = parameters.quantifier.toLowerCase();

        var playerNames = ['Phillip Lahm','Thomas Müller','Robert Lewandowski', 'David Alaba', 'Thiago Alcántara',
                           'Arjen Robben', 'Douglas Costa', 'Arturo Vidal', 'Xabi Alonso']

        var result = "";

        if(quantifier.indexOf('which')>-1){
            var num = getRandomInt(0,8);
            console.log(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
            result = playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num;
        }else{
            var num;
            if((parameters.quantifier.indexOf('goal')>-1)||(parameters.quantifier.indexOf('assist'))>-1){
                num = getRandomInt(0,3);
            } else {
                num = getRandomInt(0,7);
            }
            console.log(playerNames[num]+" has the highest number of "+parameters.player_actions+" so far with "+num);
            result = parameters.player_name + " has " + num + " number of " +parameters.player_actions +" so far.";

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
            "source": "DuckDuckGo"
        };

        res.json(response);


    });
};
