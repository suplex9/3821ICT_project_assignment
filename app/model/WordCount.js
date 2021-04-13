/**
 * Created by s2813995 on 16/03/2016.
 * Please specify the collection name for this schema, otherwise the mongoose will generated strange one
 */
var mongoose = require('mongoose');

var WordCountSchema = mongoose.Schema({
	_id   : {type: String, required: true, index: true},
    weight : {type: Number, required: true, index: false}
}, { collection: 'climateAU_MP' });



WordCountSchema.methods.print = function () {
    console.log( this.word + "," + "weight:" + this.frequency);
}


/**
 * internal methods must be added to the schema before compiling it with mongoose.model()
 */
var WordCount = mongoose.model( 'WordCount', WordCountSchema );

module.exports = {
    WordCount: WordCount
}
