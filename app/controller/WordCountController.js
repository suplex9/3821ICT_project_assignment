/**
 * Created by s2813995 on 17/03/2016.
 */
var WordCount = require("../model/WordCount.js").WordCount;


/**
 * controller functions
 */
exports.get = function(req, res, next) {
    WordCount.find()
        .exec( function (err, wordCount ){
            var str = JSON.stringify(wordCount);
            str = str.replace(/value/g, 'weight');
            wordCount = JSON.parse(str);
            res.json(wordCount);
            //console.log(wordCount);
        });
}

exports.save = function(req, res, next) {
    // TODO, Load some dummy data here.
    var word1 = new WordCount({word:'Hector',frequency:46});
    word1.save(function (err, fluffy) {
        if (err) return console.error(err);
        word1.print();
    });

}