/**
 * Created by s2813995 on 17/03/2016.
 */
var MapReduce = require("../model/MapReduce.js").MapReduce;
var CleanRank = require("../model/CleanAndRank.js").CleanRank;
var Ranking = require("../model/Ranking.js").Ranking;


function clean(res){
    console.log("Clean called");
    CleanRank.remove({
        _id: {
            $in: ["the", "i", "to", "a", "you", "-", "https://t", "in", "on", "my", "and", "of", "for", "it", "is", "s", "my", "this", "that",
                "t", "at", "with", "so", "me", "be", "are", "have", "amp", "just", "your", "we", "can", "all", "not", "was", "but", "m", "what", "do", "from", "up", "get", "they", "if", "no",
                "he", "will", "out", "as", "about", "day", "u", "one", "when", "don", "how", "an", "more", "time", "now", "has", "our", "see", "by", "there", "go", "know", "would", "some",
                "here", "or", "back", "today", "re", "new", "who", "got", "", "de", "too", "been", "people", "ve", "had", "why", "going", "much", "his", "off", "well", "need", "its", "them",
                "did", "2", "que", "think", "world", "over", "make", "only", "11", "want", "should", "she", "us", "ll", "last", "their", "gld", "these", "still", "him", "am", "very",
                "after", "her", "than", "|", "really", "3", "first", "yes", "never", "way", "look", "even", "l", "co", "gad9rjmozc", "birthday", "video", "come", "take", "always", "next",
                "could", "oh", "right", "again", "down", "let", "where", "…", "because", "e", "eu", "d", "big", "o", "man", "say", "say", "5", "any", "then", "read"]
        }
    }, function () {
        Ranking.aggregate([
                {$sort: {value: -1}},
                {$limit: 100},
                {$out: "MapReduceResult_rank"},
            ])
            .exec(function (err, cleanRank) {
                res.json(cleanRank);
            });
    });
}

//start of MapReduce
var o = {};

//these variable will be the date range
var start = "1458368706000";
var end = "1459059906000";
/**
 * map and reduce functions
 */
o.map  = function() {
    var full_text = this.full_text;
    if (full_text) {
        // quick lowercase to normalize per your requirements
        full_text = full_text.toLowerCase().split(/[,. '\"''\n''\r'?!@()&;]+/);
        for (var i = full_text.length - 1; i >= 0; i--) {
            // might want to remove punctuation, etc. here
            if (full_text[i])  {      // make sure there's something
                emit(full_text[i], 1); // store a 1 for each word
            }
        }
    }
};

o.reduce = function( key, values ) {
    var count = 0;
    values.forEach(function(v) {
        count +=v;
    });
    return count;
}


o.out = { replace: 'MapReduceResult' }
o.verbose = true;


exports.get = function(req, res) {
    //clean(res);
    MapReduce.mapReduce(o, function (err, model, stats){
        console.log('map reduce took %d ms', stats.processtime)
        model.find().exec(function (err, docs) {
        });
        clean(res);
    })
}

