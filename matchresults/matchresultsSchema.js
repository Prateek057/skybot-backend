var mongoose = require('mongoose');


var statSchema = mongoose.Schema({
    "-Type" : {
        type: String
    },
    "#text" : {
        type: String
    }
});

var competitionSchema = mongoose.Schema({
    "-uID" : {
        type: String,
        unique: true
    },
    Country: {
        type: String
    },
    Name: {
        type: String
    },
    Stat: [statSchema]
});

var resultSchema = mongoose.Schema({
    "-Type" : {
        type: String
    },
    "-Winner" : {
        type: String
    }
});

var matchInfoSchema= mongoose.Schema({
    "-MatchType": {
        type: String
    },
    "-Period": {
        type: String
    },
    "-TimeStamp": {
        type: String
    },
    "-Weather": {
        type: String
    },
    "Attendance": {
        type: String
    },
    "Date": {
        type: String
    },
    Result: [resultSchema]
});

var officialRefSchema = mongoose.Schema({
    "-Type" : {
        type: String
    }
});

var officialDataSchema = mongoose.Schema({
    OfficialRef: [officialRefSchema]
});

var personNameSchema = mongoose.Schema({
    First: {
        type: String
    },
    Last: {
        type: String
    }
});

var matchOfficialSchema = mongoose.Schema({
    "-uID" : {
        type: String,
        unique: true
    },
    OfficialData: [officialDataSchema],
    OfficialName: [personNameSchema]
});
var assistantOfficialSchema = mongoose.Schema({
    "-FirstName" : {
        type: String
    },
    "-LastName" : {
        type: String
    },
    "-Type" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    }
});

var assistantOfficialsSchema = mongoose.Schema({
    AssistantOfficial: [assistantOfficialSchema]
});
var bookingSchema = mongoose.Schema({
    "-Card" : {
        type: String
    },
    "-CardType" : {
        type: String
    },
    "-EventID" : {
        type: String
    },
    "-EventNumber" : {
        type: String
    },
    "-Period" : {
        type: String
    },
    "-PlayerRef" : {
        type: String
    },
    "-Reason" : {
        type: String
    },
    "-Time" : {
        type: String
    },
    "-TimeStamp" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    }
});

var assistSchema = mongoose.Schema({
    "-PlayerRef" : {
        type: String
    },
    "#text" : {
        type: String
    }
});

var goalSchema = mongoose.Schema({
    "-EventID" : {
        type: String
    },
    "-EventNumber" : {
        type: String
    },
    "-Period" : {
        type: String
    },
    "-PlayerRef" : {
        type: String
    },
    "-Time" : {
        type: String
    },
    "-TimeStamp" : {
        type: String
    },
    "-Type" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    },
    "Assist" : [assistSchema]
});

var matchPlayerSchema = mongoose.Schema({
    "-PlayerRef" : {
        type: String
    },
    "-Position" : {
        type: String
    },
    "-ShirtNumber" : {
        type: String
    },
    "-Status" : {
        type: String
    },
    "Stat" : [statSchema]
});

var playerLineUpSchema = mongoose.Schema({
    MatchPlayer: [matchPlayerSchema]
});

var teamDataStat = mongoose.Schema({
    "-FH" : {
        type: String
    },
    "-SH" : {
        type: String
    },
    "-Type" : {
        type: String
    },
    "#text" : {
        type: String
    }
});

var substitutionSchema = mongoose.Schema({
    "-EventID" : {
        type: String
    },
    "-EventNumber" : {
        type: String
    },
    "-Period" : {
        type: String
    },
    "-Reason" : {
        type: String
    },
    "-SubOff" : {
        type: String
    },
    "-SubOn" : {
        type: String
    },
    "-SubstitutePosition" : {
        type: String
    },
    "-Time" : {
        type: String
    },
    "-TimeStamp" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    }
});


var teamDataSchema = mongoose.Schema({
   "-Score": {
       type: String
   },
    "-Side": {
        type: String
    },
    "-TeamRef": {
        type: String
    },
    Booking: [bookingSchema],
    Goal: [goalSchema],
    PlayerLineUp: [playerLineUpSchema],
    Stat: [teamDataStat],
    Substitution: [substitutionSchema]

});

var matchdataSchema = mongoose.Schema({
    MatchInfo: [matchInfoSchema],
    MatchOfficial: [matchOfficialSchema],
    AssistantOfficials: [assistantOfficialsSchema],
    Stat: [statSchema],
    TeamData: [teamDataSchema]
});

var playerSchema = mongoose.Schema({
    "-Position" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    },
    "PersonName" : personNameSchema
});

var teamOfficialSchema = mongoose.Schema({
    "-Type" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    },
    PersonName: personNameSchema
});

var teamSchema = mongoose.Schema({
    "-uID" : {
        type: String,
        unique: true
    },
    "Country" : {
        type: String
    },
    "Name" : {
        type: String
    },
    "Player" : [playerSchema],
    "TeamOfficial" : teamOfficialSchema
});

var venueSchema = mongoose.Schema({
    "-uID" : {
        type: String,
        unique: true
    },
    "Country" : {
        type: String
    },
    "Name" : {
        type: String
    }
});

var soccerDocumentSchema = mongoose.Schema({
    "-Type" : {
        type: String
    },
    "-uID" : {
        type: String,
        unique: true
    },
    Competition : [competitionSchema],
    MatchData: [matchdataSchema],
    Team: [teamSchema],
    Venue: [venueSchema]
});

var matchresultsSchema = mongoose.Schema({
    SoccerFeed : [soccerDocumentSchema]
});

var MatchResults = mongoose.model('MatchResults', matchresultsSchema);

module.exports = MatchResults;