var db = require('./db.js');
module.exports = {
    read: function (numéro, callback) {
    db.query("select * from Offre where numéro= ?",[numéro], function(err, results) {
    if (err) throw err;
        callback(results);
    });
    },
    readall: function (callback) {
    db.query("select * from Offre", function (err, results) {
    if (err) throw err;
    callback(results);
    });
    },
    areValid: function (numéro, etat, callback) {
    sql = "SELECT etat FROM Offre WHERE numéro = ?";
    rows = db.query(sql, numéro, function (err, results) {
    if (err) throw err;
        callback(true)
   
    callback(false);

    });
    },
    create: function (numéro,mailRecrut, id_fiche, état, date_validité, liste_pièces, nombre_pièces, callback) {
    //todo
        sql = "Insert into Offre(numéro,mailRecrut, id_fiche, état, date_validité, liste_pièces, nombre_pièces) Values (?,?,?,?,?,?,?)";
        db.query(sql, numéro, function (err, results) {
            if (err) throw err;{
                callback(true)
            }
                callback(results);
            }
        )},
        update: function(num_offre, état, date_validité, liste_pièces, nombre_pièces, callback) {
            const sql = 'UPDATE Offre SET état = ?, date_validité = ?, liste_pièces = ?, nombre_pièces = ? WHERE numéro = ?';
            db.query(sql, [état, date_validité, liste_pièces, nombre_pièces, num_offre], function(err, results) {
              if (err) throw err;
              callback(results);
            });
          },
        
          delete: function(num_offre, callback) {
            const sql = 'DELETE FROM Offre WHERE numéro = ?';
            db.query(sql, [num_offre], function(err, results) {
              if (err) throw err;
              callback(results);
            });
          }
    }