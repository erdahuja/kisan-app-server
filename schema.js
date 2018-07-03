var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  from:  String,
  text: String,
  to:   String,
  name: String,
  date: { type: Date, default: Date.now },
});

var Message = mongoose.model('Messages', messageSchema);

module.exports = Message;