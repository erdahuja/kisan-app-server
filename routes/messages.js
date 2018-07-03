var express = require('express');
var router = express.Router();
const Message = require('../schema');

router.get('/', function(req, res, next) {
  console.log(req.body)
  Message.find(function(err, messages) {
    if (err) return console.error(err);
    console.log(messages);
    res.send(messages);
  })
});

module.exports = router;