'use strict';
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'pcrt.com.br',
  user     : 'silas',
  password : 'rsul001!',
  database : 'node_sample'
});
connection.connect();

router.get('/', function(req, res, next) {
  res.send("Sample entity");
});

router.get('/find', function(req, res, next) {
  connection.query('SELECT * FROM sample_entity', function(err, result) {
    if (err) throw err;
    res.send(result);
  });
  
});

router.post('/create', function(req, res, next) {
  
  var values = [req.body.name, new Date(), req.body.value]
  connection.query('INSERT INTO sample_entity (name, creation_date, value) VALUES (?,?,?)', values, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
   
});

module.exports = router;
