const mongoose = require("mongoose");
const passwordLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model("User", userSchema);
