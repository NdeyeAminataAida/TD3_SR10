var db = require('./db.js');
module.exports = {
    read: function (id_siren, callback) {
    db.query("select * from Organisation where id_siren= ?",[id_siren], function
    (err, results) {
    if (err) throw err;
        callback(results);
    });
    },

    readall: function (callback) {
    db.query("select * from Organisation", function (err, results) {
    if (err) throw err;
    callback(results);
    });
    },

    areValid: function (id_siren, nom, callback) {
    sql = "SELECT nom FROM Organisation WHERE id_siren = ?";
    rows = db.query(sql, id_siren, function (err, results) {
    if (err) throw err;
    if (rows.length === 1 && rows[0].nom === nom) {
        callback(true)
    } else {
        callback(false);
    }
    });
    },

    create: function (id_siren, nom, type,siège_social,statut, callback) {
    //todo
        sql = "Insert into Organisation(id_siren, nom, type,siège_social,statut) Values (?,?,?,?,?)";
        db.query(sql, id_siren, function (err, results) {
            if (err) throw err;{
                callback(true)
            }
                callback(results);
            }
        )},
        update: function(id_siren, nom, type,siège_social,statut, callback) {
            const sql = 'UPDATE Organisation SET id_siren = ?, nom = ?,type = ?, siège_social = ?, statut = ? WHERE id_fiche = ?';
            db.query(sql, [id_siren,nom,type,siège_social,statut], function(err, results) {
              if (err) throw err;
              callback(results);
            });
          },
    }