/**
 * Created by Nigel on 21/03/2016.
 * Please specify the collection name for this schema, otherwise the mongoose will generated strange one
 */
var mongoose = require('mongoose');

require('mongoose-double')(mongoose);


//var SchemaTypes = mongoose.Schema.Types;

var MapCountSchema = mongoose.Schema({}, {collection: 'gc_gpslive'});
var MapCountSchema1 = mongoose.Schema({}, {collection: 'gc_gpslive'});
var MapCountSchema2 = mongoose.Schema({}, {collection: 'gc_gpslive'});
var MapCountSchema3 = mongoose.Schema({}, {collection: 'gc_gpslive'});
var MapCountSchema4 = mongoose.Schema({}, {collection: 'gc_gpslive'});



/**
 * internal methods must be added to the schema before compiling it with mongoose.model()
 */
var MapCount = mongoose.model('MapCount', MapCountSchema );
var MapCount1 = mongoose.model('MapCount1', MapCountSchema1);
var MapCount2 = mongoose.model('MapCount2', MapCountSchema2);
var MapCount3 = mongoose.model('MapCount3', MapCountSchema3);
var MapCount4 = mongoose.model('MapCount4', MapCountSchema4);

module.exports = {
    MapCount: MapCount,
    MapCount1: MapCount1,
    MapCount2: MapCount2,
    MapCount3: MapCount3,
    MapCount4: MapCount4
}