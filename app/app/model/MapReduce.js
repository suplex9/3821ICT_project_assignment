/**
 * Created by s2813995 on 16/03/2016.
 * Please specify the collection name for this schema, otherwise the mongoose will generated strange one
 */
var mongoose = require('mongoose');

var MapReduceSchema = mongoose.Schema({}, {collection: 'goldcoast_location'});


/**
 * internal methods must be added to the schema before compiling it with mongoose.model()
 */
var MapReduce = mongoose.model( 'MapReduce', MapReduceSchema );

module.exports = {
    MapReduce: MapReduce
}