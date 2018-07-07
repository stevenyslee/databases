var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // will recieve requests and create request for the DB
      // will send response from DB to the client after the DB function completes
      
      // models.sendResponse(response, {results: messages});
      console.log('test');

      console.log(req);
    }, // a function which handles a get request for all messages\
    post: function (req, res) {
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

