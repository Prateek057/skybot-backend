var MatchResults = require('./matchresultsSchema');

exports.resolveQuery = function(req, res){

    req.data = {
        "id":"9c10023e-c52a-4c98-ad22-2a69018eff0e",
        "timestamp":"2016-11-19T14:14:13.856Z",
        "result":{
            "source":"agent",
            "resolvedQuery":"How many assists did Lahm have?",
            "action":"",
            "actionIncomplete":false,
            "parameters":{
                "player_actions":"goal assist",
                "player_name":"Philipp Lahm",
                "quantifier":"How  many"
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
    //console.log(req.data.result.parameters);
    MatchResults.find(function(err, matchResults) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        //console.log(matchResults);


        for(matchResult in matchResults)
        {
            var matchResultDetails = matchResults[matchResult];
            console.log(matchResultDetails);
        }

        res.statusCode= 200;
        res.json({"results" : matchResults });
    });
};
