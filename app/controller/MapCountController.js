/**
 * Created by Nigel on 21/03/2016.
 */

var async = require('async');

var MapCount = require("../model/MapCount.js").MapCount;
var MapCount1 = require("../model/MapCount.js").MapCount1;
var MapCount2 = require("../model/MapCount.js").MapCount2;
var MapCount3 = require("../model/MapCount.js").MapCount3;
var MapCount4 = require("../model/MapCount.js").MapCount4;


/**
 * controller functions
 */

var g_results;
async.series([
    function q1(cb) {
        MapCount1.find({}, cb).select('coordinates.coordinates');
    },
    function q2(cb) {
        MapCount2.find({}, cb).select('coordinates.coordinates');
    },
], function (err, results) {
    //console.log(results);
    g_results = results;
});

exports.get = function (req, res) {
    var date_param = parseInt(req.params.date_param);
    res.json(g_results[date_param]);
}


/*exports.get = function (req, res) {
    MapCount.find()
        .exec( function (err, mapCount ){
            res.json(mapCount);
        });
}
*/

