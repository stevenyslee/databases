var db = require('../db');

// db.dbConnection.connect();

module.exports = {
  messages: {
    get: function (callback) {
      var queryArgs = [];
      db.query('SELECT user.username, messages.objectId, messages.text, roomname.roomname FROM messages INNER JOIN roomname INNER JOIN user ON messages.user_id = user.id AND roomname.id = messages.roomname_id', queryArgs, function(err, results) {
          if (err) {
            console.log('error querying database');
          } else {
            callback(null, results);
          }
        }
      );

    }, // a function which produces all the messages
    post: function (callback) {
      var queryArgs = [];
      db.query(`INSERT INTO user (username) VALUES (${message.username}`,queryArgs, function(err, results) {
       if (err) {
        console.log('error inserting user');
       }
      });
      
      db.query(`INSERT INTO roomname (roomname) VALUES (${message.roomname}`,queryArgs, function(err, results) {
       if (err) {
        console.log('error inserting roomname');
       }
      });
      
      db.query(`SELECT user.id AS user_id, roomname.id AS roomname_id FROM user, roomname WHERE user.username = ${message.username} AND roomname.roomname = ${message.roomname}`,queryArgs, function(err, results) {
       if (err) {
        console.log('error selecting user and roomname id');
       } else {
        console.log(results);
        // db.query(`INSERT INTO messages (text, user_id, roomname_id) VALUES (${message.text}, ${results[0]}, ${results[1]})`, queryArgs, function(err, results) {
        //   if (err) {
        //     console.log('error inserting messages');
        //   } else {
        //     callback(null, results)
        //   }
        // });
        
       }
      });
  
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

