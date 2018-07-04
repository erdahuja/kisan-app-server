var express = require('express');
var router = express.Router();
const Message = require('../schema');

router.get('/', function(req, res, next) {
  Message.find(function(err, messages) {
    if (err) return console.error(err);
    res.send(messages);
  })
});

module.exports = router;