const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test?connectTimeoutMS=5000&bufferCommands=false')
  .then(
    () => { console.log('mongoose connected'); },
    (err) => { console.log('DB connection error: ', err); },
  );

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  tokenSeed: String,
  created: Date,
});

const Users = mongoose.model('User', userSchema);

const checkUser = (userEmail, callback) => {
  // construct query to pass to DB
  Users.find({ email: userEmail }, (err, user) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user);
      console.log('success user found');
    }
  });
  // connect to DB and make query.

  // run callback with results
};

module.exports.checkUser = checkUser;
module.exports.Users = Users;