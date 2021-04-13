/**
 * Created by s2813995 on 16/03/2016.
 * Please specify the collection name for this schema, otherwise the mongoose will generated strange one
 */


var mongoose = require('mongoose');

var CleanRankSchema = mongoose.Schema({
    _id   : {type: String, required: true, index: true},
    value : {type: Number, required: true, index: false}
}, { collection: 'MapReduceResult' });


/**
 * internal methods must be added to the schema before compiling it with mongoose.model()
 */
var CleanRank = mongoose.model( 'CleanRank', CleanRankSchema );



module.exports = {
    CleanRank: CleanRank
}

