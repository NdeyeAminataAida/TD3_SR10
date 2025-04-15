var express = require('express');
var router = express.Router();
var userModel = require('../model/user')

/* GET home page. */
router.get('/userslist', function (req, res, next) {
  result=userModel.readall(function(result){
  res.render('usersList', { title: 'Liste des utilisateurs', users:
  result });
  });
}); // ce que renvoient le navigateur
module.exports = router;
