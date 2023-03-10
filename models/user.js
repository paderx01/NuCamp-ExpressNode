const mongoose = require("mongoose");
const passwordLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model("User", userSchema);
