var mongoose = require('mongoose');
const setupDb = () => {
  mongoose.connect('mongodb://dpkahuja:dpkahuja3103@ds125831.mlab.com:25831/contacts-app-kissan');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Mongodb connected');
  });
}

module.exports = setupDb;