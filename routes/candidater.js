var express = require('express');
var router = express.Router();
var candidaterModel = require('../model/candidater')

/* GET home page. */
router.get('/candidaterlist', function (req, res, next) {
  result=candidaterModel.readall(function(result){
  res.render('candidaterList', { title: 'Liste des candidatures',candidater:
  result });
  });
}); // ce que renvoient le navigateur
module.exports = router;


module.exports = router;
