var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.cluster-ro-c76samcff3to.us-east-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',
  password : 'password',
  database : 'mydb'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);

  connection.query("INSERT INTO pet (name) values ('test1')", function (error, results, fields) {
    if (error) throw error;
    // connected!
    connection.end();
});
});
