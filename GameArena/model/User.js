var firstName;
var lastName;
var email;
var address;
var city;
var state;
var country;
var pincode;
var username;
var password;

module.exports =
{
  firstName: firstName,
  lastName: lastName,
  email: email,
  Address: address,
  City: city,
  State: state,
  Country: country,
  Pincode: pincode,
  Username: username,
  Password: password,
};

// var mongoose = require('mongoose');
// var bcrypt = require('bcryptjs');
// mongoose.connect('mongodb://127.0.0.1:27017/GameArena');
//
// var UserSchema = new mongoose.Schema
// ({
//       firstName: String,
//       lastName: String,
//       email:String,
//       address:String,
//       city:String,
//       state:String,
//       country: String,
//       pincode: Number,
//       username: String,
//       password: String,
// });
//
// var users = module.exports= mongoose.model('users', UserSchema);
//
// module.exports.createUser = function(newUser, callback)
// {
//   bcrypt.genSalt(10, function(err, salt)
//   {
//     bcrypt.hash(users.password, salt, function(err, hash)
//     {
//         users.password = hash;
//         users.save(callback);
//     });
// });
// }
