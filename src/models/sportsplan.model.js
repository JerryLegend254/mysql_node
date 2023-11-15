const con = require("../mysql/index");

async function addSportsplan({title, amount}) {
  con.connect(function (err) {
    // if (err) throw err;
    try {
      var sql = "INSERT INTO sportsplan (title, amount) VALUES ?";
      var values = [
        [title, amount],
      ];
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    } catch (err) {
      throw err;
    }
  });
}

module.exports = {
    addSportsplan
}
