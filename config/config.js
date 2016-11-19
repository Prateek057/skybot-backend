var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

//Config.db.host = 'localhost:27017';ds013545.mlab.com:13545/skydb
Config.db.host = 'ds013545.mlab.com:13545';
//Config.db.name = 'MatchResults';
Config.db.name = 'skydb';

Config.db.user = 'sebateam9';
Config.db.pass = '123';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;