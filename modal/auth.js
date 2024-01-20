const mongoose = require("mongoose");
const schema = mongoose.Schema;
// const Schema = mongoose.Schema;

const AuthSchema = new schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const AuthModel = new mongoose.model("auth", AuthSchema);
module.exports = AuthModel;
