var db = require('./db.js');
module.exports = {
    read: function (mail, callback) {
    db.query("select * from Utilisateur where mail= ?",mail, function
    (err, results) {
    if (err) throw err;
    callback(results);
    });
    },
    readall: function (callback) {
    db.query("select * from Utilisateur", function (err, results) {
    if (err) throw err;
    callback(results);
    });
    },
    areValid: function (mail, password, callback) {
    sql = "SELECT pwd FROM USERS WHERE mail = ?";
    rows = db.query(sql, mail, function (err, results) {
    if (err) throw err;
    if (rows.length == 1 && rows[0].pwd === password) {
    callback(true)
    } else {
    callback(false);
    }
    });
    },
    creat: function (mail, nom, prenom, pwd, type, callback) {
    //todo
    return false;
    }
    }