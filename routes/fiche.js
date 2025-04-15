var express = require('express');
var router = express.Router();
var ficheModel = require('../model/fiche')

/* GET home page. */
router.get('/fichelist', function (req, res, next) {
  result=ficheModel.readall(function(result){
  res.render('ficheList', { title: 'Liste des fiches',fiche:
  result });
  });
}); // ce que renvoient le navigateur
module.exports = router;


module.exports = router;
