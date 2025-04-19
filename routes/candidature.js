var express = require('express');
var router = express.Router();
var candidaterModel = require('../model/candidature');
const candidature = require('../model/candidature');

/* GET home page. */
router.get('/candidatureList', function (req, res, next) {
  result=candidaterModel.readall(function(result){
  res.render('candidatureList', { title: 'Liste des candidatures',candidature:
  result });
  });
}); // ce que renvoient le navigateur
module.exports = router;


module.exports = router;
