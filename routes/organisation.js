var express = require('express');
var router = express.Router();
var organisationModel = require('../model/organisation')

/* GET home page. */
router.get('/organisationlist', function (req, res, next) {
  result=organisationModel.readall(function(result){
  res.render('organisationList', { title: 'Liste des organisations',organisation:
  result });
  });
}); // ce que renvoient le navigateur
module.exports = router;


module.exports = router;
