/**
 * Created by s2813995 on 3/08/2016.
 */
var db = require("../database.js")();

exports.getLiveTweet =  function(req, res){
    getLimitLiveTweet(function(liveTweet){
        res.json(liveTweet);
    });
}

function getLimitLiveTweet(callback){
    var liveTweetCursor = db.collection('climateAU').find().sort({"id_str":-1}).limit(12);
    liveTweetCursor.toArray(function(err,doc){
        callback(doc);
    });
}
