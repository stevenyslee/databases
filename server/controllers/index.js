var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // will recieve requests and create request for the DB
      // will send response from DB to the client after the DB function completes
      
      // models.sendResponse(response, {results: messages});      
      models.messages.get((err, results) => {
        sendResponse(res, results, 200);
      });
      
    }, // a function which handles a get request for all messages\
    post: function (req, res) {
      
      models.messages.post((err, results) => {
        return;
      });
      
      // models.collectData(request, function(message) {
      //   models.sendResponse(response, {objectId: message.objectId}, 201);
      // })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {}
  }
};


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

makeActionHandler = function(actionMap) {
  return function(request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  };
};

collectData = function(request, callback) {
  var data = '';
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    callback(JSON.parse(data));
  });
};

