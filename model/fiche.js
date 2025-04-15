var db = require('./db.js');
module.exports = {
    read: function (id_fiche, callback) {
    db.query("select * from Fiche where id_fiche= ?",[id_fiche], function(err, results) {
    if (err) throw err;
        callback(results);
    });
    },
    readall: function (callback) {
    db.query("select * from Fiche", function (err, results) {
    if (err) throw err;
    callback(results);
    });
    },
    areValid: function (id_fiche, statut, callback) {
    sql = "SELECT statut FROM Fiche WHERE id_fiche = ?";
    rows = db.query(sql, id_fiche, function (err, results) {
        if (err) throw err;
        if (rows.length === 1 && rows[0].pwd === password) {
            callback(true)
        } else {
            callback(false);
        }

    });
    },
    create: function (id_fiche, id_siren, intitulé, statut, responsable, type_métier, lieu, rythme, salaire, description, callback) {
        sql = "INSERT INTO Fiche (id_fiche, id_siren, intitulé, statut, responsable, type_métier, lieu, rythme, salaire, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [id_fiche, id_siren, intitulé, statut, responsable, type_métier, lieu, rythme, salaire, description], function (err, results) {
            if (err) throw err;
            callback(results);
        });
    },
        update: function(id_fiche, id_siren, intitulé, statut, responsable,type_métier,lieu,rythme,salaire,description, callback) {
            const sql = 'UPDATE Fiche SET id_fiche = ?, intitulé = ?, statut = ?, responsable = ? WHERE id_fiche = ?';
            db.query(sql, [id_fiche, intitulé, statut, responsable], function(err, results) {
              if (err) throw err;
              callback(results);
            });
          },
        
          delete: function(id_fiche, callback) {
            const sql = 'DELETE FROM Fiche WHERE id_fiche = ?';
            db.query(sql, [id_fiche], function(err, results) {
              if (err) throw err;
              callback(results);
            });
          }
    }