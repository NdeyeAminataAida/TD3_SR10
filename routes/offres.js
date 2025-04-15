var express = require('express');
var router = express.Router();
var offresModel = require('../model/offres')

/* GET home page. */
router.get('/offreslist', function (req, res, next) {
  result=offresModel.readall(function(result){
  res.render('offresList', { title: 'Liste des offres', offres:
  result });
  });
}); // ce que renvoient le navigateur
module.exports = router;


module.exports = router;
