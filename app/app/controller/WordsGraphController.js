/**
 * Created by s2813995 on 14/04/2016.
 */
var db = require("../database.js")();

exports.getWordsGraph =  function(req, res){
    getWordPair(function(result){

        res.json(result);
    });
}

function getWordPair(callback){

    var result = {};
    result['nodes'] = new Array();
    result['edges'] = new Array();
    var nodes = new Map();

    // We can set the word limit here
    //var cursor = db.collection('bushfire_graph').find().sort({"frequency":-1}).limit(200);
	var cursor = db.collection('NSWkey2noRT_edge').find().sort({"weight":-1}).limit(800);
    cursor.each(function(err, doc) {
        if (doc != null) {
            //var word1 = doc['word1'];
            //var word2 = doc['word2'];
			var word1 = doc['source'];
            var word2 = doc['target'];
            if(nodes.get(word1) == null){
                nodes.set(word1, nodes.size);
                var nodeFrom = {id: nodes.size - 1, label: word1};
                result['nodes'].push(nodeFrom);
            }
            if(nodes.get(word2) == null) {
                nodes.set(word2, nodes.size);
                var nodeTo = {id: nodes.size - 1, label: word2};
                result['nodes'].push(nodeTo);
            }

            var edge = {from: nodes.get(word1), to: nodes.get(word2), label: doc['weight']};
            result['edges'].push(edge);
        }else{
            callback(result);
        }
    });
}

exports.getSpecificWordGraph =  function(req, res){
    //TODO accept a specific word and steps around it.


}
