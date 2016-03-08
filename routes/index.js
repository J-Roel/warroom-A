var express = require('express');
var router = express.Router();
var cors = require('cors');

var warroom = require("../warroom-client")



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



//Get info from library
router.get('/status', cors(), function(req, res, next) {
	
	warroom((error, data) => res.send(data));
	
});