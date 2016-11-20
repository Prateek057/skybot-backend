var MatchResults = require('./matchresultsSchema');


exports.resolveQuery = function(req, res){

        console.log(req);

        var request = req.body;

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



};
