//Let’s load the request module
var request = require("request");

//Define your host and port. This is where your database is running. Here it’s on localhost.
var host = '132.234.113.15',
    port = 7474,
    username = "neo4j",
    password = "ultrasafe",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

//This is the url where we will POST our data to fire the cypher query. This is specified in Neo4j docs.
var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';

//Let’s define a function which fires the cypher query.
function runCypherQuery(query, params, callback) {
  request.post({
        uri: httpUrlForTransaction,
        headers : {
              "Authorization" : auth
        },
        json: {statements: [{statement: query, parameters: params}]}
      },
      function (err, res, body) {
        callback(err, body);
      })
}


module.exports = {
  runCypherQuery: runCypherQuery
}

