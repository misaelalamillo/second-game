const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model("User", userSchema);

// User.prototype.validPassword = function(pass) {
//   return bcrypt.compareSync(pass, this.password);
// };

// User.addHook("beforeCreate", function(user) {
//   user.password = bcrypt.hashSync(
//     user.password,
//     bcrypt.genSaltSync(10),
//     null
//   );
// });

module.exports = User;
