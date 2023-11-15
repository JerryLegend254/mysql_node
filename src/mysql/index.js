const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs",
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO sportsplan (title, amount) VALUES ?";
//   var values = [
//     ["Swimming", 500],
//     ["Golf", 1500],
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

module.exports = con