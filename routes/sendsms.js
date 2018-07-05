var express = require('express');
var router = express.Router();
const Nexmo = require('nexmo');
const Message = require('../schema');

const nexmo = new Nexmo({
  apiKey: '4c701246',
  apiSecret: 'sCFteo5momAj9AgB'
});

router.post('/', function(req, res, next) {
  const { from, to, text, name } = req.body;
    nexmo.message.sendSms(from, to, text, (error, response) => {
    if(error) {
      throw error;
    } else if(response.messages[0].status != '0') {
      console.error(response);
      throw 'Nexmo returned back a non-zero status';
    } else {
      const message = new Message({
        from, to, text, name
      });
       message.save(function (err, message) {
        if (err) return console.error(err);
        response.status = 200
         res.send(response);

      });
    }
  });

});

module.exports = router;
