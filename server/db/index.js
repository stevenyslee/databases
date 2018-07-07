var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

dbConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connection successful');
  }
});

// server.listen(3000);

module.exports = dbConnection;