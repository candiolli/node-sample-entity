'use strict';
var express = require('express');
var router = express.Router();
var sampleService = require('../service/sampleService');

router.get('/', function(req, res, next) {
  res.send("Sample entity");
});

router.get('/find', function(req, res, next) {
    sampleService.find(function(data){
      res.send(data);
    });
  
});

router.post('/create', function(req, res, next) {
  sampleService.save(req, function(data){
    res.send(data);
  });
});

var callback = function(data) {

};

module.exports = router;
