/**
 * Contains all the routes configurations
 * TODO, refine the routes structure
 */

var WordCountController = require('./controller/WordCountController.js');
var MapCountController = require('./controller/MapCountController.js');
var MapReduceController = require('./controller/MapReduceController.js');
var WordsGraphController = require('./controller/WordsGraphController.js');
var LiveTweetController = require('./controller/LiveTweetController.js');

module.exports = function (app, passport, controller, security, encode, decode, logger) {

	//file paths
	var paths = {
		buildFiles: {
			root: './public'
		}
	};

	app.get('/', function (req, res) {
		res.sendFile('/index.html', paths.buildFiles);
	});

	app.get('/getHotWords', function (req, res) {
        console.log("HotWords Requested.");
        WordCountController.get(req, res);
	});

	app.get('/getMap/:date_param', function (req, res) {
		console.log("HeatMap Requested.");
		MapCountController.get(req, res);
	});

	app.get('/getMapReduce', function (req, res) {
		console.log("MapReduce Requested.");
		MapReduceController.get(req, res);
	});

	app.get('/getWordsGraph', function (req, res) {
		console.log("Words Graph Requested.");
		WordsGraphController.getWordsGraph(req, res);
	});

	app.get('/getLiveTweet', function (req, res) {
		console.log("Get Live Tweet Requested.");
		LiveTweetController.getLiveTweet(req, res);
	});
}