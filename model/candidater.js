var db = require('./db.js');
module.exports = {
    read: function (num_offre,email_candidat, callback) {
    db.query("select * from Candidater where num_offre=? and email_candidat=?",[num_offre,email_candidat],function
    (err, results) {
    if (err) throw err;
        callback(results);
    });
    },

    readall: function (callback) {
    db.query("select * from Candidater", function (err, results) {
    if (err) throw err;
    callback(results);
    });
    },

    areValid: function (num_offre,email_candidat, callback) {
    sql = "SELECT nom FROM Candidater WHERE num_offre =? and email_candidat=?";
    rows = db.query(sql, num_offre,email_candidat,function (err, results) {
    if (err) throw err;
    if (rows.length === 1 && rows[0].email_candidat === email_candidat) {
        callback(true)
    } else {
        callback(false);
    }
    });
    },

    create: function (num_offre,email_candidat,date, lettre_motivation,CV,ID,photo,diplôme,callback) {
    //todo
        sql = "Insert into Candidater(num_offre,email_candidat,date, lettre_motivation,CV,ID,photo,diplôme) Values (?,?,?,?,?,?,?,?)";
        db.query(sql, num_offre,email_candidat,function (err, results) {
            if (err) throw err;{
                callback(true)
            }
                callback(results);
            }
        )},
        update: function(num_offre,email_candidat,nom, type,siège_social,statut, callback) {
            const sql = 'UPDATE Candidater SET num_offre =?  and email_candidat=? WHERE id_fiche = ?';
            db.query(sql, [num_offre,email_candidat,nom,type,siège_social,statut], function(err, results) {
              if (err) throw err;
              callback(results);
            });
          },
    }