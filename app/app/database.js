/**
 * Data base connections
 * The mongoose only connect here. No need to open it in other files. Just require mongoose. It will be connected already
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://CAB1:CAB122@localhost/CAB1/?authSource=admin');


module.exports = function () {
    var database = mongoose.connection;

    /*redis_client.on('connect', function(err, res) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Redis is connected');
        }
    });*/

    database.on('error', console.error.bind(console, 'connection error:'));

    database.once('open', function (callback) {
        var host = database.host;
        var port = database.port;
        console.log(' MongoDB Connected on: ' + '\t host:' + host + ' port: ' + port + '\t');
    });
    return database;
};

